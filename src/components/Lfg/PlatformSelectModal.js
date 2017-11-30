import React, { Component } from "react";
import {
    Divider,
    Button,
    Modal,
    Dropdown
} from "semantic-ui-react";
import { API_URL } from '../../tools/api-config';

export default class PlatformSelectModal extends Component {

    handleChange = (e, { value }) => {
        // localStorage.setItem({ platform: value })
        this.props.setPlatform(value);
    }

    render() {

        const platformOptions = [
            {
                text: 'Xbox',
                value: '1',
                image: { avatar: true, src: 'https://vignette.wikia.nocookie.net/bioshock/images/9/97/Icon_xbox.png/revision/latest?cb=20110901055120' },
            },
            {
                text: 'Playstation',
                value: '2',
                image: { avatar: true, src: 'https://image.freepik.com/free-icon/playstation-logo_318-50459.jpg' },
            },
            {
                text: 'Blizzard',
                value: '4',
                image: { avatar: true, src: 'https://cdn6.aptoide.com/imgs/5/1/f/51fc6f8666c50ce7456651810d7a4439_icon.png?w=240' },
            }

        ]

        return (
            <Modal basic size='small' open={this.props.filterSelect} dimmer='blurring'>
                <Modal.Header style={{ fontSize: '1.7em', color: '#FDD66F' }}>
                    Please select a platform
              </Modal.Header>
                <Modal.Content style={{ color: '#f5f5f5', fontSize: '1.3em' }}>
                    <p>We auto-filter by platform for our authenticated users. Please select a platform or log in to continue.</p>
                    <Divider />
                    <Dropdown placeholder='Select Platform' onChange={this.handleChange} fluid selection options={platformOptions} />
                    <Divider className='platform-divider' horizontal>OR</Divider>
                    <Button fluid basic size='huge' color='teal' as='a' href={`${API_URL}/login`}>
                        Login
              </Button>
                </Modal.Content>
            </Modal>
        )
    }
}