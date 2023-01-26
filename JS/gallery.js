let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages) {
  galleryImages.forEach(function(image, index) { // This is the function that when we click on the function it will allow us to open it up and display it in full view
    image.onclick = function() {
      let getElementCss = window.getComputedStyle(image); // we can get all the CSS style from our stle sheet
      let getFullImgUrl = getElementCss.getPropertyValue("background-image");
      let getImgUrlPos = getFullImgUrl.split("/img/");
      let setNewImgUrl = getImgUrlPos[1].replace('")','');
      
      getLatestOpenedImg = index + 1;
      
      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow); // Now we have a new div box when we click on the new image
      newImgWindow.setAttribute("class","img-window");
      newImgWindow.setAttribute("onclick","closeImg()"); // when we click on the big container it will close down the image

      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src","img/" + setNewImgUrl);
      newImg.setAttribute("id","current-img");


      newImg.onload = function() {
        let imgWidth = this.width; // a property we can reference to get the width of the object
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode("Next");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class","img-btn-next");
        newNextBtn.setAttribute("onclick","changeImg(1)");//sets an attribute for running a function on an onclick event
        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("Prev");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class","img-btn-prev");
        newPrevBtn.setAttribute("onclick","changeImg(0)");//sets an attribute for running a function on an onclick event
        newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
      }
    }
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
}


function changeImg(changeDir) {
  document.querySelector("#current-img").remove();

  let getImgWindow = document.querySelector(".img-window"); 
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;
  if(changeDir === 1) {
    calcNewImg = getLatestOpenedImg + 1;
    if(calcNewImg > galleryImages.length) {
      calcNewImg = 1;
    }
  } 
  else if(changeDir === 0) {
      calcNewImg = getLatestOpenedImg - 1;
    if(calcNewImg < 1) {
      calcNewImg = galleryImages.length;
    }
  }
  newImg.setAttribute("src","img/img"+ calcNewImg + ".jpg");
  newImg.setAttribute("id","current-img");

  getLatestOpenedImg = calcNewImg;

  newImg.onload = function() {
    let imgWidth = this.width;
    let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

    let nextBtn = document.querySelector(".img-btn-next");
    nextBtn.style.cssText =  "right: " + calcImgToEdge + "px;";

    let prevBtn = document.querySelector(".img-btn-prev");
    prevBtn.style.cssText =  "left: " + calcImgToEdge + "px;";
  }

}