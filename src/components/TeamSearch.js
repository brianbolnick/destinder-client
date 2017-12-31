import React, { Component } from "react";
import {
  Container,
  Header,
  Menu,
  Card,
  Tab,
  Segment,
  Sidebar,
  Icon,
  Image
} from "semantic-ui-react";
import Layout from "./Layout.js";
import { Route, Link } from "react-router-dom";
import TrialsLogo from "./img/trialsofthenine.png";

class TeamSearchPage extends Component {
  state = { activeItem: "home" };

  changePlayer = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    const characterPanes = [
      { menuItem: "Titan", render: () => <Tab.Pane>titan</Tab.Pane> },
      { menuItem: "Hunter", render: () => <Tab.Pane>hunter</Tab.Pane> },
      { menuItem: "Warlock", render: () => <Tab.Pane>warlock</Tab.Pane> }
    ];

    const teamPanes = [
      {
        menuItem: "Fireteam",
        render: () => (
          <Tab.Pane>
            <div style={{ marginLeft: "2%" }}> All players</div>
          </Tab.Pane>
        )
      }
    ];

    const playerPanes = [
      {
        menuItem: (
          <Menu.Item
            style={{
              textAlign: "center",
              padding: "0",
              height: "16%",
              backgroundImage: `url(${TrialsLogo})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            key="overview"
          />
        ),
        render: () => (
          <Tab.Pane>
            <Tab panes={teamPanes} />
          </Tab.Pane>
        )
      },
      {
        menuItem: (
          <Menu.Item style={{ textAlign: "center" }} key="player1">
            <Image
              className="trials-player-icon"
              src="https://www.bungie.net/common/destiny2_content/icons/1f5e4a3cfeaca5fd6465ffd15b81ffa6.jpg"
            />
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <Tab panes={characterPanes} />
          </Tab.Pane>
        )
      },
      {
        menuItem: (
          <Menu.Item style={{ textAlign: "center" }} key="player2">
            <Image
              className="trials-player-icon"
              src="https://www.bungie.net/common/destiny2_content/icons/329b866699d4048e9a8ca8d8861b0277.jpg"
            />
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <Tab panes={characterPanes} />
          </Tab.Pane>
        )
      },
      {
        menuItem: (
          <Menu.Item style={{ textAlign: "center" }} key="player3">
            <Image
              className="trials-player-icon"
              src="https://bungie.net//common/destiny2_content/icons/9a74b99143d97a7ccd01b958592b96cb.jpg"
            />
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <Tab panes={characterPanes} />
          </Tab.Pane>
        )
      },
      {
        menuItem: (
          <Menu.Item style={{ textAlign: "center" }} key="player4">
            <Image
              className="trials-player-icon"
              src="https://www.bungie.net/common/destiny2_content/icons/0a8dfa6d28e2c49068f445613e27a5d5.jpg"
            />
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <Tab panes={characterPanes} />
          </Tab.Pane>
        )
      }
    ];

    return (
      <Layout>
        <div className="profile-page" style={{ height: "100%" }}>
          <Container>
            <div style={{ height: "50px" }} />
            <div>
              <Card className="hide-on-mobile" fluid style={{ height: "85vh" }}>
                <Card.Content style={{ padding: "0" }}>
                  <Tab
                    grid={{
                      className: "profile-panels",
                      paneWidth: 14,
                      tabWidth: 2
                    }}
                    menu={{
                      attached: "left",
                      borderless: true,
                      vertical: true,
                      tabular: "left"
                    }}
                    panes={playerPanes}
                  />
                  {/* <Sidebar.Pushable as={Segment} style={{height: '85vh'}}>
                                <Sidebar as={Menu} panes={panes} tabular vertical animation='push' style={{backgroundColor: '#212121', width: '110px'}} visible={true} icon='labeled' vertical inverted>
                                    <Menu.Item name='home'>
                                        <Icon name='home' />

                                    </Menu.Item>
                                    <Menu.Item name='gamepad'>
                                    <Icon name='gamepad' />

                                    </Menu.Item>
                                    <Menu.Item name='camera'>
                                    <Icon name='camera' />

                                    </Menu.Item>
                                </Sidebar>
                                <Sidebar.Pusher>
                                    <Tab panes={panes} />
                                </Sidebar.Pusher>
                                </Sidebar.Pushable> */}
                </Card.Content>
              </Card>
            </div>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default TeamSearchPage;
