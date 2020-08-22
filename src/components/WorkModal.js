import {Modal} from 'react-bootstrap';
import React, {Component} from 'react';

export default class WorkModal extends Component {
    render() {
        return(
            <Modal
                size="lg"
                show={this.props.show}
                onHide={this.props.onHide}
                closeButton
                // onHide={() => setLgShow(false)}
                // aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" style={{fontWeight: 'bold' }}>
                    <h1>{this.props.company}</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>{this.props.position}</h5>
                    <p>{this.props.date} • {this.props.location}</p>
                    <p>{this.props.description}</p>
                </Modal.Body>
            </Modal>
        );
    }
}

