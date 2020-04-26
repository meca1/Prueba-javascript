import {createAll, cleanConsole} from './data';
const companies = createAll();

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', restructureData(companies));

function restructureData(data) {
  return data.map((company) => {
    return {
      name: company.name.charAt(0).toUpperCase() + company.name.slice(1),
      users: company.users.map((user) => userMapper(user)),
      isOpen: company.isOpen,
      usersLength: company.usersLength,
      id: company.id,
    };
  });
}

function userMapper(userObj) {
  return {
    firstName: userObj.firstName ? userObj.firstName.charAt(0).toUpperCase() + userObj.firstName.slice(1): '',
    lastName: userObj.lastName ? userObj.lastName.charAt(0).toUpperCase() + userObj.lastName.slice(1) : '',
    age: userObj.age ? userObj.age : '',
    car: userObj.car ? userObj.car : '',
    id: userObj.id ? userObj.id : '',
  };
}

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
