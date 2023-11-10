import React from "react";
import s from "./Form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showName: "true",
      name: "",
      avatar: "",
      comment: "",
    };
  }

  onInputChange = (e) => {
    let newValue = e.target.value;
    if (e.target.name === "name") newValue = this.checkName(e.target.value);
    if (e.target.name === "comment") newValue = this.checkSpam(e.target.value);
    this.setState({ [e.target.name]: newValue });
  };

  checkName = (str) => {
    let name = str.toLowerCase().split(" ");
    for (let i = 0; i < name.length; i++) {
      name[i] = name[i].replaceAll(" ", "");
      const firstLetter = name[i] ? name[i][0].toUpperCase() : "";
      name[i] = firstLetter + name[i].slice(1);
    }
    name = name.join(" ");
    return name;
  };

  checkSpam = (str) => {
    return str.replace(/viagra|xxx/gi, "***");
  };

  render() {
    console.log(this.state);
    return (
      <form className={s.form} id="form">
        <h2>Add your comment</h2>
        <fieldset
          className={s.fieldset}
          name="showName"
          value={this.showName}
          onChange={this.onInputChange}
        >
          <legend>Show your name?</legend>
          <div>
            <input
              type="radio"
              id="yes"
              name="showName"
              value="true"
              required
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div>
            <input type="radio" id="no" name="showName" value="false" />
            <label htmlFor="no">No</label>
          </div>
        </fieldset>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={this.onInputChange}
        />
        <input
          type="url"
          id="picture"
          name="avatar"
          placeholder="Enter your avatar link"
          value={this.state.avatar}
          onChange={this.onInputChange}
        />
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          placeholder="Enter your comment"
          required
          value={this.state.comment}
          onChange={this.onInputChange}
        ></textarea>
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default Form;
