import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <App />
    </Router>
    ,
  </MuiThemeProvider>,
  document.getElementById('root'),
);
