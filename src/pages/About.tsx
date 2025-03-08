import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Pavan Kumar Reddy Somagutta
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Full Stack Developer | Data Analytics Specialist | Open Source Enthusiast
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img 
                className="rounded-lg shadow-xl mx-auto"
                src="src/pages/1522051406.jpg"
                alt="Profile"
                style={{ maxHeight: '400px' }}
              />
              <div className="mt-6 flex justify-center space-x-4">
                <a 
                  href="https://www.linkedin.com/in/pavan-kumar-reddy-somagutta-0403342a2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://github.com/somaguttapavan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-600 mb-4">
                I am a passionate Full Stack Developer and Data Analytics Specialist with expertise in modern web technologies
                and data analysis tools. My journey began with a curiosity about how digital products are built and how data
                can drive business decisions, which led me to dive deep into programming, web development, and data science.
              </p>
              <p className="text-gray-600 mb-4">
                I specialize in building responsive and user-friendly web applications using React.js for frontend development,
                Node.js and Express for backend services, and MongoDB for database management. Additionally, I excel in data
                analytics using Python, R, SQL, and visualization tools like Tableau and Power BI to extract meaningful insights
                from complex datasets.
              </p>
              <p className="text-gray-600 mb-4">
                When I'm not coding or analyzing data, I enjoy exploring new technologies, contributing to tech communities,
                and sharing my knowledge through mentoring and writing technical articles.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <span className="font-medium">JavaScript/TypeScript</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <span className="font-medium">React.js</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <span className="font-medium">Node.js</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <span className="font-medium">Express</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <span className="font-medium">MongoDB</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <span className="font-medium">Tailwind CSS</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <span className="font-medium">Python</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <span className="font-medium">R</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <span className="font-medium">SQL</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <span className="font-medium">Tableau</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <span className="font-medium">Power BI</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <span className="font-medium">Machine Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;