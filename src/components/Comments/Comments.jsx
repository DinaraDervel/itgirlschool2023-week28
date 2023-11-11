import React from "react";
import s from "./Comments.module.css";
import Chat from "./Chat/Chat";
import Form from "./Form/Form";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
  publishComment = (e) => {
    e.preventDefault();
    let newComment = localStorage.getItem("newComment");
    newComment = newComment ? JSON.parse(newComment) : {};
    this.state.comments.push(newComment);
    this.setState(this.state.comments);
    console.log(this.state.comments);
    e.target.reset();
  };
  render() {
    return (
      <>
        <h1>Comments service with spam filter</h1>
        <div className={s.page}>
          <Chat comments={this.state.comments} />
          <Form publishComment={this.publishComment} />
        </div>
      </>
    );
  }
}

export default Comments;
