import {cleanConsole, createAll} from './data';

const companies = createAll();

cleanConsole(3, companies);
console.log('---- EXAMPLE 3 --- ', 'Put here your function');

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des compagnies et les attributs firstName
// et lastName des "users" sont en majuscule. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour l'exemple 1.
