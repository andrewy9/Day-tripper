import React from 'react'
import { connect } from 'react-redux'

export class Footer extends React.Component {
  render() {
    return (
      <>
        day tripper
        <p style={{ color: 'darkgrey', fontSize: '.75rem', padding: '50px', marginTop: '50px' }}>  copyright  2020 </p>

      </>
    )
  }
}

function mapStateToProps() {
  return {
  }
}

export default connect(mapStateToProps)(Footer)
