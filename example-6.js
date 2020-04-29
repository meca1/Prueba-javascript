import {cleanConsole, createAll} from './data';
import {allUsers} from './example-4';
import {capitalize} from './example-1';

const companies = createAll();

cleanConsole(6, companies);
console.log('---- EXAMPLE 6 --- ', restructureData(companies));

/**
 * Return a new object of users
 * @param {Array} companies
 * @return {Object} Object { lastName + firstName + age : car }
 */
function restructureData(companies) {
  const users = {};
  allUsers(companies).forEach((user) => {
    const atributeName = `${capitalize(user.lastName)}${capitalize(user.firstName)}${user.age}`;
    users[atributeName] = user.car;
  });
  return users;
}
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un nuevo objeto cuyos atributos son la concatenación del apelido, nombre y
// edad de cada "user". Cada atributo debe tener el valor de boolean "car".
// Ver ejemplo a continuación.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a new object whose attributes are the concatenation of the name, first name and
// the age of each user. Each attribute must have the value of boolean "car".
// See example below.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un nouve objet dont les attributs sont la concaténation du nom, du prénom et
// de l'âge de chaque "user". Chaque attribut devra avoir la valeur du booléen
// "car". Voir exemple ci-dessous.

const example = {
  johnDoe32: true,
  BernardoMinet45: false,
  alinaChef23: true,
};

console.log(example);
