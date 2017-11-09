import _ from 'lodash';
import React from 'react';
import Login from './login.jsx';
import Feed from './feed.jsx'

import users from '../../public/users.json';
import posts from '../../public/posts.json';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            users: users,
            posts: posts
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handlePostRead = this.handlePostRead.bind(this);
    }

    handleLogin(user) {
        this.setState({username: user.name});
    }

    handleLogout() {
        this.setState({username: ''});
    }

    handlePost(content) {
        const posts = this.state.posts;

        let post = {
            _id: posts.length,
            isRead: false,
            author: this.state.username,
            content
        };

        this.setState({posts: [post, ...posts]});
    }

    handlePostRead(_id) {
        const posts = _.map(this.state.posts, post => {
            if (post._id === _id) post.isRead = true;
            return post;
        });

        this.setState({posts});
    }

    render() {
        return (
            <div>
                { this.state.username ?
                    <Feed
                        username={this.state.username}
                        posts={this.state.posts}
                        onLogout={this.handleLogout}
                        onPost={this.handlePost}
                        onPostRead={this.handlePostRead}
                    /> :
                    <Login users={this.state.users} loginSucceeded={this.handleLogin} />
                }
            </div>
        )
    }
}

export default App;