const fs = require('fs');

// Lue alkuperäinen JSON-tiedosto (esim.json)
const alkuperaisetTiedot = require('./kunnat.json');

// Käy läpi jokainen tietue ja lisää neljä uutta kenttää
const muunnetutTiedot = alkuperaisetTiedot.map(item => {
  const lat = item.lat[0];
  const lon = item.lon[0];
  const north = lat + 0.5;
  const west = lon - 0.5;
  const south = lat - 0.5;
  const east = lon + 0.5;
  const tapahtumat = [];

  return {
    ...item,
    north: [north],
    west: [west],
    south: [south],
    east: [east],
    tapahtumat : [tapahtumat]
  };
});

// Tallenna muunnetut tiedot lopputulos.json-tiedostoon
fs.writeFileSync('lopputulos.json', JSON.stringify(muunnetutTiedot, null, 2), 'utf-8');

console.log('Tiedot on muunnettu ja tallennettu lopputulos.json-tiedostoon.');