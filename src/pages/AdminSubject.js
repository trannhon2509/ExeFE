import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';
import { TeacherContext } from '../contexts/TeacherContext';
import ReactPaginate from 'react-paginate';

function AdminSubject() {
  const [subjects, setSubjects] = useState([]);
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [formData, setFormData] = useState({
    subjectName: '',
    description: '',
    totalMoneyMonthTeaching: 0,
    numberTeachOfWeek: 0,
    oneHourTeaching: 0,
    listTutors: []
  });
  const [pageNumber, setPageNumber] = useState(0);
  const subjectsPerPage = 4;

  const { token } = useContext(TeacherContext);

  const fetchSubjects = async () => {
    const response = await fetch(`http://localhost:8080/api/subject/list?page=${pageNumber}&record=${subjectsPerPage}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    setSubjects(data);
  };

  useEffect(() => {
    fetchSubjects();
  }, [pageNumber]); // Trigger fetchSubjects when pageNumber changes

  const handleShow = (type, subject = null) => {
    setModalType(type);
    setSelectedSubject(subject);
    setShow(true);

    if (subject) {
      setFormData(subject);
    } else {
      setFormData({
        subjectName: '',
        description: '',
        totalMoneyMonthTeaching: 0,
        numberTeachOfWeek: 0,
        oneHourTeaching: 0,
        listTutors: []
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

  const handleSave = async () => {
    const url = modalType === 'create' ? 'http://localhost:8080/api/subject/add' : `http://localhost:8080/api/subject/update/${selectedSubject.id}`;
    const method = modalType === 'create' ? 'POST' : 'PUT';

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });

    fetchSubjects();
    handleClose();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/api/subject/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    fetchSubjects();
  };

  // Function to handle page change
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container" style={{height:"600px"}}>
      <h1>Admin Subjects</h1>
      <Button variant="primary" onClick={() => handleShow('create')}>
        Create Subject
      </Button>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Description</th>
            <th>Total Money/Month Teaching</th>
            <th>Number Teach/Week</th>
            <th>One Hour Teaching</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map(subject => (
            <tr key={subject.id}>
              <td>{subject.subjectName}</td>
              <td>{subject.description}</td>
              <td>{subject.totalMoneyMonthTeaching}</td>
              <td>{subject.numberTeachOfWeek}</td>
              <td>{subject.oneHourTeaching}</td>
              <td className='d-flex justify-content-between'>
                <Button variant="warning" onClick={() => handleShow('update', subject)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(subject.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType === 'create' ? 'Create Subject' : 'Update Subject'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formSubjectName">
              <Form.Label>Subject Name</Form.Label>
              <Form.Control
                type="text"
                name="subjectName"
                value={formData.subjectName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formTotalMoneyMonthTeaching">
              <Form.Label>Total Money/Month Teaching</Form.Label>
              <Form.Control
                type="number"
                name="totalMoneyMonthTeaching"
                value={formData.totalMoneyMonthTeaching}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formNumberTeachOfWeek">
              <Form.Label>Number Teach/Week</Form.Label>
              <Form.Control
                type="number"
                name="numberTeachOfWeek"
                value={formData.numberTeachOfWeek}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formOneHourTeaching">
              <Form.Label>One Hour Teaching</Form.Label>
              <Form.Control
                type="number"
                name="oneHourTeaching"
                value={formData.oneHourTeaching}
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

      {/* Pagination */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(subjects.length / subjectsPerPage+1)}
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
    </div>
  );
}

export default AdminSubject;
