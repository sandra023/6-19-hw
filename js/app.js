// //Question 1
// for (i = 1; i <=20; i++){
// 	console.log(i)
// }

// //Question 2
// for (i =0; i<=200; i++){
// 	if(i%2 == 0){
// 		console.log(i)
// 	}
// }
// //Question 3

// const arry = ["...human...why you taking pictures of me?", "...the catnip made me do it...", "...why does the red dot always get away..."];
// for (i=1; i <=20; i++){
// 	console.log("Love me, pet me! HSSSSSSS!");
// 	if(i%2 == 0){

// 		console.log(arry[(Math.floor(Math.random()*arry.length))]);
// 	}
// }

//Question 4

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

//Question 5
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0] = "Gameboy";
console.log(kenny);
jimClark[1] = jimClark[1]+1;
console.log(jimClark);
ryan[2] = "Gotham City";
console.log(ryan);
reuben.pop();
console.log(reuben);
reuben.push("Chicago");
console.log(reuben);
jimHaff.pop();
console.log(jimHaff);
jimHaff.push("Vegas","Dallas","Tokyo");
console.log(jimHaff);
jimHaff.splice(2,1);
console.log(jimHaff);






