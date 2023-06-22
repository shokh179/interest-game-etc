let cont = document.querySelector(".cont");
let ul = document.querySelector("ul");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let li = document.createElement("li");
      let p1 = document.createElement("p");
      let img = document.createElement("img");
      img.src = data[i].flags.png;
      img.style.width = "120px";
      p1.textContent = `Davlat: ${data[i].name.common}`
      li.classList.add("country");
      img.classList.add("image");
      let pop = document.createElement("p")
      pop.textContent = `Aholisi:${data[i].population}`
      pop.style.color="green"
      let reg = document.createElement("p")
      reg.textContent = `Poytaxt: ${data[i].capital}`
      let fifa = document.createElement("p")
      fifa.textContent = `FIFA: ${data[i].fifa}`
      reg.style.color="red"
      let time = document.createElement("h5")
      time.textContent = `Vaqt: ${data[i].timezones}`
      time.style.color="orange"
      li.append(img, p1,  reg, pop, fifa, time);
      ul.append(li);
      cont.append(ul);
    }

  });



function search() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('country');
    

    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
























// function search_animal() {
//     let input = document.getElementById('searchbar').value
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName('image');
    

//     for (i = 0; i < x.length; i++) { 
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="list-item";                 
//         }
//     }

      
//     // for (i = 0; i < x.length; i++) { 
//     //     if (input == x) {
//     //         // x[i].style.display="block";
//     //         x.style.color="red"
//     //     }
      
//     // }
// }




//   function Search(item){
//     let collection = document.getElementsByClassName("listla");
//     for (i = 0;i < collection.length; i++){
//         if (((collection[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
//             collection[i].style.display = "block";
//             } else {
//                 collection[i].style.display = "none";
//                 }
//     }
// }














// JavaScript code
// function search_animal() {
// 	let input = document.getElementById('searchbar').value
// 	input=input.toLowerCase();
// 	// let x = document.getElementsByClassName('animals');

// 	for (i = 0; i < p1.length; i++) {
// 		if (!p1[i].innerHTML.toLowerCase().includes(input)) {
// 			p1[i].style.display="none";
// 		}
// 		else {
// 			p1[i].style.display="list-item";
// 		}
// 	}
// }
