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
        <>
        <h1>ABOUT</h1>
            ABOUT PAGE
        </>
    )
}}
</Query>
) 

export default About;
