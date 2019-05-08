import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

export class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab : 0};
  }
toggleCategories() {
  if (this.state.activeTab === 0) {
    return(
      <div  className = 'PJ-grid'>
      {/* Project 1 */}
      <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 
        'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'}}>React Project #1</CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share' />
          </CardMenu> 
      </Card> 
       {/* Project 1 */}
       <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 
        'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'}}>React Project #1</CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share' />
          </CardMenu> 
      </Card> 
       {/* Project 1 */}
       <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 
        'url(https://raddevon.com/wp-content/uploads/2018/10/react.jpg) center / cover'}}>React Project #1</CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share' />
          </CardMenu> 
      </Card> 
      </div>
    )
  }else if(this.state.activeTab === 1){
    return(
      <div><h1>Angular</h1></div>
    )
  }else if(this.state.activeTab === 2){
    return(
      <div><h1>VueJS</h1></div>
    )
  }else if(this.state.activeTab === 3){
    return(
      <div><h1>MongoDB</h1></div>
    )
  }
  
}  
  render() {
    return (
      <div className='category-tabs'>
        <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab : tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        
          <Grid>
            <Cell col={12}>
            {this.toggleCategories()}
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Project
