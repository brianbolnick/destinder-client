import React, { Component } from 'react'
import { Advertisement } from 'semantic-ui-react'
import AdBlockDetect from 'react-ad-block-detect';

export class LeaderboardAd extends Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

    render() {
        return (
            <div>
                <Advertisement centered unit='large leaderboard'>
                    <ins
                        className="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-2757454986564342"
                        data-ad-slot="5485215532"
                        data-ad-format="auto"
                    >
                    </ins>
                </Advertisement>
                <AdBlockDetect>
                    <Advertisement centered test="This site is supported by advertisements. Please consider disabling your adblocker in order to help us enhance Destinder!" unit='large leaderboard' />
                </AdBlockDetect>
            </div>
        )
    }
}


export class FireteamsMobileAd extends Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

    render() {
        return (
            <div>
                <Advertisement centered unit='medium rectangle' test="testing">
                    <ins className="adsbygoogle"
                        style={{display: "block"}}
                        data-ad-client="ca-pub-2757454986564342"
                        data-ad-slot="4999526573"
                        data-ad-format="auto">
                    </ins>
                </Advertisement>
                <AdBlockDetect>
                    <Advertisement centered test="This site is supported by advertisements. Please consider disabling your adblocker in order to help us enhance Destinder!" unit='medium rectangle' />
                </AdBlockDetect>
            </div>
        )
    }
}