function parseData(prices){
  const dates = Object.keys(prices).sort();
  
  const parsed = {};
  parsed['open'] = {};
  parsed['high'] = {};
  parsed['low'] = {};
  parsed['close'] = {};
  parsed['volume'] = {};
  parsed['up'] = {};

  let i = 0;
  let lastPrice;
  dates.forEach(date => {
    parsed.open[date] = prices[date]['1. open']; 
    parsed.high[date] = prices[date]['2. high']; 
    parsed.low[date] = prices[date]['3. low']; 
    parsed.close[date] = prices[date]['4. close']; 
    parsed.volume[date] = prices[date]['5. volume']; 

    if (parsed.close[date] > lastPrice){
      parsed.up[date] = 1;
    }
    else {
      parsed.up[date] = 0;
    }

    lastPrice = parsed.close[date];
    i++;
  });

  return parsed;
}