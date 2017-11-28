import React, { Component } from "react";
import {
    Divider,
    Button,
    Modal,
    Dropdown,
    Form
} from "semantic-ui-react";
import { Slider } from 'antd';
import { raidOptions, teamOptions, micOptions, allModeOptions } from '../../data/DropdownOptions';

class FilterModal extends Component {

    state = {sliderDisabled: true, checkpointDisabled: true}

    handleModeChange = (e, { value }) => {
        if (value === 39) {
            this.setState({sliderDisabled: false});
        }else if (value === 4) {
            this.setState({checkpointDisabled: false});
        }
        this.props.onModeChange(value)
    }
    handleLookingForChange = (e, { value }) => {
        this.props.onLookingForChange(value)
    }
    handleMicChange = (e, { value }) => {
        this.props.onMicChange(value)
    }

    handleCheckpointChange= (e, {value}) => {
        // this.props.onResetClick();
        alert("We're still working on this one!");
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
            0: '0',
            3300: '3300+'
        };
        const kdMarks = {
            0: '0',
            3.5: '3.5+'
        };

        return (
            <Modal basic size='small' closeIcon trigger={<Button floated='right' basic size='large' inverted circular icon='filter' />}>
                <Modal.Header>Filter</Modal.Header>
                <Modal.Content >
                    <Modal.Description>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <label className="form-label">Mode</label>
                                    <Dropdown scrolling placeholder='Game Mode' fluid search selection options={allModeOptions}
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
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <label className="form-label">Checkpoint</label>
                                    <Dropdown scrolling placeholder='Any' fluid search selection options={raidOptions}
                                        onChange={this.handleCheckpointChange}
                                        disabled={this.state.checkpointDisabled}
                                    />
                                </Form.Field>
                            </Form.Group>

                            <Divider />
                            <Modal.Header style={{color: '#f5f5f5'}}>Trials of the Nine Filters</Modal.Header>
                            <Divider hidden />
                            <label className="form-label">ELO</label>
                            <Slider
                                disabled={this.state.sliderDisabled}
                                onChange={this.handleEloChange}
                                range
                                min={0}
                                max={3300}
                                defaultValue={[0, 3300]}
                                step={100}
                                included
                                marks={eloMarks}
                            />

                            <label className="form-label">K/D Ratio</label>
                            <Slider
                                disabled={this.state.sliderDisabled}
                                onChange={this.handleKdChange}
                                included
                                range
                                min={0.0} max={3.5}
                                defaultValue={[0.0, 3.5]}
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