import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    favoriteSeason: 'Default',
  });
  const [errors, setErrors] = useState({});
  const [showDashboard, setShowDashboard] = useState(false); // State to control showing Dashboard

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    // First Name validation
    if (!formData.firstName.match(nameRegex)) {
      errors.firstName = 'First name must contain alphabets only';
    }

    // Last Name validation
    if (!formData.lastName.match(nameRegex)) {
      errors.lastName = 'Last name must contain alphabets only';
    }

    // Email validation
    if (!formData.email.match(emailRegex)) {
      errors.email = 'Invalid email address';
    }

    // Password validation
    if (!formData.password.match(passwordRegex)) {
      errors.password =
        'Password must contain at least 1 Alphabet, 1 Number, 1 Special Character and 1 Upper case letter';
    }

    // Set errors if any
    setErrors(errors);

    // If no errors, proceed to render Dashboard
    if (Object.keys(errors).length === 0) {
      setShowDashboard(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {!showDashboard ? (
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  placeholder="First Name"
                  onChange={handleChange}
                />
                {errors.firstName && <p>{errors.firstName}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Last Name"
                  onChange={handleChange}
                />
                {errors.lastName && <p>{errors.lastName}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                  onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
              </div>
              <div>
                <select
                  name="favoriteSeason"
                  value={formData.favoriteSeason}
                  onChange={handleChange}
                >
                  <option value="Default">Select a season</option>
                  <option value="Spring">Spring</option>
                  <option value="Fall">Fall</option>
                  <option value="Winter">Winter</option>
                </select>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
          <Dashboard />
        )}
      </header>
    </div>
  );
}

export default App;
