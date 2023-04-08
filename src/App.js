/**
 * Main APP
 */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// App Conatiner
import App from './container/App';

// Firebase
import './firebase';

// Hulk CSS
import './lib/hulkCss';

// Store
import { store } from './redux/store';

function MainApp() {
	return (
    <>
      <ToastContainer 
      position= "top-right"
      autoClose= "5000"
      hideProgressBar= {false}
      closeOnClick= {true}
      pauseOnHover= {true}
      draggable= {true}
      progress= {undefined}
      theme= "colored"
      />
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router>
            <Switch>
              <Route path="/" component={App} />
            </Switch>
          </Router>
        </MuiPickersUtilsProvider>
      </Provider>
    </>
  );
}

export default MainApp;