import React, { Component } from 'react';
import { Grid, Cell, Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories()
    {
       switch(this.state.active) 
       {
           case 0:
            return(<div className="project-grid">
                    <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>Get Started</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>
                </div>
            )

       }
    }

    render()
    {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} on Change={(tabID) => this.setState({activeTab: tabID})} ripple>
                    <Tab>Unity</Tab>
                    <Tab>Unreal</Tab>
                    <Tab>React</Tab>    
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="Content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;