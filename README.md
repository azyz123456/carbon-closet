# Carbon Closet

## Inspiration 

In 2023, fast fashion generated more CO2 than aviation and shipping combined. However, consumers rarely think about the environmental impact of the clothes they purchase. With Carbon Closet, consumers will see the environmental footprint of each purchase before Point of Sale, allowing them to make more informed decisions.

## What it does

When the chrome extension is run while a user has opened an Amazon link for a piece of clothing, it will display the global warming, eutrophication, water scarcity, resource depletion, and chemistry scores of the clothing calculated based on the materials used to create it. It then displays the score placed on a scale gradient of “good” to “bad” scores.


## How we built it

We used quick mint Omnichain NFT on the backend. We wrote the script for the chrome extension using Javascript. 

## Challenges we ran into

We originally tried to write a chart.js script in an html file to display a bullet chart of the global warming impacts of different materials, with a pointer that shows where the clothing lies on the scale, and a pie chart that shows what percentage of the clothing is made of each material and how much each material contributes to global warming. However, once we tried to incorporate this into the main javascript code, an error appeared that said that the script for the charts cannot be loaded because a content security policy directive is being violated. We realized that we were having an installation issue that may be resolved by downloading a certificate. We were unable to find the right way to do this, so we decided to circumvent the error entirely by creating a scale using vanilla JavaScript instead of using chart.js.


## Accomplishments that we're proud of
 
First and foremost, we came in not all knowing each other however, we are proud of the bond and chemisty we have built as a team. Next, learning new skils was tough, but with persistance we solved issues. 

 ## What we learned
 
We learned how to use quick mint Omnichain NFT through the workshops. It was difficult to adapt at first however, with communication and help from our mentors, we were able to gain a deeper understanding.  

## What's next for KnowYourTextile! 

When there is a piece of  fashionable item that has higher environmental damage, we hope to create a pop out that shows alternative fashion pieces that are more eco friendly!

