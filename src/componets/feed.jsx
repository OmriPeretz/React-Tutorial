import _ from 'lodash';
import React from 'react';
import {Navbar, Grid, Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Feeder from './feeder.jsx';
import Post from './post.jsx';

import '../stylesheets/feed.css';

class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.onLogout();
    }

    render() {
        return (
            <div>
                <Navbar inverse fixedTop={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Post</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Text pullRight>
                            {this.props.username}
                            <Navbar.Link href="#" onClick={this.handleLogout}>
                                {" "}
                                <FontAwesome name='sign-out'/>
                            </Navbar.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
                    <Row className="show-grid">
                        <Col id='feed' md={4} mdOffset={4}>
                            <Feeder
                                onPost={this.props.onPost}
                            />
                            {_.map(this.props.posts, post => <Post {...post} onPostRead={this.props.onPostRead}/>)}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Feed;