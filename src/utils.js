import { ContentfulClient } from 'react-contentful';

const contentfulClient = new ContentfulClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  space: process.env.REACT_APP_CONTENTFUL_SPACE
});

const getEntries = async () => {
  try {
    let entries =  await contentfulClient.getEntries()
    return entries.items
    } catch(e){
    console.error(e.message)
  }
}


const getContentType = async () => {
  try {
    let response = await contentfulClient.getContentType('resource')
    return response
  } catch(e){
    console.error(e.message);
  }
}



export { getEntries, contentfulClient, getContentType }
