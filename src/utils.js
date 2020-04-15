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

// gets all resources (i.e. not countries, not themes, not types)
const getAllResources = async () => {
    let entries = await getEntries()
   return entries.filter((entry) => entry.sys.contentType.sys.id === "resource")
}

// (async () => console.log(await getAllResources()))()

// returns resources for each page -- it accepts an argument of a string that's the name of the page
const getResourcesForThePage = (str) => {
    return getEntries().filter((entry) => entry.fields.category.fields.name === str)
}
// console.log(getResourcesForThePage("Tools"))
// console.log(getResourcesForThePage("Policy"))

/////////////// RETURNS ALL AVAILABLE COUNTRIES
const getCountries = () => {
    return getEntries().filter((entry) => entry.sys.contentType.sys.id === "country").map((c) => c.fields.name)
}
// console.log(getCountries());

/////////////// RETURNS ALL AVAILABLE THEMES
const getThemes = () => {
    return getEntries().filter((entry) => entry.sys.contentType.sys.id === "name").map((c) => c.fields.name)
}
// console.log(getThemes())



export { getEntries, contentfulClient, getAllResources, getThemes, getCountries, getResourcesForThePage }
