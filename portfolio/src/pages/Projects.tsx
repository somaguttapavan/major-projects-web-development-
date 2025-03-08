import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Github, ExternalLink, Loader } from 'lucide-react';

interface Project {
  _id: string;
  name: string;
  description: string;
  githubLink: string;
  demoLink?: string;
  technologies: string[];
  image?: string;
  category?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setProjects(response.data.projects);
        setLoading(false);
      } catch (error) {
        // Fix: Use string message instead of passing the error object directly
        console.error('Error fetching projects:', error instanceof Error ? error.message : 'Unknown error');
        setLoading(false);
        // Fallback data in case the API is not available
        setProjects([
          {
            _id: '1',
            name: 'E-Commerce Platform',
            description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
            githubLink: 'https://github.com/somaguttapavan?tab=repositories',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            category: 'web'
          },
          {
            _id: '2',
            name: 'Task Management App',
            description: 'A collaborative task management application with real-time updates and team collaboration features.',
            githubLink: 'https://github.com/somaguttapavan?tab=repositories',
            technologies: ['React', 'Redux', 'Node.js', 'Socket.io'],
            image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            category: 'web'
          },
          {
            _id: '3',
            name: 'Weather Dashboard',
            description: 'A weather dashboard that displays current and forecasted weather data for multiple locations.',
            githubLink: 'https://github.com/somaguttapavan?tab=repositories',
            technologies: ['React', 'Chart.js', 'Weather API'],
            image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
            category: 'web'
          },
          {
            _id: '4',
            name: 'Customer Segmentation Analysis',
            description: 'Used clustering algorithms to segment customers based on purchasing behavior for targeted marketing campaigns.',
            githubLink: 'https://github.com/somaguttapavan?tab=repositories',
            technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            category: 'data'
          },
          {
            _id: '5',
            name: 'Sales Prediction Model',
            description: 'Developed a machine learning model to predict future sales based on historical data and external factors.',
            githubLink: 'https://github.com/somaguttapavan?tab=repositories',
            technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
            category: 'data'
          },
          {
            _id: '6',
            name: 'Interactive Data Visualization Dashboard',
            description: 'Created an interactive dashboard to visualize complex business metrics and KPIs for executive decision-making.',
            githubLink: 'https://github.com/somaguttapavan?tab=repositories',
            technologies: ['Tableau', 'SQL', 'R', 'D3.js'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            category: 'data'
          }
        ]);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="h-8 w-8 text-indigo-600 animate-spin" />
        <span className="ml-2 text-gray-600">Loading projects...</span>
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Projects</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Recent Work
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here are some of the projects I've worked on recently.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                filter === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } border border-gray-200`}
            >
              All Projects
            </button>
            <button
              type="button"
              onClick={() => setFilter('web')}
              className={`px-4 py-2 text-sm font-medium ${
                filter === 'web'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } border-t border-b border-gray-200`}
            >
              Web Development
            </button>
            <button
              type="button"
              onClick={() => setFilter('data')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                filter === 'data'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } border border-gray-200`}
            >
              Data Analytics
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project._id} className="bg-white overflow-hidden shadow rounded-lg transition-all hover:shadow-xl">
              {project.image && (
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              )}
              <div className="px-4 py-5 sm:p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                  {project.category && (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      project.category === 'data' 
                        ? 'bg-purple-100 text-purple-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.category === 'data' ? 'Data Analytics' : 'Web Development'}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex space-x-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;