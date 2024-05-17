// img links:-
// "https://i.pinimg.com/236x/2a/8c/81/2a8c8113c5d54dac727a2e544af265c3.jpg"
// "https://i.pinimg.com/564x/31/49/13/3149131d03082fddb8b096d9c3aeff48.jpg"
// "https://i.pinimg.com/564x/de/ab/b8/deabb876915a89fa2334ea282329b581.jpg"
// "https://i.pinimg.com/236x/57/9e/a8/579ea8c25360372861223da98a2a4574.jpg"
// "https://i.pinimg.com/236x/74/49/e6/7449e67844e34d68374c3ab280bd9915.jpg"
// "https://i.pinimg.com/564x/00/3c/06/003c06d5335a39359cc81083c08f1b82.jpg"


//METHOD 1 if we want to print same thing 
// let x = document.getElementById("main");
// var s ="";
// for( let i =1; i<=52;i++){
//    s+= `<div class="card">
//    <img src="https://i.pinimg.com/564x/00/3c/06/003c06d5335a39359cc81083c08f1b82.jpg">
//  </div>`;
// }
// x.innerHTML=s;



//METHOD 2 if we want to print differrent thing display 
let x = document.getElementById("main");
let arr =["https://i.pinimg.com/236x/2a/8c/81/2a8c8113c5d54dac727a2e544af265c3.jpg",
"https://i.pinimg.com/564x/31/49/13/3149131d03082fddb8b096d9c3aeff48.jpg",
"https://i.pinimg.com/564x/de/ab/b8/deabb876915a89fa2334ea282329b581.jpg",
"https://i.pinimg.com/236x/57/9e/a8/579ea8c25360372861223da98a2a4574.jpg",
"https://i.pinimg.com/236x/74/49/e6/7449e67844e34d68374c3ab280bd9915.jpg",
"https://i.pinimg.com/564x/00/3c/06/003c06d5335a39359cc81083c08f1b82.jpg"
];
var s = "";
for (let i = 1; i <= 52; i++) {
    let r = Math.floor(Math.random() * arr.length);
    s += `<div class="card">
            <img src="${arr[r]}">
          </div>`;
}
x.innerHTML = s;
