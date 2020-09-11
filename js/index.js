const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// let navMenu = document.querySelectorAll('a');
// navMenu.forEach(function(currentValue, counting){
//   return (currentValue.textContent = Object.values(siteContent.nav)[idx])}

// Select all a tags for making Menu
let navMnuEach = document.querySelectorAll('a');
navMnuEach.forEach(
  (currentValue, nextValue) =>
    (currentValue.textContent = siteContent.nav[`nav-item-${nextValue}`])
);

// Making Menu color Green
let colorChanger = document.querySelectorAll('a');
colorChanger.forEach((menuElement) => {
  menuElement.style.color = 'green';
});

// Header Title
let headerTitle = document.querySelector('h1');
headerTitle.textContent = siteContent.cta.h1;

// Header Button
let headerButton = document.querySelector('button');
headerButton.textContent = siteContent.cta.button;

// Header Logo-image
let headerImage = document.getElementById('cta-img');
headerImage.setAttribute('src', siteContent['cta']['img-src']);

// Main Content Top
let mainCont = document.querySelectorAll('.text-content');
// Adding the h4 and p element to first txt content
mainCont[0].querySelector('h4').textContent =
  siteContent['main-content']['features-h4'];
mainCont[0].querySelector('p').textContent =
  siteContent['main-content']['features-content'];

// Main Content Middle
// Adding the h4 and p middle about content
mainCont[1].querySelector('h4').textContent =
  siteContent['main-content']['about-h4'];
mainCont[1].querySelector('p').textContent =
  siteContent['main-content']['about-content'];

// Adding the img on middle img content
let middleContentImg = document.getElementById('middle-img');
middleContentImg.setAttribute(
  'src',
  siteContent['main-content']['middle-img-src']
);
// Adding the h4 and p middle services content
mainCont[2].querySelector('h4').textContent =
  siteContent['main-content']['services-h4'];
mainCont[2].querySelector('p').textContent =
  siteContent['main-content']['services-content'];

// Adding the h4 and p middle product content
mainCont[3].querySelector('h4').textContent =
  siteContent['main-content']['product-h4'];
mainCont[3].querySelector('p').textContent =
  siteContent['main-content']['product-content'];

// Adding the h4 and p middle vision content
mainCont[4].querySelector('h4').textContent =
  siteContent['main-content']['vision-h4'];
mainCont[4].querySelector('p').textContent =
  siteContent['main-content']['vision-content'];

// Making Contact

//Contact with 'h4' and 'p'
let contactProfile = document.querySelector('.contact');

//Contact address 'h4'
contactProfile.querySelector('h4').textContent =
  siteContent['contact']['contact-h4'];

//getting the children
let detailContact = contactProfile.querySelectorAll('p');

//address
detailContact[0].textContent = siteContent['contact']['address'];
//phone
detailContact[1].textContent = siteContent['contact']['phone'];
//email
detailContact[2].textContent = siteContent['contact']['email'];

//footer
let footerVal = document.querySelector('footer');
footerVal.textContent = siteContent['footer']['copyright'];

// Making the new element
let newA = document.createElement('a');

// Assigining value
newA.textContent = 'Robel';

// Parent element made
let parentEle = document.querySelector('nav');

//Prepedning to parent
parentEle.prepend(newA);

//Appending the Child to Parent
parentEle.appendChild(newA);
