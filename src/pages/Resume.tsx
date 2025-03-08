import React from 'react';
import { Download, Briefcase, GraduationCap, Award, BarChart2 } from 'lucide-react';

const Resume = () => {
  // This will be updated later with the actual resume link
  const resumeLink = "#";

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Resume</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Professional Journey
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={resumeLink}
              download
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </div>
        </div>

        <div className="mt-10">
          <div className="space-y-12">
            {/* Experience Section */}
            <div>
              <div className="flex items-center">
                <Briefcase className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-3 text-2xl font-bold text-gray-900">Work Experience</h3>
              </div>
              <div className="mt-5 border-t border-gray-200 pt-5">
                <div className="relative pb-12">
                  <div className="relative flex items-start">
                    <div className="min-w-0 flex-1">
                      <div className="text-lg font-medium text-gray-900">Full Stack Developer intern</div>
                      <div className="text-indigo-600">Yhills.</div>
                      <div className="mt-1 text-sm text-gray-500">Oct-2024 to Dec-2024</div>
                      <div className="mt-2 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Developed and maintained full-stack web applications using React, Node.js, and MongoDB</li>
                          <li>Implemented responsive designs and ensured cross-browser compatibility</li>
                          <li>Collaborated with cross-functional teams to define, design, and ship new features</li>
                          <li>Optimized applications for maximum speed and scalability</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative pb-12">
                  <div className="relative flex items-start">
                    <div className="min-w-0 flex-1">
                      <div className="text-lg font-medium text-gray-900">Mern Stack Developer intern</div>
                      <div className="text-indigo-600">Yhills.</div>
                      <div className="mt-1 text-sm text-gray-500">Dec-2024 to Jan-2025</div>
                      <div className="mt-2 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Developed and maintained full-stack web applications using React, Node.js, and MongoDB</li>
                          <li>Implemented responsive designs and ensured cross-browser compatibility</li>
                          <li>Collaborated with cross-functional teams to define, design, and ship new features</li>
                          <li>Optimized applications for maximum speed and scalability</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative pb-12">
                  <div className="relative flex items-start">
                    <div className="min-w-0 flex-1">
                      <div className="text-lg font-medium text-gray-900">Data Analytics Specialist Intern</div>
                      <div className="text-indigo-600">Vodafone Idea Foundation.</div>
                      <div className="mt-1 text-sm text-gray-500">sep-2024 to Nov-2024</div>
                      <div className="mt-2 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Analyzed large datasets to identify trends anpatterd ns for business decision-making</li>
                          <li>Created interactive dashboards using Tableau and Power BI for executive reporting</li>
                          <li>Developed predictive models using Python and R to forecast business metrics</li>
                          <li>Collaborated with stakeholders to translate business questions into data analysis projects</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="relative flex items-start">
                    <div className="min-w-0 flex-1">
                      <div className="text-lg font-medium text-gray-900">Business Analytics Intern</div>
                      <div className="text-indigo-600">YBI Foundation.</div>
                      <div className="mt-1 text-sm text-gray-500">Mar-2023 to Apr-2013</div>
                      <div className="mt-2 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Analyzed large datasets to identify trends anpatterd ns for business decision-making</li>
                          <li>Developed predictive models using Python to forecast business metrics</li>
                          <li>Collaborated with stakeholders to translate business questions into data analysis projects</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center">
                <GraduationCap className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-3 text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="mt-5 border-t border-gray-200 pt-5">
                <div className="relative pb-12">
                  <div className="relative flex items-start">
                    <div className="min-w-0 flex-1">
                      <div className="text-lg font-medium text-gray-900">Bachelor of Computer Science</div>
                      <div className="text-indigo-600">Dhanalakshmi Srinavasan University</div>
                      <div className="mt-1 text-sm text-gray-500">2022 - 2026</div>
                      <div className="mt-2 text-gray-600">
                        Specialized in learning the basics about computer programming.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="relative flex items-start">
                    <div className="min-w-0 flex-1">
                      <div className="text-lg font-medium text-gray-900">Intermediate</div>
                      <div className="text-indigo-600">Sri Chaitanya jr College</div>
                      <div className="mt-1 text-sm text-gray-500">2012 - 2016</div>
                      <div className="mt-2 text-gray-600">
                        Learn about the statistics,problem-sloving
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <div className="flex items-center">
                <BarChart2 className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-3 text-2xl font-bold text-gray-900">Technical Skills</h3>
              </div>
              <div className="mt-5 border-t border-gray-200 pt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Web Development</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-32 text-sm font-medium text-gray-900">Frontend</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-32 text-sm font-medium text-gray-900">Backend</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-32 text-sm font-medium text-gray-900">React</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-32 text-sm font-medium text-gray-900">Node.js</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-32 text-sm font-medium text-gray-900">MongoDB</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Data Analytics</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-32 text-sm font-medium text-gray-900">Python</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                          <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-32 text-sm font-medium text-gray-900">R</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                          <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-32 text-sm font-medium text-gray-900">SQL</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                          <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-32 text-sm font-medium text-gray-900">Tableau</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                          <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-32 text-sm font-medium text-gray-900">Machine Learning</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                          <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <div className="flex items-center">
                <Award className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-3 text-2xl font-bold text-gray-900">Certifications</h3>
              </div>
              <div className="mt-5 border-t border-gray-200 pt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-medium text-gray-900">Full Stack Web Development</div>
                    <div className="text-indigo-600">Yhills</div>
                    <div className="mt-1 text-sm text-gray-500">2024</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-medium text-gray-900">Mern stack developer</div>
                    <div className="text-indigo-600">Edunet Foundation</div>
                    <div className="mt-1 text-sm text-gray-500">2025</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-medium text-gray-900">Introduction to Web Development</div>
                    <div className="text-indigo-600">IBM</div>
                    <div className="mt-1 text-sm text-gray-500">2024</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-medium text-gray-900">Professional Data Analytics</div>
                    <div className="text-indigo-600">Google</div>
                    <div className="mt-1 text-sm text-gray-500">2024</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-medium text-gray-900">Git and GitHub</div>
                    <div className="text-indigo-600">IBM</div>
                    <div className="mt-1 text-sm text-gray-500">2023</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-medium text-gray-900">Data Analysis with python</div>
                    <div className="text-indigo-600">IBM</div>
                    <div className="mt-1 text-sm text-gray-500">2023</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-medium text-gray-900">Git and GitHub</div>
                    <div className="text-indigo-600">IBM</div>
                    <div className="mt-1 text-sm text-gray-500">2023</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-medium text-gray-900">Leadership skills and soft skills</div>
                    <div className="text-indigo-600">Mind luster</div>
                    <div className="mt-1 text-sm text-gray-500">2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;