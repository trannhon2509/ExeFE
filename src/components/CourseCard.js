import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RoutePath from '../config/RoutePath';
import { TeacherContext } from '../contexts/TeacherContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CourseCard({ course }) {
    const { id, subjectName, description, totalMoneyMonthTeaching, numberTeachOfWeek, oneHourTeaching } = course;
    const { setCourse } = useContext(TeacherContext);

    const handleRegister = () => {
        // Lưu thông tin của khóa học vào local storage
        const coursesInLocalStorage = JSON.parse(localStorage.getItem('courses')) || [];
        const existingCourseIndex = coursesInLocalStorage.findIndex((c) => c.id === course.id);
      
        if (existingCourseIndex !== -1) {
          // Course already exists, increment quantity
          coursesInLocalStorage[existingCourseIndex].quantity = (coursesInLocalStorage[existingCourseIndex].quantity || 0) + 1;
        } else {
          // Add new course
          coursesInLocalStorage.push({ ...course, quantity: 1 });
        }
      
        localStorage.setItem('courses', JSON.stringify(coursesInLocalStorage));
      
        // Hiển thị thông báo thành công
        toast.success('Course registered successfully!', {
          toastClassName: 'my-custom-toast'
        });
      
        // Thực hiện các công việc khác sau khi đăng ký khóa học thành công (nếu cần)
      };

    return (
        <div className="nicdark_width_33_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
            <div className="nicdark_section nicdark_padding_15 nicdark_box_sizing_border_box">
                {/*start preview*/}
                <div className="nicdark_section nicdark_border_1_solid_grey">
                    {/*image*/}
                    <div className="nicdark_section nicdark_position_relative">
                        <img alt className="nicdark_section" src="img/courses/img34.jpg" />
                        <div className="nicdark_bg_greydark_alpha_gradient_2 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_padding_20 nicdark_box_sizing_border_box">
                            <a className="nicdark_tooltip_jquery nicdark_position_absolute nicdark_right_0" title="Add To Favorities" href="account.html#tabs-3">
                                <img alt className="nicdark_margin_right_60" width={25} src="img/icons/icon-heart-white.svg" />
                            </a>
                            <a className="nicdark_tooltip_jquery nicdark_position_absolute nicdark_right_0" title="Add To Compare" href="compare.html">
                                <img alt className="nicdark_margin_right_20 nicdark_right_0" width={25} src="img/icons/icon-compare-white.svg" />
                            </a>
                            <div className="nicdark_position_absolute nicdark_bottom_20">
                                <div className="nicdark_display_table nicdark_float_left">
                                    <img alt className="nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle" width={20} src="img/icons/icon-calendar.svg" />
                                    <p className=" nicdark_color_white nicdark_display_table_cell nicdark_vertical_align_middle nicdark_font_size_13">
                                        21/12/2017</p>
                                    <img alt className="nicdark_margin_right_10 nicdark_margin_left_20 nicdark_display_table_cell nicdark_vertical_align_middle" width={20} src="img/icons/icon-clock.svg" />
                                    <p className="nicdark_color_white nicdark_display_table_cell nicdark_vertical_align_middle nicdark_font_size_13">
                                        {oneHourTeaching} hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*image*/}
                    <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box">
                        <h3><Link className="nicdark_color_greydark nicdark_first_font" to={RoutePath.COURSESINGLE}>{subjectName}</Link></h3>
                        <div className="nicdark_section nicdark_height_20" />
                        <p><Link className to={RoutePath.COURSESINGLE} onClick={() => setCourse(course)}>{description}</Link></p>
                        <button className='w-100 btn btn-primary' onClick={handleRegister}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
            <Link></Link>
            <ToastContainer />
        </div>
    );
}

export default CourseCard;
