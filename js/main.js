'use strict';

const mainVisual = document.querySelector('.mainvisual');
function sectionLayout() {

    let heightValue = window.innerHeight;
    mainVisual.style.height = `${heightValue}px`;
    console.log(heightValue);
} 
sectionLayout();
addEventListener('resize', sectionLayout);