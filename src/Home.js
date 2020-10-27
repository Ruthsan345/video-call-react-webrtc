import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"
import {Link} from 'react-router-dom';


class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<>
			
			<div className="container2">
				
				
				<div>
					<h1 class="head" style={{ color: "white",fontSize: "45px" }}>Share a Story !!</h1>
					<p style={{  color: "white", fontWeight: "200" }}>Start a Story Telling Session Through Video Conference that lets you stay in touch with  your Clan.</p>
				</div>

				<div style={{
					background: "#ced5e0", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Start or join a meeting</p>
					<Input placeholder="URL" onChange={e => this.handleChange(e)} />
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Go</Button>
				</div>
			</div><br/><br/><br/><br/><br/>
			<Link to={{
				pathname:'exit',
				}} >
				<Button variant="contained" color="secondary" size="large">Exit</Button>
			  </Link>
			</>
		)
	}
}

export default Home;