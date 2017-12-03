import React, { Component } from "react";
import {
    Divider,
    Button,
    Modal,
    Dropdown
} from "semantic-ui-react";
import { API_URL } from '../../tools/api-config';
import {consoleOptions} from '../../data/DropdownOptions';

export default class PlatformSelectModal extends Component {

    handleChange = (e, { value }) => {
        // localStorage.setItem({ platform: value })
        this.props.setPlatform(value);
    }

    render() {


        return (
            <Modal basic size='small' open={this.props.filterSelect} dimmer='blurring'>
                <Modal.Header style={{ fontSize: '1.7em', color: '#FDD66F' }}>
                    Please select a platform
              </Modal.Header>
                <Modal.Content style={{ color: '#f5f5f5', fontSize: '1.3em' }}>
                    <p>We auto-filter by platform for our authenticated users. Please select a platform or log in to continue.</p>
                    <Divider />
                    <Dropdown placeholder='Select Platform' onChange={this.handleChange} fluid selection options={consoleOptions} />
                    <Divider className='platform-divider' horizontal>OR</Divider>
                    <Button fluid basic size='huge' color='teal' as='a' href={`${API_URL}/login`}>
                        Login
              </Button>
                </Modal.Content>
            </Modal>
        )
    }
}