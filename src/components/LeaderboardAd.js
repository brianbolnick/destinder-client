import React, { Component } from 'react'
import { Advertisement } from 'semantic-ui-react'

export default class LeaderboardAd extends Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

    render() {
        return (            
            <Advertisement centered unit='large leaderboard'>
                <ins 
                    className="adsbygoogle"
                    style={{ display: "inline-block", width: '728px', height: '90px' }}
                    data-ad-client="ca-pub-2757454986564342"
                    data-ad-slot="5967597110"
                >
                </ins>
            </Advertisement>
    )
    }
}