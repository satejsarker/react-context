import React, {
  Component
} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../src/Components/layout/Header';
import Contacts from './Components/contact/Contacts';
import { Provider } from './context';
import AddContact from './Components/contact/AddContact';


class App extends Component {
  render() {
    return (
      <Provider>
              <div className = "App" >
                <Header branding = "Contact Manger" / >
                <div className = "container" >
                <AddContact />
                <Contacts / >
                </div>
                </div>

      </Provider>
    );
  }
}

export default App;