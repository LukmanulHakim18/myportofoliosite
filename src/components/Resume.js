import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import me from '../image/me.jpg';
import Education from './Education';
import Experience from './Experience';
import Skil from './Skil';

export class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col ={4}>
            <div style={{textAlign:'center'}}>
              <img 
                src={me}
                alt="Avatar"
                style={{height:'200px', borderRadius:'20px'}}
              /> 
            </div>
            <h2 style={{paddingTop:'2em'}}> Lukmanul Hakim </h2>
            <h4 style={{color:'grey'}}>Programmer</h4>
            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            
            <h4 style={{color:'grey'}}>Address</h4>
            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
            <p>JL.Saptamarga, GG. Samariinda V, </p>
          </Cell>
          <Cell col ={8} className='resume-right-cel'>
            <h2>Education</h2>            
            <Education 
              startYear={2000}
              endYear={2007}
              schoolName='MI Sabilil Huda'
              schoolDescription='making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur'
            />
            <Education 
              startYear={2007}
              endYear={2010}
              schoolName='MTsN Enok'
              schoolDescription=' looked up one of the more obscure Latin words, consectetur'
            />
            <Education 
              startYear={2010}
              endYear={2013}
              schoolName='MAN Tembilahan'
              schoolDescription=' looked up one of the more obscure Latin words, consectetur'
            />
            <Education 
              startYear={2013}
              endYear={2018}
              schoolName='UIN Suska'
              schoolDescription=' looked up one of the more obscure Latin words, consectetur'
            />
            <hr style={{borderTop:'3px solid #e22947'}}/>
            <h2>Experience</h2>            
            <Experience               
              startYear={2019}
              endYear='Until Now'
              jobName='PT. Sprint Asia'
              jobDescription=' looked up one of the more obscure Latin words, consectetur'
            />
            <hr style={{borderTop:'3px solid #e22947'}}/>
            <h2>Skill</h2>
            <Skil
              skill = 'ReactJS'
              value = {75}
            />
            <Skil
              skill = 'HTML/CSS'
              value = {80}
            />
            <Skil
              skill = 'PHP'
              value = {75}
            />
            <Skil
              skill = 'C#'
              value = {50}
            />
          </Cell>          
        </Grid>
      </div>
    )
  }
}

export default Resume
