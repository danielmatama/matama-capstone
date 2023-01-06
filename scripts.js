const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');
const mark = document.querySelector('.xmark');
const Items = document.querySelectorAll('.nav-bar .ax');
dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hide');
});
mark.addEventListener('click', () => {
  dropdownMenu.classList.toggle("hide");
});

Items.forEach((n) => {
  n.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hide');
  });
});


const body = document.querySelector('body');
const section = document.createElement('section');
body.appendChild(section);
section.innerHTML = `

<div class="f-topica">
<h3 class="f-topic">Featured Speakers</h3>
<hr style="height:2px; width: 40px;border-width:0;color:#ff4500;background-color:#ff4500;">
</div>

<div class="speakers">
<div class="f-texts">
  <h4 class="f-title"></h4>
  <p class="f-para"></p>
  <p class="f-para2"></p>
</div>
</div>

</div>
<button type="button" name="button" class="btn-f">MORE<span><img src="images/down.png" alt="" class="down"></span></button>

`;

const speakersArray = [{
    name: 'Phil Musiime',
    university: ' Chairman of Board',
    checkedImg: './images/checked.png',
    img: './images/feature1.png',
    biodata: 'He has led this organisation, with great success since 1995',
  },
  {
    name: 'Oscar Dickens',
    university: 'Head Linguist',
    checkedImg: './images/checked.png',
    img: './images/feature2.png',
    biodata: 'He has translated over 50 Ugandan languages to English',
  },
  {
    name: 'Dan Otto',
    university: 'Historian',
    checkedImg: './images/checked.png',
    img: './images/feature3.png',
    biodata: 'He has translated hundreds of acient Ugandan texts.',
  },
  {
    name: 'Rajesh Omar',
    university: 'Cultral Dancer',
    checkedImg: './images/checked.png',
    img: './images/feature4.png',
    biodata: 'Has represented Ugandan dance culture for over 10 years',
  },
];

const keySpeakers = document.querySelector('.speakers');
speakersArray.forEach((speaker) => {
  const {
    name,
    university,
    checkedImg,
    img,
    biodata
  } = speaker;
  keySpeakers.innerHTML += `
  <div class="speaker">
  <div class="f-img">
    <img src=${checkedImg} alt="" class="checked">
    <img src=${img} alt="" class="f-speak">
  </div>
  <div class="f-texts">
    <h4 class="f-title">${name}</h4>
    <p class="f-para">${university}</p>
    <p class="f-para2">${biodata}</p>
  </div>
  </div>
`;
});

// ....///features more...//
const dropFeatures = document.querySelector('.btn-f');
const featuresMenu = document.querySelector('.f-hide');
dropFeatures.addEventListener('click', () => {
  featuresMenu.classList.toggle('f-hide');
});
