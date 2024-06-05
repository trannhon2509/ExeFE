import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import RoutePath from '../config/RoutePath';

function Cart() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const storedCourses = localStorage.getItem('courses');
        if (storedCourses) {
            setCourses(JSON.parse(storedCourses));
            console.log(storedCourses);
        }
    }, []);

    const handleAddCourse = (course) => {
        setCourses((prevCourses) => [...prevCourses, course]);
        localStorage.setItem('courses', JSON.stringify([...courses, course]));
    };

    const handleRemoveCourse = (courseId) => {
        setCourses((prevCourses) => prevCourses.filter((course) => course.id !== courseId));
        localStorage.setItem(
            'courses',
            JSON.stringify(courses.filter((course) => course.id !== courseId))
        );
    };

    const handleUpdateQuantity = (courseId, newQuantity) => {
        setCourses((prevCourses) =>
            prevCourses.map((course) => {
                if (course.id === courseId) {
                    return { ...course, quantity: newQuantity };
                }
                return course;
            })
        );
        localStorage.setItem(
            'courses',
            JSON.stringify(
                courses.map((course) => {
                    if (course.id === courseId) {
                        return { ...course, quantity: newQuantity };
                    }
                    return course;
                })
            )
        );
    };

    console.log('Courses in cart:', courses);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <h1 className='text-center'>Cart course</h1>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Subject name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col">Delete</th>
                            </tr>

                        </thead>
                        <tbody>
                            {courses.map((course, index) => (
                                <CartItem
                                    key={index}
                                    course={course}
                                    onRemove={handleRemoveCourse}
                                    onUpdateQuantity={handleUpdateQuantity}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='my-5 col-md-4'>
                    <table class="nicdark_section">
                        <thead>
                            <tr class="nicdark_border_bottom_2_solid_grey">
                                <td class="nicdark_padding_20 nicdark_width_50_percentage">
                                    <h6 class="nicdark_text_transform_uppercase">TOTALS</h6>
                                </td>
                                <td class="nicdark_padding_20 nicdark_width_50_percentage">
                                </td>
                            </tr>
                        </thead>
                        <tbody>

                            <tr class="">
                                <td class="nicdark_padding_20">
                                    <p>Subtotal</p>
                                </td>
                                <td class="nicdark_padding_20">
                                    <p class="nicdark_color_greydark">$ 50,00</p>
                                </td>
                            </tr>
                            <tr class="nicdark_border_bottom_2_solid_grey">
                                <td class="nicdark_padding_20">
                                    <p>Method</p>
                                </td>
                                <td class="nicdark_padding_20">
                                    <p class="nicdark_color_greydark">Paypal</p>
                                </td>
                            </tr>
                            <tr class="">
                                <td class="nicdark_padding_20">
                                    <p>Total</p>
                                </td>
                                <td class="nicdark_padding_20">
                                    <h2><strong>$ 50,00</strong></h2>
                                </td>
                            </tr>
                            <tr>
                                <td> <Link to={RoutePath.COURSE} className='btn btn-lg btn-danger rounded-0 fw-bold'><i class="bi bi-arrow-left-circle-fill"></i> Return to buy</Link></td>
                                <td> <Link to={RoutePath.CHECKOUT} className='btn btn-lg btn-success rounded-0 fw-bold'>Check out <i class="bi bi-arrow-right-circle-fill"></i></Link></td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
}

export default Cart;