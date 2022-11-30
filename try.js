let ojs = [
  ["2022-11-11", "sv"],
  ["2022-11-27", "sda"],
  ["2022-11-09", "vw"],
];
let item = "vw";
for (var i = 0; i < ojs.length; i++) {
  for (var j = 0; j < 2; j++) {
    if(ojs[i][j]==item){
        console.log(ojs[i][j])
        console.log(ojs[i][0]);
        var x = ojs[i][j];
        var y = ojs[i][0];
    }
  }
}
console.log(x,y);
