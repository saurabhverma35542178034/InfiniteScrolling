
        

async function getPhoto()
{    let mobile='apple';
    let response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${encodeURIComponent(mobile)}`);
    jsonData = await response.json();
    console.log(jsonData.data.length);
    let jsonArray=jsonData.data;

let box = document.querySelector(".box");
box.style.display='flex';
jsonArray.forEach((photo)=>{
let img = document.createElement("img");
img.style.display='flex';
img.src = photo.image;
img.style.height ="200px";
img.style.width ="200px";
box.appendChild(img);

});

}


getPhoto();

window.addEventListener('scroll', function(){

if(this.window.scrollY+this.window.innerHeight>= this.document.body.offsetHeight)
{
    getPhoto();   
}

})