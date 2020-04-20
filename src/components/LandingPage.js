import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import picture from '../images/picture.jpg';

class LandingPage extends Component 
{
    render()
    {
        return(
            <div style={{height: "100%", width: "100%", margin: "auto"}}>
                <p></p>
                <Grid className="Landing-grid">
                    <Cell col={12}>
                        {/* <img src={picture} alt="avatar" className="avatar-img" /> */}
                        <div className="banner-text">
                            <h1>
                            UX Designer    
                            </h1>
                            <hr />
                            <p>A-frame | Creative Cloud</p>
                            <div className="social-links">
                                <a href="https://twitter.com/anagramMC" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                    </a>
                                    <a href="https://twitter.com/anagramMC" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                    </a>
                                    <a href="https://twitter.com/anagramMC" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                    </a>
                                    <a href="https://twitter.com/anagramMC" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                    </a>
                                    
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;