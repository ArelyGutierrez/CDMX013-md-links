const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
const path = require('path');

 const pathE = './holis.md';
 
function gettingLinks(TestMDFile){

  const textFile = fs.readFileSync(pathE, 'utf-8');
  const regex = /(\[.*\])(\(https?(:\/\/[^\s\)]+)\))/g // / (\[.*\]) (\(https? (:\/\/[^\s\)]+) \))/g
  const allLinks = textFile.match((regex)); 
  const newArray = [];
  
  allLinks.forEach( element => {
      const separate = element.split('](');
      const text = separate[0].replace('[','');
      const url = separate[1].replace(')','');
    
        newArray.push({
        href: url, // URL encontrada.
        text: text, // Texto que aparecía dentro del link (<a>).
        file: path.resolve(pathE) // Ruta del archivo donde se encontró el link.
        } ) 
  })

 return newArray;

}

module.exports = { gettingLinks }
// File test run
console.log(gettingLinks(pathE));



