const images = ["./assets/focaccia.jpg", "./assets/focaccia.jpg", "./assets/focaccia.jpg"]
const nameList = ["This is my focaccia. yom yoms. 4h of proofing and kneading and baking... nom nom nom nom nom", "This is also my focaccia. yom yoms. 4h of proofing and kneading and baking... nom nom nom nom nom", "This is my last focaccia. yom yoms. 4h of proofing and kneading and baking... nom nom nom nom nom"]

function addingImages(images) {
  for (var i = 0; i < images.length; i++) {
    var image = document.createElement("img");
    var label = 
    image.setAttribute("src", images[i]);
    image.setAttribute("width", "30%");
    // console.log(document.querySelector(".gallery"))
    document.querySelector(".gallery").appendChild(image);
  }
}

function addingNames(nameList) {
  for (let i = 0; i < nameList.length; i++) {
    let span = document.createElement("span"); 
    span.setAttribute("id", nameList[i])
    document.querySelector(".names").appendChild(span);
    document.getElementById(nameList[i]).innerHTML = nameList[i];
  }
}

window.onload = function () {
  addingImages(images)
  addingNames(nameList)
}