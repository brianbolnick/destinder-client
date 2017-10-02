import React from 'react'
import Header from './Header.js'
import { Grid, Menu, Segment, Label } from 'semantic-ui-react'

const containerStyle = {
    marginTop: '2%'
  }

const Layout = ({ children }) => (  
    <div>
        <Header />
        {children}
    </div>
    // <Grid>
    //     <Grid.Column width={2}>
    //         <Header />
    //     </Grid.Column>

    //     <Grid.Column stretched width={14} style={containerStyle}>
    //         {children}
    //     </Grid.Column>
    // </Grid>
)

export default Layout