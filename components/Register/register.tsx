"use client";

import { KhetUserContext } from "@/context/khetUserContext";
import { registerUser } from "@/service/khetservice";
import { createHash } from "crypto";
import { login } from "@/service/khetservice";
import { useContext, useState } from "react";

export default function Register({ returnToMainMenu, navigateToLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [displayname, setDisplayname] = useState("");
  const { user, setUser } = useContext(KhetUserContext);

  async function calculateHash(text) {
    return createHash("sha256").update(text).digest("base64");
  }

  function handleRegister(e) {
    e.preventDefault();
    // Hash the password immediately why not?

    // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⠶⠛⠛⠛⠛⠶⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣇⠀⠀⠀⠀⣠⡤⠤⣄⡀⠀⠀⢀⡤⠤⣬⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡀⠀⠀⡾⠁⠀⠀⠀⢻⡄⢠⡏⠀⣀⠀⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⠀⠀⣧⠀⠛⠃⠀⣰⠃⠈⢷⣄⡋⢀⣼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⢿⡄
    // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡆⠀⠈⠓⠦⠤⠞⠋⠀⠀⠀⠈⠙⢿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⡆⠀⢠⣶⡟⠈⣷
    // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠈⠙⠋⢁⠀⠀⠀⠀⠀⠀⣄⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠟⠁⣾⠃⣴⣿⠁⠀⠀⢹
    // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⢠⣴⣤⣄⡞⠀⢠⠀⠀⣆⠀⠸⡀⢹⣆⠀⠀⠀⠀⠀⠀⢠⡿⠁⠀⢸⣯⣼⡇⠀⠀⠀⠀⣾
    // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠘⣿⡿⢿⡇⠀⢸⠀⠀⢿⠀⠀⣇⠀⢻⣆⠀⠀⠀⠀⠀⣿⠁⠀⠀⣸⣿⠁⠀⠀⠀⠀⢀⡿
    // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⣧⠀⠀⠉⢻⡀⠀⣼⠀⠀⣼⣄⠀⢹⣦⣴⠏⠀⠀⠀⠀⢸⡇⠀⠀⢰⠏⠀⠀⠀⠀⠀⠀⣼⠇
    // ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⡶⠟⠁⠀⠘⢿⠦⢤⣀⣉⠉⠈⠣⠴⠃⣈⡩⣏⠙⢷⣄⡀⠀⠀⠀⢾⡇⠀⠀⠉⠀⠀⠀⠀⠀⢀⣾⠋⠀
    // ⠀⠀⠀⠀⠀⠀⣠⣤⠾⣏⠁⠀⠀⠀⠀⠀⠈⠳⣄⡀⠉⠉⠉⠉⢻⠉⠁⣀⡿⠀⠀⠘⡟⠷⣤⣠⣿⣇⠀⠀⠀⠀⠀⠀⢀⣴⠟⠁⠀⠀
    // ⠀⠀⠀⢀⣴⠟⠋⠀⠀⠘⣇⠀⠀⠀⠀⠀⠀⠀⠈⠻⣟⠒⠒⠒⠛⠚⠋⣹⠃⠀⠀⠀⢻⠀⠈⠙⣿⠉⠓⠲⠶⠶⠖⠚⠉⢹⣆⠀⠀⠀
    // ⠀⢀⣴⠟⠁⠀⠀⠀⠀⠀⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠦⣄⠀⠀⣰⠏⠀⠀⠀⠀⢸⠀⠀⣠⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⠀⠀
    // ⣴⠟⠁⠀⠀⠀⠀⠀⠀⠀⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣹⠾⠃⠀⠀⠀⠀⠀⢸⠀⠘⢹⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀
    let hashedPassword = "";
    calculateHash(password).then((result) => {
      hashedPassword = result;
      // Attempt register and immediately login
      registerUser(userName, hashedPassword, displayname).then(
        (registerResult) => {
          if (registerResult) {
            // Attempt login and store in context
            login(userName, hashedPassword).then((loginResult) => {
              setUser(loginResult);
              returnToMainMenu();
            });
          }
        },
      );
    });
  }
  return (
    <div>
      <div className="formHeader">Create New User</div>
      <div>
        Already registered?{" "}
        <span className="logInTextLink" onClick={navigateToLogin}>
          Login
        </span>
      </div>
      <form onSubmit={handleRegister}>
        <div className="form-row">
          <label className="form-label">Username:</label>
          <input
            type="text"
            name="userNameInput"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Display Name:</label>
          <input
            type="text"
            name="displayNameInput"
            value={displayname}
            onChange={(e) => setDisplayname(e.target.value)}
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
            disabled={!userName || !displayname! || !password}
          />
        </div>
      </form>
    </div>
  );
}
