import React, { Component } from 'react'
import { Grid, Cell, ProgressBar } from 'react-mdl';

export class Skil extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div col={3} style={{ margin: 'auto', width: '100%' }}>
            {this.props.skill} 
          </div>
          <div col={9} >
            <ProgressBar progress={this.props.value} style={{ margin: 'auto', width: '100%'}} />
          </div>
        </Cell>
      </Grid>
      // <Grid>
      //   <Cell col={12}>
      //     <div style={{ display: 'flex' }}>
      //       {this.props.skill} <ProgressBar progress={this.props.value} style={{ margin: 'auto', width: '75%', alignItems:'right' }} />
      //     </div>
      //   </Cell>
      // </Grid>
    )
  }
}

export default Skil
