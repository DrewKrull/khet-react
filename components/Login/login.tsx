"use client";

import { useContext, useEffect, useState } from "react";
import { createHash } from "node:crypto";
import { login } from "@/service/khetservice";
import { KhetUserContext } from "@/context/khetUserContext";

export default function LoginForm({
  returnToMainMenu,
  locallyStoredUser,
  processLogin,
  failedLogin,
}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(KhetUserContext);

  function handleLogin(e) {
    e.preventDefault();
    processLogin(userName, password);
  }

  return (
    <div>
      <div className="formHeader">Log In</div>
      <form onSubmit={handleLogin}>
        {failedLogin && (
          <div className="form-row">** Invalid login - please try again **</div>
        )}
        <div className="form-row">
          <label>Username:</label>
          <input
            type="text"
            name="userNameInput"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Password:</label>
          <input
            type="password"
            name="passwordInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-row">
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
