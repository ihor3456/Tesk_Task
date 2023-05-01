//Burger menu
const burgerMenuIcon = document.querySelector("#burger_menu");
const burgerMenuList = document.querySelector(".burger_menu");
const burgerImg = document.querySelector(".burger");
const burgerSpan = document.querySelector(".burger-span");
burgerMenuIcon.addEventListener("click", () => {
  burgerMenuList.classList.toggle("hide");
  burgerImg.classList.toggle("margin_right");
});
burgerSpan.addEventListener("click", () => {
  burgerMenuList.classList.toggle("hide");
  burgerImg.classList.toggle("margin_right");
});

//Tabs add post
const blogLink = document.querySelector("#blog_link");
const addPostLink = document.querySelector("#addPost_link");

const blog = document.querySelector("#blog");
const addPost = document.querySelector("#addPost");

addPostLink.addEventListener("click", () => {
  if (addPost.classList.contains("hide")) {
    hideShow(blog, addPost);
  }
});
blogLink.addEventListener("click", () => {
  if (blog.classList.contains("hide")) {
    hideShow(addPost, blog);
  }
});

function hideShow(firstElem, secondElem) {
  firstElem.classList.toggle("hide");
  secondElem.classList.toggle("hide");
}

//Overview list

const overViewVector = document.querySelector("#overview_vector");
const overViewActiveVector = document.querySelector("#overview_active_vector");

const overViewList = document.querySelector(".overview_list");

overViewVector.addEventListener("click", () => {
  if (overViewActiveVector.classList.contains("hide")) {
    overViewList.classList.remove("hide");
    hideShow(overViewActiveVector, overViewVector);
  }
});

overViewActiveVector.addEventListener("click", () => {
  if (overViewVector.classList.contains("hide")) {
    overViewList.classList.add("hide");
    hideShow(overViewActiveVector, overViewVector);
  }
});
