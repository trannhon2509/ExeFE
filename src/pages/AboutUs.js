import React from 'react'
import { Link } from 'react-router-dom'
import RoutePath from '../config/RoutePath'
import TeacherCard from '../components/TeacherCard'
import { teachers } from '../data'

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
            <h1 className="nicdark_font_size_40 nicdark_line_height_50 nicdark_padding_10"><strong>Xin chào. Trường chúng tôi đã có mặt trên thị trường hơn 20 năm. Chúng tôi tận dụng tối đa tất cả các sinh viên của chúng tôi.</strong></h1>
          </div>
          <div className="grid grid_6 ">
            <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left">
              <p className="nicdark_padding_10">Trải nghiệm học tập offline tuyệt vời! Khám phá các khóa học đa dạng và thú vị trên trang web của chúng tôi. Hãy sẵn sàng khám phá kiến thức mới một cách trực tiếp và tương tác với giáo viên và bạn đồng hành.</p>
              <div className="nicdark_section nicdark_height_20" />
              <p className="nicdark_padding_10">Tạo cơ hội cho sự học hỏi offline. Với sự thuận tiện của việc đăng ký và tham gia các khóa học offline trên trang web của chúng tôi, bạn có thể dễ dàng tìm kiếm và tham gia vào các buổi học offline đầy kích thích.</p>
            </div>
            <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left">
              <p className="nicdark_padding_10">Khám phá sức hút của việc học tập trực tiếp. Với sự linh hoạt trong lựa chọn các khóa học offline, bạn có thể tận hưởng không gian học tập truyền cảm hứng và thú vị cùng với sự hướng dẫn chuyên nghiệp từ giáo viên.</p>
              <div className="nicdark_section nicdark_height_20" />
              <p className="nicdark_padding_10">Hãy đến và trải nghiệm sự khác biệt. Với trải nghiệm học tập offline trên trang web của chúng tôi, bạn sẽ có cơ hội gặp gỡ, kết nối và học hỏi từ các chuyên gia trong lĩnh vực mà bạn đam mê.</p>
            </div>
          </div>
          <div className="nicdark_section nicdark_height_40" />
          {Array.isArray(teachers) && teachers.length > 0 ? (
            teachers.slice(0, 4).map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))
          ) : (
            <p>No teachers found</p>
          )}
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
                  <strong><span className="nicdark_border_bottom_4_solid_white">Làm những việc đúng đắn</span><br /> ở đúng thời điểm.</strong></h1>
              </div>
              <div className="nicdark_section nicdark_height_40" />
              <div className="grid grid_2 nicdark_text_align_center">
                <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>15</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p className="nicdark_color_white">Giảng viên</p>
              </div>
              <div className="grid grid_2 nicdark_text_align_center">
                <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>+ 10 K</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p className="nicdark_color_white">Khách hàng</p>
              </div>
              <div className="grid grid_2 nicdark_text_align_center">
                <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>+ 47</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p className="nicdark_color_white">Khóa học</p>
              </div>
              <div className="grid grid_2 nicdark_text_align_center">
                <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>10</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p className="nicdark_color_white">Số năm kinh nghiệm</p>
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
                Trải nghiệm</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p>Trải qua một trải nghiệm học tập chất lượng, bạn sẽ được tiếp cận với một môi trường học tập tích cực và đầy sức hút. Cùng với đội ngũ giáo viên giàu kinh nghiệm và phương pháp giảng dạy hiện đại, chúng tôi cam kết mang đến cho bạn trải nghiệm học tập đáng nhớ và bổ ích.

</p>
              </div>
            </div>
            <div className="grid grid_5 ">
              <div className="nicdark_padding_20">
                <h1 className="nicdark_font_size_40"><strong><span className="nicdark_color_f1f1f1">02.</span>
                Chuyên nghiệp</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p>Với sự chuyên nghiệp và tận tâm, đội ngũ giáo viên của chúng tôi sẽ giúp bạn phát triển mạnh mẽ trong hành trình học tập. Chúng tôi cam kết cung cấp cho bạn một môi trường học tập chất lượng, nơi mà sự tiến bộ và thành công của bạn là ưu tiên hàng đầu.</p>
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
                Bảo đảm</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p>Chúng tôi cam kết đảm bảo sự hài lòng của bạn với chất lượng của các khóa học mà chúng tôi cung cấp. Với sự tận tâm và chuyên nghiệp, chúng tôi luôn luôn lắng nghe và phản hồi để đảm bảo rằng bạn nhận được giá trị tốt nhất từ trải nghiệm học tập của mình.</p>
              </div>
            </div>
            <div className="grid grid_5 ">
              <div className="nicdark_padding_20">
                <h1 className="nicdark_font_size_40"><strong><span className="nicdark_color_f1f1f1">04.</span>
                Chất lượng</strong></h1>
                <div className="nicdark_section nicdark_height_20" />
                <p>Chất lượng là tiêu chí hàng đầu mà chúng tôi đặt ra trong mọi khóa học. Từ nội dung đến phương pháp giảng dạy và sự hỗ trợ của đội ngũ giáo viên, chúng tôi cam kết mang đến cho bạn trải nghiệm học tập chất lượng và đáng tin cậy nhất.</p>
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