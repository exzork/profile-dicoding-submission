function show(class_name, navigation_menu) {
  document.querySelectorAll("article").forEach((element) => {
    element.classList.add("hidden");
  });
  document.querySelectorAll("." + class_name).forEach((element) => {
    element.classList.remove("hidden");
  });
  document.querySelector(".active").classList.remove("active");
  navigation_menu.classList.add("active");
}
