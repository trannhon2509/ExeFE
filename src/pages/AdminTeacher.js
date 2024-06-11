import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';
import { TeacherContext } from '../contexts/TeacherContext';
import ReactPaginate from 'react-paginate';
import { addTeacher, editTeacher, deleteTeacher, teachers as initialTeachers } from '../data';

function AdminTeacher() {
  const [teachers, setTeachers] = useState([]);
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    major: '',
    description: '',
    cardPhoto: '',
  });
  const [pageNumber, setPageNumber] = useState(0);
  const teachersPerPage = 4;

  const { token } = useContext(TeacherContext);

  // Function to fetch teachers from localStorage
  const fetchTeachers = () => {
    const storedTeachers = JSON.parse(localStorage.getItem('teachers')) || initialTeachers;
    setTeachers(storedTeachers);
  };

  useEffect(() => {
    fetchTeachers();
  }, []); // Fetch teachers only once when component mounts

  const handleShow = (type, teacher = null) => {
    setModalType(type);
    setSelectedTeacher(teacher);
    setShow(true);

    if (teacher) {
      setFormData(teacher);
    } else {
      setFormData({
        fullName: '',
        major: '',
        description: '',
        cardPhoto: '',
      });
    }
  };

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    if (modalType === 'create') {
      const newTeacher = { id: teachers.length + 1, ...formData };
      addTeacher(newTeacher);
    } else {
      editTeacher(formData);
    }

    fetchTeachers();
    handleClose();
  };

  const handleDelete = (id) => {
    deleteTeacher(id);
    fetchTeachers();
  };

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const offset = pageNumber * teachersPerPage;
  const currentPageTeachers = teachers.slice(offset, offset + teachersPerPage);

  return (
    <div className="container" style={{ height: "600px" }}>
      <h1>Admin Teachers</h1>
      <Button variant="primary" onClick={() => handleShow('create')}>
        Create Teacher
      </Button>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Image</th>
            <th>Full Name</th>
            <th>Major</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPageTeachers.map(teacher => (
            <tr key={teacher.id}>
              <td>
                {teacher.cardPhoto && <img src={teacher.cardPhoto} alt={teacher.fullName} style={{ width: '50px', height: '50px' }} />}
              </td>
              <td>{teacher.fullName}</td>
              <td>{teacher.major}</td>
              <td>{teacher.description}</td>
              <td className='d-flex justify-content-between'>
                <Button variant="warning" onClick={() => handleShow('update', teacher)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(teacher.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(teachers.length / teachersPerPage)}
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
          <Modal.Title>{modalType === 'create' ? 'Create Teacher' : 'Edit Teacher'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Major</Form.Label>
              <Form.Control
                type="text"
                name="major"
                value={formData.major}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="cardPhoto"
                value={formData.cardPhoto}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdminTeacher;
