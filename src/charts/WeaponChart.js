import React, { Component } from "react";
// eslint-disable-next-line
import { Pie } from "react-chartjs-2";

class WeaponChart extends Component {

    render() {
        console.log(this.props.data)
        const {data} = this.props
        const stats = data.player_data.stats.kill_stats
        const heavyKills = parseInt(stats.grenade_launcher, 10) + parseInt(stats.rocket_launcher, 10) + parseInt(stats.sub_machine_gun, 10) + parseInt(stats.sword, 10) + parseInt(stats.trace_rifle, 10)
        const chartData = {
            labels: ["Auto", "Hand Cannon", "Pulse", "Scout", "Sniper", "Shotgun", "Fusion", "Sidearm", "Other"],
            datasets: [{
                data: [
                    parseInt(stats.auto_rifle, 10),
                    parseInt(stats.hand_cannon, 10),
                    parseInt(stats.pulse_rifle, 10),
                    parseInt(stats.scout_rifle, 10),
                    parseInt(stats.sniper, 10),
                    parseInt(stats.shotgun, 10),
                    parseInt(stats.fusion_rifle, 10),
                    parseInt(stats.side_arm, 10),
                    heavyKills,
                ],
                backgroundColor: [
                    "#FA8708",
                    "#3498db",
                    "#9b59b6",
                    "#2ecc71",
                    "#f1c40f",
                    "#e74c3c",
                    "#34495e",
                    "#AA885F",
                    "#95a5a6"
                ]
            }]
        };

        const options = {
            responsive: true,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Kills by Weapon Type",
                position: "bottom"
            }
        };


        return (
            <div>
                <Pie data={chartData} key={this.props.data.character_data.character_id} options={options} />
            </div>
        );
    }
}
export default WeaponChart;
