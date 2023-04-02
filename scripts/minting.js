const form = new FormData();
form.append('allowPlatformToOperateToken', 'true');
form.append('chain', 'goerli');
form.append('filePath', 'data:text/plain;name=itemOne.txt;base64,aHR0cHM6Ly93d3cuYWUuY29tL3VzL2VuL3AvbWVuL3NvY2tzL2NyZXctc29ja3MvYWVvLWNyZXctc29jay0zLzAyMjVfNzI1N185ODk/bWVudT1jYXQ0ODQwMDA0JmlwPW9mZiZ1dG1fc291cmNlPWdvb2dsZSZ1dG1fbWVkaXVtPXBsYSZ1dG1fY29udGVudD1hZSZ1dG1fY2FtcGFpZ249bWVuX2FjY2Vzc29yaWVzX3NvY2tzJnV0bV90ZXJtPW5vbmJyYW5kJmdjbGlkPUNqd0tDQWp3ckotaEJoQjdFaXdBdXlCVlhlWUhhMkg1ZU5NRDc3LUZGYlRMdUROekhkbkU2MzJrd2c3V0xsMTctdzIwQnFzLWdOUVhpeG9DRjgwUUF2RF9Cd0U=');
form.append('name', 'Clothing Item');
form.append('description', 'Clothing item whose ');
form.append('data', '[{"trait_type":"Impact Score","value":"TraitValue1"},');
form.append('recipientAddress', '0xD8511b59613f091806949Ab6A81586305DBC00A1');

const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'X-API-Key': 'sk_live_13687573-091c-4afb-807f-068ac8f1bcbc'
  }
};

options.body = form;

fetch('https://api.verbwire.com/v1/nft/mint/quickMintFromFile', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));