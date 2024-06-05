import React, { useEffect, useState } from 'react'
import CourseCard from '../CourseCard'
import ReactPaginate from 'react-paginate';

function GridCourse() {
    const [courses, setCourses] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(6);
    const [searchKeyword, setSearchKeyword] = useState('');
    useEffect(() => {
        fetchData();
    }, [pageNumber, pageSize, searchKeyword]); 

    const fetchData = () => {
        fetch(`http://localhost:8080/api/subject/list?page=${pageNumber}&record=${pageSize}&keyword=${searchKeyword}`)
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error(error));
    };

    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
    };

    const handleSearchChange = (event) => {
        setSearchKeyword(event.target.value);
    };
    return (
        <div className='nicdark_container'>


            <div className="nicdark_width_100_percentage">
                <div className="nicdark_section nicdark_padding_15 nicdark_box_sizing_border_box">
                    <div className="nicdark_section nicdark_box_sizing_border_box ">
                        
                        <div className="nicdark_section nicdark_height_10" />
                        <div className="nicdark_width_70_percentage nicdark_float_left nicdark_width_100_percentage_all_iphone">
                            <div className="nicdark_section nicdark_height_20" />
                            <div className="nicdark_width_50_percentage nicdark_float_left">
                                <div className="nicdark_section nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative nicdark_padding_right_20">
                                    <img alt className="nicdark_position_absolute nicdark_top_5 nicdark_left_0 nicdark_margin_top_5" width={15} src="img/icons/icon-pen.svg" />
                                    <input 
                                        className="nicdark_padding_left_25 nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" 
                                        type="text" 
                                        placeholder="Keyword" 
                                        value={searchKeyword} 
                                        onChange={handleSearchChange} 
                                    />
                                </div>
                            </div>
                            <div className="nicdark_width_50_percentage nicdark_float_left">
                                <div className="nicdark_float_left nicdark_width_100_percentage_all_iphone">
                                    <a className="nicdark_bg_white_hover nicdark_color_violet_hover nicdark_border_2_solid_violet nicdark_transition_all_08_ease nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_violet nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 " href="courses.html">SEARCH</a>
                                </div>
                            </div>
                        </div>
                        <div className="nicdark_width_30_percentage nicdark_float_left nicdark_text_align_right nicdark_width_100_percentage_all_iphone">
                            <div className="nicdark_section nicdark_height_20" />
                            <div className="nicdark_display_inline_block nicdark_bg_blue nicdark_border_1_solid_blue nicdark_padding_8 nicdark_margin_right_10 nicdark_border_radius_3">
                                <a className="nicdark_tooltip_jquery" title="Advanced Settings" href="#"><img alt className="nicdark_float_left" width={23} src="img/icons/icon-settings-white.svg" /></a>
                            </div>
                            <div className="nicdark_display_inline_block nicdark_bg_violet nicdark_border_1_solid_violet nicdark_padding_8 nicdark_margin_right_10 nicdark_border_radius_3">
                                <a className="nicdark_tooltip_jquery" title="List View" href="#"><img alt className="nicdark_float_left" width={23} src="img/icons/icon-list-white.svg" /></a>
                            </div>
                            <div className="nicdark_display_inline_block nicdark_border_1_solid_grey_2 nicdark_padding_8 nicdark_border_radius_3">
                                <a className="nicdark_tooltip_jquery" title="Grid View" href="#"><img alt className="nicdark_float_left" width={23} src="img/icons/icon-grid-grey.svg" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nicdark_width_100_percentage">
                    <div className="nicdark_width_100_percentage">
                        {Array.isArray(courses) && courses.length > 0 ? (
                            courses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))
                        ) : (
                            <p>No courses found</p>
                        )}
                    </div>
                </div>
                <div className="nicdark_section nicdark_height_50" />
                <div className="nicdark_section nicdark_text_align_center">
                    <ReactPaginate
                        previousLabel="Previous"
                        nextLabel="Next"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        pageCount={2}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName="pagination"
                        activeClassName="active"
                        forcePage={pageNumber}
                    />
                </div>
            </div>

            <div className="nicdark_section nicdark_height_70" />


        </div>
    )
}

export default GridCourse