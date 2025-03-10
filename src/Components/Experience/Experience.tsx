
import './Experience.css'

import dell from '../../assets/icons/work/dell.jpg';
import algopear from '../../assets/icons/work/algopear.jpg';
import txstate from '../../assets/icons/work/txstate.jpg';
import check from '../../assets/icons/work/check.jpg';
import appliedMaterials from '../../assets/icons/work/applied materials.png';
import ResumeHeader from '../ResumeHeader/ResumeHeader';

function Experience() {
    return (
        <div className='experience-container'>
            <h2>Experience</h2>
            <hr />
            <p>I have worked throughout my career as a fullstack developer and my main experience comes from working at Dell and Algopear. The companies I had the
                opportunity to work for have given me the chance to work with a variety of technologies and have helped me grow as a developer.
            </p>


            <div className="experience-item-container">
                <ResumeHeader imgSrc={dell} title='Dell - Software Engineer 2' date='Aug. 2021 – Present | Hybrid' child={
                    <ul>
                        <li>Engineered and maintained high-performance web applications using Angular (frontend) and .NET (backend).</li>
                        <li>Built unit and integration tests using XUnit and Jasmine to ensure robust software reliability.</li>
                        <li>Mentored junior developers through code reviews and knowledge-sharing sessions, improving team productivity.</li>
                        <li>Refactored and upgraded outdated Angular/.NET components to enhance system performance, maintainability, and developer efficiency.</li>
                        <li>Collaborated in Agile workflows, participating in daily stand-ups, sprint planning, and retrospectives.</li>
                        <li>Developed dynamic and responsive web applications using Angular, improving user experience and engagement.</li>
                    </ul>} />

                <ResumeHeader imgSrc={algopear} title='Algopear - Software Developer' date='May 2020 – July 2021 | Remote' child={
                    <ul>
                        <li>Developed and optimized React applications, ensuring scalability and a seamless user experience.</li>
                        <li>Created a library of modular React components in Storybook, enabling faster development and streamlined collaboration.</li>
                        <li>Built and deployed RESTful APIs with Node.js and Serverless Framework, leveraging AWS Lambda, API Gateway, and PostgreSQL for a fully managed backend.</li>
                    </ul>
                } />

                <ResumeHeader imgSrc={txstate} title='Texas State Campus Recreation - Web Page Manager' date='Feb. 2020 – May 2021 | San Marcos, TX' child={
                    <ul>
                        <li>Managed and maintained websites for all departments under Texas State Campus Recreation, ensuring functionality and performance.</li>
                        <li>Led the design and development of the Texas State Campus Recreation Round Rock website, enhancing user experience and engagement.</li>
                    </ul>
                } />

                <ResumeHeader imgSrc={check} title='Check' date='Dec. 2019 – May 2020 | Remote' child={
                    <ul>
                        <li>Developed a new user onboarding flow using AWS Cognito, improving authentication and user management.</li>
                        <li>Designed and built dynamic web pages in React, utilizing Material-UI for a sleek and responsive interface.</li>
                    </ul>
                } />
                <ResumeHeader imgSrc={appliedMaterials} title='Applied Materials - Electrical Engineering Intern' date='May 2019 – Aug. 2019 | Austin, TX' child={
                    <ul>
                        <li>Developed two applications to improve efficiency and accelerate existing processes.</li>
                        <li>Built a program integrated with a robotic arm to capture power measurements of LEDs, enhancing data accuracy and automation.</li>
                        <li>Designed a computer vision application to realign silicon wafers during robotic arm transfers, optimizing precision and workflow automation.</li>
                    </ul>
                } />
            </div>

            <div className="section">
                <h2>Education</h2>
                <h3>Texas State University</h3>
                <p>Bachelor of Science, Electrical Engineering | May 2021</p>
                <p>GPA: 3.75/4.0, Summa Cum Laude, Dean’s List</p>
                <p>Minors: Computer Science, Applied Mathematics</p>
            </div>
        </div>
    )
}

export default Experience