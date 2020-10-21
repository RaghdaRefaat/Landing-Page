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
const bodyHeader = document.querySelector('.page__header');
const navBarMenu = document.querySelector('.navbar__menu');
const navBar = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');
let anchors ;

/**
 * End Global Variables*/ 


// helper function 

//this function to check the section in the view port 
function sectionInView (section)
{
  const rect = section.getBoundingClientRect();
  return(
    rect.top <= 150 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};


// this function for changing the active class status 
function activeClass()
{
  for(let section of sections) 
  {
    if(section.id == 'section1')
      section.classList.remove('your-active-class'); //to remove the default setting 
    const isInView = sectionInView(section);
    if (isInView){
      section.classList.add('your-active-class');
      section.style.background = "green";
      for(anchor of anchors){
        if(anchor.getAttribute('data-link') == section.id){
          anchor.classList.add('active');
          anchor.style.background = "green";
        }
        else{
          anchor.classList.remove('active');
          anchor.removeAttribute('style');
        }
      }
      
    }else {
      section.classList.remove('your-active-class');
      section.removeAttribute('style');
    }
  }
};

// to do the smooth scrooling
function smoothy()
{
  anchors = document.querySelectorAll('a');
  for(anchor of anchors)
  {
    anchor.addEventListener('click', function eventHandler(event)
    { 
      event.preventDefault();
      for(let section of sections){
        if(section.id == this.id){
          section.scrollIntoView({behavior: "smooth" , block: "start"});
          window.addEventListener('scroll', activeClass);
        }
      }
    }) 
  }
};








 // build the navbar
 
function creatNav()
{
  for(let section of sections)
  {
    const item = document.createElement('li');
    item.innerHTML = `<a id=${section.id} href="#${section.id}" class="" data-link= ${section.id}>${section.id}</a>` ;
    item.style.cssText = 'padding-left:2em ; padding-right:2em ; font-size:30px ; font-color:white';
    fragment.appendChild(item);
  }
  navBar.appendChild(fragment);
  navBarMenu.appendChild(navBar);
  bodyHeader.appendChild(navBarMenu);
  document.body.appendChild(bodyHeader); 

  //to do smooth scrolling 
  smoothy();
};



//Intializing the function 
creatNav();







