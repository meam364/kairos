import React, { PureComponent } from 'react';
import { Provider } from 'react-redux'
import Header from './components/Header/Header'
import HomePage from './Containers/Home/HomePage';
import TourPage from './Containers/Tour/TourPage';
import store from './reducers';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import './App.css';

class App extends PureComponent {
  render() {
    console.log(store.getState());

    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header />
                    <Route exact path='/' component={HomePage} />
                    <Route path='/tour/:id' component={TourPage} />
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
