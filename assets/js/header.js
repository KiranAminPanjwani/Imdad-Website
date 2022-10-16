function openSideNav() {
    document.getElementById("menuOptionsSidenav").style.width = "250px";
    document.getElementById("menuOptionsSidenav").style.boxShadow  = "0 0 0 10000px rgba(0,0,0,.50)";
    document.getElementById("menuimg").style.display= "none";
  }
  
  function closeSideNav() {
    document.getElementById("menuOptionsSidenav").style.width = "0";
    document.getElementById("menuOptionsSidenav").style.boxShadow  = "0 0 0 10000px rgba(0,0,0,0)";
    document.getElementById("menuimg").style.display= "block";
  }
  
  