"use client";

import { useContext, useState } from "react";
import { createHash } from "node:crypto";
import { login } from "@/service/khetservice";
import { KhetUserContext } from "@/context/khetUserContext";

export default function LoginForm({ returnToMainMenu }) {
  const [userName, setUserName] = useState("drewKrull");
  const [password, setPassword] = useState("tooManyCats");
  const { user, setUser } = useContext(KhetUserContext);

  async function calculateHash(text) {
    return createHash("sha256").update(text).digest("base64");
  }

  function handleLogin(e) {
    e.preventDefault();
    // Hash the password immediately why not?
    let hashedPassword = "";
    calculateHash(password).then((result) => {
      hashedPassword = result;
      // Attempt login and store in context
      login(userName, hashedPassword).then((result) => {
        setUser(result);
        returnToMainMenu();
      });
    });
  }
  return (
    <div>
      <div className="formHeader">Log In</div>
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
          <input
            type="submit"
            className="formSubmit"
            disabled={!userName || !password}
          />
        </div>
      </form>
    </div>
  );
}
