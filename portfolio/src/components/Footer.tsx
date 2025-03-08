import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import axios from 'axios';

interface SocialLink {
  _id: string;
  platform: string;
  url: string;
}

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setSocialLinks(response.data.socialLinks);
        setLoading(false);
      } catch (error) {
        // Fix: Use string message instead of passing the error object directly
        console.error('Error fetching social links:', error instanceof Error ? error.message : 'Unknown error');
        setLoading(false);
        // Fallback data in case the API is not available
        setSocialLinks([
          { _id: '1', platform: 'github', url: 'https://github.com/somaguttapavan' },
          { _id: '2', platform: 'linkedin', url: 'https://www.linkedin.com/in/pavan-kumar-reddy-somagutta-0403342a2/' }
        ]);
      }
    };

    fetchSocialLinks();
  }, []);

  const renderSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'email':
        return <Mail className="h-5 w-5" />;
      default:
        return <ExternalLink className="h-5 w-5" />;
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Pavan Kumar Reddy Somagutta</p>
            <p className="text-gray-300">Full Stack Developer | Data Analytics Specialist</p>
          </div>
          
          <div className="flex space-x-4">
            {loading ? (
              <p>Loading social links...</p>
            ) : (
              socialLinks.map((link) => (
                <a 
                  key={link._id} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={link.platform}
                >
                  {renderSocialIcon(link.platform)}
                </a>
              ))
            )}
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pavan Kumar Reddy Somagutta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;