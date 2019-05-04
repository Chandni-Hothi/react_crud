import React, { Component } from 'react';

import './App.css';
import axios from 'axios'
import mongoose from 'mongoose'
class App extends Component {

constructor(props) {
	super(props);
	this.state={id:""};
	this.handleSubmit = this.handleSubmit.bind(this);
	}

handleSubmit(){
	const unm=document.getElementById("name").value;
	const pass=document.getElementById("pass").value;
	const dt=document.getElementById("date").value;
	const dtm=document.getElementById("date_time").value;
	const f=document.getElementById("file").files.item(0);

	var d = new FormData();
	d.append('files',f);
	var r = "";
	axios.post('http://localhost:1337/upload',d).then(res=>{
	var r = res.data;
	r.map(b=>{console.log('start');this.setState({id:b.id});console.log(this.state.id);
	axios.post('http://localhost:1337/testcruds/',
	{
	name:unm,
	password:pass,
	date:dt,
	datetime:dtm,
	file:this.state.id
	}).then(res=>{
	console.log(res.data);});});
	});
	console.log('end');
//	axios.post('http://localhost:1337/upload',data).then(res=>console.log(res));}


	//axios.post('http://localhost:1337/upload',d).then(res=>console.log(res));
	console.log('final end');
}




  render() {
    return (
      <div className="App">
        <div className="container" >
			<form className="form-vertical" onSubmit={this.handleSubmit}>
				<div className="form-group ">
					<div className="col-xs-12 col-sm-12 col-md-12">
						<input className="form-control input-lg" placeholder="Name" required="required" type="text" id="name"></input>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-12">
						<input className="form-control input-lg" placeholder="Password" required="required" type="password" id="pass"></input>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-12">
						<input className="form-control input-lg" placeholder="Date" required="required" type="date" id="date"></input>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-12">
						<input className="form-control input-lg" placeholder="Datetime" required="required" type="datetime-local" id="date_time"></input>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-12">
						<input className="form-control input-lg" placeholder="File" required="required" type="file" id="file" ></input>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-12">
						<input className="form-control input-lg" placeholder="Password" required="required" type="submit" id="submit"></input>
					</div>
				</div>

			</form>
		</div>
      </div>
    );
  }
}

export default App;
