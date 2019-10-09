import React, {Component} from 'react';
import {Add, Remove, Clear} from './Actions/Actions';
import {connect} from 'react-redux'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import logo from './Components/Reminders.png'

import './App.css';

class App extends Component{
  state= {
    text: '',
    date: new Date()
  }

  handleReminders =() => {
    const {reminders} = this.props;
    return (
      <ul className='list-group'>
        {
          reminders.map(item => {
            return (
              <li className='list-group-item' key={item.id}>
                  <div>{item.text}</div>
                  <div>{moment(new Date(item.date)).fromNow()}</div>
                  <button className='btn btn-danger text-capitalize' onClick={() => this.props.Remove(item.id)}>remove</button>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {

    return (
      <div className="App">
        <div>        
          <img src={logo} className='d-block' alt='Reminder'/>
        </div>
  
        <div className='title mt-3 mb-3 text-center'>
          <h2 className='text-capitalize'>what should i do?</h2>
        </div>
  
            <input  type='text'
                    placeholder='Enter What U Think ....?'
                    value={this.state.text}
                    className='form-control mb-3'
                    onChange={(e) => this.setState({text: e.target.value})}
            />

            <DatePicker
                value={this.state.date}
                placeholderText='Enter Date'
                className='form-control'
                selected={this.state.date}
                onChange={date => this.setState({date: date})}
                showTimeSelect
                timeFormat="HH:mm"
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
            />


            <button className='btn btn-primary text-capitalize btn-block mb-3 mt-3'
                    onClick={() => {
                      this.props.Add(this.state.text, this.state.date)
                      this.setState({text: '', date: ''})
                    }}
            >add reminder</button>

            {this.handleReminders()}

            <button className='btn btn-danger text-capitalize btn-block mt-2'
                    onClick={() => this.props.Clear()}
            >clear reminder</button>
  
      </div>
    );
  }

}

export default connect(state => {
  return {reminders:state}
}, {Add, Remove, Clear})(App);
