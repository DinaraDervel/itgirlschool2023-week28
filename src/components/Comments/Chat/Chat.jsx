import React from "react";
import s from "./Chat.module.css";
import Comment from "./Comment/Comment";

class Chat extends React.Component {
  render() {
    return (
      <div className={s.form}>
        <h2>Chat</h2>
        {this.props.comments.map((card) => (
          <Comment data={card} key={card.date} />
        ))}
      </div>
    );
  }
}

export default Chat;
