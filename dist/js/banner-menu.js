const Menus = document.querySelectorAll(".menu");
const Contents = document.querySelectorAll(".aboutSchool");
Menus.forEach((menu) => {
  menu.addEventListener("click", () => {
    removeActiveTab();
    menu.classList.add("active");
    const activeContent = document.querySelector(`#${menu.id}-Contents`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});
function removeActiveTab() {
  Menus.forEach((menu) => {
    menu.classList.remove("active");
  });
}
function removeActiveContent() {
  Contents.forEach((aboutSchool) => {
    aboutSchool.classList.remove("active");
  });
}
