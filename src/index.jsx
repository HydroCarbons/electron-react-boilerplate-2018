import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Image, Label, Well, ListGroup } from 'react-bootstrap';
import logo from "./hycabp.png";
import { remote } from "electron";

class App extends Component {
  render() {
    return <Well>
            <Image src={logo} alt="App Logo" height="64px"></Image>
            <p>
              React <sup><Label>Component</Label></sup>
            </p>
          </Well>;
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('react-div')
);
