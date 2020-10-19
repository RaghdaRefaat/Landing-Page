/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');


/**
 * End Global Variables*/ 


// helper function 

//this function for smooth scrolling 
function eventHandler(event)
{
  event.preventDefault();
  for(let section of sections)
    section.scrollIntoView({behavior: "smooth"});
};


// this function for changing the active class status 
function activeClass(anchor)
{
  for(let section of sections) 
  {
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight)//section is in the view port so it will be active 
    {
      section.style.background = "black";
      anchor.style.background = "white";
      section.classList.add("your-active-class");
      anchor.classList.add("active")
    }
    anchor.classList.remove("active");
    section.classList.remove("your-active-class");
    console.log(navLink.classList.remove("active"));
    console.log(section.classList.remove("your-active-class"));
  }
};

 // build the navbar
 
function creatNav()
{
  let firstLink = true ; // this boolean var to add the active check class 
  for(let section of sections)
  {
    const item = document.createElement('li');
    if(firstLink == true)
    {
      item.innerHTML = `<a href="#${section.id}" class="active" data-link= ${section.dataset.nav}>${section.id}</a>` ;
      firstLink = false;
    }
    else
      item.innerHTML = `<a href="#${section.id}" class="active" data-link= ${section.dataset.nav}>${section.id}</a>` ;
    item.style.cssText = 'padding-left:2em ; padding-right:2em ; font-size:30px ; font-color:white';
    fragment.appendChild(item);
  }
  navBar.appendChild(fragment);
  document.body.header.appendChild(navBar);

  // to do the smoothe scrooling 
  const anchors = document.getElementsByTagName('a');
  for(a of anchors)
  {
    anchors[a].addEventListener('click', eventHandler(event)); 
    window.addEventListener("scroll", activeClass(anchors[a])); // to change the active class status 
  }
};

//Intializing the function 
creatNav();


