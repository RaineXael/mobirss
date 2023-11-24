let Parser = require('rss-parser');
let parser = new Parser();

/**
 * Fetches and returns an object representation of an RSS Feed 
 * @param {string} link Link of the RSS feed to fetch 
 * @returns An object representation of the feed, an empty object if not found
 */
export async function fetchFeed(link){
  try{
    let feed = await parser.parseURL(link);
    return(feed);
  }
  catch{
    return {};
  }
};