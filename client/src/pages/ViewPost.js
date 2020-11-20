import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { __GetPost } from "../services/PostServices";
import "../styles/App.css";
export default class ViewPost extends Component {
  constructor() {
    super();
    this.state = {
      post: null,
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = async () => {
    try {
      const post = await __GetPost(this.props.match.params.post_id);
      this.setState({ post });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { post, name } = this.state;
    if (this.state.post) {
      return (
        <div className="post">
          <div className="post__header">
            <Avatar
              className="post__avatar"
              alt={name}
              src="/static/images/avatar/1.jpg"
            />
          </div>
          <div className="posts detail">
            <div className="content-wrapper flex-row">
              <div className="left-content col-1">
                <div className="image-wrapper">
                  <img src={post.image} alt="post" />
                </div>
              </div>
              <div className="right-content col-2 flex-col">
                <div className="content-top">
                  <p>{post.caption}</p>
                  <div className="stats flex-row">
                    <div>
                      <p>Caption</p>
                      <p>{post.paragraph}</p>
                    </div>
                    <div>
                      <p>Comments</p>
                      <p>{post.comments.length}</p>
                    </div>
                  </div>
                </div>
                <div className="comments">
                  {post.comments.length ? (
                    post.comments.map((comment) => (
                      <li className="comment-item" key={comment._id}>
                        <p>
                          <Link>{comment.user_id.name}</Link>
                        </p>
                        <p>{comment.comment}</p>
                      </li>
                    ))
                  ) : (
                    <h3>No Comments</h3>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <h3>Loading...</h3>;
  }
}
