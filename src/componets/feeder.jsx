import React from 'react';
import ReactDOM from 'react-dom';
import {Panel, Media, Form, FormControl, ButtonGroup, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import '../stylesheets/feeder.css';

class Feeder extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        let content = ReactDOM.findDOMNode(this.refs.postContent).value;
        if (content) this.props.onPost(content);
        ReactDOM.findDOMNode(this.refs.postContent).value = '';

    }

    render() {
        return (
            <Panel id='feeder'>
                <Media>
                    <Media.Left>
                    </Media.Left>
                    <Media.Body>
                        <Form horizontal onSubmit={this.handleSubmit}>
                            <FormControl ref="postContent" componentClass="textarea" placeholder="what's on your mind?" />
                            <ButtonGroup className="pull-right">
                                <Button type="submit" id="post"><FontAwesome name="paper-plane"/></Button>
                            </ButtonGroup>
                        </Form>
                    </Media.Body>
                </Media>
            </Panel>
        )
    }
}

export default Feeder;
