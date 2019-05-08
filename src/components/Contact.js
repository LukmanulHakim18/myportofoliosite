import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import me from '../image/me.jpg';

export class Contact extends Component {
  render() {
    return (
      <div className = 'contact-body'>
        <Grid className = 'contact-grid'>
          <Cell col={6}>
            <h2>Lukmanul Hakim</h2>
            <img src={me} alt='my pict' style={{height: '250px', borderRadius: '20px'}} />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
          <div className = 'contact-list'>
            <List>
              <ListItem>
                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                <i class="fas fa-phone-square" aria-hidden='true'/>
                  +6285355909838
                </ListItemContent>
              </ListItem>                           
              <ListItem>
                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                <i class="fas fa-envelope" aria-hidden='true'/>
                  lukman.virg@gmail.com
                </ListItemContent>
              </ListItem>
            </List>            
          </div>
          <div style={{justifyContent:'space-between', display:'flex', width:'80%', margin:'auto', padding:'20px'}}>
                <a href='https://www.instagram.com/virgonista/' target='blank'>
                  <i class="fab fa-instagram" style={{color:'black'}}></i>
                </a>
                <a href='https://id.linkedin.com/in/lukmanul-hakim-710277185' target='blank'>
                  <i class="fab fa-linkedin" style={{color:'black'}}></i>
                </a>
                <a href='https://www.youtube.com/channel/UClpC5Z5ET9DKpinehSOvKdw' target='blank'>
                  <i class="fab fa-youtube" style={{color:'black'}}></i>
                </a>                
              </div>
              <div style={{justifyContent:'space-between', display:'flex', width:'80%', margin:'auto', padding:'20px'}}>
                <a href='https://www.facebook.com/LUKMAN.VIRG' target='blank'>
                  <i class="fab fa-facebook" style={{color:'black'}}></i>
                </a>
                <a href='https://twitter.com/HAKIMVirg?lang=en' target='blank'>
                  <i class="fab fa-twitter" style={{color:'black'}}></i>
                </a>
                <a href='https://github.com/LukmanulHakim18' target='blank'>
                  <i class="fab fa-github" style={{color:'black'}}></i>
                </a>
              </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact
