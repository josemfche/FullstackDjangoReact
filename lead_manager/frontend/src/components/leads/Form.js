import React, { Component } from "react";
import { connect } from "react-redux";
import { addLead } from "../../actions/leads";
import PropTypes from "prop-types";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              id="ExamplenameInput"
              aria-describedby="nameHelp"
              onChange={this.onChange}
              value={name}
            />
            <label htmlFor="ExamplenameInput">Name</label>
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.onChange}
              value={email}
            />
            <label htmlFor="exampleInputEmail1">Email address</label>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Message</label>
            <input
              type="text"
              name="message"
              className="form-control"
              id="exampleInputMessage1"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);
