import React from 'react'
import { Button, Card, Grid, Segment  } from 'semantic-ui-react'
import AnnouncementRanking from './AnnouncementRanking.js'

const AnnouncementLearnMore = () => (
    <div>
        <Button inverted color='blue' style={{ height: '40px;'}}>Learn More</Button>
    </div>
  )

const AnnouncementCard = () => (
    <Card style={{ backgroundColor: "transparent", color: "white" }}>
      <Card.Content  style={{color: 'red'}}>
        <Card.Header  style={{color: 'white', textAlign: "center"}}>
            Destinder Stopped Development
        </Card.Header>
        <Card.Meta>
        </Card.Meta>
        <Card.Description  style={{color: 'white', float: 'left', textAlign:"left"}}>

                    <Grid columns={1}>
                    <Grid.Row>
                        <Grid.Column width={16}>
                        <Segment style={{height:"50px", color:"#54c8ff", textAlign: 'center', backgroundImage:'url("http://www.designbolts.com/wp-content/uploads/2013/02/Simple-Soft-Mouse-pad-Grey-Seamless-Pattern-For-Website-Background.jpg")'}}><strong>11/13/2017</strong></Segment>
                        </Grid.Column>
                        </Grid.Row>
                     </Grid>
                    <br />
        

          Destinder has decided to <strong>stop all current Development</strong> and focus on rebuilding the site using React.js. We have an estimated launch of 12/25/2017.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column width={8}>
                        <AnnouncementRanking />
                        </Grid.Column>
                        <Grid.Column>
                        <AnnouncementLearnMore />
                        </Grid.Column>
                        </Grid.Row>
                     </Grid>
      </Card.Content>
    </Card>
    
)

export default AnnouncementCard