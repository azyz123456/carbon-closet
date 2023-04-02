
    const canvas = document.createElement("canvas");
    canvas.id = "myChart";

    function getPointerLocation(score) {

       if (score>1 && score <= 5) {
        return 0.2;
       } else if(score > 5 && score <= 10) {
        return 0.35;
       } else if (score === 10) {
        return 0.5;
       } else if (score > 10 && score <= 20) {
        return 0.75;
       } else {
        return 0.9;
       }
    }

const fabrics = {
    "polyethylene": 5.07,
    "viscose": 15.9,
    "aramid": 9.6,
    "wool": 45.5,
    "elastane": 50,
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

const efabrics = {
  "polyethylene": 2.53,
  "viscose": 12.3,
  "aramid": 2.55,
  "wool": 15.5,
  "elastane": 2.93,
  "acrylic": 6.20,
  "flax": 50.2,
  "modal": 50,
  "nylon": 4.61,
  "polyester": 3.22,
  "cotton": 17.2,
  "acetate": 12.2,
  "silk": 579,
  "alpaca": 218,
  "hemp": 57.6,
  "polypropylene": 2.54
}

const wfabrics = {
  "polyethylene": 0.483,
  "viscose": 3.64,
  "aramid": 0.601,
  "wool": 3.17,
  "elastane": 0.468,
  "acrylic": 1.29,
  "flax": 3.22,
  "modal": 0.01,
  "nylon": 0.912,
  //end
  "polyester": 50.2,
  "cotton": 1.2,
  "acetate": 4.8,
  "silk": 10.1,
  "alpaca": 20.5,
  "hemp": 30.7,
  "polypropylene": 3.9
}

const rfabrics = {
  "polyethylene": 25.9,
  "viscose": 14.2,
  "aramid": 3.1,
  "wool": 0.24,
  "elastane": 1.5,
  "acrylic": 11.12,
  "flax": 3.19,
  "modal": 40.1,
  "nylon": 1.12,
  //end
  "polyester": 48.1,
  "cotton": 5.32,
  "acetate": 6.1,
  "silk": 59.2,
  "alpaca": 14.0,
  "hemp": 22.1,
  "polypropylene": 5.0
}

//function to decimal
function percentageToDecimal(str) {
    // Remove percent symbol from string
    let numStr = str.replace('%', '');
    // Convert string to decimal number and return
    return parseFloat(numStr) / 100;
}  

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

//function to get average score
function getScore(obj1, obj2) {
    //find the object's keys in the fabrics' keys
    //multiply the object's value by the fabrics' value
    //get the sum
    let sum = 0;
    for (let key1 in obj1) {
      const key2 = Object.keys(obj2).find(k => k.toLowerCase() === key1.toLowerCase());
      if (key2) {
        sum += obj1[key1] * obj2[key2];
      }
    }
    return sum;
}

function findPercentages(arr) {
  let containsPercent = false;
  //check if the array contains a percentage
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr[i].length; j++) {
      if (j === '%') {
        containsPercent = true; 
      }
    }
  }
}

function getOverallScore(s1, s2, s3, s4) {
  let sum = s1 + s2 + s3 + s4;
  return sum / 4;
}

const h = document.querySelector("#buy-now-button");
//const materials = document.querySelector("#feature-bullets > ul > li:nth-child(1) > span");
let materials = document.querySelector('#productFactsExpander > div.a-expander-content.a-expander-partial-collapse-content > div:nth-child(3) > span');


if (!materials) {
  materials = document.querySelector('#feature-bullets > ul > li:nth-child(1) > span');
}

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


    //deal with case where there is no percentages - do equal percentages
    for (let i=0; i<arr.length; i++) {
        if (i % 2 === 1) {
            materialsObj[arr[i]] = percentageToDecimal(arr[i-1])
        }
    }

    const hr = document.querySelector("hr");

    const statsBox = document.createElement("div");
    statsBox.classList.add("stats-box");
    hr.insertAdjacentElement("afterend", statsBox);


    //start of global warming div 
    let gscore = roundToTwo(getScore(materialsObj, fabrics));
    const barometer = document.createElement("div");
    barometer.classList.add("barometer");
    const badge = document.createElement("h3");
    badge.id = "impact-score";
    badge.textContent = "Carbon Emissions Impact Score: " + gscore;
    const rectangle = document.createElement("div");
    rectangle.classList.add("rectangle");
    const triangle = document.createElement("div");
    triangle.classList.add("triangle");
    triangle.style.marginLeft = getPointerLocation(gscore) * 250 + "px";
    const labels = document.createElement("div");
    labels.classList.add("labels");
    const low = document.createElement("p");
    low.innerHTML = "Low";
    const high = document.createElement("p");
    high.innerHTML = "High";
    high.classList.add("label");
    low.classList.add("label");
    labels.appendChild(low);
    labels.appendChild(high);
    statsBox.appendChild(barometer);
    barometer.appendChild(badge);
    barometer.appendChild(triangle);
    barometer.appendChild(rectangle);
    barometer.appendChild(labels);
    //end of global warming div

    //start of eutrophication div 
    let escore = roundToTwo(getScore(materialsObj, efabrics));
    const barometer2 = document.createElement("div");
    barometer2.classList.add("barometer");
    const badge2 = document.createElement("h3");
    badge2.textContent = "Eutrophication Impact Score: " + escore;
    const rectangle2 = document.createElement("div");
    rectangle2.classList.add("rectangle");
    const triangle2 = document.createElement("div");
    triangle2.classList.add("triangle");
    triangle2.style.marginLeft = getPointerLocation(escore) * 250 + "px";
    const labels2 = document.createElement("div");
    labels2.classList.add("labels");
    const low2 = document.createElement("p");
    low2.innerHTML = "Low";
    const high2 = document.createElement("p");
    high2.innerHTML = "High";
    high2.classList.add("label");
    low2.classList.add("label");
    labels2.appendChild(low2);
    labels2.appendChild(high2);
    statsBox.appendChild(barometer2);
    barometer2.appendChild(badge2);
    barometer2.appendChild(triangle2);
    barometer2.appendChild(rectangle2);
    barometer2.appendChild(labels2);
    //end of eutrophication div    

    //start of water scarcity div 
    let wscore = roundToTwo(getScore(materialsObj, wfabrics));
    const barometer3 = document.createElement("div");
    barometer3.classList.add("barometer");
    const badge3 = document.createElement("h3");
    badge3.textContent = "Water Scarcity Impact Score: " + wscore;
    const rectangle3 = document.createElement("div");
    rectangle3.classList.add("rectangle");
    const triangle3 = document.createElement("div");
    triangle3.classList.add("triangle");
    triangle3.style.marginLeft = getPointerLocation(wscore) * 250 + "px";
    const labels3 = document.createElement("div");
    labels3.classList.add("labels");
    const low3 = document.createElement("p");
    low3.innerHTML = "Low";
    const high3 = document.createElement("p");
    high3.innerHTML = "High";
    high3.classList.add("label");
    low3.classList.add("label");
    labels3.appendChild(low3);
    labels3.appendChild(high3);
    statsBox.appendChild(barometer3);
    barometer3.appendChild(badge3);
    barometer3.appendChild(triangle3);
    barometer3.appendChild(rectangle3);
    barometer3.appendChild(labels3);
    //end of water scarcity div      
    
    //start of fossil fuel usage div 
    const fscore = roundToTwo(getScore(materialsObj, rfabrics));
    const barometer4 = document.createElement("div");
    barometer4.classList.add("barometer");
    const badge4 = document.createElement("h3");
    badge4.textContent = "Fossil Fuel Depletion Impact Score: " + fscore;
    const rectangle4 = document.createElement("div");
    rectangle4.classList.add("rectangle");
    const triangle4 = document.createElement("div");
    triangle4.classList.add("triangle");
    triangle4.style.marginLeft = getPointerLocation(fscore) * 250 + "px";
    const labels4 = document.createElement("div");
    labels4.classList.add("labels");
    const low4 = document.createElement("p");
    low4.innerHTML = "Low";
    const high4 = document.createElement("p");
    high4.innerHTML = "High";
    high4.classList.add("label");
    low4.classList.add("label");
    labels4.appendChild(low4);
    labels4.appendChild(high4);
    statsBox.appendChild(barometer4);
    barometer4.appendChild(badge4);
    barometer4.appendChild(triangle4);
    barometer4.appendChild(rectangle4);
    barometer4.appendChild(labels4);
    //end of fossil fuel div
    
    //summary div
    const summary = document.createElement("div");
    summary.classList.add("summary");
    const badge5 = document.createElement("h2");
    badge5.textContent = "Overall Sustainability Score: " + roundToTwo(getOverallScore(gscore, wscore, escore, fscore));
    const summaryText = document.createElement("p");
    summaryText.innerHTML = "This product's environmental footprint is " + roundToTwo(getOverallScore(gscore, wscore, escore, fscore)/10) + "x the industry average."
    summary.appendChild(badge5);
    summary.appendChild(summaryText);
    statsBox.insertAdjacentElement("afterend", summary);

  }