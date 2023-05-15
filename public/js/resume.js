const dropDown=()=>{
    let dropBox=document.querySelector(".magic").innerHTML=`
    <div class="menu_Button" onclick="UNdrop()">
        <img src="icons/menu.png" alt="">
        <div class="SideDrop">
        <div class="menus">
        <a href="/home">Home</a>
        </div>
        <div class="menus">
            <a href="/about">About</a>
        </div>
        <div class="menus">
            <a href="/skills">Skills</a>
        </div>
        <div class="menus">
            <a href="/experience">Experience</a>
        </div>
        <div class="menus">
            <a href="/education">Education</a>
        </div>
        <div class="menus">
            <a href="myProjects">My Projects</a>
        </div>
        <div class="menus">
            <a href="/contact">Contact</a>
        </div>
            </div>
        </div>
  `;
  let left=document.querySelector(".left");
  left.style.filter='blur(4px)';
  let right=document.querySelector(".right");
  right.style.filter='blur(4px)';
  let content=document.querySelector(".content");
  content.style.filter='blur(4px)';
}

const UNdrop=()=>{
    let undrop=document.querySelector(".magic").innerHTML=`<div class="menu_Button" onclick="dropDown()"><img src="icons/menu.png" alt=""></div>`;
    let left=document.querySelector(".left");
    left.style.filter='blur(0px)';
    let right=document.querySelector(".right");
    right.style.filter='blur(0px)';
    let content=document.querySelector(".content");
    content.style.filter='blur(0px)';
}