import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = ({ onLogout }) => {
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState('projects');

  useEffect(() => {
    fetchProjects();
    fetchContacts();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/contact', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    onLogout();
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      <div className="tabs">
        <button onClick={() => setActiveTab('projects')} className={activeTab === 'projects' ? 'active' : ''}>Projects</button>
        <button onClick={() => setActiveTab('contacts')} className={activeTab === 'contacts' ? 'active' : ''}>Contacts</button>
      </div>
      {activeTab === 'projects' && (
        <div className="projects-section">
          <h3>Projects</h3>
          <ul>
            {projects.map(project => (
              <li key={project.id}>{project.title}</li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === 'contacts' && (
        <div className="contacts-section">
          <h3>Contact Messages</h3>
          <ul>
            {contacts.map(contact => (
              <li key={contact.id}>
                <strong>{contact.name}</strong> ({contact.email}): {contact.message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;