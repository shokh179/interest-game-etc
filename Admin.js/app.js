class User {
  constructor(name, tel, nick, status) {
    this.name = name;
    this.tel = tel;
    this.nick = nick;
    this.status = status;
  }
}

let user1 = new User("Nafisa", "+99895636718", "@khimmatova", true);
let user2 = new User("Shoira", "+99897364628", "@Kabirova", false);
let user3 = new User("Adamar", "+99873765710", "@gucci06", false);
let user4 = new User("Zohir", "+09545790986", "@zohirbey_abdu", false);
let user5 = new User("Anvar", "+99493895657", "@nosirov", true);
let user7 = new User("Komil", "+998900070790", "@fuzailovv", true);

let users = [user1, user2, user7, user3, user4, user5];

users.map((item) => {
  console.log(item);
  let crc = document.createElement("span");
  crc.style.width = "10px";
  crc.style.height = "10px";
  crc.style.borderRadius = "5px";
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.style.listStyle = "none";
  let h4 = document.createElement("h4");
  h4.textContent = item.name;
  h4.style.display = "flex";
  h4.style.alignItems = "center";
  h4.style.gap = "5px";
  let ph = document.createElement("p");
  ph.textContent = item.tel;
  let nk = document.createElement("p");
  nk.textContent = item.nick;

  let del = document.createElement("button");
  let block = document.createElement("button");
  del.style.backgroundColor = "red";
  block.style.backgroundColor = "gray";
  del.style.border = "transparent";
  del.style.marginRight = "10px";
  del.style.color = "white";
  del.style.color = "white";
  del.style.fontSize = "16px";
  block.style.fontSize = "16px";
  del.style.padding = "5px";
  block.style.padding = "5px";
  del.style.borderRadius = "5px";
  block.style.borderRadius = "5px";
  block.style.color = "white";
  block.style.border = "transparent";
  del.textContent = "delete";
  block.textContent = "block";
  // let img1 = document.createElement("img")
  // img1.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfT-aL3CJVmiF_NDSZAYNhxiLs3BNAdjCQwA&usqp=CAU'
  h4.append(crc);
  li.append(h4, ph, nk, del, block);
  ul.append(li);

  if (item.status == true) {
    crc.style.backgroundColor = "blue";
  } else {
    crc.style.backgroundColor = "grey";
  }

  del.addEventListener("click", () => {
    if (del.click) {
      li.style.display = "none";
    }
  });

  block.addEventListener("click", () => {
    if (block.textContent == "block") {
      li.style.opacity = "0.3";
      block.textContent = "Unblock";
    } else if (block.textContent == "Unblock") {
      li.style.opacity = "1";
      block.textContent = "block";
    }
  });
});
