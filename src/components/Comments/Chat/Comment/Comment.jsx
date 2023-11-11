import React from "react";
import s from "./Comment.module.css";

class Comment extends React.Component {
  render() {
    return (
      <div className={s.card}>
        <img src={this.props.data.avatar} alt="avatar" className={s.cardImg} />
        {this.props.data.showName && (
          <p className={s.cardName}>{this.props.data.name}</p>
        )}
        <p className={s.cardDate}>{this.props.data.date}</p>
        <p className={s.cardComment}>{this.props.data.comment}</p>
      </div>
    );
  }
}

export default Comment;
