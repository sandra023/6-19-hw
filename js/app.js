// //Commit 1
// for (i = 1; i <=20; i++){
// 	console.log(i)
// }

// //Commit 2
// for (i =0; i<=200; i++){
// 	if(i%2 == 0){
// 		console.log(i)
// 	}
// }
// //Commit 3

// const arry = ["...human...why you taking pictures of me?", "...the catnip made me do it...", "...why does the red dot always get away..."];
// for (i=1; i <=20; i++){
// 	console.log("Love me, pet me! HSSSSSSS!");
// 	if(i%2 == 0){

// 		console.log(arry[(Math.floor(Math.random()*arry.length))]);
// 	}
// }

//Commit 4

// for (let i = 1; i <=100; i++){
		
// 		if(i%3 ==0 && i%5 == 0){
// 			console.log("FizzBuzz");
// 		} else if (i%3 === 0) { 
// 			console.log("Fizz");
// 		} else if(i%5 == 0) {
// 			console.log("Buzz");
// 		} else {
// 			console.log(i);
// 		}
// 		}

// //Commit 5
// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];

// kenny[0] = "Gameboy";
// console.log(kenny);
// jimClark[1] = jimClark[1]+1;
// console.log(jimClark);
// ryan[2] = "Gotham City";
// console.log(ryan);
// reuben.pop();
// console.log(reuben);
// reuben.push("Chicago");
// console.log(reuben);
// jimHaff.pop();
// console.log(jimHaff);
// jimHaff.push("Vegas","Dallas","Tokyo");
// console.log(jimHaff);
// jimHaff.splice(2,1);
// console.log(jimHaff);

//Commit 6
// const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// for (let i = 0; i < turtles.length; i++) {
// 	console.log(turtles[i].toUpperCase());
// }

//Commit 7
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

const kristynsShoe = kristynsCloset.splice(0,1).pop();
console.log(kristynsCloset);
console.log(kristynsShoe);

thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset[2]);

console.log(`Kristen will be wearing ${(kristynsCloset[(Math.floor(Math.random()*kristynsCloset.length))])} and ${(kristynsCloset[(Math.floor(Math.random()*kristynsCloset.length))])}.`);
console.log(`Kristen will be wearing ${(kristynsCloset[(Math.floor(Math.random()*kristynsCloset.length))])} and ${(kristynsCloset[(Math.floor(Math.random()*kristynsCloset.length))])}`);
console.log(`Kristen will be wearing ${(kristynsCloset[(Math.floor(Math.random()*kristynsCloset.length))])} and ${(kristynsCloset[(Math.floor(Math.random()*kristynsCloset.length))])}`);



console.log(`Thom will be wearing ${(thomsCloset[(Math.floor(Math.random()*thomsCloset.length))][(Math.floor(Math.random()*thomsCloset.length))])} and ${(thomsCloset[(Math.floor(Math.random()*thomsCloset.length))][(Math.floor(Math.random()*thomsCloset.length))])} .`);
console.log(`Thom will be wearing ${(thomsCloset[(Math.floor(Math.random()*thomsCloset.length))][(Math.floor(Math.random()*thomsCloset.length))])} and ${(thomsCloset[(Math.floor(Math.random()*thomsCloset.length))][(Math.floor(Math.random()*thomsCloset.length))])} .`);
console.log(`Thom will be wearing ${(thomsCloset[(Math.floor(Math.random()*thomsCloset.length))][(Math.floor(Math.random()*thomsCloset.length))])} and ${(thomsCloset[(Math.floor(Math.random()*thomsCloset.length))][(Math.floor(Math.random()*thomsCloset.length))])}`);


//Commit 8
for (i =0; i<kristynsCloset.length; i++)
	console.log(`WHIRR: Now washing ${(kristynsCloset[i])}.`);

//Commit 9


//Commit 10
let sum = 0;
for (let i = 0; i<=1000; i++){
	if(i%3 === 0 || i % 5 === 0){
		sum += i;
	}
}
console.log(sum)


