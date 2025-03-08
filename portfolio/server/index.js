import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolioDB');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Define schemas and models
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  githubLink: { type: String, required: true },
  demoLink: { type: String },
  technologies: [{ type: String }],
  image: { type: String },
  category: { type: String, default: 'web' } // Added category field
});

const socialLinkSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  url: { type: String, required: true }
});

const Project = mongoose.model('Project', projectSchema);
const SocialLink = mongoose.model('SocialLink', socialLinkSchema);

// API routes
app.get('/api/data', async (req, res) => {
  try {
    const projects = await Project.find();
    const socialLinks = await SocialLink.find();
    
    res.json({ projects, socialLinks });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Seed data if collections are empty
const seedData = async () => {
  try {
    // Check if projects collection is empty
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      const projectsData = [
        {
          name: 'E-Commerce Platform',
          description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
          githubLink: 'https://github.com/somaguttapavan?tab=repositories',
          technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
          image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
          category: 'web'
        },
        {
          name: 'Task Management App',
          description: 'A collaborative task management application with real-time updates and team collaboration features.',
          githubLink: 'https://github.com/somaguttapavan?tab=repositories',
          technologies: ['React', 'Redux', 'Node.js', 'Socket.io'],
          image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
          category: 'web'
        },
        {
          name: 'Weather Dashboard',
          description: 'A weather dashboard that displays current and forecasted weather data for multiple locations.',
          githubLink: 'https://github.com/somaguttapavan?tab=repositories',
          technologies: ['React', 'Chart.js', 'Weather API'],
          image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
          category: 'web'
        },
        {
          name: 'Customer Segmentation Analysis',
          description: 'Used clustering algorithms to segment customers based on purchasing behavior for targeted marketing campaigns.',
          githubLink: 'https://github.com/somaguttapavan?tab=repositories',
          technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          category: 'data'
        },
        {
          name: 'Sales Prediction Model',
          description: 'Developed a machine learning model to predict future sales based on historical data and external factors.',
          githubLink: 'https://github.com/somaguttapavan?tab=repositories',
          technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
          category: 'data'
        },
        {
          name: 'Interactive Data Visualization Dashboard',
          description: 'Created an interactive dashboard to visualize complex business metrics and KPIs for executive decision-making.',
          githubLink: 'https://github.com/somaguttapavan?tab=repositories',
          technologies: ['Tableau', 'SQL', 'R', 'D3.js'],
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          category: 'data'
        }
      ];
      
      await Project.insertMany(projectsData);
      console.log('Sample projects data seeded');
    }
    
    // Check if socialLinks collection is empty
    const socialLinksCount = await SocialLink.countDocuments();
    if (socialLinksCount === 0) {
      const socialLinksData = [
        {
          platform: 'github',
          url: 'https://github.com/somaguttapavan'
        },
        {
          platform: 'linkedin',
          url: 'https://www.linkedin.com/in/pavan-kumar-reddy-somagutta-0403342a2/'
        },
        {
          platform: 'email',
          url: 'mailto:pavan@example.com'
        }
      ];
      
      await SocialLink.insertMany(socialLinksData);
      console.log('Sample social links data seeded');
    }
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  app.use(express.static(join(__dirname, '../dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });
}

// Start server
const startServer = async () => {
  await connectDB();
  await seedData();
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();