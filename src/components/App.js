import React, {Component, PropTypes} from "react";
import logo from "./logo.svg";
import "./App.css";
import {connect} from "react-redux";
import AddPostForm from "./AddPostForm";
import Post from "./Post";
import ApiPosts from "./../api/posts";
class App extends Component {
    componentWillMount() {
        const posts = ApiPosts.getList();
        this.props.dispatch({
            type: "POSTS_LIST_SAVE",
            posts
        });
    }

    render() {
        const posts = this.props.posts;
        return (
            <div className="App">
                <div className="container">
                    <h1 className="mt-4 mb-4">Базовая разметка</h1>
                    <div id="cards">
                        {posts.length ? posts.map(post => <Post key={post.id} {...post}/>) : ''}
                    </div>
                    <AddPostForm/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts || []
    };
}
export default connect(mapStateToProps)(App);