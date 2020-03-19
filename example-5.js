import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(5, companies);
console.log('---- EXAMPLE 5 --- ', 'Put here your function');

// Utiliser la fonction que vous avez créée dans l'exemple 4 pour créer une
// nouvelle fonction prenant en paramètre la variable "companies" et renvoyant
// un nouvel objet avec les attributs suivant :
// 'size' => nombre de "users"
// 'average' => moyenne d'âge des "users"
// 'hasCar' => nombre de "users" possédant une voiture
// 'averageWithCar' => moyenne d'âge des "users" possédant une voiture
