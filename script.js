var ojs = [];
let obj = {};
var con = [];

// Return the object
// return obj;

function print() {
  if (document.querySelector("#newtask #textname").value.length == 0) {
    alert("Kindly Enter Task Name!!!!");
  } else {
    let a = document.querySelector("#newtask #textdate").value;

    let b = document.querySelector("#newtask #textname").value;
    printloop(a, b);
    ojs.push([a, b]);
  }
  console.log(ojs);
}

function assend() {
  ojs.sort();
  console.log(ojs);
  var e = document.querySelector("#tasks");
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
  printdata();
}
function assend(x,y) {
    ojs.sort();
    console.log(ojs);
    var e = document.querySelector("#tasks");
    var child = e.lastElementChild;
    while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
    }
    printdata();
  }

function dssend() {
  ojs.reverse();
  console.log(ojs);
  var e = document.querySelector("#tasks");
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  printdata();
}

// document.getElementById("textfilter").onchange = function() {myFunction()};

// function myFunction() {
//   var x = document.getElementById("fname");
//   x.value = x.value.toUpperCase();
// }
// var all = ['test','string','array','example'];

// function getMatch(arr, str) {
//   var reg = new RegExp(str.split("").join(".*"), "i");
//   console.log(reg);
//   return arr.filter(function (item) {
//     if (item.match(reg)) {

//     //   printloop(item,item);
//     return items(item);
//     // console.log(item);
//     }
//   });
// }
// function items(item){
//     ojs.forEach((v) => {
//         let key = v[0];
//         let value = v[1];
//         obj[key] = value;
//     });
//     console.log(obj);
//     for (let i = 0; i < ojs.length; i++) {

//     }
// // console.log("d");

// return obj ,item;
// }
// function search(value) {
// //   var c = [];
// //   for (let i = 0; i < ojs.length; i++) {
// //     var [a, b] = ojs[i];
// //     // printloop(a, b);
// //     c.push(b);
// //   }
// // ojs.forEach((v) => {
// //             let key = v[0];
// //             let value = v[1];
// //             obj[key] = value;
// //         });
// //   console.log(obj);
//   document.getElementById("tasks").innerHTML = getMatch(obj, value);
// }
// function getMatch(obj,valuew){
// ojs.forEach((v)=>{
//     if(v[1]==valuew){
//         // let key = v[0];
//         //     let value = v[1];
//         //     obj[key] = value;
//         }
//         return v;
// })

// console.log(obj);
// ojs.forEach((v) => {
//     if(v[1]==value){
//     let key = v[0];
//     let value = v[1];
//     obj[key] = value;
// }
// });
// console.log(obj);
// }

// var all = ['test','string','array','example'];

function getMatch(arr, str) {
  var reg = new RegExp(str.split("").join(".*"), "i");
  var e = document.querySelector("#tasks");
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  arr.filter(function (item) {
    if (item.match(reg)) {
      //   items(item);
      for (var i = 0; i < ojs.length; i++) {
        for (var j = 0; j < 2; j++) {
          if (ojs[i][j] == item) {
            var x = ojs[i][j];
            var y = ojs[i][0];
          }
        }
      }
      console.log(y, x);
        printloop(y,x);
    //   document.querySelector("#tasks").innerHTML += `<div class="task">
    //     <span id="taskname">
    //     dar
    //     </span>
    //     <span id="taskname">
    //     dfg
    //     </span>
    // </div>`;
        // assend();
    }
  });
}

function search(value) {
  var c = [];
  for (let i = 0; i < ojs.length; i++) {
    var [a, b] = ojs[i];
    // printloop(a, b);
    c.push(b);
  }
  document.getElementById("tasks").innerHTML = getMatch(c, value);
}

// function items(item){
//     for (var i = 0; i < ojs.length; i++) {
//         for (var j = 0; j < 2; j++) {
//           if(ojs[i][j]==item){
//             //   console.log(ojs[i][j])
//             //   console.log(ojs[i][0]);
//               var x = ojs[i][j];
//               var y = ojs[i][0];
//           }
//         }
//       }
//       console.log(y,x);
//       printloop(y,x);

// }

function printdata() {
  for (let i = 0; i < ojs.length; i++) {
    let [a, b] = ojs[i];
    printloop(a, b);
  }
}

function printloop(a, b) {
  document.querySelector("#tasks").innerHTML += `
      <div class="task">
          <span id="taskname">
          ${a}
          </span>
          <span id="taskname">
          ${b}
          </span>
          <!-- <button class="delete">
              <i class="far fa-trash-alt"></i>
          </button> -->
      </div>
  `;
}
