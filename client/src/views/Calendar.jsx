import React from 'react'
import httpClient from '../httpClient'

class Calendar extends React.Component {

  render() {

    return (
      <div className="Releases">
        <div className="container">
          <div className="Featured-head text-center">
            <h1>Calendar</h1>
            <p className="calener-desc">When To Cop</p>
          </div>
          <div className="calender-stage ">
            <h5 className="text-center">January 2020</h5>
            <div className="calender-week">
              <span>sun</span>
              <span>mon</span>
              <span>tue</span>
              <span>wed</span>
              <span>thu</span>
              <span>fri</span>
              <span>sat</span>

            </div>
            <div className="calender-day">
              <span>31

                        </span>
              <span>1</span>
              <span>2
                            <i>Jordan 1 SE</i>
              </span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>

              <span>31</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>


              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>


              <span>14</span>
              <span>15</span>
              <span>16</span>
              <span>17</span>
              <span>18</span>
              <span>19</span>
              <span>20</span>


              <span>21</span>
              <span>22</span>
              <span>23</span>
              <span>24</span>
              <span>25</span>
              <span>26</span>
              <span>27</span>



              <span>28</span>
              <span> 29</span>
              <span> </span>
              <span> </span>
              <span> </span>
              <span></span>
              <span> </span>



            </div>


          </div>
          <img src="/assest/images/shape.png" className="shape2" alt=""/>
        <img src="/assest/images/shape.png" className="shape3" alt=""/>
        </div>
        
      </div>
    )
  }
}

export default Calendar