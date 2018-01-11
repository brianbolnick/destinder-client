import React, { Component } from 'react';
import { VictoryPie, VictoryTooltip, VictoryLabel } from 'victory';

export default class SuccessChart extends Component {
    render() {
        return (
            <svg viewBox="0 0 400 400">
                <VictoryPie                    
                    standalone={false}
                    data={[
                        { x: "W", y: this.props.wins}, { x: "L", y: this.props.losses }
                    ]}
                    innerRadius={68} labelRadius={100}
                    style={{ labels: { fontSize: 30, fill: "white" } }}
                />
                {/* <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 0 }}
                    x={200} y={200}
                    text="Pie!"
                /> */}
            </svg>
        )
    }
}