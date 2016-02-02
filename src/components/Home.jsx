import React from 'react';
import * as RB from 'react-bootstrap';

class Home extends React.Component {

  render() {
    return (
      <div>
        <RB.Navbar>
          <RB.Navbar.Header>
            <RB.Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </RB.Navbar.Brand>
            <RB.Navbar.Toggle />
          </RB.Navbar.Header>
          <RB.Navbar.Collapse>
            <RB.Nav>
              <RB.NavItem eventKey={1} href="#">Link</RB.NavItem>
              <RB.NavItem eventKey={2} href="#">Link</RB.NavItem>
              <RB.NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <RB.MenuItem eventKey={3.1}>Action</RB.MenuItem>
                <RB.MenuItem eventKey={3.2}>Another action</RB.MenuItem>
                <RB.MenuItem eventKey={3.3}>Something else here</RB.MenuItem>
                <RB.MenuItem divider />
                <RB.MenuItem eventKey={3.3}>Separated link</RB.MenuItem>
              </RB.NavDropdown>
            </RB.Nav>
          </RB.Navbar.Collapse>
        </RB.Navbar>
        <RB.PageHeader>
          <div className="container">
            <h1>Sample Layout</h1>
          </div>
        </RB.PageHeader>
        <div className="container">
          <RB.Jumbotron>
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p><RB.Button bsStyle="primary">Learn more</RB.Button></p>
          </RB.Jumbotron>
          <RB.ButtonToolbar>
            <RB.Button>Default</RB.Button>
            <RB.Button bsStyle="primary">Primary</RB.Button>
            <RB.Button bsStyle="success">Success</RB.Button>
            <RB.Button bsStyle="info">Info</RB.Button>
            <RB.Button bsStyle="warning">Warning</RB.Button>
            <RB.Button bsStyle="danger">Danger</RB.Button>
            <RB.Button bsStyle="link">Link</RB.Button>
          </RB.ButtonToolbar>
        </div>
        <RB.Navbar fixedBottom inverse>
          <RB.Navbar.Header>
            <RB.Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </RB.Navbar.Brand>
            <RB.Navbar.Toggle />
          </RB.Navbar.Header>
          <RB.Navbar.Collapse>
            <RB.Nav>
              <RB.NavItem eventKey={1} href="#">Link</RB.NavItem>
              <RB.NavItem eventKey={2} href="#">Link</RB.NavItem>
              <RB.NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <RB.MenuItem eventKey={3.1}>Action</RB.MenuItem>
                <RB.MenuItem eventKey={3.2}>Another action</RB.MenuItem>
                <RB.MenuItem eventKey={3.3}>Something else here</RB.MenuItem>
                <RB.MenuItem divider />
                <RB.MenuItem eventKey={3.3}>Separated link</RB.MenuItem>
              </RB.NavDropdown>
            </RB.Nav>
          </RB.Navbar.Collapse>
        </RB.Navbar>
      </div>
    );
  }
}

export default Home;
