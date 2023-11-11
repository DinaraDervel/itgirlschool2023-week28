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
      date: "",
    };
  }

  onInputChange = (e) => {
    let newValue = e.target.value;
    if (e.target.name === "name") newValue = this.checkName(e.target.value);
    if (e.target.name === "comment") newValue = this.checkSpam(e.target.value);
    this.setState({ date: this.parseDate(new Date()) });
    this.setState({ [e.target.name]: newValue });
    localStorage.setItem("newComment", JSON.stringify(this.state));
  };

  resetForm = () => {
    this.setState({
      showName: "true",
      name: "",
      avatar: "",
      comment: "",
      date: "",
    });
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

  parseDate = (newDate) => {
    let day = "";
    switch (newDate.getDay()) {
      case 0:
        day = "Sun";
        break;
      case 1:
        day = "Mon";
        break;
      case 2:
        day = "Tue";
        break;
      case 3:
        day = "Wen";
        break;
      case 4:
        day = "Thu";
        break;
      case 5:
        day = "Fri";
        break;
      case 6:
        day = "Sat";
        break;
      default:
        day = "unknown";
    }
    let month = "";
    switch (newDate.getMonth()) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:
        month = "unknown";
    }
    return `${day}, ${newDate.getDate()} ${month} ${newDate.getFullYear()} at ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
  };

  render() {
    return (
      <form
        className={s.form}
        id="form"
        onSubmit={this.props.publishComment.bind(this)}
      >
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
              defaultChecked
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
