let title = document.getElementById("card__info-title");

title.addEventListener("mouseover", ()=>{
    title.style.color = "hsl(47, 88%, 63%)";
    title.style.cursor = "pointer";
});
title.addEventListener("mouseout", ()=>{
    title.style.color = "black";
});


console.log("hello world");
