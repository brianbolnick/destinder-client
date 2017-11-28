import React, { Component } from "react";
import {
    Divider,
    Button,
    Modal,
    Dropdown,
    Form,
    Radio
} from "semantic-ui-react";
import { Slider } from 'antd';
// eslint-disable-next-line
import { pveOptions, pvpOptions, raidOptions, teamOptions, micOptions } from '../../data/DropdownOptions';

class FilterModal extends Component {

    handleModeChange = (e, { value }) => {
        this.props.onModeChange(value)
    }
    handleLookingForChange = (e, { value }) => {
        this.props.onLookingForChange(value)
    }
    handleMicChange = (e, { value }) => {
        this.props.onMicChange(value)
    }

    handleEloChange = (value) => {
        this.props.onEloChange(value);
    }

    handleKdChange = (value) => {
        this.props.onKdChange(value);
    }

    handleResetClick = () => {
        this.props.onResetClick();
    }

    render() {
        const eloMarks = {
            600: '600',
            3300: '3300'
        };
        const kdMarks = {
            0.1: '0.1',
            3.5: '3.5+'
        };

        return (
            <Modal basic size='small' closeIcon trigger={<Button floated='right' basic size='large' inverted circular icon='filter' />}>
                <Modal.Header>Filter</Modal.Header>
                <Modal.Content >
                    <Modal.Description>
                        <Form>
                            <Form.Group>
                                <Form.Field width={3}>
                                    <label className="form-label">Mode</label>
                                    <div style={{ display: "inline-flex", marginTop: "3%" }}>
                                        <span style={{ color: "#f5f5f5", marginRight: "10%" }}>
                                            PVE
                                        </span>{" "}
                                        <Radio
                                            toggle
                                            label='PVP'
                                            width={8}
                                        />
                                    </div>
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <label className="form-label">Mode</label>
                                    <Dropdown placeholder='Select Country' fluid search selection options={pvpOptions}
                                        onChange={this.handleModeChange}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label className="form-label">Looking For...</label>
                                    <Dropdown placeholder='Any' fluid search selection options={teamOptions}
                                        onChange={this.handleLookingForChange} />
                                </Form.Field>
                                <Form.Field>
                                    <label className="form-label">Mic Required</label>
                                    <Dropdown placeholder='No' fluid search selection options={micOptions}
                                        onChange={this.handleMicChange} />
                                </Form.Field>
                            </Form.Group>

                            <Divider />
                            <label className="form-label">ELO</label>
                            <Slider
                                onChange={this.handleEloChange}
                                range
                                min={600}
                                max={3300}
                                defaultValue={[600, 3300]}
                                step={100}
                                included
                                marks={eloMarks}
                            />

                            <label className="form-label">K/D Ratio</label>
                            <Slider
                                onChange={this.handleKdChange}
                                included
                                range
                                min={0.1} max={3.5}
                                defaultValue={[0.1, 3.5]}
                                step={0.1}
                                marks={kdMarks}
                                tipFormatter={(value) => {
                                    return `${value} KD`;
                                }}
                            />
                            <Button floated='right' basic size='large' inverted onClick={this.handleResetClick} >
                                Reset
                            </Button>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}

export default FilterModal