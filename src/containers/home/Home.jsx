import React, { Component } from 'react'

import enhancer from '@/redux/allEnhancer'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>home</h1>
        <div onClick={() => this.props.actions.signIn({email: 'ema', password: 'pass'})}>click</div>
      </div>
    )
  }
}

export default enhancer(Home)
