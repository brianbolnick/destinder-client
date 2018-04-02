import React, { Component } from 'react';
import { VictoryPie, VictoryTooltip, VictoryLabel } from 'victory';
import PropTypes from 'prop-types'

class CustomLabel extends React.Component {
    render() {
        return (
            <g>
                <VictoryLabel {...this.props} />
                <VictoryTooltip
                    {...this.props}
                    x={200} y={260}
                    text={`${this.props.text}`}
                    orientation="top"
                    pointerLength={0}
                    cornerRadius={50}
                    width={150}
                    height={150}
                    flyoutStyle={{ fill: "transparent", stroke: 'transparent' }}
                />
            </g>
        );
    }
}

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;
CustomLabel.propTypes = { text: PropTypes.string };

export default class SuccessChart extends Component {
    render() {
        // const chartData = this.props.map
        const data = this.props.data        
        const kills = this.props.data ?
            [
                { x: `Auto\nRifle\n(${data.auto_rifle} kills)`, y: parseInt(data.auto_rifle, 10) },
                { x: `Fusion\nRifle\n(${data.fusion_rifle} kills)`, y: parseInt(data.fusion_rifle, 10) },
                { x: `Hand\nCannon\n(${data.hand_cannon} kills)`, y: parseInt(data.hand_cannon, 10) },
                { x: `Pulse\nRifle\n(${data.pulse_rifle} kills)`, y: parseInt(data.pulse_rifle, 10) },
                { x: `Scout\nRifle\n(${data.scout_rifle} kills)`, y: parseInt(data.scout_rifle, 10) },
                { x: `Sidearm\n(${data.side_arm} kills)`, y: parseInt(data.side_arm, 10) },
                { x: `SMG\n(${data.sub_machine_gun} kills)`, y: parseInt(data.sub_machine_gun, 10) },
                { x: `Trace\nRifle\n(${data.trace_rifle} kills)`, y: parseInt(data.trace_rifle, 10) },
            ]
            :
            [{ x: "", y: 10 }]
        // const chartData = data.map
        return (
            <VictoryPie
                labelComponent={<CustomLabel />}
                data={kills}
                innerRadius={100}
                labelRadius={400}
                style={{ labels: { fontSize: 40, fill: "#212121" } }}
                animate={{
                    onEnter: {
                        duration: 500,
                        before: () => ({ opacity: 0.3, _y: 0 }),
                        after: (datum) => ({ opacity: 1, _y: datum._y })
                    }
                }}
                colorScale={[
                    "#FA8708",
                    "#3498db",
                    "#9b59b6",
                    "#2ecc71",
                    "#f1c40f",
                    "#e74c3c",
                    "#34495e",
                    "#AA885F",
                    "#95a5a6"
                ]}
            />

        )
    }
}