<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>User Authentication System</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      line-height: 1.6;
      background-color: #f9f9f9;
      color: #333;
      padding: 2rem;
      max-width: 800px;
      margin: auto;
    }
    h1, h2 {
      color: #2c3e50;
    }
    code {
      background-color: #eee;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.95em;
    }
    ul {
      margin-left: 1.5rem;
    }
  </style>
</head>
<body>

  <h1>🔐 User Authentication System</h1>
  <p>A full-stack authentication module built with <strong>React.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, and <strong>Mongoose</strong>. It supports secure user registration, login, email verification, password recovery, and real-time OTP delivery via <strong>Brevo</strong>.</p>

  <h2>⚙️ Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React.js, Lucide React (icons), React Hot Toast (notifications)</li>
    <li><strong>Backend:</strong> Express.js, Mongoose, MongoDB</li>
    <li><strong>Email Service:</strong> Brevo (for OTP and verification)</li>
  </ul>

  <h2>📁 Project Structure</h2>
  <ul>
    <li><code>/routes/userAuth</code> – Handles:
      <ul>
        <li>User registration</li>
        <li>Login</li>
        <li>Email verification</li>
        <li>Forgot password</li>
        <li>Real-time OTP via email</li>
      </ul>
    </li>
    <li><code>/routes/userData</code> – Handles:
      <ul>
        <li>Fetching user data from backend</li>
        <li>Real-time rendering of user info on frontend</li>
      </ul>
    </li>
  </ul>

  <h2>✨ Features</h2>
  <ul>
    <li>Secure password hashing and validation</li>
    <li>Email-based OTP verification</li>
    <li>Real-time toast notifications for user feedback</li>
    <li>Modular controller structure for scalability</li>
    <li>Responsive UI with clean iconography</li>
  </ul>

  <h2>🚀 Getting Started</h2>
  <ol>
    <li>Clone the repo</li>
    <li>Install dependencies: <code>npm install</code> in both frontend and backend</li>
    <li>Set up your <code>.env</code> file with MongoDB URI and Brevo credentials</li>
    <li>Run backend: <code>npm run server</code></li>
    <li>Run frontend: <code>npm start</code></li>
  </ol>

  <h2>🧠 Author</h2>
  <p>Built by <strong>Abhishek (Avi)</strong> — a full-stack developer passionate about scalable systems, clean UI/UX, and solving real-world problems with code.</p>

</body>
</html>
