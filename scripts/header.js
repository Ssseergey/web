header =
`<div class="header-div">
  <img class="header-img" src="../pictures/logo.png" alt="loading">
  <img class="header-img-absolute" src="../pictures/butterfly.png" alt="loading">

  <h1 class="header-h1">Блог</h1>
</div>
<div class="header-div-nav">
  <nav class="header-nav">
    <button id="index.html" class="header-nav-button" onclick="window.location.href='index.html'">Главная</button>
    <button id="achievements.html" class="header-nav-button" onclick="window.location.href='achievements.html'">Достижения</button>
    <button id="stories.html" class="header-nav-button" onclick="window.location.href='stories.html'">Смешные истории</button>
    <button id="projects.html" class="header-nav-button" onclick="window.location.href='projects.html'">Проекты</button>
  </nav>

  <div class="header-h2">Автор: Сергей Толмачев</div>
</div>
`

document.getElementById("header").insertAdjacentHTML("afterbegin", header);

const uri_split = document.location.href.split('/');
const loc = uri_split[uri_split.length - 1];

let buttons = document.getElementsByClassName("header-nav-button");
for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].id == loc) {
    let inner = buttons[i].innerHTML;

    buttons[i].addEventListener('mouseenter', e => {
      e.target.innerHTML = "Вы тут";
    });
    buttons[i].addEventListener('mouseleave', e => {
      e.target.innerHTML = inner;
    });
  }
}
