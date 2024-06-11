import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';
import { TeacherContext } from '../contexts/TeacherContext';
import ReactPaginate from 'react-paginate';
import { addCourse, editCourse, deleteCourse, users as initialUsers } from '../data';
function AdminUser() {
  const [subjects, setSubjects] = useState([]);
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    imageUrl: '', // Add imageUrl field
  });
  const [pageNumber, setPageNumber] = useState(0);
  const subjectsPerPage = 4;

  const { token } = useContext(TeacherContext);

  // Function to fetch subjects from localStorage
  const fetchSubjects = () => {
    // Retrieve subjects from localStorage or fallback to initialCourses
    const storedCourses = JSON.parse(localStorage.getItem('users')) || initialUsers;
    setSubjects(storedCourses);
  };

  useEffect(() => {
    fetchSubjects();
  }, []); // Fetch subjects only once when component mounts

  const handleShow = (type, subject = null) => {
    setModalType(type);
    setSelectedSubject(subject);
    setShow(true);

    if (subject) {
      setFormData(subject);
    } else {
      setFormData({
        title: '',
        description: '',
        totalMoneyMonthTeaching: 0,
        numberTeachOfWeek: 0,
        oneHourTeaching: 0,
        imageUrl: '', // Reset imageUrl field
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
      const newCourse = { id: subjects.length + 1, ...formData };
      addCourse(newCourse);
    } else {
      editCourse(formData);
    }

    fetchSubjects();
    handleClose();
  };

  const handleDelete = (id) => {
    deleteCourse(id);
    fetchSubjects();
  };

  // Function to handle page change
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const offset = pageNumber * subjectsPerPage;
  const currentPageSubjects = subjects.slice(offset, offset + subjectsPerPage);
  return (
    <div className="container" style={{ height: "600px" }}>
      <h1>Admin Subjects</h1>
      <Button variant="primary" onClick={() => handleShow('create')}>
        Create Subject
      </Button>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Image</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPageSubjects.map(subject => (
            <tr key={subject.id}>
              <td>
                {subject.imageUrl && <img src={subject.imageUrl} alt={subject.title} style={{ width: '50px', height: '50px' }} />}
              </td>
              <td>{subject.username}</td>
              <td>{subject.password}</td>
              <td>{subject.email}</td>

              <td className='d-flex justify-content-between'>
                <Button variant="warning" onClick={() => handleShow('update', subject)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(subject.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(subjects.length / subjectsPerPage)}
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

      {/* Modal for creating/updating a subject */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType === 'create' ? 'Create Subject' : 'Edit Subject'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Subject Name</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
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
              <Form.Label>Total Money/Month Teaching</Form.Label>
              <Form.Control
                type="number"
                name="totalMoneyMonthTeaching"
                value={formData.totalMoneyMonthTeaching}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Number Teach/Week</Form.Label>
              <Form.Control
                type="number"
                name="numberTeachOfWeek"
                value={formData.numberTeachOfWeek}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>One Hour Teaching</Form.Label>
              <Form.Control
                type="number"
                name="oneHourTeaching"
                value={formData.oneHourTeaching}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
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
  )
}

export default AdminUser