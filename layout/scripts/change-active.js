let mainNavLinks = document.querySelectorAll("header nav ul li a");
console.log(mainNavLinks)
let mainSections = document.querySelectorAll("body div");
console.log(mainSections)
mainNavLinks.forEach(link => {
   
  let section = document.querySelector(link.hash);
  jQuery(link).click(function () {
    jQuery("body,html").animate({
        scrollTop: section.offsetTop,
        
    }, 600);
});
})
let NavLinks = document.querySelectorAll('a[href*="#about"]');
NavLinks.forEach(link => {
  
let section = document.querySelector(link.hash);
jQuery(link).click(function () {
  jQuery("body,html").animate({
      scrollTop: section.offsetTop,
      
  }, 600);
});
})
 NavLinks = document.querySelectorAll('a[href*="#events"]');
NavLinks.forEach(link => {
  console.log(link)
let section = document.querySelector(link.hash);
jQuery(link).click(function () {
  jQuery("body,html").animate({
      scrollTop: section.offsetTop,
      
  }, 600);
});
})
// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  mainNavLinks.forEach(link => {
    console.log(link.hash)
  let section = document.querySelector(link.hash);
  console.log(section)
  console.log(section.offsetTop+"---"+fromTop)
 
    /*if (
      section.offsetTop -300<= fromTop &&
      section.offsetTop + section.offsetHeight-300 > fromTop
    ) {
        
      //link.parentElement.classList.add("active");
    } else {
      //link.parentElement.classList.remove("active");
    }*/
  })})
  