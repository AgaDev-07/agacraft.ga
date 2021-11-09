let json = {
  a: [3.7, 8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0, 0.62, 1.6],
  b: [0.008, 25, 60]
};
var i = 0,
  n = 0;
while (json.a[i] != undefined) {
  while (json.b[n] != undefined) {
    console.log(json.a[i]*json.b[n]);
    n++;
  }
  console.log();
  i++;
  n = 0;
}
