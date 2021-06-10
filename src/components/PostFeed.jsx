import React, { Component } from "react";
import Posts from "./libraries/content";

class PostFeed extends Component {
  state = {};
  postCreate(post) {
    let video = true;
    if (post.media.search("youtube") === -1) {
      video = false;
    }
    return (
      <div>
        {video ? (
          <iframe id="PostMedia" title={post.media} src={post.media}></iframe>
        ) : (
          <img id="PostMedia" alt="postImage" src={post.media} />
        )}
        <p id="text">{post.text}</p>
      </div>
    );
  }
  render() {
    return <div id="MainContent">{Posts.map((n) => this.postCreate(n))}</div>;
  }
}

export default PostFeed;
