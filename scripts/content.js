
const fabrics = {
    "polyethylene": 5.07,
    "viscose": 15.9,
    "aramid": 9.6,
    "wool": 45.5,
    "elastane": 8.95,
    "acrylic": 14.2,
    "flax": 12.6,
    "modal": 17.7,
    "nylon": 15.3,
    "polyester": 9.62,
    "cotton": 8.87,
    "acetate": 18,
    "silk": 85.9,
    "alpaca": 78.6,
    "hemp": 13,
    "polypropylene": 8.65
}

//function to decimal
function percentageToDecimal(str) {
    // Remove percent symbol from string
    let numStr = str.replace('%', '');
    // Convert string to decimal number and return
    return parseFloat(numStr) / 100;
}  

//function to get average score
function getScore(obj1) {
    //find the object's keys in the fabrics' keys
    //multiply the object's value by the fabrics' value
    //get the sum
    let sum = 0;
    for (let key1 in obj1) {
      const key2 = Object.keys(fabrics).find(k => k.toLowerCase() === key1.toLowerCase());
      if (key2) {
        sum += obj1[key1] * fabrics[key2];
      }
    }
    return sum;
  

}

const h = document.querySelector("#buy-now-button");
//const materials = document.querySelector("#feature-bullets > ul > li:nth-child(1) > span");
const materials = document.querySelector('#productFactsExpander > div.a-expander-content.a-expander-partial-collapse-content > div:nth-child(3) > span');


// `document.querySelector` may return null if the selector doesn't match anything.
if (materials) {
  console.log("materials have been found");
  const text = materials.textContent;
  let filteredMaterials = text.replace(/,/g, '');
    console.log("filtered materials: ", filteredMaterials);
    //get percentages as an object
    let arr = filteredMaterials.split(" ");
    //create object
    let materialsObj = {};
    for (let i=0; i<arr.length; i++) {
        if (i % 2 === 1) {
            materialsObj[arr[i]] = percentageToDecimal(arr[i-1])
        }
    }
    console.log(materialsObj);
    console.log("Global Warming Impact Score:", getScore(materialsObj));


  /*
  const text = materials.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  //badge.textContent = `⏱️ ${readingTime} min read`;
  badge.textContent = text;

  // Support for API reference docs
  const heading = document.querySelector("h1");

  heading.insertAdjacentElement("afterend", badge); */
}

/*


// Send a request to the website and receive the HTML response
request('https://www.aritzia.com/us/en/product/sculpt-knit-criss-cross-cropped-tank/77075.html?dwvar_77075_color=30252', (error, response, html) => {
  if (!error && response.statusCode === 200) {
    // Load the HTML into a Cheerio object
    const $ = cheerio.load(html);
    
    // Select the first element and extract its text content
    const category = $('#main > div.clearfix.product-leading-details-bar.grid_30.prefix_1.suffix_1 > div > div.product-leading-details-bar__breadcrumbs.fl-ns.order-1 > div > ul > li:nth-child(3) > span > a').text();
    
    // Select the second element and extract its text content
    const materials = $('#pdp-panel__details > div > div:nth-child(4) > ul > li:nth-child(1)').text();
    let filteredMaterials = materials.replace(/,/g, '');
    filteredMaterials = filteredMaterials.replace("Content: ", '');
    console.log("filtered materials: ", filteredMaterials);
    //get percentages as an object
    let arr = filteredMaterials.split(" ");
    //create object
    let materialsObj = {};
    console.log(arr);
    for (let i=0; i<arr.length; i++) {
        if (i % 2 === 1) {
            materialsObj[arr[i]] = percentageToDecimal(arr[i-1])
        }
    }
    console.log(materialsObj);
    // Log the text content of the selected elements
    console.log(`Category: ${category}`);
    console.log(`Materials: ${materials}`);
    console.log(getScore(materialsObj))
  }
});

//#main > div.clearfix.product-leading-details-bar.grid_30.prefix_1.suffix_1 > div > div.product-leading-details-bar__breadcrumbs.fl-ns.order-1 > div > ul > li:nth-child(3) > span > a

*/