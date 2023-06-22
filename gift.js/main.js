let kh = localStorage.getItem("name")
let page = document.querySelector(".page")

fetch(`https://fakestoreapi.com/products/${kh}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let h6 = document.createElement("h6")
    h6.textContent = `Description: ${data.description}`
    h6.style.textAlign="center"
    h6.style.color="blue"
    h6.style.backgroundColor="white"
    h6.style.fontSize="14px"
    let img = document.createElement("img")
    img.src = data.image
    img.style.width ="300px"
    img.style.height ="320px"
    img.style.display = "block"
    img.style.backgroundColor="white"
    img.style.padding="20px 40px "
    img.style.margin ="0 auto"
    let h4 = document.createElement("h4")
    h4.style.textAlign ="center"
    h4.style.color="red"
    h4.style.backgroundColor="white"
    h4.textContent = ` Category: ${data.category}`
    let h5 = document.createElement("h5")
    h5.textContent =`Title: ${ data.title}`
    h5.style.color="green"
    h5.style.backgroundColor="white"
    h5.style.fontSize="16px"
    h5.style.textAlign ="center"
    let p = document.createElement("p")
    p.textContent = `Price: ${data.price}`
    p.style.fontSize="19px"
    p.style.color="magenta"
    p.style.backgroundColor="white"
    p.style.textAlign ="center"
    page.append(h4, h5,img, p, h6)
    page.style.padding ="20px"
    page.style.margin ="1% auto"
    page.style.width ="400px"

  });
