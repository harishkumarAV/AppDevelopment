
import { createSlice } from '@reduxjs/toolkit';

const SearchSlice = createSlice({
  name: 'Searchjob',
  initialState: {
    jobs:[
        {
            id:1,
            name:'zoho-Full stack developer',
            description:'The ideal Zoho Front-End Developer has 2-5 years of experience, proficiency in HTML, CSS, JavaScript, and responsive design, and familiarity with frameworks like React. Theyre skilled in Git, UI/UX, and cross-browser compatibility. Communication and problem-solving are strong suits, and they excel at coding standards and project management.',
            imageUrl:'https://images.pexels.com/photos/90333/pexels-photo-90333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:2,
            name:'IBM-Senior HR',
            description:'The Senior HR Professional at IBM has 5-10+ years of HR expertise, including talent acquisition, employee relations, and strategic HR alignment. They understand labor laws, use HR analytics, and promote diversity and inclusion. Their leadership skills, adaptability, and ethical standards are key, as they act as strategic partners to IBMs business leaders, aligning HR with organizational goals.',
            imageUrl:'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:3,
            name:'Accenture -Brand Ambassador',
            description:'An Accenture Brand Ambassador is a passionate advocate who boosts the companys image. They excel in communication, networking, and digital skills. Their role involves promoting the brand, engaging with various audiences, and adhering to brand guidelines. They bring creativity to brand engagement and contribute to Accentures positive image.',
            imageUrl:'https://images.pexels.com/photos/859264/pexels-photo-859264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:4,
            name:'Apple-AIML Engineer',
            description:'Candidates should hold a bachelors or masters degree in computer science, AI, or a related field. Proficiency in Python, ML frameworks, and a deep understanding of machine learning algorithms is required. Responsibilities encompass developing and fine-tuning AI/ML models, optimizing data processes, staying updated on research, and collaborating with cross-functional teams. ',
            imageUrl:'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id:5,
            name:'Amazon-Data Scientist ',
            description:'Candidates need a relevant advanced degree, strong data analysis and modeling skills, and proficiency in Python or R. The role involves data analysis, model building, and collaboration to enhance customer experiences and operational efficiency.The role demands innovation, creative problem-solving, and a commitment to improving customer experiences .',
            imageUrl:'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:6,
            name:'Google-Graphic Designer',
            description:'Candidates should possess a strong portfolio showcasing their design expertise. A bachelors degree in graphic design or a related field is preferred. Proficiency in design software such as Adobe Creative Suite is essential. Responsibilities include creating visually appealing graphics, collaborating with teams, and adhering to Googles design standards.',
            imageUrl:'https://images.pexels.com/photos/68761/pexels-photo-68761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:7,
            name:'Oracle -Senior developer',
            description:' Candidates need a bachelors or masters degree in computer science or a related field. Essential qualifications include proficiency in programming languages, extensive software development experience, and expertise in Oracle technologies. Responsibilities encompass designing and developing software solutions, collaborating with cross-functional teams, and ensuring code quality and performance.',
            imageUrl:'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:8,
            name:'SKCT -Maths Professor ',
            description:'Candidates should possess a Ph.D. in Mathematics or a related field. Strong academic qualifications and research experience are essential. Responsibilities include teaching, conducting research, and mentoring students. Candidates are expected to have excellent communication and presentation skills, a passion for mathematics education, and a dedication to fostering a stimulating learning environment.',
            imageUrl:'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
    ]},
  reducers: {},
});

export default SearchSlice;
