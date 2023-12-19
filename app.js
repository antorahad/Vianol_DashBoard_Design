const side_Btn = document.getElementById('sideBtn');
const side_Menu = document.getElementById('sideMenu');
let sideMenuToggle = false;

side_Btn.addEventListener('click', () => {
  // Toggle the 'show' class on side_Menu
  if (!sideMenuToggle) {
    side_Menu.classList.add('show');
    sideMenuToggle = true;
  } else {
    side_Menu.classList.remove('show');
    sideMenuToggle = false;
  }
});
