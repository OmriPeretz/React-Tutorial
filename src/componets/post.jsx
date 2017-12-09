import React from 'react';
import FontAwesome from 'react-fontawesome';
import LazyLoad from 'react-lazy-load';
import {Panel, Media} from 'react-bootstrap';

import '../stylesheets/post.css';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleDeletePost = this.handleDeletePost.bind(this);
        this.getContent = this.getContent.bind(this);
    }

    handleMouseEnter() {
        if (!this.props.isRead) this.props.onPostRead(this.props._id);
    }

    handleDeletePost() {
        this.props.onPostDelete(this.props._id);
    }

    getContent() {
        return _.chain(this.props.content).split('\n').map((line, idx) => <span key={idx}>{line}<br/></span>).value();
    }

    render() {
        const {author} = this.props;
        const content = this.getContent();

        return (
            <LazyLoad onContentVisible={() => console.log(this.props._id)} offset={20}>
                <Panel className="post" onMouseEnter={this.handleMouseEnter}>
                    <Media>
                        <Media.Heading>
                            {author}
                            {!this.props.isRead && <FontAwesome name="circle" className="unread"/>}
                            {this.props.username === author &&
                            <FontAwesome
                                name="times"
                                className="delete pull-right"
                                onClick={() => this.handleDeletePost()}/>}
                        </Media.Heading>
                        <Media.Body>
                            <p>{content}</p>
                        </Media.Body>
                    </Media>
                </Panel>
            </LazyLoad>
        )
    }
}

export default Post;