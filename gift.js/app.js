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
        let more = document.createElement("a")
        img.src = data[i].image
        img.style.width = "100px"
        p1.textContent = data[i].title
        p2.textContent = data[i].description
        li.id= data[i].id
        more.textContent = "read more"
        more.style.color ="red"
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



















  //solution1
  let str = 'A l b i s o n';

  let chizucha = str.replace(/\s/g, '-');
  console.log(chizucha);
  
  //regax js
  

  
  