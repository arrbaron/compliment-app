
import Calendar from 'react-calendar';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppNav from '../components/AppNav';
import Footer from '../components/Footer';


import './styles/InboxPage.css';

class InboxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.dateForCompliments = this.dateForCompliments.bind(this);
  }

  handleDateChange(date) {
    this.setState({ date });
  }

  dateForCompliments() {
    const date = new Date(this.state.date);
    return (
      `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    );
  }

  render() {
    return (
      <div className="inbox-page">
        <AppNav />
        <h1>Your Inbox</h1>
        <div>

          <section className="calendar-wrapper">
            <Calendar
              onChange={this.handleDateChange}
              value={this.state.date}
            />
          </section>

          <section className="compliments">
            <h2>
              Your message for <span>{this.dateForCompliments()}</span>
            </h2>
            <ul>
              {this.props.compliments.map((quote, i) => {
                return <li>"{quote}"</li>
              }) }
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

InboxPage.propTypes = {
  compliments: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
  compliments: state.complimentsReducer.compliments
});

export default connect(mapStateToProps)(InboxPage);