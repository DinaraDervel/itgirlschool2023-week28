import React from "react";
import s from "./Chat.module.css";

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={s.form}>
        <h2>Chat</h2>
        <div className={s.chat}></div>
      </div>
    );
  }
}

export default Chat;
