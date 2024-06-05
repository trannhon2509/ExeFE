import React, { useEffect } from 'react'

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
              {/*START preview*/}
              <div className="nicdark_width_33_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
                <div className="nicdark_section nicdark_padding_15 nicdark_padding_0_all_iphone nicdark_box_sizing_border_box">
                  {/*start preview*/}
                  <div className="nicdark_section nicdark_border_1_solid_grey nicdark_bg_white">
                    {/*image*/}
                    <div className="nicdark_section nicdark_position_relative">
                      <img alt className="nicdark_section" src="img/courses/img33.jpg" />
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
                              8 Hours</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*image*/}
                    <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box">
                      <h3><a className="nicdark_color_greydark nicdark_first_font" href="single-course.html">History of Philosophy</a></h3>
                      <div className="nicdark_section nicdark_height_20" />
                      <p><a className href="single-course.html">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aenean egestas magna at porttitor
                        vehicula. Nullam augue augue.</a></p>
                    </div>
                    <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box nicdark_bg_white nicdark_border_top_1_solid_grey">
                      <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left">
                        <div className="nicdark_display_table nicdark_float_left">
                          <img alt className="nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage" width={25} src="img/avatar/avatar-chef-6.jpg" />
                          <p className="nicdark_display_table_cell nicdark_vertical_align_middle nicdark_font_size_15">
                            <a href="single-teacher.html">John</a></p>
                        </div>
                      </div>
                      <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left nicdark_text_align_right nicdark_text_align_left_all_iphone">
                        <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_violet nicdark_margin_top_20_all_iphone nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="single-course.html">FREE</a>
                      </div>
                    </div>
                  </div>
                  {/*start preview*/}
                </div>
              </div>
              {/*END preview*/}
              {/*START preview*/}
              <div className="nicdark_width_33_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
                <div className="nicdark_section nicdark_padding_15 nicdark_padding_0_all_iphone nicdark_box_sizing_border_box">
                  {/*start preview*/}
                  <div className="nicdark_section nicdark_border_1_solid_grey nicdark_bg_white">
                    {/*image*/}
                    <div className="nicdark_section nicdark_position_relative">
                      <img alt className="nicdark_section" src="img/courses/img27.jpg" />
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
                              8 Hours</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*image*/}
                    <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box">
                      <h3><a className="nicdark_color_greydark nicdark_first_font" href="single-course.html">Contemporary Art</a></h3>
                      <div className="nicdark_section nicdark_height_20" />
                      <p><a className href="single-course.html">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aenean egestas magna at porttitor
                        vehicula. Nullam augue augue.</a></p>
                    </div>
                    <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box nicdark_bg_white nicdark_border_top_1_solid_grey">
                      <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left">
                        <div className="nicdark_display_table nicdark_float_left">
                          <img alt className="nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage" width={25} src="img/avatar/avatar-chef-2.jpg" />
                          <p className="nicdark_display_table_cell nicdark_vertical_align_middle nicdark_font_size_15">
                            <a href="single-teacher.html">Lisa</a></p>
                        </div>
                      </div>
                      <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left nicdark_text_align_right nicdark_text_align_left_all_iphone">
                        <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_blue nicdark_margin_top_20_all_iphone nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="single-course.html">COMPLETED</a>
                      </div>
                    </div>
                  </div>
                  {/*start preview*/}
                </div>
              </div>
              {/*END preview*/}
              {/*START preview*/}
              <div className="nicdark_width_33_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
                <div className="nicdark_section nicdark_padding_15 nicdark_padding_0_all_iphone nicdark_box_sizing_border_box">
                  {/*start preview*/}
                  <div className="nicdark_section nicdark_border_1_solid_grey nicdark_bg_white">
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
                              8 Hours</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*image*/}
                    <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box">
                      <h3><a className="nicdark_color_greydark nicdark_first_font" href="single-course.html">Geometry Course</a></h3>
                      <div className="nicdark_section nicdark_height_20" />
                      <p><a className href="single-course.html">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aenean egestas magna at porttitor
                        vehicula. Nullam augue augue.</a></p>
                    </div>
                    <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box nicdark_bg_white nicdark_border_top_1_solid_grey">
                      <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone  nicdark_float_left">
                        <div className="nicdark_display_table nicdark_float_left">
                          <img alt className="nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage" width={25} src="img/avatar/avatar-chef-3.jpg" />
                          <p className="nicdark_display_table_cell nicdark_vertical_align_middle nicdark_font_size_15">
                            <a href="single-teacher.html">Sarah</a></p>
                        </div>
                      </div>
                      <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left nicdark_text_align_right nicdark_text_align_left_all_iphone">
                        <a className="nicdark_display_inline_block nicdark_color_white nicdark_margin_top_20_all_iphone nicdark_bg_violet nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="single-course.html">USD 70</a>
                      </div>
                    </div>
                  </div>
                  {/*start preview*/}
                </div>
              </div>
              {/*END preview*/}
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
          <div className="grid grid_6">
            {/*START teacher*/}
            <div className="nicdark_section">
              <div className="nicdark_float_left nicdark_width_35_percentage nicdark_width_100_percentage_all_iphone">
                {/*START image*/}
                <div className="nicdark_section nicdark_box_sizing_border_box">
                  <div className="nicdark_section nicdark_position_relative">
                    <img alt className="nicdark_section" src="img/avatar/avatar-chef-2.jpg" />
                    <div className="nicdark_bg_greydark_alpha_gradient nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">
                      <div className="nicdark_position_absolute nicdark_bottom_20 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_box_sizing_border_box nicdark_text_align_center">
                        <div className="nicdark_display_inline_block">
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-twitter-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-pinterest-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-linkedin-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-google-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-instagram-white.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*END image*/}
              </div>
              <div className="nicdark_float_left nicdark_width_65_percentage nicdark_width_100_percentage_all_iphone">
                <div className="nicdark_section nicdark_padding_left_20 nicdark_padding_left_0_all_iphone nicdark_box_sizing_border_box">
                  <h2 className="nicdark_margin_top_20_all_iphone"><strong>John Mcallister</strong></h2>
                  <div className="nicdark_section nicdark_height_10" />
                  <h6 className="nicdark_text_transform_uppercase nicdark_color_grey nicdark_second_font">
                    Food Teacher</h6>
                  <div className="nicdark_section nicdark_height_20" />
                  <p className="nicdark_color_grey">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Aenean egestas magna at porttitor vehicula nullam augue.</p>
                  <div className="nicdark_section nicdark_height_10" />
                  <a className="nicdark_display_inline_block nicdark_color_grey nicdark_color_greydark_hover nicdark_bg_white_hover nicdark_transition_all_08_ease nicdark_border_1_solid_grey_2 nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="single-teacher.html">KNOW ME</a>
                </div>
              </div>
            </div>
            {/*END teacher*/}
          </div>
          <div className="grid grid_6">
            {/*START teacher*/}
            <div className="nicdark_section">
              <div className="nicdark_float_left nicdark_width_35_percentage nicdark_width_100_percentage_all_iphone">
                {/*START image*/}
                <div className="nicdark_section nicdark_box_sizing_border_box">
                  <div className="nicdark_section nicdark_position_relative">
                    <img alt className="nicdark_section" src="img/avatar/avatar-chef-3.jpg" />
                    <div className="nicdark_bg_greydark_alpha_gradient nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">
                      <div className="nicdark_position_absolute nicdark_bottom_20 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_box_sizing_border_box nicdark_text_align_center">
                        <div className="nicdark_display_inline_block">
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-twitter-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-pinterest-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-linkedin-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-google-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-instagram-white.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*END image*/}
              </div>
              <div className="nicdark_float_left nicdark_width_65_percentage nicdark_width_100_percentage_all_iphone">
                <div className="nicdark_section nicdark_padding_left_20 nicdark_padding_left_0_all_iphone nicdark_box_sizing_border_box">
                  <h2 className="nicdark_margin_top_20_all_iphone"><strong>Jane Doe</strong></h2>
                  <div className="nicdark_section nicdark_height_10" />
                  <h6 className="nicdark_text_transform_uppercase nicdark_color_grey nicdark_second_font">
                    VEGAN TEACHER</h6>
                  <div className="nicdark_section nicdark_height_20" />
                  <p className="nicdark_color_grey">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Aenean egestas magna at porttitor vehicula nullam augue.</p>
                  <div className="nicdark_section nicdark_height_10" />
                  <a className="nicdark_display_inline_block nicdark_color_grey nicdark_color_greydark_hover nicdark_bg_white_hover nicdark_transition_all_08_ease nicdark_border_1_solid_grey_2 nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="single-teacher.html">KNOW ME</a>
                </div>
              </div>
            </div>
            {/*END teacher*/}
          </div>
          <div className="grid grid_6">
            {/*START teacher*/}
            <div className="nicdark_section">
              <div className="nicdark_float_left nicdark_width_35_percentage nicdark_width_100_percentage_all_iphone">
                {/*START image*/}
                <div className="nicdark_section nicdark_box_sizing_border_box">
                  <div className="nicdark_section nicdark_position_relative">
                    <img alt className="nicdark_section" src="img/avatar/avatar-chef-4.jpg" />
                    <div className="nicdark_bg_greydark_alpha_gradient nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">
                      <div className="nicdark_position_absolute nicdark_bottom_20 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_box_sizing_border_box nicdark_text_align_center">
                        <div className="nicdark_display_inline_block">
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-twitter-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-pinterest-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-linkedin-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-google-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-instagram-white.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*END image*/}
              </div>
              <div className="nicdark_float_left nicdark_width_65_percentage nicdark_width_100_percentage_all_iphone">
                <div className="nicdark_section nicdark_padding_left_20 nicdark_padding_left_0_all_iphone nicdark_box_sizing_border_box">
                  <h2 className="nicdark_margin_top_20_all_iphone"><strong>Mary Mgrayan</strong></h2>
                  <div className="nicdark_section nicdark_height_10" />
                  <h6 className="nicdark_text_transform_uppercase nicdark_color_grey nicdark_second_font">
                    ITALIAN EXPERT</h6>
                  <div className="nicdark_section nicdark_height_20" />
                  <p className="nicdark_color_grey">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Aenean egestas magna at porttitor vehicula nullam augue.</p>
                  <div className="nicdark_section nicdark_height_10" />
                  <a className="nicdark_display_inline_block nicdark_color_grey nicdark_color_greydark_hover nicdark_bg_white_hover nicdark_transition_all_08_ease nicdark_border_1_solid_grey_2 nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="single-teacher.html">KNOW ME</a>
                </div>
              </div>
            </div>
            {/*END teacher*/}
          </div>
          <div className="grid grid_6">
            {/*START teacher*/}
            <div className="nicdark_section">
              <div className="nicdark_float_left nicdark_width_35_percentage nicdark_width_100_percentage_all_iphone">
                {/*START image*/}
                <div className="nicdark_section nicdark_box_sizing_border_box">
                  <div className="nicdark_section nicdark_position_relative">
                    <img alt className="nicdark_section" src="img/avatar/avatar-chef-5.jpg" />
                    <div className="nicdark_bg_greydark_alpha_gradient nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">
                      <div className="nicdark_position_absolute nicdark_bottom_20 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_box_sizing_border_box nicdark_text_align_center">
                        <div className="nicdark_display_inline_block">
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-twitter-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-pinterest-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-linkedin-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-google-white.svg" />
                          <img alt width={15} className="nicdark_margin_right_10" src="img/icons/icon-instagram-white.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*END image*/}
              </div>
              <div className="nicdark_float_left nicdark_width_65_percentage nicdark_width_100_percentage_all_iphone">
                <div className="nicdark_section nicdark_padding_left_20 nicdark_padding_left_0_all_iphone nicdark_box_sizing_border_box">
                  <h2 className="nicdark_margin_top_20_all_iphone"><strong>Hanna Sprite</strong></h2>
                  <div className="nicdark_section nicdark_height_10" />
                  <h6 className="nicdark_text_transform_uppercase nicdark_color_grey nicdark_second_font">
                    ASIAN TEACHER</h6>
                  <div className="nicdark_section nicdark_height_20" />
                  <p className="nicdark_color_grey">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Aenean egestas magna at porttitor vehicula nullam augue.</p>
                  <div className="nicdark_section nicdark_height_10" />
                  <a className="nicdark_display_inline_block nicdark_color_grey nicdark_color_greydark_hover nicdark_bg_white_hover nicdark_transition_all_08_ease nicdark_border_1_solid_grey_2 nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="single-teacher.html">KNOW ME</a>
                </div>
              </div>
            </div>
            {/*END teacher*/}
          </div>
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