const fs = require('fs');
const link = "https://www.sdamned.com/comic/rss";
const fileURL = "./RSSCONTENT.json";
let Parser = require('rss-parser');
let parser = new Parser();

//

(async () => {

    let feed = await parser.parseURL(link);
    console.log(feed);
    
    feed.items.forEach(item => {
    //  console.log(item)
    });
    fs.writeFileSync(fileURL, JSON.stringify(feed.items))
  })();