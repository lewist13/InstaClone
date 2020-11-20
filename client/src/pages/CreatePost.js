import React, { Component } from "react";
import TextInput from "../components/TextInput";
import { __UploadPost } from "../services/PostServices";
import "../styles/Post.css";
// import Avatar from "@material-ui/core/Avatar
export default class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      caption: "",
      image: "",
    };
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(this.props.currentUser);
      await __UploadPost(this.state, this.props.currentUser._id);
      console.log(this.props.history);
      this.props.history.push("/feed");
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    console.log(this.props);
    const { caption, image } = this.state;
    return (
      <div className="post">
        <div className="post__header">
          <div className="upload content">
            <form className="flex-col" onSubmit={this.handleSubmit}>
              <TextInput
                placeholder="Caption"
                name="caption"
                value={caption}
                onChange={this.handleChange}
              />
              <TextInput
                placeholder="Image Url"
                name="image"
                value={image}
                onChange={this.handleChange}
              />
              <button>Post</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
