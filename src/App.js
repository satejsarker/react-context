import React, {
  Component
} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../src/Components/layout/Header';
import Contacts from './Components/contact/Contacts';
import { Provider } from './context';
import AddContact from './Components/contact/AddContact';
import About from './Components/pages/About';
import NotFound from './Components/pages/404';
import Test from './Components/test/test';


class App extends Component {
  render() {
    return <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manger" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                

              <Route exact path='/test' component={Test} />
              {/* page not found  */} 
                <Route component={NotFound}  />

                {/* for parameter 
                                
                                
                                  <Route exact path="/about/:id" component={About} /> 
                                  */}
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>;
  }
}

export default App;