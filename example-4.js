import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(4, companies);
console.log('---- EXAMPLE 4 --- ', 'Put here your function');

// Create a function that takes the variable "companies" as a parameter and
// which groups all the users of all the companies in a single table and
// and which adds an attribute 'company' to each user which will have for value the
// name of the company to which it belongs then sort the users by
// their age (older first)

// Créer une fonction qui qui prend en paramètre la variable "companies" et
// qui regroupe tous les users de toutes les companies dans un seul tableau et
// et qui ajoute un attribut 'companie' à chaque user qui aura pour valeur le
// nom de la company auquel il appartient puis trier les utilisateurs en fonction
// de leur age (plus vieux en premier)

// Créer une fonction prenant en paramètre la variable "companies" et regroupant
// tous les "users" de toutes les "companies" dans un seul tableau. Chaque "user"
// doit avoir un nouvel attribut "company" ayant pour valeur le nom de la "company"
// à laquelle il appartient. Les "users" doivent être triés en fonction de leur
// âge (du plus vieux au plus jeune).
