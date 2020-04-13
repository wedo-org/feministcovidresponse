import { ContentfulClient } from 'react-contentful';
import axios from 'axios';


const contentfulClient = new ContentfulClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  space: process.env.REACT_APP_CONTENTFUL_SPACE
});

const getEntries = () => {
    return contentfulClient.getEntries()
    .then((response) => {
        console.log("ENTRIES", response.items);
        return response.items
    })
.catch(console.error)
}

const getEntriesAxios = async () => {
    let data = await contentfulClient.getEntries()
    // console.log(data);
//     .then((response) => {
//         console.log("ENTRIES", response.items);
//         return response.items
//     })
// .catch(console.error)
return data;
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
