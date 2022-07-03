import React, { Component } from "react";

import { connect } from "react-redux";
import { createAddress } from "../actions/address";

class AddAddress extends Component {
  constructor (props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEMail = this.onChangeEMail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeAddrNumber = this.onChangeAddrNumber.bind(this);
    this.onChangeStreet = this.onChangeStreet.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeZip = this.onChangeZip.bind(this);
    this.saveAddress = this.saveAddress.bind(this);
    this.newAddress = this.newAddress.bind(this);
    this.state = {
      id: null,
      name: "",
      email: "",
      phone: "",
      addrNumber: "",
      street: "",
      city: "",
      country: "",
      zip: ""
    };
  }
  onChangeName (e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeEMail (e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePhone (e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangeAddrNumber (e) {
    this.setState({
      addrNumber: e.target.value,
    });
  }
  onChangeStreet (e) {
    this.setState({
      street: e.target.value,
    });
  }
  onChangeCity (e) {
    this.setState({
      city: e.target.value,
    });
  }
  onChangeCountry (e) {
    this.setState({
      country: e.target.value,
    });
  }
  onChangeZip (e) {
    this.setState({
      zip: e.target.value,
    });
  }
  saveAddress () {
    const { name, email, phone, addrNumber, street, city, country, zip } = this.state;
    this.props
      .createAddress(name, email, phone, addrNumber, street, city, country, zip)
      .then((data) => {
        this.setState({
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          addrNumber: data.addrNumber,
          street: data.street,
          city: data.city,
          country: data.country,
          zip: data.zip
        });
        // console.log("saved data ",data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newAddress () {
    this.setState({
      id: null,
      name: "",
      email: "",
      phone: "",
      addrNumber: "",
      street: "",
      city: "",
      country: "",
      zip: ""
    });
  }
  render () {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newAddress}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMail</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEMail}
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                required
                value={this.state.phone}
                onChange={this.onChangePhone}
                name="phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="addrNumber">#No</label>
              <input
                type="text"
                className="form-control"
                id="addrNumber"
                required
                value={this.state.addrNumber}
                onChange={this.onChangeAddrNumber}
                name="addrNumber"
              />
            </div>

            <div className="form-group">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                className="form-control"
                id="street"
                required
                value={this.state.street}
                onChange={this.onChangeStreet}
                name="street"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                required
                value={this.state.city}
                onChange={this.onChangeCity}
                name="city"
              />
            </div>

            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                className="form-control"
                id="country"
                required
                value={this.state.country}
                onChange={this.onChangeCountry}
                name="country"
              />
            </div>

            <div className="form-group">
              <label htmlFor="zip">Zip/Pin</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                required
                value={this.state.zip}
                onChange={this.onChangeZip}
                name="zip"
              />
            </div>

            
            <button onClick={this.saveAddress} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default connect(null, { createAddress })(AddAddress);