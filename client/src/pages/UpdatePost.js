// import React, { Component } from "react";
// import Posts from "../components/Post";
// import { __GetPost, __UpdatePost } from "../services/PostServices";
// export default class UpdatePost extends Component {
//   constructor() {
//     super();
//     this.state = {
//       caption: "",
//       comment: "",
//     };
//   }

//   componentDidMount() {
//     this.getPost();
//   }
//   getPost = async () => {
//     try {
//       const post = await __GetPost(this.props.match.params.post_id);
//       this.setState({
//         caption: post.caption,
//         imageUrl: post.postUrl,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   handleChange = ({ target }) => {
//     this.setState({ [target.name]: target.value });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await __UpdatePost(this.state, this.props.match.params.post_id);
//       this.props.history.push("/profile");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     const { imageUrl, caption } = this.state;
//     return (
//       <div className="upload content">
//         <form className="flex-col" onSubmit={this.handleSubmit}>
//           <Posts
//             placeholder="Update Image"
//             name="image"
//             value={imageUrl}
//             onChange={this.handleChange}
//           />
//           <Posts
//             placeholder="Update Caption"
//             name="caption"
//             value={caption}
//             onChange={this.handleChange}
//           />
//           <button>Update</button>
//         </form>
//       </div>
//     );
//   }
// }
