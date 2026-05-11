"use client";

import { useState } from "react";
import crypto, { createHash } from "node:crypto";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function calculateMD5(text) {
    return createHash("sha256").update(text).digest("base64");
  }

  function handleLogin(e) {
    e.preventDefault();
    // Hash the password immediately why not?
    let hashedPassword = "";
    calculateMD5(password).then((result) => console.log(result));
    // Attempt login
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="form-row">
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="userNameInput"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
