const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Hiba történt az adatok betöltésekor...");
  return await response.json();
};

const createTable = (data, containerId) => {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  const headers = ["Gyakorlat neve", "Izom megnyúlása", "Terhelhetőség"];

  headers.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  data.forEach(item => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const stretchCell = document.createElement("td");
    stretchCell.textContent = item.megnyulas;
    row.appendChild(stretchCell);

    const loadCell = document.createElement("td");
    loadCell.textContent = item.terhelhetoseg;
    row.appendChild(loadCell);

    table.appendChild(row);
  });

  document.getElementById(containerId).appendChild(table);
};

const init = async () => {
  try {
    const data1 = await fetchData("http://localhost:7776/mell");
    createTable(data1, "app1");

    const data2 = await fetchData("http://localhost:7776/hat");
    createTable(data2, "app2");

    const data3 = await fetchData("http://localhost:7776/lab");
    createTable(data3, "app3");
  } catch (error) {
    console.error(error.message);
  }
};

document.addEventListener("DOMContentLoaded", init);
