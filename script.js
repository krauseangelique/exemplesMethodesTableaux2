console.log("Hello");

// isArray()
const myArray = [1, 1, 2, 3, 5, 8, 13];
const isItArray = Array.isArray(myArray);

// if (true) {} else{}
if (isItArray) {

    console.log("It's an array!");
    
} else {
    console.log("ho my God ... it is not an array?");
    
}

// fill : Remplacer la valeur 0 du tableau en valeur 7
const myArrayFill = [0, 0, 0, 0, 0];
myArrayFill.fill(7);
console.log(myArrayFill); // (5) [7, 7, 7, 7, 7]

// find : Trouver le premier nombre plus grand que 30
const numbers = [1, 31, 8, 2, 30, 35, 13];
const found = numbers.find(num => num > 30);
console.log(found); // 31

// join : Réuni les items du tabeau en une phrase. séparés par un espace
const words = ["Quelle", "belle", "soirée", "de", "vendredi"];
const combined = words.join(" ");
console.log(combined); // Quelle belle soirée de vendredi