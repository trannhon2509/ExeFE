import { Link } from 'react-router-dom'
import RoutePath from '../config/RoutePath'
import { memo } from 'react'

function Header() {
  return (
    <>
      <div className="nicdark_section">
        <div className="nicdark_section nicdark_bg_blue">
          {/*start nicdark_container*/}
          <div className="nicdark_container nicdark_clearfix">
            <div className="grid grid_6 nicdark_padding_botttom_10 nicdark_padding_top_10 nicdark_text_align_center_responsive">
              <div className="nicdark_navigation_top_header_3">
                <ul>
                  <li>
                    <img alt="img" className="nicdark_margin_right_10 " width={15} src="img/icons/icon-world-white.svg" />
                    <Link className=" nicdark_line_height_18 nicdark_color_white" to={RoutePath.HOME}>LANGUAGES</Link>
                    <ul className="nicdark_sub_menu">
                      <li><Link to={RoutePath.HOME}>English</Link></li>
                      <li><Link to={RoutePath.HOME}>Russian</Link></li>
                      <li><Link to={RoutePath.HOME}>Italian</Link></li>
                    </ul>
                  </li>
                  <li>
                    <img alt="img" className="nicdark_margin_right_10" width={15} src="img/icons/icon-share-white.svg" />
                    <Link className=" nicdark_line_height_18 nicdark_color_white" to={RoutePath.HOME}>OUR SOCIAL</Link>
                    <ul className="nicdark_sub_menu">
                      <li><Link target="_blank" href="https://www.facebook.com/cleanthemeslab">Facebook</Link></li>
                      <li><Link target="_blank" href="https://dribbble.com/cleanthemeslab">Dribbble</Link></li>
                      <li><Link target="_blank" href="https://twitter.com/cleanthemeslab">Twitter</Link>
                      </li>
                      <li><Link target="_blank" href="https://www.instagram.com/cleanthemeslab/">Instagram</Link></li>
                      <li><Link target="_blank" href="https://www.behance.net/cleanthemeslab">Behance</Link></li>
                    </ul>
                    <Link target="_blank" href="https://www.facebook.com/cleanthemeslab"><img alt="img" className="nicdark_margin_left_10  nicdark_margin_top_2 nicdark_display_none_all_responsive" width={12} src="img/icons/icon-facebook-white.svg" /></Link>
                    <Link target="_blank" href="https://twitter.com/cleanthemeslab"><img alt="img" className="nicdark_margin_left_10  nicdark_margin_top_2 nicdark_display_none_all_responsive" width={12} src="img/icons/icon-twitter-white.svg" /></Link>
                    <Link target="_blank" to={RoutePath.HOME}><img alt="img" className="nicdark_margin_left_10  nicdark_margin_top_2 nicdark_display_none_all_responsive" width={12} src="img/icons/icon-linkedin-white.svg" /></Link>
                    <Link target="_blank" to={RoutePath.HOME}><img alt="img" className="nicdark_margin_left_10  nicdark_margin_top_2 nicdark_display_none_all_responsive" width={12} src="img/icons/icon-pinterest-white.svg" /></Link>
                    <Link target="_blank" href="https://www.instagram.com/cleanthemeslab/"><img alt="img" className="nicdark_margin_left_10  nicdark_margin_top_2 nicdark_display_none_all_responsive" width={12} src="img/icons/icon-instagram-white.svg" /></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid_6 nicdark_text_align_right nicdark_border_top_1_solid_bluedark_responsive nicdark_text_align_center_responsive nicdark_padding_botttom_10 nicdark_padding_top_10">
              <div className="nicdark_navigation_top_header_3">
                <ul>
                  <li>
                    <img alt="img" className="nicdark_margin_right_10 nicdark_float_left" width={15} src="img/icons/icon-user-white.svg" />
                    <Link className="nicdark_color_white" to={RoutePath.LOGIN}>LOGIN</Link>
                  </li>
                  <li>
                    <img alt="img" className="nicdark_margin_right_10 nicdark_float_left" width={15} src="img/icons/icon-login-white.svg" />
                    <Link className="nicdark_color_white" to={RoutePath.REGISTER}>REGISTER</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*end container*/}
        </div>
      </div>

      <div className="nicdark_section nicdark_position_relative ">
        <div className="nicdark_section nicdark_bg_white">
          {/*start nicdark_container*/}
          <div className="nicdark_container nicdark_clearfix nicdark_position_relative">
            <div className="grid grid_12 nicdark_display_none_all_responsive">
              <div className="nicdark_section nicdark_height_10" />
              {/*LOGO*/}
              <Link to={RoutePath.HOME}><img alt="img" className="nicdark_position_absolute nicdark_left_15 nicdark_top_20" width={170} src="img/logos/logo-university.svg" /></Link>
              {/*right icons menu*/}
              <div className="nicdark_float_right nicdark_width_100  nicdark_position_relative nicdark_height_25 nicdark_display_none_all_responsive">
                <Link to={RoutePath.CART}>
                  <img alt="img" className="nicdark_opacity_05_hover nicdark_transition_all_08_ease nicdark_position_absolute nicdark_top_3_negative nicdark_left_0 nicdark_margin_left_20" width={25} src="img/icons/icon-cart-grey.svg" />
                </Link>
                <Link className="nicdark_navigation_3_open_search_content" to={RoutePath.HOME}><img alt="img" className="nicdark_opacity_05_hover nicdark_transition_all_08_ease nicdark_position_absolute nicdark_top_3_negative nicdark_right_0" width={25} src="img/icons/icon-search-grey.svg" /></Link>
              </div>
              {/*right icons menu*/}
              <div className="nicdark_navigation_3 nicdark_text_align_right nicdark_float_right nicdark_display_none_all_responsive">
                <ul>
                  <li>
                    <Link to={RoutePath.HOME}>HOME</Link>
                    {/*<ul class="nicdark_sub_menu">
                          <li><Link href="index.php">Home 1</Link></li>
                          <li><Link href="index-2.php">Home 2</Link></li>
                          <li><Link href="index-3.php">Home 3</Link></li>
                          <li><Link href="index-4.php">Home 4</Link></li>
                          <li><Link href="index-5.php">Home 5</Link></li>
                      </ul>*/}
                  </li>
                  <li>
                    <Link to={RoutePath.COURSE}>COURSES</Link>
                  </li>
                  <li>
                    <Link to={RoutePath.TEACHERS}>TEACHERS</Link>

                  </li>
                  <li>
                    <Link to={RoutePath.ABOUTUS}>PAGES</Link>
                    <ul className="nicdark_sub_menu">
                      <li><Link to={RoutePath.ABOUTUS}>About Us</Link></li>
                      <li><Link to={RoutePath.SERVICES}>Services</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to={RoutePath.BLOG}>BLOG</Link>

                  </li>
                  <li>
                    <Link href="contact-1.html">CONTACT</Link>
                  </li>
                </ul>
              </div>
              <div className="nicdark_section nicdark_height_10" />
            </div>
          
          </div>
          {/*end container*/}

        </div>
      </div>










    </>
  )
}

export default memo(Header)