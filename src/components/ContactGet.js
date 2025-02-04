import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ContactGet = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
const nav=useNavigate();
  useEffect(() => {
    const fetchContacts = async () => {
        const username = prompt("Enter admin name:");
    const password = prompt("Enter admin password:");
    if (username !== "gyasu" || password !== "1234") {
      alert("username or password. Didn't match.");
      nav("/")
      return; 
    } 
      try {
        // Fetch data from the backend (adjust the URL if needed)
        const response = await fetch('https://portfolioback-nu.vercel.app/');
        console.log("dt s",response.data)
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await response.json();
        setContacts(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Contact info Form Submissions</h2>
      <div className="space-y-4">
        {contacts.length === 0 ? (
          <p>No contact submissions found.</p>
        ) : (
          contacts.map((contact) => (
            <div key={contact._id} className="p-4 border rounded bg-white">
              <h3 className="text-xl font-semibold">{contact.name}</h3>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <p><strong>Service:</strong> {contact.service}</p>
              <p><strong>Message:</strong> {contact.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContactGet;
