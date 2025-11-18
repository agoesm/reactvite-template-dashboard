import React from "react";
import { css } from "@emotion/css";

// const { Content } = Layout

const Users: React.FC = () => {
  const container = css`
    h2 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 16px;
    }
  `;

  return (
    <div className={container}>
      <h2>Users</h2>
      <p>Welcome to your Users!</p>
    </div>
  );
};

export default Users;
