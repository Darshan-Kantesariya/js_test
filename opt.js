var toPrint = [];

function print() {
    if (document.querySelector("#newtask #textname").value.length == 0) {
        alert("Kindly Enter Task Name!!!!");
    } else {
        let a = document.querySelector("#newtask #textdate").value;

        let b = document.querySelector("#newtask #textname").value;
        toPrint.push([a, b]);
        printArray(toPrint);
    }
    console.log(toPrint);
}

function printArray(arr) {
    const tasks = document.querySelector("#tasks");
    tasks.innerHTML = '';
    arr.forEach(ele => {
        tasks.innerHTML += entryHTML(ele)
    })
}


function entryHTML(entry) {
    return `
      <div class="task">
          <span id="taskname">
          ${entry[0]}
          </span>
          <span id="taskname">
          ${entry[1]}
          </span>
          <!-- <button class="delete">
              <i class="far fa-trash-alt"></i>
          </button> -->
      </div>
  `;
}



function assend() {
    toPrint.sort();
    printArray(toPrint);
}
function dssend() {
    toPrint.reverse();
    printArray(toPrint);
}


function search(value) {
    const filtered = toPrint.filter(ele => ele[1] === value || ele[1]?.includes(value))
    printArray(filtered)
}