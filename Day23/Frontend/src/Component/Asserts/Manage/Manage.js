import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Manage.css'; // Import your CSS file

function Manage() {
    const [users, setUsers] = useState([]);
    const [expandedData, setExpandedData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/UserEntitys/getuser')
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('API Error:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleArrowClick = (userId) => {
        if (!expandedData[userId]) {
            axios.get(`http://localhost:8080/api/UserEntitys/getuserbyid/${userId}`)
                .then((response) => {
                    setExpandedData({ ...expandedData, [userId]: response.data });
                })
                .catch((error) => {
                    console.error('API Error:', error);
                    setError(error);
                });
        } else {
            setExpandedData({ ...expandedData, [userId]: undefined });
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="manage-jobs-container">
            <h3>Manage your Applicants</h3>
            <p>Total Applications: {users.length}</p>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={() => handleArrowClick(user.id)}>
                            {expandedData[user.id] ? 'Collapse' : 'Expand'}
                        </button>
                        {expandedData[user.id] && (
                            <div className="expand-details">
                                <p><strong>Name:</strong> {expandedData[user.id].name}</p>
                                <p><strong>Email:</strong> <a href={`mailto:${expandedData[user.id].email}`}>{expandedData[user.id].email}</a></p>
                                <p><strong>Gender:</strong> {expandedData[user.id].gender}</p>
                                <p><strong>Contact:</strong> {expandedData[user.id].contact}</p>
                                <p><strong>CTC:</strong> {expandedData[user.id].ctc}</p>
                                <p><strong>Qualification:</strong> {expandedData[user.id].qualification}</p>
                                <p><strong>Domain:</strong> {expandedData[user.id].domain}</p>
                                <p><strong>GitHub:</strong> {expandedData[user.id].github}</p>
                                <p><strong>LinkedIn:</strong> {expandedData[user.id].linkedin}</p>
                                <p><strong>Other:</strong> {expandedData[user.id].other}</p>
                                {/* Add more details as needed */}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Manage;
