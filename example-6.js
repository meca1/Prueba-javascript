import {cleanConsole, createAll} from './data';

const companies = createAll();

cleanConsole(6, companies);
console.log('---- EXAMPLE 6 --- ', 'Put here your function');

// create a function that takes the variable 'companies' as a parameter and returns
// a new object whose attributes are the concatenation of the name, the first name and the age
// of each user and whose value is the value of the boolean "car".
// see example of result below

// créer une fonction qui prend en paramètre la variable 'companies' et qui renvoie
// un nouvel objet dont les attributs sont la concaténation du nom, du prénom et de l'age
// de chaque user et dont la valeur est la valeur du boolean "car".
// voir exemple de résultat ci-dessous


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
