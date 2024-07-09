// data.js

let courses = JSON.parse(localStorage.getItem("courses")) || [
  {
    id: 1,
    title: "Toán cấp 3",
    description:
      " Học sinh sẽ học về đại số, giải tích, hình học, xác suất và thống kê. Mục tiêu là giúp học sinh hiểu và áp dụng các khái niệm toán học vào việc giải quyết các vấn đề thực tế và trừu tượng. ",
    totalMoneyMonthTeaching: 1500000,
    numberTeachOfWeek: 3,
    oneHourTeaching: 1.5,
    imageUrl:
      "https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0",
    teacher: "Thanh Thảo",
  },
  {
    id: 2,
    title: "Tiếng anh cấp 2",
    description:
      "Dạy các kiến thức căn bản về ngữ pháp tiếng anh giúp nắm rõ được kiến thức và tự tin giao tiếp",
    totalMoneyMonthTeaching: 1500000,
    numberTeachOfWeek: 3,
    oneHourTeaching: 1.5,
    imageUrl:
      "https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0",
    teacher: "Linh Chi",
  },
  {
    id: 3,
    title: "Anh văn",
    description:
      "Giúp học sinh nắm vứng các kiến thức tiếng anh cơ bản và nâng cao một cách nhanh chóng",
    totalMoneyMonthTeaching: 1500000,
    numberTeachOfWeek: 3,
    oneHourTeaching: 1.5,
    imageUrl:
      "https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0",
    teacher: "Quốc Nhật",
  },
  {
    id: 4,
    title: "Hóa học",
    description:
      "Học sinh sẽ học được cách sử dụng các công thức và nắm rõ lí thuyết về hóa học.",
    totalMoneyMonthTeaching: 1500000,
    numberTeachOfWeek: 3,
    oneHourTeaching: 1.5,
    imageUrl:
      "https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0",
    teacher: "Gia Khiêm",
  },
  {
    id: 5,
    title: "Ngữ văn",
    description:
      "Truyền cảm hứng cho học sinh đam mê các tác phẩm và cảm thụ văn học",
    totalMoneyMonthTeaching: 1500000,
    numberTeachOfWeek: 3,
    oneHourTeaching: 2,
    imageUrl:
      "https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0",
    teacher: "Thùy Dung",
  },
  {
    id: 6,
    title: "VẬT LÝ CẤP 2",
    description:
      "Học sinh sẽ đạt được những kĩ năng cần thiết cho việc đạt được điểm cao trong các bài kiểm tra, kì thi.",
    totalMoneyMonthTeaching: 1500000,
    numberTeachOfWeek: 3,
    oneHourTeaching: 1.5,
    imageUrl:
      "https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0",
    teacher: "Duy Nguyễn",
  },
  {
    id: 7,
    title: "Tin Học",
    description:
      "Học sinh sẽ có được kĩ năng lập trình cùng tư duy logic giúp viết được những chương trình từ nhỏ đến lớn.",
    totalMoneyMonthTeaching: 1500000,
    numberTeachOfWeek: 3,
    oneHourTeaching: 1.5,
    imageUrl:
      "https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0",
    teacher: "Phạm Thế Toàn",
  },
  {
    id: 8,
    title: "Giáo dục công dân",
    description:
      "Nắm rõ các khái niệm thế giới quan và sự vận động của thế giới quan.",
    totalMoneyMonthTeaching: 1500000,
    numberTeachOfWeek: 3,
    oneHourTeaching: 1.5,
    imageUrl:
      "https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0",
    teacher: "Hải Đăng",
  },
];
let users = JSON.parse(localStorage.getItem("users")) || [
  {
    id: 1,
    username: "user1",
    password: "pass1",
    email: "user1@example.com",
    imageUrl:
      "https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 2,
    username: "user2",
    password: "pass2",
    email: "user2@example.com",
    imageUrl:
      "https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 3,
    username: "user3",
    password: "pass3",
    email: "user3@example.com",
    imageUrl:
      "https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 4,
    username: "user4",
    password: "pass4",
    email: "user4@example.com",
    imageUrl:
      "https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 5,
    username: "user5",
    password: "pass5",
    email: "user5@example.com",
    imageUrl:
      "https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  },
];

let teachers = JSON.parse(localStorage.getItem("teachers")) || [
  {
    id: 1,
    fullName: "Thanh Thảo",
    major: "Toán cấp 3",
    description:
      "Gia sư Thanh Thảo đạt được 9 điểm môn Toán trong kì thi THPT quốc gia.",
    email: "thienhn2k2@gmail.com",
    phone: "0905222529",
    cardPhoto:
      "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/425530819_3312519245708190_2849646581664534520_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0Al50LbFemYQ7kNvgGCjD0f&_nc_ht=scontent.fdad3-6.fna&oh=00_AYCQZxKWM7QZO4YwI2_O2hSM1brTd2P7lYQPEOgub3xP6A&oe=666E50FF",
  },
  {
    id: 2,
    fullName: "Linh Chi",
    major: "Tiếng anh cấp 2",
    description: "Đạt được chứng chỉ Ielts 7.0.",
    email: "linhchi@example.com",
    phone: "0905222530",
    cardPhoto:
      "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/425487361_2067618606971367_788842695829969423_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QCNOHcUzfA8Q7kNvgFfI9I1&_nc_ht=scontent.fdad3-6.fna&oh=00_AYAjJ0PAxZWiSJHNbsswzl5m4RJHzVXheah61Buk3HGcfg&oe=666E4D3D",
  },
  {
    id: 3,
    fullName: "Quốc Nhật",
    major: "Anh Văn",
    description: "Đạt giải học sinh giỏi Tiếng Anh THPT cấp tỉnh, Toeic 950+.",
    email: "quocnhat@example.com",
    phone: "0905222531",
    cardPhoto:
      "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/240586237_923210768581364_3782682517511834643_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sce7_uoywEkQ7kNvgGNd1gl&_nc_ht=scontent.fdad3-6.fna&oh=00_AYDECskPWLXTucF-lIA2f5POC1B34lc4oQNbUoKRUSqe-A&oe=666E64EF",
  },
  {
    id: 4,
    fullName: "Gia Khiêm",
    major: "Hóa học",
    description: "Đạt giải học sinh giỏi Hóa THPT cấp tỉnh.",
    email: "giakhiem@example.com",
    phone: "0905222532",
    cardPhoto:
      "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/426570607_1567731510709251_237631422209618103_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KM6z8bD91T0Q7kNvgEFt_2l&_nc_ht=scontent.fdad3-6.fna&oh=00_AYCK6A9ClaQ_KnqVvGoEi9GH3cTJWhUojmB2uw-vtgJO0A&oe=666E4C9B",
  },
  {
    id: 5,
    fullName: "Thùy Dung",
    major: "Ngữ Văn",
    description: "Gia sư Thùy Dung được 9 điểm đại học môn Ngữ Văn thi THPTQG.",
    email: "thuydung@example.com",
    phone: "0905222533",
    cardPhoto:
      "https://scontent.fdad3-6.fna.fbcdn.net/v/t1.6435-9/152027004_417516092885284_6768466982326972777_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rYTYLMEwvm4Q7kNvgEkFLDh&_nc_ht=scontent.fdad3-6.fna&oh=00_AYAJNLUL7XfvAehLEZ_BsMZzIS3aG0kFP6hoPOwlNlK5Zw&oe=6690015E",
  },
  {
    id: 6,
    fullName: "Duy Nguyễn",
    major: "Vật Lý cấp 2",
    description: "Gia sư Duy Nguyễn được giải nhất môn Lý quốc gia.",
    email: "duynguyen@example.com",
    phone: "0905222534",
    cardPhoto:
      "https://nupet.vn/wp-content/uploads/2023/10/anh-avatar-cute-meo-nupet-2.jpg",
  },
  {
    id: 7,
    fullName: "Phạm Thế Toàn",
    major: "Tin học",
    description: "Đạt cóc vàng ngành công nghệ thông tin hai kì liên tiếp.",
    email: "thetoan@example.com",
    phone: "0905222535",
    cardPhoto:
      "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/348550500_1274343566518552_1143215131442838660_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JhaVxDaCLrgQ7kNvgHyCS9Y&_nc_ht=scontent.fdad3-6.fna&oh=00_AYDEAp49sLmJpfbdMPsuQAmraiR2WzrqQMTCbD4K3DwSuA&oe=666E5BE1",
  },
  {
    id: 8,
    fullName: "Hải Đăng",
    major: "Giáo dục công dân",
    description:
      "Giáo viên có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "haidang@example.com",
    phone: "0905222536",
    cardPhoto:
      "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/438254617_1849435958853907_7267040531784479874_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uO9uCjs1C5gQ7kNvgGh2k62&_nc_ht=scontent.fdad3-6.fna&oh=00_AYACQwPDaGaJl12qCg6bpmQJXQmmokr0OVZREc5Mi8-lQA&oe=666E6346",
  },
  {
    id: 9,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith@example.com",
    phone: "0905222537",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 10,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith2@example.com",
    phone: "0905222538",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 11,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith3@example.com",
    phone: "0905222539",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 12,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith4@example.com",
    phone: "0905222540",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 13,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith5@example.com",
    phone: "0905222541",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 14,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith6@example.com",
    phone: "0905222542",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 15,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith7@example.com",
    phone: "0905222543",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 16,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith8@example.com",
    phone: "0905222544",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 17,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith9@example.com",
    phone: "0905222545",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 18,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith10@example.com",
    phone: "0905222546",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 19,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith11@example.com",
    phone: "0905222547",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
];

// Function to save courses to localStorage
const saveCoursesToLocalStorage = () => {
  localStorage.setItem("courses", JSON.stringify(courses));
};

// Function to save teachers to localStorage
const saveTeachersToLocalStorage = () => {
  localStorage.setItem("teachers", JSON.stringify(teachers));
};

// Function to add a new course
export const addCourse = (newCourse) => {
  courses = [...courses, newCourse];
  saveCoursesToLocalStorage();
};

// Function to edit an existing course
export const editCourse = (editedCourse) => {
  courses = courses.map((course) =>
    course.id === editedCourse.id ? editedCourse : course
  );
  saveCoursesToLocalStorage();
};

// Function to delete a course
export const deleteCourse = (courseId) => {
  courses = courses.filter((course) => course.id !== courseId);
  saveCoursesToLocalStorage();
};

// Function to add a new teacher
export const addTeacher = (newTeacher) => {
  teachers = [...teachers, newTeacher];
  saveTeachersToLocalStorage();
};

// Function to edit an existing teacher
export const editTeacher = (editedTeacher) => {
  teachers = teachers.map((teacher) =>
    teacher.id === editedTeacher.id ? editedTeacher : teacher
  );
  saveTeachersToLocalStorage();
};

// Function to delete a teacher
export const deleteTeacher = (teacherId) => {
  teachers = teachers.filter((teacher) => teacher.id !== teacherId);
  saveTeachersToLocalStorage();
};

export { courses, teachers, users };
