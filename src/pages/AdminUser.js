import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { TeacherContext } from '../contexts/TeacherContext';

function AdminUser() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordRepeat: '',
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    isActive: true,
    listUserRoles: [{ id: 1 }]
  });
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

  const { token } = useContext(TeacherContext);

  const fetchUsers = async () => {
    const response = await fetch(`http://localhost:8080/api/user/list?page=${pageNumber}&record=${usersPerPage}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, [pageNumber]);

  const handleShow = (type, user = null) => {
    setModalType(type);
    setSelectedUser(user);
    setShow(true);

    if (user) {
      setFormData({ ...user, listUserRoles: user.listUserRoles || [{ id: 1 }] });
    } else {
      setFormData({
        username: '',
        password: '',
        passwordRepeat: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        isActive: true,
        listUserRoles: [{ id: 1 }]
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
    const url = modalType === 'create' ? 'http://localhost:8080/auth/signup' : `http://localhost:8080/api/user/update/${selectedUser.id}`;
    const method = modalType === 'create' ? 'POST' : 'PUT';

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });

    fetchUsers();
    handleClose();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/api/user/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    fetchUsers();
  };

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container">
      <h1>Admin User</h1>
      <Button variant="primary" onClick={() => handleShow('create')}>
        Create User
      </Button>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.userId}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>
                <Button variant="warning" onClick={() => handleShow('update', user)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(user.userId)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(users.length / usersPerPage)}
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
          <Modal.Title>{modalType === 'create' ? 'Create User' : 'Update User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Form fields here */}
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

export default AdminUser;
