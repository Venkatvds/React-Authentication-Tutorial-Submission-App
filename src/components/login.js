import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [storedData, setStoredData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to state (simulate storage)
    setStoredData({ username, password });

    // Clear input fields
    setUsername('');
    setPassword('');

    alert('Login data stored!');
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 40 }}>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{ marginLeft: 8, padding: 5 }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ marginLeft: 10, padding: 5 }}
              required
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>

      {storedData && (
        <div style={{ marginTop: 20 }}>
          <h4>Stored Data:</h4>
          <p>Username: {storedData.username}</p>
          <p>Password: {storedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default Login;
