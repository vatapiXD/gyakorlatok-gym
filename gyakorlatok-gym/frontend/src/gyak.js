const loading = async () => {
  const response = await fetch("http://localhost:7776/mell");
  if (!response.ok) { throw new Error("Hiba történt..."); }
  const json = await response.json();
  return json;
}
const loading2 = async () => {
  const response = await fetch("http://localhost:7776/hat");
  if (!response.ok) { throw new Error("Hiba történt..."); }
  const json2 = await response.json();
  return json2;
}
const loading3 = async () => {
  const response = await fetch("http://localhost:7776/lab");
  if (!response.ok) { throw new Error("Hiba történt..."); }
  const json3 = await response.json();
  return json3;
}
const lista = (data) => {
  const szamozottLista = document.createElement("ol");
  data.forEach(mell => {
    const li = document.createElement("li");
    li.textContent = mell.name;
    szamozottLista.appendChild(li);
  });
  document.body.appendChild(szamozottLista);
}
const lista2 = (data2) => {
  const szamozatlanlista = document.createElement("ul");
  data2.forEach(hat => {
    const li = document.createElement("li");
    li.textContent = hat.name;
    szamozatlanlista.appendChild(li);
  });
  document.body.appendChild(szamozatlanlista);
}

const tablazat = (data3) => {
  const tablazat = document.createElement("table");
  const HeaderSor = document.createElement("tr");
  const headers = ["Gyakorlat neve", "Izom megnyúlása", "terhelhetőség"];
  headers.forEach(headerText => {
    const headerCella = document.createElement("th");
    headerCella.textContent = headerText;
    HeaderSor.appendChild(headerCella);
  });
  tablazat.appendChild(HeaderSor);

  data3.forEach(lab => {
    const sor = document.createElement("tr");

    const nevCella = document.createElement("td");
    nevCella.textContent = lab.name;
    sor.appendChild(nevCella);

    const terhelhetosegCella = document.createElement("td");
    terhelhetosegCella.textContent = lab.terhelhetoseg;
    sor.appendChild(terhelhetosegCella);

    const megnyulasCella = document.createElement("td");
    megnyulasCella.textContent = lab.megnyulas;
    sor.appendChild(megnyulasCella);

    tablazat.appendChild(sor);
  });

  document.getElementById("app").appendChild(tablazat);
}

const init = async () => {  
  const data = await loading();
  lista(data);
  const data2 = await loading2();
  lista2(data2);
  const data3 = await loading3();
  tablazat(data3);
}
document.addEventListener("DOMContentLoaded", init);