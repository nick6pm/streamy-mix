import React from 'react';
import ReactDOM from 'react-dom';
import config  from './aws-exports'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AmplifyProvider } from '@aws-amplify/ui-react'

Amplify.configure(config)

ReactDOM.render(

  <AmplifyProvider>
      <App />
  </AmplifyProvider>,
  document.getElementById('root')
);

reportWebVitals();