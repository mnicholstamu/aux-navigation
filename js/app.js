let auxDropdown = document.getElementsByClassName('dropdown-toggle');
let auxMegaMenu = document.querySelectorAll('.megamenu');
let auxMainContent = document.querySelector('.main');
let auxCloseButton = document.querySelector('.close');

for (let i = 0; i < auxDropdown.length; i++) {
  auxDropdown[i].addEventListener("click", function() {
    let dropdownContent = this.nextElementSibling;
    let dropdownParent = this;

    auxMegaMenu.forEach(el => {
      if (el !== dropdownContent){
        el.style.display = 'none';
        el.ariaExpanded = "false";
        el.ariaPressed = "false";

        el.parentElement.children[0].ariaExpanded = "false";
        el.parentElement.children[0].ariaPressed = "false";

      } else {
        el.ariaExpanded = "true";
        el.ariaPressed = "true";

        el.parentElement.children[0].ariaExpanded = "true";
        el.parentElement.children[0].ariaPressed = "true";
      }
    });


    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";

      dropdownContent.ariaExpanded = "false";
      dropdownContent.ariaPressed = "false";

      dropdownParent.ariaPressed = "false";
      dropdownParent.ariaExpanded = "false";

    } else {
      dropdownContent.style.display = "block";

      dropdownContent.ariaExpanded = "true";
      dropdownContent.ariaPressed = "true";

      dropdownParent.ariaExpanded = "true";
      dropdownParent.ariaPressed = "true";
    }





    auxMainContent.addEventListener('click', function(event) {

      if(event.target.className !== 'dropdown-toggle' ){
        dropdownContent.style.display = "none";

        dropdownContent.ariaExpanded = "false";
        dropdownContent.ariaPressed = "false";

        dropdownParent.ariaPressed = "false";
        dropdownParent.ariaExpanded = "false";
      }

    });
  });
}
