import React, { Component } from "react";
import { render } from "react-dom";
import { Draggable, DragComponent, Droppable } from "react-dragtastic";
import { Grid, Image, Container, Card, Icon } from 'semantic-ui-react'
import _ from 'lodash'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between"
};

const draggableStyles = {
  width: 300,
  height: 300,
  background: "none",
  border: 'solid 1px #212121',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
  borderRadius: 6,
  marginBottom: 15,
  transition: "background 300ms"
};

const orangeCircleStyles = {
  width: 50,
  height: 50,
  zIndex: '100',
  borderRadius: "10%",
  boxShadow: "1px 1px 0px rgba(0,0,0,.9)",
  position: "fixed",
  pointerEvents: "none" //This is important for now. Mouseup events can't trigger if the pointer is on top of your DragComponent
};

const tealCircleStyles = {
  background: "teal"
};

const tealDroppableStyles = {
  background: "teal"
};

const overOrange = {
  background: "yellow"
};

const overTeal = {
  background: "aqua"
};


const weapons = [
  {
    id: 1,
    name: "The Time-Worn Spire",
    icon: "https://www.bungie.net/common/destiny2_content/icons/51f5300552a038079eaec00278f04a74.jpg"
  },
  {
    id: 2,
    name: "Tone Patrol",
    icon: "https://www.bungie.net/common/destiny2_content/icons/ad3128f0454368c76fc53d7734687371.jpg"
  },
  {
    id: 3,
    name: "The Wizend Rebuke",
    icon: "https://www.bungie.net/common/destiny2_content/icons/ed24a26d4e2f50218617ecabd7af23e8.jpg"
  },
  {
    id: 4,
    name: "Last Hope",
    icon: "https://www.bungie.net/common/destiny2_content/icons/e68c1a53d52a4ff254e523dc8ea66e62.jpg"
  },
  {
    id: 5,
    name: "Sins of the past",
    icon: "https://www.bungie.net/common/destiny2_content/icons/db7d8ce45381db4067dabae557126624.jpg"
  },
  {
    id: 6,
    name: "MIDA Multi-Tool",
    icon: "https://www.bungie.net/common/destiny2_content/icons/077e9577fb39cb521b49048db236e39d.jpg"
  },
  {
    id: 7,
    name: "Call to Serve",
    icon: "https://www.bungie.net/common/destiny2_content/icons/dd8755f8772ec975c5afd93382eca6d5.jpg"
  },
  {
    id: 8,
    name: "Prometheus Lens",
    icon: "https://www.bungie.net/common/destiny2_content/icons/47722e42893e6b331dc79df73a6555c9.jpg"
  },
  {
    id: 9,
    name: "Nameless Midnight",
    icon: "https://www.bungie.net/common/destiny2_content/icons/535cb2c4046bec8ca7af199babef875d.jpg"
  },
  {
    id: 10,
    name: "Positive Outlook",
    icon: "https://www.bungie.net/common/destiny2_content/icons/85d578ba2b0ffa055ed1d311067bda28.jpg"
  },
  {
    id: 11,
    name: "Perfect Paradox",
    icon: "https://www.bungie.net/common/destiny2_content/icons/b3819a04e240d04668fbc0a6b97673f1.jpg"
  },
  {
    id: 12,
    name: "Perfect Paradox",
    icon: "https://www.bungie.net/common/destiny2_content/icons/b3819a04e240d04668fbc0a6b97673f1.jpg"
  },
  {
    id: 13,
    name: "Antiope-D",
    icon: "https://www.bungie.net/common/destiny2_content/icons/9abd83e141d80c9cdcc42744aed52437.jpg"
  },
  {
    id: 14,
    name: "A Sudden Death",
    icon: "https://www.bungie.net/common/destiny2_content/icons/936c6b51a6575b927ff816d7cde1eb72.jpg"
  },
  {
    id: 15,
    name: "Better Devils",
    icon: "https://www.bungie.net/common/destiny2_content/icons/f23023062214b6b778c220f3d841a4ce.jpg"
  },
  {
    id: 16,
    name: "Annual Skate",
    icon: "https://www.bungie.net/common/destiny2_content/icons/f288cca4a874307fff1e57bc2a295f38.jpg"
  }
]

class PageLayout extends Component {
  onItemDropTitan = data => {
    alert(`Transferring ${data} to Titan...`);
  };
  onItemDropHunter = data => {
    alert(`Transferring ${data} to Hunter...`);
  };
  onItemDropWarlock = data => {
    alert(`Transferring ${data} to Warlock...`);
  };

  render() {


    const columns = weapons.map((weapon) => {      
      return (
        
        <Grid.Column key={weapon.id}>
          <Draggable
            id={`item-draggable-${weapon.id}`}
            type="item"
            data={weapon.name}
          >
            {dragState => (
              <div {...dragState.events} >
                <div style={{ width: '50px', height: '50px', backgroundImage: `url(${weapon.icon})`, backgroundSize: 'contain' }} />
              </div>
            )}
          </Draggable>
          <DragComponent for={`item-draggable-${weapon.id}`}>
            {dragState => (
              <div
                style={{
                  width: 75,
                  height: 75,
                  zIndex: '100',
                  borderRadius: "10%",
                  boxShadow: "1px 1px 0px rgba(0,0,0,.9)",
                  position: "fixed",
                  pointerEvents: "none", 
                  backgroundImage: `url(${weapon.icon})`,
                  backgroundSize: 'contain',
                  left: dragState.x - 15,
                  top: dragState.y - 15
                }}
              />
            )}
          </DragComponent>
        </Grid.Column>
      )
    })

    return (
      <Container style={{ padding: '2%' }}>
        <Grid columns='equal' center>
          <Grid.Row>
            {columns}
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Droppable accepts="item" onDrop={this.onItemDropTitan}>
                {dragState => (
                  <div
                    style={{
                      ...draggableStyles,
                      ...(dragState.isOver && dragState.type === "item"
                        ? overOrange
                        : {})
                    }}
                    {...dragState.events}
                  >
                    Titan

              </div>
                )}
              </Droppable>

            </Grid.Column>
            <Grid.Column>
              <Droppable accepts="item" onDrop={this.onItemDropHunter}>
                {dragState => (
                  <div
                    style={{
                      ...draggableStyles,
                      ...(dragState.isOver && dragState.type === "item"
                        ? overOrange
                        : {})
                    }}
                    {...dragState.events}
                  >
                    Hunter

              </div>
                )}
              </Droppable>

            </Grid.Column>
            <Grid.Column>
              <Droppable accepts="item" onDrop={this.onItemDropWarlock}>
                {dragState => (
                  <div
                    style={{
                      ...draggableStyles,
                      ...(dragState.isOver && dragState.type === "item"
                        ? overOrange
                        : {})
                    }}
                    {...dragState.events}
                  >
                    Warlock

              </div>
                )}
              </Droppable>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

class Testing extends Component {
  onOrangeDrop = data => {
    alert(`Dropped orange and got the following data: ${data}`);
  };
  onTealDrop = data => {
    alert(`Dropped teal and got the following data: ${data}`);
  };
  render() {
    return (
      <div style={styles}>
        <div>
          <Draggable
            id="orange-draggable"
            type="orange"
            data="Some Orange Data"
          >
            {dragState => (
              <div {...dragState.events} style={draggableStyles}>
                Draggable Zone
              </div>
            )}
          </Draggable>
          <Draggable id="teal-draggable" type="teal" data="Some Teal Data">
            {dragState => (
              <div
                {...dragState.events}
                style={{
                  ...draggableStyles,
                  ...tealDroppableStyles
                }}
              >
                Draggable Zone
              </div>
            )}
          </Draggable>
        </div>
        <DragComponent for="orange-draggable">
          {dragState => (
            <div
              style={{
                ...orangeCircleStyles,
                left: dragState.x - 15,
                top: dragState.y - 15
              }}
            />
          )}
        </DragComponent>
        <DragComponent for="teal-draggable">
          {dragState => (
            <div
              style={{
                ...orangeCircleStyles,
                ...tealCircleStyles,
                left: dragState.x - 15,
                top: dragState.y - 15
              }}
            />
          )}
        </DragComponent>
        <div>
          <Droppable accepts="orange" onDrop={this.onOrangeDrop}>
            {dragState => (
              <div
                style={{
                  ...draggableStyles,
                  ...(dragState.isOver && dragState.type === "orange"
                    ? overOrange
                    : {})
                }}
                {...dragState.events}
              >
                Droppable Zone <br />
                Accepts Orange
              </div>
            )}
          </Droppable>
          <Droppable accepts="teal" onDrop={this.onTealDrop}>
            {dragState => (
              <div
                style={{
                  ...draggableStyles,
                  ...tealDroppableStyles,
                  ...(dragState.isOver && dragState.type === "teal"
                    ? overTeal
                    : {})
                }}
                {...dragState.events}
              >
                Droppable Zone <br />
                Accepts Teal
              </div>
            )}
          </Droppable>
        </div>
      </div>
    );
  }
}

export default PageLayout;