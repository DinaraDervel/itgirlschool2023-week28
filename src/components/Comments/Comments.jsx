import React from "react";
import s from "./Comments.module.css";
import Chat from "./Chat/Chat";

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Comments service with spam filter</h1>
        <div className={s.page}>
          <Chat />
          <form className={s.form} id="form">
            <h2>Add your comment</h2>
            <fieldset class={s.fieldset}>
              <legend>Show your name?</legend>
              <div>
                <input
                  type="radio"
                  id="yes"
                  name="showName"
                  value="yes"
                  required
                  checked
                />
                <label for="yes">Yes</label>
              </div>
              <div>
                <input type="radio" id="no" name="showName" value="no" />
                <label for="no">No</label>
              </div>
            </fieldset>
            <input type="text" id="name" placeholder="Enter your name" />
            <input
              type="url"
              id="picture"
              placeholder="Enter your avatar link"
            />
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="10"
              placeholder="Enter your comment"
              required
            ></textarea>
            <input type="submit" value="Post" />
          </form>
        </div>
      </>
    );
  }
}

export default Comments;
