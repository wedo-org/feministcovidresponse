import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { ContentfulClient, ContentfulProvider } from 'react-contentful';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const contentfulClient = new ContentfulClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
});

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
