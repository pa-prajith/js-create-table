let langs = [
  { name: "Javascript", ranking: 1, desc: "All about Javascript yey 1" },
  { name: "Typescript", ranking: 2, desc: "All about Javascript yey 2" },
  { name: "React", ranking: 3, desc: "All about Javascript yey 3" },
  { name: "Angular", ranking: 4, desc: "All about Javascript yey 4" },
  { name: "Vue", ranking: 5, desc: "All about Javascript yey 5" },
];

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key.toUpperCase());
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function Init() {
  const container = document.querySelector(".container");
  const table = document.createElement("table");

  generateTableHead(table, Object.keys(langs[0]));
  generateTable(table, langs);
  container.append(table);
}

function generateAnotherTableHead(table, data) {
  let row = document.createElement("tr");
  for (let key of data) {
    let th = document.createElement("td");
    let text = document.createTextNode(key.toUpperCase());
    th.appendChild(text);
    row.appendChild(th);
    table.appendChild(row);
  }
}

function generateAnotherTable(table, data) {
  for (let element of data) {
    let row = document.createElement("tr");
    for (key in element) {
      let cell = document.createElement("td");
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
function AnotherTable() {
  const container = document.querySelector(".container");
  const table = document.createElement("table");

  generateAnotherTableHead(table, Object.keys(langs[0]));
  generateAnotherTable(table, langs);
  container.append(table);
}

Init();
AnotherTable();
