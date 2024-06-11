import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutePath from '../config/RoutePath';
import { Modal, Button } from 'react-bootstrap';

function AdminPayment() {
    const [checkoutInfos, setCheckoutInfos] = useState([]);
    const [showCoursesModal, setShowCoursesModal] = useState(false);
    const [selectedCourses, setSelectedCourses] = useState([]);

    useEffect(() => {
        // Fetch checkout information from localStorage
        const storedCheckoutInfos = localStorage.getItem('checkoutInfos');
        if (storedCheckoutInfos) {
            setCheckoutInfos(JSON.parse(storedCheckoutInfos));
        }
    }, []);

    const handleShowCourses = (coursesCard) => {
        setSelectedCourses(coursesCard);
        setShowCoursesModal(true);
    };

    const handleCloseCoursesModal = () => {
        setShowCoursesModal(false);
    };

    return (
        <div>
            <h2>Checkout Information</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {checkoutInfos.map((checkoutInfo, index) => (
                        <tr key={index}>
                            <td>{checkoutInfo.firstName}</td>
                            <td>{checkoutInfo.lastName}</td>
                            <td>{checkoutInfo.email}</td>
                            <td>{checkoutInfo.address}</td>
                            <td>{checkoutInfo.phoneNumber}</td>
                            <td>{checkoutInfo.status ? 'Paid' : 'Unpaid'}</td>
                            <td>
                                <Button onClick={() => handleShowCourses(checkoutInfo.coursesCard)}>
                                    Show Courses
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal to show courses */}
            <Modal show={showCoursesModal} onHide={handleCloseCoursesModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Selected Courses</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Selected Courses</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Khóa học</th>
                                <th>Monthly Fee</th>
                                <th>Số tháng</th>
                                <th>Tổng</th>
                                <th>Teacher</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedCourses.map(course => (
                                <tr key={course.id}>
                                    <td>{course.id}</td>
                                    <td>{course.title}</td>
                                    <td>{(course.totalMoneyMonthTeaching).toLocaleString('vi-VN')} VNĐ</td>
                                    <td>{course.quantity}</td>
                                    <td>{(course.quantity * course.totalMoneyMonthTeaching).toLocaleString('vi-VN')} VNĐ</td>
                                    <td>{course.teacher}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCoursesModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default AdminPayment;
