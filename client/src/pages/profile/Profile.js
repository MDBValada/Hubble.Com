import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron,} from "reactstrap";

const hobbie =[]

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  
  getSession = () => {
    // Get saved data from localStorage
    for (let key in this.state) {
        if (localStorage.hasOwnProperty(key)) {
            // get the key's value from localStorage
            let value = localStorage.getItem(key);

            // parse the localStorage string and setState
            try {
                value = JSON.parse(value);
                this.setState({ 'user': value });
            } catch (e) {
                // handle empty string
                this.setState({ [key]: value });
            }
        }
    }
}


componentDidMount() {
    this.getSession();
}

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Hello, {this.props.user.first_name}</h1>
              <h4 className="hobbyJmbo">Welcome to your new Hubble page.</h4>
              <hr className="my-2" />
              <p className="hobbyJmb">This your Home page where you can access your Personality info and manage your Hobby list.</p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <Jumbotron>
              <h1>{this.props.user.personality} is Who you are...</h1>
              <hr className="my-2" />
              <h4 className="hobbyJmbo">Now let's talk about what you might like to do.</h4>
              <p>
                lets MAP out their Hobbies out here and add the functionality for the MEETUP.com API to show in a modal
                </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;

