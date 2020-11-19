import React, { Component } from "react";
import TextInput from "../components/TextInput";
import { __GetPost, __UpdatePost } from "../services/PostServices";

export default class UpdatePost extends Component {
  constructor() {
    super();
    this.state = {
      caption: "",
      image: "",
      comment: "",
    };
  }

  componentDidMount() {
    this.getPost();
  }
  getPost = async () => {
    try {
      const post = await __GetPost(this.props.match.params.post_id);
      this.setState({
        comment: post.comment,
        caption: post.caption,
        imageUrl: post.postUrl,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await __UpdatePost(this.state, this.props.match.params.post_id);
      this.props.history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { comment, imageUrl, caption } = this.state;
    return (
      <div className="upload content">
        <form className="flex-col" onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="Update Image"
            name="image"
            value={imageUrl}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="Update Comment"
            name="comment"
            value={comment}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="Update Caption"
            name="caption"
            value={caption}
            onChange={this.handleChange}
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
