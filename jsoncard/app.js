let cont = document.querySelector(".cont")
let ul = document.querySelector(".cart")

fetch('https://fakestoreapi.com/products')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    for(let  i = 0; i < data.length; i++){
        let li = document.createElement("li");
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let img = document.createElement("img");
        
        img.src = data[i].image
        img.style.width = "100px"
        p1.textContent = data[i].title
        p2.textContent = data[i].description
        li.id= data[i].id
        li.append(img, p1, p2)
        ul.appendChild(li)
        
        cont.append(ul)
    }
  });


  
ul.addEventListener("click", (e)=> {
   console.log(e.target.id);
   const id = e.target.id;
   localStorage.setItem("name", id );
   window.location.assign("./append.html")
})






//  let detaikedData = fetch('https://fakestoreapi.com/products/1');
 
  // console.log(`https://fakestoreapi.com/products/${e.target.textContent}`);
  // let  a = fetch(`https://fakestoreapi.com/products/${e.target.textContent}`).then((res)=>res.json()).then(res=> console.log(res))
  // console.log(a);

//  idf.addEventListener("click", () => {
//   console.log("1 clicked");
// });






















  //solution1
  let str = 'A l b i s o n';

  let chizucha = str.replace(/\s/g, '-');
  console.log(chizucha);
  
  //regax js
  

  
  