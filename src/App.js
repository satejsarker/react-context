import React, {
  Component
} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../src/Components/Header';
import Contacts from './Components/Contacts';
import { Provider } from './context';


class App extends Component {
  render() {
    return (
      <Provider>
              <div className = "App" >
                <Header branding = "Contact Manger" / >
                <div className = "container" >
                <Contacts / >
                </div>
                </div>

      </Provider>
    );
  }
}

export default App;