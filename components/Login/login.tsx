"use client";

import { useState } from "react";
import crypto, { createHash } from "node:crypto";
import { login } from "@/service/khetservice";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function calculateHash(text) {
    return createHash("sha256").update(text).digest("base64");
  }

  function handleLogin(e) {
    e.preventDefault();
    // Hash the password immediately why not?
    let hashedPassword = "";
    calculateHash(password).then((result) => {
      hashedPassword = result;
      // Attempt login
      login(userName, hashedPassword);
    });
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
