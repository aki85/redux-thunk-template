import React, { Component } from 'react'

import enhancer from '@/redux/allEnhancer'

class Header extends Component {
  render() {
    return (
      <div>header</div>
    )
  }
}

export default enhancer(Header)
