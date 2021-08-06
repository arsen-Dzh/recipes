const search = document.querySelector(".input-serach");
const list = document.querySelector(".list");
// const image = document.querySelector(".img");

async function getRepices(str, nameTitle) {
  try {
    // let foo = 'a'
    let count = 0;
    // console.log(nameTitle);
    let foo = nameTitle.toLowerCase();
    const response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${str}`);
    const data = await response.json();
    const meals = data.meals
    // console.log(meals)
    const recipePicture = meals.map(el => {
      return {title: el.strMeal, description: el.strInstructions, photo: el.strMealThumb}
    });
    // console.log(recipePicture);
    for (let i = 0; i < recipePicture.length; i++) {
      count++;
      if ((recipePicture[i].title.toLowerCase()).includes(foo)) {
    list.insertAdjacentHTML("afterbegin", `
    <div class="item countItem${count}">
      <img class="photo" src=${recipePicture[i].photo}>
      <p class="title">${recipePicture[i].title.toUpperCase()}</p>
      <p class="description">${recipePicture[i].description}</p>
    </div>
    `);
      }
      // if ((recipePicture[i].title.toLowerCase()).includes(foo)) {

      // }
    }

    const arrItem = document.querySelectorAll('.item')
    // for (let el of arrItem) {
    //   console.log(el.children[1].innerText);
    //   if (!el.children[1].innerText.includes(nameTitle.toUpperCase())) {
    //     el.classList.add("clear");
    //   }
    //   if (str === undefined) {
    //     el.classList.add("clear");
    //   }
    // }

    for (let i = 0; i < arrItem.length; i++) {
      if (!arrItem[i].children[1].innerText.includes(nameTitle.toUpperCase())) {
        arrItem[i].classList.add("clear");
      }
      if (arrItem[i].children[1].innerText === arrItem[i++].children[1].innerText) {
        arrItem[i++].classList.add("clear");
      }
    }
   
  } catch (error) {
    console.log(error)
  }
}

// fetchHandler();

search.addEventListener('input', (event) => {
  let value = event.target.value;
  console.log(value);
  let firstStr = value[0];
  console.log(value);
  // console.log(firstStr)
  getRepices(firstStr, value)
});


