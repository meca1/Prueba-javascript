import {createAll, cleanConsole} from './data';
const companies = createAll();

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', 'Put here your function');

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "companies" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque utilisateur.
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque companies doivent être classé par ordre alphabétique.

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "companies" must have a capital letter at the beginning as well as
// the name and first name of each user.
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each company must be listed in alphabetical order.
