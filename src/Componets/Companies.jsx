import _ from 'lodash';
import React from 'react';
import {Accordion, Panel} from 'react-bootstrap';

class CompaniesComp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Accordion>
                {_.map(this.props.companies, (company) => {
                    return (
                        <Panel header={company.name} eventKey={company.name}>
                            Hey
                        </Panel>
                    )
                })}
            </Accordion>
        )
    }
}

export default CompaniesComp;
