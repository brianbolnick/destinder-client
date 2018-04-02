import React, { Component } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip, VictoryLabel } from 'victory';
import PropTypes from 'prop-types'

export default class LineChart extends Component {
    render() {
        return (
            <VictoryChart
                theme={VictoryTheme.material}
            >
                <VictoryLine
                    labels={(datum) => datum.y}
                    labelComponent={<VictoryLabel renderInPortal dy={-20} />}
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                    ]}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                />
            </VictoryChart>

        )
    }
}
