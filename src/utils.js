import { ContentfulClient } from 'react-contentful';

const contentfulClient = new ContentfulClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  space: process.env.REACT_APP_CONTENTFUL_SPACE
});

const fetchEntries = async () => {
  try {
    let entries =  await contentfulClient.getEntries()
    return entries.items
    } catch(e){
    console.error(e.message)
  }
}

// gets all resources (i.e. not countries, not themes, not types)
const fetchAllResources = async () => {
    let entries = await fetchEntries()
   return entries.filter((entry) => entry.sys.contentType.sys.id === "resource")
}

// returns resources for each page -- it accepts an argument of a string that's the name of the page
const fetchResourcesForThePage = async (str) => {
  let entries = await fetchAllResources()
    return entries.filter((entry) => entry.fields.category.fields.name === str)
}

/////////////// RETURNS ALL AVAILABLE COUNTRIES
const fetchCountries = async () => {
  let entries = await fetchEntries()
  return entries.filter((entry) => entry.sys.contentType.sys.id === "country").map((c) => c.fields.name)
}

/////////////// RETURNS ALL AVAILABLE THEMES
const fetchThemes = async () => {
  let entries = await fetchEntries()
  return entries.filter((entry) => entry.sys.contentType.sys.id === "name").map((c) => c.fields.name)
}

export { fetchEntries, contentfulClient, fetchAllResources, fetchThemes, fetchCountries, fetchResourcesForThePage }
