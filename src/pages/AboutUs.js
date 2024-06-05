import React from 'react'
import { Link } from 'react-router-dom'
import RoutePath from '../config/RoutePath'

function AboutUs() {
  return (
    <div>


      <div className="nicdark_section nicdark_bg_grey nicdark_border_bottom_1_solid_grey">
        {/*start nicdark_container*/}
        <div className="nicdark_container nicdark_clearfix">
          <div className="grid grid_12">
            <Link to={RoutePath.HOME}>Home</Link>
            <img alt="" className="nicdark_margin_left_10 nicdark_margin_right_10" width={10} src="img/icons/icon-next-grey.svg" />
            <Link to={RoutePath.PAGES}>Pages</Link>
            <img alt="" className="nicdark_margin_left_10 nicdark_margin_right_10" width={10} src="img/icons/icon-next-grey.svg" />
            <Link to={RoutePath.ABOUTUS}>About Us</Link>
          </div>
        </div>
        {/*end container*/}
      </div>



      <div className="nicdark_section nicdark_height_50" />


      <div className="nicdark_section">
        <div className="nicdark_container nicdark_clearfix">
          <div className="grid grid_6 nicdark_text_align_right nicdark_text_align_center_responsive">
            <h1 className="nicdark_font_size_40 nicdark_line_height_50 nicdark_padding_10"><strong>Hello. Our
              school has been present for over 20 years in the market. We make the most of all our
              students.</strong></h1>
          </div>
          <div className="grid grid_6 ">
            <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left">
              <p className="nicdark_padding_10">Phasellus enim libero, blandit vel sapien vitae, condimentum
                ultricies magna et. Quisque euismod orci ut et lobortis.</p>
              <div className="nicdark_section nicdark_height_20" />
              <p className="nicdark_padding_10">Phasellus enim libero, blandit vel sapien vitae, condimentum
                ultricies magna et. Quisque euismod orci ut et lobortis.</p>
            </div>
            <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left">
              <p className="nicdark_padding_10">Phasellus enim libero, blandit vel sapien vitae, condimentum
                ultricies magna et. Quisque euismod orci ut et lobortis.</p>
              <div className="nicdark_section nicdark_height_20" />
              <p className="nicdark_padding_10">Phasellus enim libero, blandit vel sapien vitae, condimentum
                ultricies magna et. Quisque euismod orci ut et lobortis.</p>
            </div>
          </div>
          <div className="nicdark_section nicdark_height_40" />
          <div className="grid grid_4">
            <div className="nicdark_section nicdark_box_sizing_border_box">
              <div className="nicdark_section nicdark_position_relative">
                <img alt="" className="nicdark_section" src="img/avatar/avatar-chef-3.jpg" />
                <div className="nicdark_bg_greydark_alpha_gradient_3 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">
                  <div className="nicdark_position_absolute nicdark_bottom_30 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_padding_50 nicdark_box_sizing_border_box nicdark_text_align_center">
                    <h2 className="nicdark_color_white"><strong>Jane Doe</strong></h2>
                    <div className="nicdark_section nicdark_height_10" />
                    <h6 className="nicdark_text_transform_uppercase nicdark_color_white">English Teacher
                    </h6>
                    <div className="nicdark_section nicdark_height_20" />
                    <p className="nicdark_color_white nicdark_display_none_all_iphone">Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Aenean egestas magna at.</p>
                    <div className="nicdark_section nicdark_height_20 nicdark_display_none_all_iphone">
                    </div>
                    <div className="nicdark_display_inline_block">
                      <img alt="svg" width={15} className="nicdark_margin_right_10" src="img/icons/icon-twitter-white.svg" />
                      <img alt="svg" width={15} className="nicdark_margin_right_10" src="img/icons/icon-pinterest-white.svg" />
                      <img alt="svg" width={15} className="nicdark_margin_right_10" src="img/icons/icon-linkedin-white.svg" />
                      <img alt="svg" width={15} className="nicdark_margin_right_10" src="img/icons/icon-google-white.svg" />
                      <img alt="svg" width={15} className="nicdark_margin_right_10" src="img/icons/icon-instagram-white.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid_4">
            <div className="nicdark_section nicdark_box_sizing_border_box">
              <div className="nicdark_section nicdark_position_relative">
                <img alt="" className="nicdark_section" src="img/avatar/avatar-chef-6.jpg" />
                <div className="nicdark_bg_greydark_alpha_gradient_3 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">
                  <div className="nicdark_position_absolute nicdark_bottom_30 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_padding_50 nicdark_box_sizing_border_box nicdark_text_align_center">
                    <h2 className="nicdark_color_white"><strong>Jack Johnson</strong></h2>
                    <div className="nicdark_section nicdark_height_10" />
                    <h6 className="nicdark_text_transform_uppercase nicdark_color_white">Art Teacher
                    </h6>
                    <div className="nicdark_section nicdark_height_20 " />
                    <p className="nicdark_color_white nicdark_display_none_all_iphone">Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Aenean egestas magna at.</p>
                    <div className="nicdark_section nicdark_height_20 nicdark_display_none_all_iphone">
                    </div>
                    <div className="nicdark_display_inline_block">
                      <img alt="svg" width={15} className="nicdark_margin_right_10" src="img/icons/icon-twitter-white.svg" />
                      <img alt="svg" width={15} className="nicdark_margin_right_10" src="img/icons/icon-pinterest-white.svg" />
                      <img alt="svg" width={15} className="nicdark_margin_right_10" src="img/icons/icon-linkedin-white.svg" />
                      <img alt="svg" width={15} className="nicdark_margin_right_10" src="img/icons/icon-google-white.svg" />
                      <img alt="svg" width={15} className="nicdark_margin_right_10" src="img/icons/icon-instagram-white.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid_4">
            <div className="nicdark_section nicdark_box_sizing_border_box">
              <div className="nicdark_section nicdark_position_relative">
                <img alt="" className="nicdark_section" src="img/avatar/avatar-chef-5.jpg" />
                <div className="nicdark_bg_greydark_alpha_gradient_3 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">
                  <div className="nicdark_position_absolute nicdark_bottom_30 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_padding_50 nicdark_box_sizing_border_box nicdark_text_align_center">
                    <h2 className="nicdark_color_white"><strong>Elen Grey</strong></h2>
                    <div className="nicdark_section nicdark_height_10" />
                    <h6 className="nicdark_text_transform_uppercase nicdark_color_white">Geometry
                      Teacher</h6>
                    <div className="nicdark_section nicdark_height_20" />
                    <p className="nicdark_color_white nicdark_display_none_all_iphone">Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Aenean egestas magna at.</p>
                    <div className="nicdark_section nicdark_height_20 nicdark_display_none_all_iphone">
                    </div>
                    <div className="nicdark_display_inline_block">
                      <img alt="svg" width={15} className="nicdark_margin_right_10" src="img/icons/icon-twitter-white.svg" />
                      <img alt="svg" width={15} className="nicdark_margin_right_10" src="img/icons/icon-pinterest-white.svg" />
                      <img alt="svg" width={15} className="nicdark_margin_right_10" src="img/icons/icon-linkedin-white.svg" />
                      <img alt="svg" width={15} className="nicdark_margin_right_10" src="img/icons/icon-google-white.svg" />
                      <img alt="svg" width={15} className="nicdark_margin_right_10" src="img/icons/icon-instagram-white.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div>
        <div className="nicdark_section nicdark_height_50" />
        <div className="nicdark_section nicdark_background_size_cover nicdark_background_position_center" style={{ backgroundImage: 'url(img/parallax/img2.jpg)' }}>
          <div className="nicdark_section nicdark_bg_greydark_alpha_gradient_5">
            <div className="nicdark_container nicdark_clearfix">
              <div className="nicdark_section nicdark_height_80" />
              <div className="grid grid_7 nicdark_position_relative">
                <img alt="img" className="nicdark_position_absolute" width={55} src="img/icons/icon-check-white.svg" />
                <h1 className="nicdark_color_white nicdark_font_size_40 nicdark_padding_left_80 nicdark_line_height_50">
                  <strong><span className="nicdark_border_bottom_4_solid_white">Doing the right
                    thing,</span><br /> at the right time.</strong></h1>
              </div>
              <div className="nicdark_section nicdark_height_40" />
              <div className="grid grid_2 nicdark_text_align_center">
                <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>15</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p className="nicdark_color_white">TEACHERS</p>
              </div>
              <div className="grid grid_2 nicdark_text_align_center">
                <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>+ 10 K</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p className="nicdark_color_white">CUSTOMERS</p>
              </div>
              <div className="grid grid_2 nicdark_text_align_center">
                <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>+ 47</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p className="nicdark_color_white">COURSES</p>
              </div>
              <div className="grid grid_2 nicdark_text_align_center">
                <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>10</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p className="nicdark_color_white">YEARS</p>
              </div>
              <div className="nicdark_section nicdark_height_80" />
            </div>
          </div>
        </div>
        <div className="nicdark_section nicdark_height_50" />
        <div className="nicdark_section">
          <div className="nicdark_container nicdark_clearfix">
            <div className="grid grid_1 ">
              <div className="nicdark_section nicdark_height_1" />
            </div>
            <div className="grid grid_5 ">
              <div className="nicdark_padding_20">
                <h1 className="nicdark_font_size_40"><strong><span className="nicdark_color_f1f1f1">01.</span>
                  Experience</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque
                  euismod orci ut et lobortis. Blandit vel sapien vitae, condimentum ultricies magna et
                  orci ut et lobortis.</p>
              </div>
            </div>
            <div className="grid grid_5 ">
              <div className="nicdark_padding_20">
                <h1 className="nicdark_font_size_40"><strong><span className="nicdark_color_f1f1f1">02.</span>
                  Professionality</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque
                  euismod orci ut et lobortis. Blandit vel sapien vitae, condimentum ultricies magna et
                  orci ut et lobortis.</p>
              </div>
            </div>
            <div className="grid grid_1 ">
              <div className="nicdark_section nicdark_height_1" />
            </div>
            <div className="nicdark_section nicdark_height_1" />
            <div className="grid grid_1 ">
              <div className="nicdark_section nicdark_height_1" />
            </div>
            <div className="grid grid_5 ">
              <div className="nicdark_padding_20">
                <h1 className="nicdark_font_size_40"><strong><span className="nicdark_color_f1f1f1">03.</span>
                  Guarantee</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque
                  euismod orci ut et lobortis. Blandit vel sapien vitae, condimentum ultricies magna et
                  orci ut et lobortis.</p>
              </div>
            </div>
            <div className="grid grid_5 ">
              <div className="nicdark_padding_20">
                <h1 className="nicdark_font_size_40"><strong><span className="nicdark_color_f1f1f1">04.</span>
                  Quality</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque
                  euismod orci ut et lobortis. Blandit vel sapien vitae, condimentum ultricies magna et
                  orci ut et lobortis.</p>
              </div>
            </div>
            <div className="grid grid_1 ">
              <div className="nicdark_section nicdark_height_1" />
            </div>
          </div>
        </div>
        <div className="nicdark_section nicdark_height_60" />
      </div>


      <div className="nicdark_section">
        <div className="nicdark_section nicdark_bg_grey nicdark_border_top_1_solid_grey">
          {/*start nicdark_container*/}
          <div className="nicdark_container nicdark_clearfix">
            <div className="nicdark_section nicdark_height_30" />
            <div className="grid grid_2">
              <img alt='img' className="nicdark_width_100_percentage" src="img/partner/logo1.png" />
            </div>
            <div className="grid grid_2">
              <img alt='img' className="nicdark_width_100_percentage" src="img/partner/logo4.png" />
            </div>
            <div className="grid grid_2">
              <img alt='img' className="nicdark_width_100_percentage" src="img/partner/logo3.png" />
            </div>
            <div className="grid grid_2">
              <img alt='img' className="nicdark_width_100_percentage" src="img/partner/logo2.png" />
            </div>
            <div className="grid grid_2">
              <img alt='img' className="nicdark_width_100_percentage" src="img/partner/logo5.png" />
            </div>
            <div className="grid grid_2">
              <img alt='img' className="nicdark_width_100_percentage" src="img/partner/logo6.png" />
            </div>
            <div className="nicdark_section nicdark_height_30" />
          </div>
          {/*end container*/}
        </div>
      </div>



    </div>
  )
}

export default AboutUs