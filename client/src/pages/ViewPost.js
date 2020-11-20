import React, { Component } from "react";
import { __GetPosts } from "../services/PostServices";
import { __DeletePost } from "../services/PostServices";
// import Avatar from "@material-ui/core/Avatar";

export default class ViewPost extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    try {
      const posts = await __GetPosts(this.state.currentPage);
      this.setState({ posts: [...this.state.posts, ...posts] });
      console.log(posts);
    } catch (error) {
      console.log(error);
    }
  };

  incrementPage = () =>
    this.setState(
      (prevstate) => ({ currentPage: prevstate.currentPage + 1 }),
      () => this.getPosts()
    );

  deletePost = async (id) => {
    try {
      const postsToKeep = this.state.posts.filter((post) => post._id !== id);
      this.setState({ posts: postsToKeep });
      await __DeletePost(id);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="post">
        {posts.length ? (
          posts.map((post) => (
            <div key={post._id}>
              <div onClick={() => this.props.history.push(`/feed/${post._id}`)}>
                <h2>{post.caption} </h2>
                <h2>{post.image} </h2>
                <h2>{post.comments} </h2>
                <button onClick={() => console.log(post._id)}>Edit</button>
                <button onClick={() => this.deletePost(post._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2>No Posts</h2>
        )}
      </div>
    );
  }
}
