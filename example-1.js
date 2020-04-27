import {createAll, cleanConsole} from './data';
const companies = createAll();

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', restructureData(companies));

export function restructureData(companies) {
  return data.sort(sortByNumberOfUsers).map((company) => {
    return {
      ...company,
      name: capitalize(company.name),
      users: company.users.map(userMapper).sort(alphabeticalOrder),
    };
  });
}

function userMapper(userObj) {
  return {
    firstName: capitalize(userObj.firstName),
    lastName: capitalize(userObj.lastName),
    age: userObj.age ? userObj.age : '',
    car: userObj.car ? userObj.car : '',
    id: userObj.id ? userObj.id : '',
  };
}

/**
 * Sort the companies in decreasing order by number of users.
 * @param {*} a
 * @param {*} b
 * @return {Array} the companies in decreasing order.
 */
function sortByNumberOfUsers(a, b) {
  if (a.users > b.users) return -1;
  if (a.users < b.users) return 1;
  return 0;
}

/**
 * liste the users in alphabetical order.
 * @param {*} a
 * @param {*} b
 * @return {Array} users in alphabetical order.
 */
function alphabeticalOrder(a, b) {
  if (a.firstName < b.firstName) return -1;
  if (a.firstName > b.firstName) return 1;
  return 0;
}

/**
 * Capitalizes first letters of words in string.
 * @param {*} str String to be modified
 * @return {string}
 * @usage
 *   capitalize('fix this string'); => 'Fix This String'
 *   capitalize('javaSCrIPT'); => 'JavaSCrIPT'
 *   capitalize('javaSCrIPT', true); => 'Javascript'
 */
export function capitalize(str) {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
