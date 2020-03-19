import {cleanConsole, createAll} from './data';

const companies = createAll();

cleanConsole(7, companies);
console.log('---- EXAMPLE 7 part 1 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 2 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 3 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 4 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 5 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 6 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 7 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 8 --- ', 'Put here your function');
console.log('---- EXAMPLE 7 part 9 --- ', 'Put here your function');

// Partie 1 : Créer une fonction prenant en paramètre un id de "company" et
// retournant le nom de cette compagnie

// Partie 2 : Créer une fonction prenant en paramètre un id de "company" et
// supprimant la compagnie de la liste

// Partie 3 : Créer une fonction prenant en paramètre un id de "company" et
// permettant de faire un PATCH (comme avec un appel HTTP) sur tous les
// attributs de cette companie sauf sur l'attribut 'users'

// Partie 4 : Créer une fonction prenant en paramètre un id de "company" et un
// nouvel "user" dont le nom est "Delgado", le prénom "Juan", ayant 35 ans et
// une voiture. Le nouvel "user" doit être ajouté à la liste des "users" de cette
// "company" et avoir un "id" généré automatiquement. La fonction doit aussi modifier
// l'attribut "usersLength" de "company"

// Partie 5 : Créer une fonction prenant en paramètre un id de "company" et
// permettant de faire un PUT (comme avec un appel HTTP) sur cette "company" sauf
// sur l'attribut "users"

// Partie 6 : Créer une fonction prenant en paramètre un id de "company" et un
// id de "user". La fonction doit supprimer cet "user" de la liste des "users"
// de la "company" et modifier l'attribut "usersLength" de "company"

// Partie 7 : Créer une fonction prenant en paramètre un id de "company" et un
// id de "user" permettant de faire un PATCH (comme avec un appel HTTP) sur cet
// "user"

// Partie 8 : Créer une fonction prenant en paramètre un id de "company" et un
// id de "user" permettant de faire un PUT (comme avec un appel HTTP) sur cet
// "user"

// Partie 9 : Créer une fonction prenant en paramètre deux id de "company" et
// un id de "user". La fonction doit permettre de transférer l'user en paramètre
// de la 1re "company" à la 2e "company". L'attribut "usersLength" de chaque
// "company" doit être mis à jour.
