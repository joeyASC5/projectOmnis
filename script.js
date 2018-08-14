fetch('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsla&types=quote,news,chart&range=1m&last=5')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    alert(myJson);
  });

