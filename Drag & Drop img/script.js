let drop = document.querySelector(".drop"),
txt = drop.querySelector(".head"),
button = drop.querySelector("button"),
input = drop.querySelector("input");
let file;
button.onclick = ()=>{
  input.click(); 
}

input.addEventListener("change", function(){
  file = this.files[0];
  drop.classList.add("active");
  showFile(); 
});


drop.addEventListener("dragover", (e)=>{
  e.preventDefault(); 
  drop.classList.add("active");
  txt.textContent = "Img drop";
});


drop.addEventListener("dragleave", ()=>{
  drop.classList.remove("active");
  txt.textContent = "Upload img";
});


drop.addEventListener("drop", (e)=>{
  e.preventDefault(); 
  file = e.dataTransfer.files[0];
  showFile(); 
});

function showFile(){
  let fileType = file.type; 
  let typeimg = ["image/jpeg", "image/jpg", "image/png"]; 
  if(typeimg.includes(fileType)){ 
    let fileReader = new FileReader();
    fileReader.onload = ()=>{
      let fileURL = fileReader.result;
      let imgTag = `<img src="${fileURL}" alt="">`; 
      drop.innerHTML = imgTag; 
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    drop.classList.remove("active");
    txt.textContent = "Drag & Drop to Upload img";
  }
}
