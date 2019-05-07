import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';



function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className='header-color' title="Title" scroll>
                <Navigation>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/resume">Resume</Link>                    
                    <Link to="/project">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/resume">Resume</Link>                    
                    <Link to="/project">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                
                <Main />
            </Content>
        </Layout>
    </div>
  );
}

export default App;
