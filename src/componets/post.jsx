import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Panel, Media} from 'react-bootstrap';

import '../stylesheets/post.css';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    handleMouseEnter() {
        if (!this.props.isRead) this.props.onPostRead(this.props._id);
    }

    render() {
        let {author, content} = this.props;

        return (
            <Panel className="post" onMouseEnter={this.handleMouseEnter}>
                <Media>
                    <Media.Left>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>
                            {author}
                            {!this.props.isRead ? <FontAwesome name="circle" className="pull-right"/> : ''}
                        </Media.Heading>
                        <p>
                            {_.map(_.split(content, '\n'), (line) =>
                                <span>{line}<br/></span>
                            )}
                        </p>
                    </Media.Body>
                </Media>
            </Panel>
        )
    }
}

export default Post;