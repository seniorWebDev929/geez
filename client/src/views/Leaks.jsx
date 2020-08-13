import React from 'react'
import LeakDetail from './components/LeakDetail'
import httpClient from '../httpClient'

class Leaks extends React.Component {

  render() {

    return (
      <div className="Releases" >
        <div className="container">
          <div className="Featured-head text-center">
            <h1>Release Leaks</h1>
            <p className="calener-desc">Info On Leaks</p>
          </div>
          <div className="container">
            <div className="row">
              <LeakDetail />
              <LeakDetail />
            </div>
          </div>
        </div>
        <img src="/assest/images/shape.png" className="shape2" alt=""/>
        <img src="/assest/images/shape.png" className="shape3" alt=""/>
      </div>
		)
	}
}

export default Leaks