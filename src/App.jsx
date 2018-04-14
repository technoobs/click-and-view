
import React from 'react';
import { Link, Route, BrowserRouter, Switch} from 'react-router-dom';
import AppBody from './AppBody.jsx';
import TitleDiv from './WebTitle.jsx';
import About from './About.jsx';
import './css/main-style.css';
import './css/service-style.css';
import './css/demo-style.css';
import './css/override-style.css';
import './css/mockmock.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" render={(props) => (
              <div>
                <div id="head-div">
                  <TitleDiv {...props} titleName={this.props.titleItem.titleLogo} titleHome={this.props.titleItem.navHome}
                  titleDemo={this.props.titleItem.navDemo} titleProduct={this.props.titleItem.navProduct} titleAbout={this.props.titleItem.navAbout}/>
                </div>
                {/*<div id="body-div">
                  <AppBody {...props} titleName={this.props.titleItem.titleLogo} />
                </div>*/}
              </div>
            )} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
