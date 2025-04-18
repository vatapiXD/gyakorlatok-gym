const loading = async () => {
    const response = await fetch("http://localhost:7776/caloria");
    if (!response.ok) { throw new Error("Hiba történt..."); }
    const json = await response.json();
    return json;
}
const tablazat = (data) => {
    const tablazat = document.createElement("table");
    const HeaderSor = document.createElement("tr");
    const headers = ["Kaja", "kategória", "mennyiség", "kalória", "szénhidrát", "fehérje", "zsír", "rost"];
    headers.forEach(headerText => {
      const headerCella = document.createElement("th");
      headerCella.textContent = headerText;
      HeaderSor.appendChild(headerCella);
    });
    tablazat.appendChild(HeaderSor);
  
    data.forEach(caloria => {
      const sor = document.createElement("tr");
  
      const nevCella = document.createElement("td");
      nevCella.textContent = caloria.name;
      sor.appendChild(nevCella);
  
      const kategoriaCella = document.createElement("td");
      kategoriaCella.textContent = caloria.category;
      sor.appendChild(kategoriaCella);
      
      const mennyisegCella = document.createElement("td");
      mennyisegCella.textContent = caloria.portion_size;  
      sor.appendChild(mennyisegCella);

      const kaloriaCella = document.createElement("td");
      kaloriaCella.textContent = caloria.calories;
      sor.appendChild(kaloriaCella);

      const szénhidrátCella = document.createElement("td");
      szénhidrátCella.textContent = caloria.carbs;
      sor.appendChild(szénhidrátCella);

      const fehérjeCella = document.createElement("td");
      fehérjeCella.textContent = caloria.protein;   
      sor.appendChild(fehérjeCella);

      const zsírCella = document.createElement("td"); 
      zsírCella.textContent = caloria.fat;
      sor.appendChild(zsírCella);

      const rostCella = document.createElement("td");
      rostCella.textContent = caloria.fiber;
      sor.appendChild(rostCella);
  
      
      tablazat.appendChild(sor);
    });
  
    document.getElementById("app").appendChild(tablazat);
  }
  const init = async () => {  
   
    const data = await loading();
    tablazat(data);
  }
  document.addEventListener("DOMContentLoaded", init);