import React, { Component } from "react";
import TextInput from "../components/TextInput";
import { __GetProfile, __UpdateName } from "../services/UserServices";

export default class UpdateName extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    this.getName();
  }

  getName = async () => {
    try {
      const user = await __GetProfile(this.props.currentUser._id);
      this.setState({
        name: user.name,
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
      await __UpdateName(this.state, this.props.match.params.user_id);
      this.props.history.push("/feed");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <form className="flex-col" onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
