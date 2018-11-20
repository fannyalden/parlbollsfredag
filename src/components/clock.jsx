import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props); //base class
    console.log("constructor");
    this.state = {
      deadline: null,
      day: null,
      time: {
        hour: null,
        minute: null,
        second: null
      }
    };
  }
  //called before render()
  componentWillMount() {
    this.setState({ deadline: this.getNextFriday(this.props.date) });
    this.getTimeUntilFriday();
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntilFriday(), 1000);
  }

  getNextFriday(date) {
    const daysForward = 7 - ((date.getDay() + 2) % 7);
    const nextFriday = new Date(+date + daysForward * 24 * 60 * 60 * 1000);
    nextFriday.setHours(0);
    nextFriday.setMinutes(0);
    nextFriday.setSeconds(0);
    return nextFriday;
  }

  addZero(value) {
    return value < 10 ? "0" + value : value;
  }

  getTimeUntilFriday() {
    const currentDate = new Date();
    const timeDiff =
      Date.parse(new Date(this.getNextFriday(currentDate))) -
      Date.parse(currentDate);
    const second = Math.floor((timeDiff / 1000) % 60);
    const minute = Math.floor((timeDiff / 1000 / 60) % 60);
    const hour = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    this.setState({
      day,
      time: { hour, minute, second }
    });
  }

  render() {
    const { day, time } = this.state;
    const condition = day === 0;
    console.log(condition);
    return (
      <React.Fragment>
        {condition ? (
          <p>nu är det nära!</p>
        ) : (
          <div className="clock-day">{day} dagar </div>
        )}

        <div>
          <div className="clock-hour">{this.addZero(time.hour)}:</div>
          <div className="clock-day">{this.addZero(time.minute)}:</div>
          <div className="clock-second">{this.addZero(time.second)}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Clock;
