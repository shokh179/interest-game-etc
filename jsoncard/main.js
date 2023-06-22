let kh = localStorage.getItem("name")
let page = document.querySelector(".page")

fetch(`https://fakestoreapi.com/products/${kh}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let h6 = document.createElement("h6")
    h6.textContent = data.description
    h6.style.textAlign="center"
    h6.style.fontSize="14px"
    let img = document.createElement("img")
    img.src = data.image
    img.style.width ="300px"
    img.style.height ="330px"
    img.style.display = "block"
    img.style.margin ="0 auto"
    let h4 = document.createElement("h4")
    h4.style.textAlign ="center"
    h4.textContent = data.category
    let h5 = document.createElement("h5")
    h5.textContent = data.title
    h5.style.textAlign ="center"
    let p = document.createElement("p")
    p.textContent = data.price
    p.style.textAlign ="center"
    page.append(img, h4, h5, p, h6)
    page.style.border ="2px dashed #ccc"
    page.style.padding ="20px"
    page.style.margin ="0 auto"
    page.style.width ="400px"

  });
