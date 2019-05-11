// Get the element with id="defaultOpen" and click on it
//Shrink on scroll
window.onscroll = function() {scrollFunction()};

function openNav() {
  document.getElementById("mySidenav").style.width = "370px";
  document.getElementById("mySidenav").style.backgroundColor = "rgba(57, 57, 57, 0.97)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.backgroundColor = "rgba(57, 57, 57, 0)";
}

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

function scrollFunction() {
  if (document.body.scrollTop > 210 || document.documentElement.scrollTop > 210) {
  	document.getElementById("menu").style.padding = "0px 11px 0px 11px"
    list = document.getElementsByClassName("header");
    for (i = 0; i < list.length; i++) {
    	console.log(list[i]);
    	list[i].style.fontSize = "17px";
    }
  } else {
    list = document.getElementsByClassName("header");
    document.getElementById("menu").style.padding = "11px 11px 0px 11px"
    for (i = 0; i < list.length; i++) {
    	console.log(list[i]);
    	list[i].style.fontSize = "37px";
    }  }
}


