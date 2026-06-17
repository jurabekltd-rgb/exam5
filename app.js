// /// 1.like
const likes =document.querySelectorAll('.like')
likes.forEach(like=>{
    like. addEventListener('click', ()=>{
        //Class active qoshildi bosilganda
        like.classList.toggle('active')

        // Class orqali like bosilgani yoki bosilmaganini tekshirib olamiz
        if (like.classList.contains('active')){
            like.textContent="❤️"
        } else{
            like.textContent="🤍"
        }
    })
})

// 2.Cars input
const productInp = document.querySelector("#productInp");
const cards = document.querySelectorAll(".car-item-card");

productInp.addEventListener("input", () => {
  let value = productInp.value.toLowerCase();

  cards.forEach((card) => {
    let title = card.querySelector("h3").textContent.toLowerCase();

    if (title.includes(value)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});
// 3. See all button
let btn = document.querySelector('.see-all-btn');
let hiddenCards = document.querySelectorAll('.hiddenCar');

btn.addEventListener('click', () => {
    hiddenCards.forEach(card => {
        card.classList.toggle('hiddenCar');
    });

    if (hiddenCards[0].classList.contains('hiddenCar')) {
        btn.textContent = "See all...";
    } else {
        btn.textContent = "Close";
    }
});
// DarkMode
let darkBtn = document.querySelector('.dark');
let lightBtn = document.querySelector('.light');
let body = document.body

// 4.Sahifa ochilganda saqlangan theme
let theme = localStorage.getItem('theme')

if (theme === 'dark') {
    body.classList.add('dark')
} else {
    body.classList.remove('dark')
}

// DarkMode button
darkBtn.addEventListener('click', () => {
    body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
})

// LightMode button
lightBtn.addEventListener('click', () => {
    body.classList.remove('dark')
    localStorage.setItem('theme', 'light')
})