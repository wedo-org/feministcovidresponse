import { ContentfulClient } from 'react-contentful';


const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    space: process.env.REACT_APP_CONTENTFUL_SPACE
});

const getEntries = () => {
    contentfulClient.getEntries()
    .then((response) => {
        console.log("ENTRIES", response.items);
        return response.items
    })
.catch(console.error)
}

const getContentType = () => {
    contentfulClient.getContentType('resource')
    .then((response) => {
        console.log("CONTENT TYPE RESPONSE", response)
        return response
    })
.catch(console.error)
}

export { getEntries, contentfulClient, getContentType }