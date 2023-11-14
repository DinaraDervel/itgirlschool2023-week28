import React from "react";
import s from "./Comments.module.css";
import Chat from "./Chat/Chat";
import Form from "./Form/Form";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: localStorage.getItem("comments")
        ? JSON.parse(localStorage.getItem("comments"))
        : [],
    };
  }
  publishComment = (e) => {
    let newComment = localStorage.getItem("newComment");
    newComment = newComment ? JSON.parse(newComment) : {};
    this.state.comments.unshift(newComment);
    this.setState({ comments: this.state.comments });
    localStorage.setItem("comments", JSON.stringify(this.state.comments));
    localStorage.setItem("newComment", JSON.stringify({}));
    console.log(this.state.comments);
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
