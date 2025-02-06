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
      <h2 className="text-2xl font-bold mb-6 mt-4">Contact info Form Submissions</h2>
      <div className="space-y-4">
      <table className="table table-bordered table-hover">
             <thead className="table-light">
                 <tr>
                  <th>Email</th>
                  <th>Phone</th>
                   {/* <th>Email</th> */}
<th>Service</th>
                 <th>Message</th>
                 </tr>
               </thead>
             <tbody>
        {contacts.length === 0 ? (
          <p>No contact submissions found.</p>
        ) : (
          contacts.map((contact) => (
          <tr>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.service}</td>
              <td>{contact.message}</td>
          </tr>
           
          ))
        )}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactGet;
