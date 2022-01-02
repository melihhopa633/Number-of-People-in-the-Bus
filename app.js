var number = function (busStops) {
  busStops = [
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ];
  let a = 0;
  let b = 0;
  for (let i = 0; i < busStops.length; i++) {
    if (busStops[i].length === 2) {
      b = busStops[i][0] - busStops[i][1];
      a = a + b;
    }
  }
  return a;
};

number();
