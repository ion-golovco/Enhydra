import React, { Component } from "react";
import { Container } from "reactstrap";

let Posts = [
    {
        media: "https://www.youtube.com/embed/UnIhRpIT7nc",
        text: "hello there general kennoby",
    },
    {
        media: "https://www.youtube.com/embed/UnIhRpIT7nc",
        text: "hello there general kennoby",
    },
];
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
                    <iframe id="PostMedia" title={post.media[0]} src={post.media}></iframe>
                ) : (
                    <img id="PostMedia" alt="postImage" src={post.media} />
                )}
                <p>{post.text}</p>
            </div>
        );
    }
    render() {
        return <Container id="MainContent">{Posts.map((n) => this.postCreate(n))}</Container>;
    }
}

export default PostFeed;
