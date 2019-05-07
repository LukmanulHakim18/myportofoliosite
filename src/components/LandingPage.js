import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import me from '../image/me.jpg';

export class LandingPage extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className ='LP-Grid'>
          <Cell col = {12}>
            <img
              src = {me}
              alt = 'avatar'
              className = 'avatar-img'
            />
            <div className='banner-text'>
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>HTML/css | Bootstrap | JavaScript | ReactJS | PHP | Laravel | CodeIgniter</p>
              <div className='sosial-link'>
                <a href='https://www.instagram.com/virgonista/' target='blank'>
                  <i class="fab fa-instagram"></i>
                </a>
                <a href='https://id.linkedin.com/in/lukmanul-hakim-710277185' target='blank'>
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href='https://www.youtube.com/channel/UClpC5Z5ET9DKpinehSOvKdw' target='blank'>
                  <i class="fab fa-youtube"></i>
                </a>
                <a href='https://www.facebook.com/LUKMAN.VIRG' target='blank'>
                  <i class="fab fa-facebook"></i>
                </a>
                <a href='https://twitter.com/HAKIMVirg?lang=en' target='blank'>
                  <i class="fab fa-twitter"></i>
                </a>
                <a href='https://github.com/LukmanulHakim18' target='blank'>
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage
