import React from 'react';
import { Query } from 'react-contentful';

const About = (props) => (

    <Query
        contentType="page"
    >

    {({data, error, fetched, loading}) => {
        console.log("DATA", data);
        console.log("FETCHING", fetched);
        console.log("LOADING", loading);
        console.log("ERROR", error);

      if (loading || !fetched) {
        return null;
      }

      if (error) {
        console.error(error);
        return null;
      }

      if (!data) {
        return <p>Page does not exist.</p>;
      }

      // See the Contentful query response
      console.debug(data);
    return (
        <section className='main-content'>
            <h1>ABOUT</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        </section>
    )
}}
</Query>
)

export default About;
