/*

Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

*/

// Creo un array per la lista della spesa, nel mio caso gli ingredienti per fare la carbonara
const shoppingList = ["Pasta", "Guanciale", "Pecorino", "Uova", "Pepe nero"];
//console.log(shoppingList);
//console.log(shoppingList.length);

// Creo una variabile per selezionare l'elemento ul aggiunto nel file .html
const shoppingListUl = document.querySelector('ul')

// Creo una variabile per il ciclo while
let i = 0;


while (i < shoppingList.length) {
    const shoppingElement = shoppingList[i]; // Dico al ciclo di creare una variabile con il nome di ciascun ingrediente
    //console.log(shoppingElement);

    const shoppingElementLi = document.createElement('li'); // Creo un elemento 'li'
    shoppingElementLi.append(shoppingElement); // Collego l'ingrediente all'elemento 'li'
    shoppingListUl.append(shoppingElementLi); // Collego l'elemento 'li' all'elemento 'ul' del file html

    i++ //Incremento in valore dell'index

}
