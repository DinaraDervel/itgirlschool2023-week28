import React from "react";
import s from "./Comments.module.css";
import Chat from "./Chat/Chat";
import Form from "./Form/Form";

class Comments extends React.Component {
  render() {
    return (
      <>
        <h1>Comments service with spam filter</h1>
        <div className={s.page}>
          <Chat />
          <Form />
        </div>
      </>
    );
  }
}

export default Comments;
