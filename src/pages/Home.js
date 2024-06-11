import React, { useEffect } from 'react'
import { courses, teachers } from '../data';
import CourseCard from '../components/CourseCard';
import TeacherCard from '../components/TeacherCard';

function Home() {

  useEffect(() => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJST0xFIjoiQURNSU4iLCJzdWIiOiJkdXk4IiwiaWF0IjoxNzE3NDczOTY5LCJleHAiOjE3MTgzMTk5Njl9.y3Xckq84rwhzzWaStSPIEnEwZfuS1_CG3ouIxqXU6Ak';

    fetch('http://localhost:8080/api/user/list?page=0&record=3', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();  // Parse as text first
      })
      .then(text => {
        try {
          const data = JSON.parse(text);  // Try to parse JSON
          console.log(data);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch(error => console.error('Fetch error:', error));
  }, []);


  return (

    <>

      <div className="nicdark_section nicdark_background_size_cover nicdark_background_position_center" style={{ backgroundImage: 'url(img/parallax/img41.jpg)' }}>
        <div className="nicdark_section nicdark_bg_greydark_alpha_gradient_3">
          <div className="nicdark_section nicdark_height_570" />
          {/*start nicdark_container*/}
          <div className="nicdark_container nicdark_clearfix nicdark_display_none_all_iphone">
            <div className="grid grid_12">
              <strong className="nicdark_color_white nicdark_font_size_60 nicdark_first_font">In our Campus
                you can</strong>
              {/*START typed words*/}
              <div className="nicdark_section ">
                <strong className="nicdark_color_white nicdark_font_size_40 nicdark_first_font">learn
                </strong>
                <div className="nicdark_typed_strings">
                  <p><strong className="nicdark_color_white nicdark_font_size_40 nicdark_first_font">mathematics
                    and philosophy</strong></p>
                  <p><strong className="nicdark_color_white nicdark_font_size_40 nicdark_first_font">economics
                    and statistics</strong></p>
                </div>
                <span className="nicdark_typed nicdark_padding_botttom_5" style={{ whiteSpace: 'pre' }} />
              </div>
              {/*END typed words*/}
            </div>
          </div>
          {/*end container*/}
          <div className="nicdark_section nicdark_height_50" />
        </div>
      </div>



      <div className="nicdark_section">
        <div className="nicdark_container nicdark_clearfix">
          <div className="grid grid_4 ">
            <img alt width={50} src="img/icons/icon-award-color.svg" />
            <div className="nicdark_section nicdark_height_20" />
            <h2><strong>National Awards</strong></h2>
            <div className="nicdark_section nicdark_height_20" />
            <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque
              euismod orci ut et lobortis.</p>
          </div>
          <div className="grid grid_4 ">
            <img alt width={50} src="img/icons/icon-graduation-color.svg" />
            <div className="nicdark_section nicdark_height_20" />
            <h2><strong>Best Teachers</strong></h2>
            <div className="nicdark_section nicdark_height_20" />
            <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque
              euismod orci ut et lobortis.</p>
          </div>
          <div className="grid grid_4 ">
            <img alt width={50} src="img/icons/icon-graph-color.svg" />
            <div className="nicdark_section nicdark_height_20" />
            <h2><strong>Many Courses</strong></h2>
            <div className="nicdark_section nicdark_height_20" />
            <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque
              euismod orci ut et lobortis.</p>
          </div>
        </div>
      </div>



      <div className="nicdark_section nicdark_background_size_cover nicdark_background_position_center_top" style={{ backgroundImage: 'url(img/parallax/img2.jpg)' }}>
        <div className="nicdark_section nicdark_bg_greydark_alpha_gradient_5">
          {/*start nicdark_container*/}
          <div className="nicdark_container nicdark_clearfix">
            <div className="nicdark_section nicdark_height_50" />
            <div className="grid grid_12">
              <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>Our Courses</strong></h1>
              <div className="nicdark_section nicdark_height_10" />
              <h3 className=" nicdark_color_white">The Best In Our School</h3>
            </div>
          </div>
          {/*END nicdark_container*/}
          {/*start nicdark_container*/}
          <div className="nicdark_container nicdark_clearfix nicdark_padding_20  nicdark_padding_botttom_0 nicdark_box_sizing_border_box">
            <div className="nicdark_width_100_percentage nicdark_position_relative nicdark_margin_bottom_105_negative nicdark_bg_grey nicdark_border_1_solid_grey nicdark_float_left nicdark_padding_20 nicdark_padding_0_all_iphone nicdark_box_sizing_border_box">
              {Array.isArray(courses) && courses.length > 0 ? (
                courses.slice(0, 3).map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))
              ) : (
                <p>No courses found</p>
              )}
            </div>
          </div>
          {/*end container*/}
        </div>
      </div>



      <div className="nicdark_section nicdark_height_150" />



      <div className="nicdark_section">
        {/*start nicdark_container*/}
        <div className="nicdark_container nicdark_clearfix">
          <div className="grid grid_12">
            <h1 className="nicdark_font_size_50"><strong>Our Teachers</strong></h1>
            <div className="nicdark_section nicdark_height_10" />
            <h3 className=" nicdark_color_grey">Best Chef In Our School</h3>
            <div className="nicdark_section nicdark_height_10" />
          </div>
          {Array.isArray(teachers) && teachers.length > 0 ? (
            teachers.slice(0, 4).map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))
          ) : (
            <p>No teachers found</p>
          )}
        </div>
        {/*end container*/}
      </div>




      <div className="nicdark_section nicdark_background_size_cover nicdark_background_position_center_top" style={{ backgroundImage: 'url(img/parallax/img4.jpg)' }}>
        <div className="nicdark_section nicdark_bg_greydark_alpha_6">
          <div className="nicdark_container nicdark_clearfix">
            <div className="nicdark_section nicdark_height_80" />
            <div className="grid grid_3 nicdark_text_align_center">
              <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>15</strong></h1>
              <div className="nicdark_section nicdark_height_20" />
              <p className="nicdark_color_white">TEACHERS</p>
            </div>
            <div className="grid grid_3 nicdark_text_align_center">
              <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>+ 10 K</strong></h1>
              <div className="nicdark_section nicdark_height_20" />
              <p className="nicdark_color_white">CUSTOMERS</p>
            </div>
            <div className="grid grid_3 nicdark_text_align_center">
              <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>+ 47</strong></h1>
              <div className="nicdark_section nicdark_height_20" />
              <p className="nicdark_color_white">COURSES</p>
            </div>
            <div className="grid grid_3 nicdark_text_align_center">
              <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>10</strong></h1>
              <div className="nicdark_section nicdark_height_20" />
              <p className="nicdark_color_white">YEARS OF EXPERIENCE</p>
            </div>
            <div className="nicdark_section nicdark_height_80" />
          </div>
        </div>
      </div>








    </>


  )
}

export default Home