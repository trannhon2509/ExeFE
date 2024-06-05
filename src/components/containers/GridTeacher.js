import React from 'react'
import TeacherCard from '../TeacherCard'
import  { useState, useEffect } from 'react';
function GridTeacher() {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        const fetchTeachers = async () => {
          try {
            const response = await fetch('http://localhost:8080/api/tutor/list?page=0&record=3');
            const data = await response.json();
            setTeachers(data);
          } catch (error) {
            console.error('Error fetching teachers:', error);
          }
        };
      
        fetchTeachers();
      }, []);
    return (

        <div className="nicdark_section ">
            {/*start nicdark_container*/}
            <div className="nicdark_container nicdark_clearfix">
                <div className="nicdark_width_100_percentage">
                {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
                    <div className="nicdark_section nicdark_height_30" />
                    <div className="nicdark_section nicdark_text_align_center">
                        <a className="nicdark_display_inline_block nicdark_color_greydark nicdark_first_font nicdark_padding_10 nicdark_font_size_20" href="#"><strong>1</strong></a>
                        <a className="nicdark_display_inline_block nicdark_first_font nicdark_padding_10 nicdark_font_size_20" href="#"><strong>2</strong></a>
                        <a className="nicdark_display_inline_block nicdark_first_font nicdark_padding_10 nicdark_font_size_20" href="#"><strong>3</strong></a>
                        <a className="nicdark_display_inline_block nicdark_first_font nicdark_padding_10 nicdark_font_size_20" href="#"><strong>4</strong></a>
                        <a className="nicdark_display_inline_block nicdark_first_font nicdark_padding_10 nicdark_font_size_20" href="#"><strong>5</strong></a>
                    </div>
                </div>
            </div>
            {/*end container*/}
            
            <div className="nicdark_section nicdark_height_70" />

        </div>


    )
}

export default GridTeacher