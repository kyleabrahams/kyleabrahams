import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
// import picture from '../images/picture.jpg';

class AboutMe extends Component {
    render()
}
    return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Kyle Abrahams</h2>
                    <img 
                    src={picture} 
                    alt="AboutMe"
                    height="250px" />
                    <p style={{width: "75%", paddingTop: "1em"}}>
                        blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                    </p>
            

                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr />
                    <div className="contact-list" style={{margin="auto"}}>
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
                                    <i className="fa fa-phone-suare" aria-hidden="true" />
                                    (123) 456-7890
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
                                    <i className="fa fa-phone-suare" aria-hidden="true" />
                                    (123) 456-7890
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
                                    <i className="fa fa-phone-suare" aria-hidden="true" />
                                    (123) 456-7890
                                </ListItemContent>
                            </ListItem>

                        </List>
                    </div>
                    
                    </Cell>
            </Grid>

        </div>
    )
]

export default AboutMe;