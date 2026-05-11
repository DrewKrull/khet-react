"use client";

import { KhetUserContext } from "@/context/khetUserContext";
import { useContext } from "react";
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

export default function HeroBar({ doLogin, doLogout }) {
  const { user, setUser } = useContext(KhetUserContext);
  console.log(user);

  function handleLogout() {
    setUser(null);
    doLogout();
  }
  return (
    <div className="heroBar">
      {!user && <FaRegUser size={40} onClick={doLogin} />}
      {user && (
        <>
          <div className="heroBar-username">
            Logged in as {user.userDisplayName}
          </div>
          <div className="heroBar-logout">
            <CiLogout size={40} onClick={handleLogout} />
          </div>
        </>
      )}
    </div>
  );
}
