import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { ContentfulProvider } from 'react-contentful';
import './index.css';
import { getEntries, contentfulClient, getContentType } from './utils.js'
import App from './App';
import * as serviceWorker from './serviceWorker';

// these are here only so I can see what response I'm getting
// getEntries()
// getContentType()

const routing = (
  <ContentfulProvider client={contentfulClient}>
    <BrowserRouter>
          <Route component={App} />
    </BrowserRouter>
  </ContentfulProvider>
)

ReactDOM.render(routing, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
