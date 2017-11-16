import React from 'react'
import { Icon, Label, Menu, Table, Button, Segment  } from 'semantic-ui-react'
import AnnouncementRanking from './AnnouncementRanking.js'

const AnnouncementLearnMore = () => (
  <div>
      <Button inverted color='blue' style={{marginTop: '3%', float: 'right' }}>Learn More</Button>
  </div>
)

const AnnouncementTable = () => (
  <Table celled style={{marginTop: '5%' }}>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell   style={{width: '20%' }}></Table.HeaderCell>
        <Table.HeaderCell style={{width: '10%' }}>Date</Table.HeaderCell>
        <Table.HeaderCell style={{width: '35%' }}>Subject</Table.HeaderCell>
        <Table.HeaderCell style={{width: '35%' }}>TL;DR</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
      <Table.Cell><AnnouncementRanking /></Table.Cell>
        <Table.Cell>11/13/2017</Table.Cell>
        <Table.Cell>Addition of Announcements Page</Table.Cell>        
        <Table.Cell>By popular demand, Destinder has added an Announcements Page in order to keep our community engaged in our development <AnnouncementLearnMore /></Table.Cell>
        
      </Table.Row>
      <Table.Row>
      <Table.Cell><AnnouncementRanking /></Table.Cell>
      <Table.Cell>10/30/2017</Table.Cell>      
        <Table.Cell>Alex first started learning React!</Table.Cell>
        <Table.Cell>Alex, a shitty front-end developer, decided to learn React in order to help out with the Destinder Team. <AnnouncementLearnMore /></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell><AnnouncementRanking /></Table.Cell>
      <Table.Cell>10/1/2017</Table.Cell>
      <Table.Cell>Decision to move to React front-end</Table.Cell>
        <Table.Cell>Destinder decided to stop all Development and move to a React Front-End.  This was decided to better improve the user experience for our community. <AnnouncementLearnMore /></Table.Cell>
      </Table.Row>
    </Table.Body>

  </Table>
)

export default AnnouncementTable