import React from 'react';

const Dashboard = () => {
  // Dummy data
  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', favoriteSeason: 'Spring' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', favoriteSeason: 'Fall' },
    { id: 3, firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com', favoriteSeason: 'Winter' },
  ];

  return (
    <div>
      <h2>User Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Favorite Season</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.favoriteSeason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
