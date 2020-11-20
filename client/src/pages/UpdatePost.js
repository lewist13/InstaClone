import React, { Component } from "react";
import TextInput from "../components/TextInput";
import { __GetPost, __UpdatePost } from "../services/PostServices";

export default class UpdatePost extends Component {
  constructor(props) {
    super(props);
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
        image: post.image,
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
      this.props.history.push("/feed");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { image, caption } = this.state;
    return (
      <div className="upload content">
        <form className="flex-col" onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="Update Image"
            name="image"
            value={image}
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
