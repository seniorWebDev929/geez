import React from 'react';
import httpClient from '../httpClient';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    httpClient.getNotReleasedProducts().then(productInfo => {
      this.setState({products: productInfo})
    })
  }
  render() {
    let events = [];
    const products = this.state.products;
    console.log(products);
    products.map((item, index) => {
      console.log(index);
      const obj = {}
      obj.title = item.name;
      obj.date = item.release_date.split('T')[0];;
      events.push(obj);
      // events[index].title = item.name;
      // events[index].date = item.release_date.split('T')[0];
    })
    return (
      <div className="Releases calendar_container">
        <div className="container">
          <div className="Featured-head text-center">
            <h1>Calendar</h1>
            <p className="calener-desc">When To Cop</p>
          </div>
        </div>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={events}
        />
        <img src="/assest/images/shape.png" className="shape2" alt=""/>
        <img src="/assest/images/shape.png" className="shape3" alt=""/>
      </div>
    )
  }
}

export default Calendar