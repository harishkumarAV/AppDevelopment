import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, Title, Tooltip, CategoryScale, LinearScale, BarController, Legend, BarElement, ArcElement } from 'chart.js';
import './Dashboard.css'; // Import the CSS file

Chart.register(Title, Tooltip, CategoryScale, LinearScale, BarController, Legend, BarElement, ArcElement);

function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [loginCount, setLoginCount] = useState(0);
  const [signupCount, setSignupCount] = useState(0);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;

    axios.get('http://localhost:8080/api/UserEntitys/getuser')
      .then((response) => {
        setUserCount(response.data.length);
      })
      .catch((error) => {
        console.error('User Count API Error:', error);
      });

    axios.get('http://localhost:8080/api/LoginEntitys/getlogin')
      .then((response) => {
        setLoginCount(response.data.length);
      })
      .catch((error) => {
        console.error('Login Count API Error:', error);
      });

    axios.get('http://localhost:8080/api/SignupEntitys/getsignup')
      .then((response) => {
        setSignupCount(response.data.length);
      })
      .catch((error) => {
        console.error('Signup Count API Error:', error);
      });
  }, []);

  const chartData = {
    labels: ['Users', 'Logins', 'Signups'],
    datasets: [
      {
        label: 'Count',
        data: [userCount, loginCount, signupCount],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Users', 'Logins', 'Signups'],
    datasets: [
      {
        label: 'Count',
        data: [userCount, loginCount, signupCount],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const pieChartOptions = {
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const handleNotificationClick = () => {
    // Add your notification logic here
    alert('this functionality is under dev!');
  };

  return (
    <div className="dashboard-container">
      <div className="dashcard">
        <div className="count">Users: {userCount}</div>
        <div className="count">Logins: {loginCount}</div>
        <div className="count">Signups: {signupCount}</div>
      </div>
      <h2>Hello Admin.</h2>
      <div className="chart-container">
        <div className="bar-chart">
          <Bar data={chartData} options={chartOptions} />
        </div>
        <div className="pie-chart">
          <Pie data={pieChartData} options={pieChartOptions} />
        </div>
        <button className="notification-button" onClick={handleNotificationClick}>
          Send Notification
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
