import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutePath from '../config/RoutePath';

function Checkout() {
    const [courses, setCourses] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const storedCourses = localStorage.getItem('courses');
        if (storedCourses) {
            setCourses(JSON.parse(storedCourses));
            console.log(storedCourses);
        }
    }, []);
    useEffect(() => {
        const calculateTotal = () => {
            let totalCost = 0;
            courses.forEach((course) => {
                totalCost += (course.totalMoneyMonthTeaching * course.numberTeachOfWeek);
            });
            setTotal(totalCost);
        };
        calculateTotal();
    }, [courses]);
    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.removeItem('courses');
        window.location.href(RoutePath.QR)
        // You can also redirect the user to a success page or display a success message
    };
    return (

        <div className="container">
            <div className="py-5 text-center">
                <h2>Register</h2>
            </div>
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">
                        {courses.map(item => {

                            return (
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h3 className="my-0">{item.subjectName}</h3>
                                        <small className="text-muted">{item.description}</small>

                                    </div>

                                    <span className="text-muted text-nowrap">{item.numberTeachOfWeek} month X ${item.totalMoneyMonthTeaching}</span>
                                </li>
                            );
                        })}

                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>${total}</strong>
                        </li>
                    </ul>
                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" noValidate>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder defaultValue required />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder defaultValue required />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input type="text" className="form-control" id="username" placeholder="Username" required />
                                <div className="invalid-feedback" style={{ width: '100%' }}>
                                    Your username is required.
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                        </div>
                        <hr className='my-4' />
                        <hr className="my-4" />
                        <h4 className="mb-3">Payment</h4>
                        <div className="d-block my-3">
                            <div className="custom-control custom-radio">
                                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                                <label className="custom-control-label" htmlFor="credit">Transfer</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                                <label className="custom-control-label" htmlFor="debit">Momo</label>
                            </div>
                        </div>

                        <hr className="mb-4" />
                        <button onSubmit={handleSubmit} className="btn btn-primary btn-lg btn-block mb-4" type="submit">Continue to checkout</button>
                       
                    </form>
                </div>
            </div>
        </div>



    );
}

export default Checkout;