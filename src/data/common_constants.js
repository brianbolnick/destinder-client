import React from "react";
import {
  Architect,
  Follower, 
  Veteran, 
  Sponsor,
  LittleHelper,
  CakeBoss,
  Donator,
  BigDonator
} from './badges';

export const GAME_TYPES = {
    2: 'Story',
    3: 'Strikes Playlist',
    4: 'Raid',
    5: 'PVP - Any',
    6: 'Patrol',
    7: 'PVE - Any',
    10: 'Control',
    12: 'Clash',
    16: 'Nightfall',
    17: 'Nightfall - Heroic',
    18: 'Strikes - Any',
    19: 'Iron banner',
    31: 'Supremacy',
    37: 'Survival',
    38: 'Countdown',
    39: 'Trials of the Nine',
    100: 'PVE - Other',
    101: 'PVP - Other',
    102: 'Other',
  }

  export const BADGES = {
    1: <Donator />,
    2: <Architect />,
    3: <BigDonator />,
    4: <Sponsor/>,
    5: <Veteran />, 
    6: <CakeBoss />,
    7: <LittleHelper />,
    8: <Follower />
  }