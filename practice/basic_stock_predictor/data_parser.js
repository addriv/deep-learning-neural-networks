function parseData(prices){
  const dates = Object.keys(prices).sort();
  
  const parsed = {};
  parsed['open'] = {};
  parsed['high'] = {};
  parsed['low'] = {};
  parsed['close'] = {};
  parsed['volume'] = {};

  let i = 0;
  dates.forEach(date => {
    parsed.open[i] = prices[date]['1. open']; 
    parsed.high[i] = prices[date]['2. high']; 
    parsed.low[i] = prices[date]['3. low']; 
    parsed.close[i] = prices[date]['4. close']; 
    parsed.volume[i] = prices[date]['5. volume']; 
    i++;
  });

  return parsed;
}