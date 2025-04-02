// script.js

// Ejemplo de datos de la flota
const fleet = [
    { id: 1, name: "Camión 1", conductor:"Pedro", location: "Madrid", gastoCombustible: 20},
    { id: 2, name: "Camión 2", conductor:"Godeardo", location: "Barcelona", gastoCombustible: 25 },
  ];
  
  // Mostrar datos de la flota
  function displayFleet() {
    const mapDiv = document.getElementById("map");
    fleet.forEach((vehicle) => {
      const vehicleDiv = document.createElement("div");
      vehicleDiv.textContent = `${vehicle.name} conducido por ${vehicle.conductor} está en ${vehicle.location}`;
      mapDiv.appendChild(vehicleDiv);
    });
  }
  
  // Ejemplo de ofertas de carga
  const offers = [
    { id: 1, origin: "Madrid", destination: "Sevilla", km: 530, price: 500 },
    { id: 2, origin: "Bilbao", destination: "Valencia", km: 611, price: 700 },
  ];
 /*  function rentable(kmViaje,gasoiCientoKm){
  let gastoTotal=(gasoiCientoKm/100)*kmViaje;
  console.log(gastoTotal)
  return gastoTotal;
  }
 let es=rentable(offers.km,fleet.gastoCombustible); */
 function rentable(kmViaje,gasoiCientoKm){
  let gastoTotal=gasoiCientoKm*(kmViaje/100);
  
  return gastoTotal;
  }
  let es=rentable(offers.km,fleet.gastoCombustible); 
 
 console.log(es);
 
  
  // Mostrar las ofertas
  function displayOffers() {
    const offersDiv = document.getElementById("offers-list");
    offers.forEach((offer) => {
      const offerDiv = document.createElement("div");
      
      offerDiv.textContent = `De: ${offer.origin} a: ${offer.destination}, Precio: €${offer.price} rentable: Si `;
      offersDiv.appendChild(offerDiv);
    });
  }
  
  // Ejecutar las funciones al cargar la página
  window.onload = () => {
    displayFleet();
    displayOffers();
  };
  