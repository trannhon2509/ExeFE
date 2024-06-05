import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { TeacherContext } from '../contexts/TeacherContext';

function AdminTutor() {
    const { token } = useContext(TeacherContext);
    const [tutors, setTutors] = useState([]);
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        id: null,
        cityTech: '',
        fullName: '',
        gender: '',
        dateOfBirth: '',
        address: '',
        phoneNumber: '',
        email: '',
        voice: '',
        major: '',
        academicLevel: '',
        description: '',
        citizenIdentificationCard: '',
        issued: '',
        citizenIdentificationCardFront: '',
        citizenIdentificationCardFrontBackside: '',
        cardPhoto: '',
        schoolTeachOrStudent: '',
        numberTeachOfWeek: 0,
        salaryRequest: 0.0,
        createAt: '',
        approved: true
    });
    const [pageNumber, setPageNumber] = useState(0);
    const tutorsPerPage = 4;

    const fetchTutors = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/tutor/list?page=${pageNumber}&record=${tutorsPerPage}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();

            setTutors(data);
            console.log(response);
        } catch (error) {
            console.error('Error fetching tutors:', error);
        }
    };

    useEffect(() => {
        fetchTutors();
    }, [pageNumber]);

    const handleShow = (tutor) => {
        if (tutor) {
            setFormData(tutor);
        } else {
            setFormData({
                id: null,
                cityTech: '',
                fullName: '',
                gender: '',
                dateOfBirth: '',
                address: '',
                phoneNumber: '',
                email: '',
                voice: '',
                major: '',
                academicLevel: '',
                description: '',
                citizenIdentificationCard: '',
                issued: '',
                citizenIdentificationCardFront: '',
                citizenIdentificationCardFrontBackside: '',
                cardPhoto: '',
                schoolTeachOrStudent: '',
                numberTeachOfWeek: 0,
                salaryRequest: 0.0,
                createAt: '',
                approved: true
            });
        }
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        // Check if the input field is a checkbox
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };
    

    const handleSave = async () => {
        try {
            const url = formData.id
                ? `http://localhost:8080/api/tutor/update/${formData.id}`
                : 'http://localhost:8080/api/tutor/add';
            const method = formData.id ? 'POST' : 'POST';
    
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                const responseData = await response.json();
                console.error('Error response from API:', responseData);
                return;
            }
    
            fetchTutors();
            handleClose();
        } catch (error) {
            console.error('Error saving tutor:', error);
        }
    };
    

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/tutor/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                const responseData = await response.json();
                console.error('Error response from API:', responseData);
                return;
            }

            fetchTutors();
        } catch (error) {
            console.error('Error deleting tutor:', error);
        }
    };

    const handleApprove = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/tutor/approve/${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                const responseData = await response.json();
                console.error('Error response from API:', responseData);
                return;
            }

            fetchTutors();
        } catch (error) {
            console.error('Error approving tutor:', error);
        }
    };

    const handlePageClick = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className="container">
            <h1>Admin Tutor</h1>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>City Teach</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Is approve</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(tutors) && tutors.map(tutor => (
                        <tr key={tutor.id}>
                            <td>{tutor.id}</td>
                            <td>{tutor.fullName}</td>
                            <td>{tutor.cityTech}</td>
                            <td>{tutor.gender}</td>
                            <td>{tutor.dateOfBirth}</td>
                            <td>{tutor.approved ? "Approved" : "Not Approved"}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(tutor.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={Math.ceil(tutors.length / tutorsPerPage)}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{formData.id ? 'Edit Tutor' : 'Create Tutor'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* Form fields here */}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSave}>{formData.id ? 'Save Changes' : 'Create'}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AdminTutor;
