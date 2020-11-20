import React from "react";
import Nav from "../components/Nav";
import CreatePost from "./CreatePost";
import ViewPost from "./ViewPost";

function Home(props) {
  console.log(props);
  return (
    <div>
      <Nav />
      <CreatePost {...props} />
      <ViewPost {...props} />
    </div>
  );
}

export default Home;
