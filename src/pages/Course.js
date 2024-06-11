import React from 'react'
import GridCourse from '../components/containers/GridCourse'

function Course() {
  return (
    <div>

      <div className="nicdark_section nicdark_bg_grey nicdark_border_bottom_1_solid_grey">
        {/*start nicdark_container*/}
        <div className="nicdark_container nicdark_clearfix">
          <div className="grid grid_12">
            <a href="#">Trang chủ</a>
            <img alt className="nicdark_margin_left_10 nicdark_margin_right_10" width={10} src="img/icons/icon-next-grey.svg" />
            <a href="#">Khóa học</a>
          </div>
        </div>
        {/*end container*/}
      </div>

      <GridCourse />
    </div>
  )
}

export default Course