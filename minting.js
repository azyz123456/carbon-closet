const form = new FormData();
form.append('quantity', '1');
form.append('chain', 'goerli');
form.append('imageUrl', 'https://www.ae.com/us/en/p/men/socks/ankle-socks/aeo-low-cut-socks-5/1225_2864_001?menu=cat4840004&ip=off&utm_source=google&utm_medium=pla&utm_content=ae&utm_campaign=men_accessories_general&utm_term=brand&gclid=CjwKCAjwrJ-hBhB7EiwAuyBVXZcTeEwP5ANzewj2GSteUiPwRr3pmv_9L04ppa9sELu3CHRSogLZRBoCKtgQAvD_BwE');
form.append('name', 'name');
form.append('description', 'age');
form.append('contractAddress', '0x9FEAB002E00e9AAEC9DF30d0B8b67B4d5B78B46B');
form.append('data', '[{"trait_type":"TraitType1","value":"TraitValue1"},{"trait_type":"TraitType2","value":"TraitValue2"}]');

const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'X-API-Key': 'sk_live_13687573-091c-4afb-807f-068ac8f1bcbc'
  }
};

options.body = form;

fetch('https://api.verbwire.com/v1/nft/mint/mintFromMetadata', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));