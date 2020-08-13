import React from 'react'
import ReleaseDetail from './components/ReleaseDetail'
import Release from './components/Release'

class NewReleases extends React.Component {
  
  render() {
    return(
    <div className="Releases">
      <div className="container">
        <div className="Featured-head text-center single-page">
          <h1>New Releases</h1>
          <p>Info on All New Releases</p>
        </div>
        <div className="row mt-5">
          <ReleaseDetail />
          <ReleaseDetail />
          <ReleaseDetail />
          <ReleaseDetail />
          <ReleaseDetail />
          <ReleaseDetail />

        </div>

      </div>
      <img src="/assest/images/shape.png" className="shape2" alt=""/>
      <img src="/assest/images/shape.png" className="shape6" alt=""/>
    </div>
    )
  }
}

export default NewReleases