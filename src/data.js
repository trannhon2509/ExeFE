// data.js

let courses = JSON.parse(localStorage.getItem('courses')) || [
    { id: 1, title: 'Khóa học 1', description: 'Mô tả cho khóa học 1', totalMoneyMonthTeaching: 1000, numberTeachOfWeek: 3, oneHourTeaching: 2, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 2, title: 'Khóa học 2', description: 'Mô tả cho khóa học 2', totalMoneyMonthTeaching: 1500, numberTeachOfWeek: 2, oneHourTeaching: 1.5, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 3, title: 'Khóa học 3', description: 'Mô tả cho khóa học 3', totalMoneyMonthTeaching: 2000, numberTeachOfWeek: 4, oneHourTeaching: 3, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 4, title: 'Khóa học 4', description: 'Mô tả cho khóa học 4', totalMoneyMonthTeaching: 2500, numberTeachOfWeek: 3, oneHourTeaching: 2.5, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 5, title: 'Khóa học 5', description: 'Mô tả cho khóa học 5', totalMoneyMonthTeaching: 3000, numberTeachOfWeek: 2, oneHourTeaching: 2, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 6, title: 'Khóa học 6', description: 'Mô tả cho khóa học 6', totalMoneyMonthTeaching: 3500, numberTeachOfWeek: 4, oneHourTeaching: 3.5, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 7, title: 'Khóa học 7', description: 'Mô tả cho khóa học 7', totalMoneyMonthTeaching: 4000, numberTeachOfWeek: 3, oneHourTeaching: 3, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 8, title: 'Khóa học 8', description: 'Mô tả cho khóa học 8', totalMoneyMonthTeaching: 4500, numberTeachOfWeek: 2, oneHourTeaching: 2.5, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 9, title: 'Khóa học 9', description: 'Mô tả cho khóa học 9', totalMoneyMonthTeaching: 5000, numberTeachOfWeek: 4, oneHourTeaching: 4, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 10, title: 'Khóa học 10', description: 'Mô tả cho khóa học 10', totalMoneyMonthTeaching: 5500, numberTeachOfWeek: 3, oneHourTeaching: 3.5, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 11, title: 'Khóa học 11', description: 'Mô tả cho khóa học 11', totalMoneyMonthTeaching: 6000, numberTeachOfWeek: 2, oneHourTeaching: 3, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 12, title: 'Khóa học 12', description: 'Mô tả cho khóa học 12', totalMoneyMonthTeaching: 6500, numberTeachOfWeek: 4, oneHourTeaching: 4.5, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 13, title: 'Khóa học 13', description: 'Mô tả cho khóa học 13', totalMoneyMonthTeaching: 7000, numberTeachOfWeek: 3, oneHourTeaching: 4, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 14, title: 'Khóa học 14', description: 'Mô tả cho khóa học 14', totalMoneyMonthTeaching: 7500, numberTeachOfWeek: 2, oneHourTeaching: 3.5, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 15, title: 'Khóa học 15', description: 'Mô tả cho khóa học 15', totalMoneyMonthTeaching: 8000, numberTeachOfWeek: 4, oneHourTeaching: 5, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 16, title: 'Khóa học 16', description: 'Mô tả cho khóa học 16', totalMoneyMonthTeaching: 8500, numberTeachOfWeek: 3, oneHourTeaching: 4.5, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 17, title: 'Khóa học 17', description: 'Mô tả cho khóa học 17', totalMoneyMonthTeaching: 9000, numberTeachOfWeek: 2, oneHourTeaching: 4, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 18, title: 'Khóa học 18', description: 'Mô tả cho khóa học 18', totalMoneyMonthTeaching: 9500, numberTeachOfWeek: 4, oneHourTeaching: 5.5, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 19, title: 'Khóa học 19', description: 'Mô tả cho khóa học 19', totalMoneyMonthTeaching: 10000, numberTeachOfWeek: 3, oneHourTeaching: 5, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' },
    { id: 20, title: 'Khóa học 20', description: 'Mô tả cho khóa học 20', totalMoneyMonthTeaching: 10500, numberTeachOfWeek: 2, oneHourTeaching: 4.5, imageUrl: 'https://th.bing.com/th/id/R.522f14e917d448c38fd0b881cd0bf8c0?rik=%2bOrvgsrsH1a0fA&riu=http%3a%2f%2fddragon.leagueoflegends.com%2fcdn%2fimg%2fchampion%2fsplash%2fYasuo_0.jpg&ehk=4I7x7dScQGL4ElrGSXmoqT3q40wB%2f9QZX67IpgsNGDk%3d&risl=&pid=ImgRaw&r=0' }
];
let users = JSON.parse(localStorage.getItem('users')) || [
    { id: 1, username: 'user1', password: 'pass1', email: 'user1@example.com', imageUrl : 'https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 2, username: 'user2', password: 'pass2', email: 'user2@example.com', imageUrl : 'https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 3, username: 'user3', password: 'pass3', email: 'user3@example.com', imageUrl : 'https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 4, username: 'user4', password: 'pass4', email: 'user4@example.com', imageUrl : 'https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 5, username: 'user5', password: 'pass5', email: 'user5@example.com', imageUrl : 'https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7' }

];

let teachers = JSON.parse(localStorage.getItem('teachers')) || [
      {
            id: 1,
            fullName: 'John Doe',
            major: 'Toán',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7'
        },
        {
            id: 2,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 3,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 4,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 5,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 6,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 7,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 8,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 9,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 10,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 11,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 12,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 13,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 14,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 15,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 16,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 17,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 18,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        },
        {
            id: 19,
            fullName: 'Jane Smith',
            major: 'Khoa học',
            description: 'Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.',
            cardPhoto: 'https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain'
        }
];

// Function to save courses to localStorage
const saveCoursesToLocalStorage = () => {
    localStorage.setItem('courses', JSON.stringify(courses));
};

// Function to save teachers to localStorage
const saveTeachersToLocalStorage = () => {
    localStorage.setItem('teachers', JSON.stringify(teachers));
};

// Function to add a new course
export const addCourse = (newCourse) => {
    courses = [...courses, newCourse];
    saveCoursesToLocalStorage();
};

// Function to edit an existing course
export const editCourse = (editedCourse) => {
    courses = courses.map(course => (course.id === editedCourse.id ? editedCourse : course));
    saveCoursesToLocalStorage();
};

// Function to delete a course
export const deleteCourse = (courseId) => {
    courses = courses.filter(course => course.id !== courseId);
    saveCoursesToLocalStorage();
};

// Function to add a new teacher
export const addTeacher = (newTeacher) => {
    teachers = [...teachers, newTeacher];
    saveTeachersToLocalStorage();
};

// Function to edit an existing teacher
export const editTeacher = (editedTeacher) => {
    teachers = teachers.map(teacher => (teacher.id === editedTeacher.id ? editedTeacher : teacher));
    saveTeachersToLocalStorage();
};

// Function to delete a teacher
export const deleteTeacher = (teacherId) => {
    teachers = teachers.filter(teacher => teacher.id !== teacherId);
    saveTeachersToLocalStorage();
};





export { courses, teachers, users };
