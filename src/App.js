import React from 'react';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/Main.js';
import './App.css';


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Kyle Abrahams" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/Projects">Projects</Link>
            
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main></Main>
  
        </Content>
    </Layout>
</div>
  );
}

export default App;
