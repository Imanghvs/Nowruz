import React from 'react';
import ReactDOM from 'react-dom';
import './nowruz.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Name:'', page:1};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({page: this.state.page + 1});
  }
  handleChange(event) {
    this.setState({Name: event.target.value});
  }
  render() {
    if (this.state.page===1){
      return (
        <div className="HOMEDIV">
          <form onSubmit={this.handleSubmit}>
            <div className="HighlitedTextDiv">
              <h1 className="Highlighted">
                Hi! Happy Nowruz! <br />
                Please enter your information to get the best recommendation for you! <br />
              </h1>
            </div>
            <input type="submit" className="submitButton" value="Let's Start!" />
          </form>
        </div>
      );
    }
    if (this.state.page===2) {
      return (
        <div className="PI">
          <form onSubmit={this.handleSubmit}>
            <div className="inputElement">
              <label>First Name: </label>
              <input type="text" onChange={this.handleChange} /> <br />
              <label>Last Name: </label>
              <input type="text" /> <br />
            </div>
            <div className="inputElement">
              <label>Gender</label> <br />
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Male</label><br />
              <input type="radio" id="female" name="gender" value="female" />
              <label htmmlFor="female">Female</label><br />
            </div>
            <div className="inputElement">
              <label>Age</label> <br />
              <input type="text" /> <br />
            </div>
            <div className="inputElement">
              <label>Blood type</label>
              <input type="text" /> <br />
              <label>Weight: </label>
              <input type="text" /> <br />
            </div>
            <input type="submit" className="submitButton" value="Submit" />
          </form>
        </div>
      );
    }
    if (this.state.page===3) {
      if(this.state.Name==='') {
        alert('Please enter your name!');
        this.setState({page:2});
      }
      return (
        <div className="FinalDiv">
          <form>
            <div className="HighlitedTextDiv">
              <h1 className="Highlighted">
                Dear {this.state.Name}, <br />
                We have found out that the best thing for you is to <br />
                <span id="warning">STAY HOME!</span> <br />
                Please take it serious and don't help the coronavirus to spread. <br />
              </h1>
            </div>
            <p>
              Made by: Iman Ghavasieh <br />
              Instagram ID: @Iman_ghvs
            </p>
          </form>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
