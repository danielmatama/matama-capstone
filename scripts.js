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
<div class=f-show>
<div class="speaker">
<div class="f-img">
  <img src="images/feature1.png" alt="" class="f-speak">
</div>
<div class="f-texts">
  <h4 class="f-title">Musiime phillip</h4>
  <p class="f-para">Head of board of governors</p>
  <p class="f-para2">He has led this organisation since 1995</p>
</div>
</div>

<div class="speaker">
<div class="f-img">
  <img src="images/feature2.png" alt="" class="f-speak">
</div>
<div class="f-texts">
  <h4 class="f-title">Oscar Dickens</h4>
  <p class="f-para">Head Linguist</p>
  <p class="f-para2">He has translated over 50 Ugandan languages to English</p>
</div>
</div>
</div>

<div class="f-hide">
<div class="speaker">
<div class="f-img">
  <img src="images/feature3.png" alt="" class="f-speak">
</div>
<div class="f-texts">
  <h4 class="f-title">Dan Otto</h4>
  <p class="f-para">Historian</p>
  <p class="f-para2">Has decoded acient Ugandan history for the first time</p>
</div>
</div>

<div class="speaker">
<div class="f-img">
  <img src="images/feature4.png" alt="" class="f-speak">
</div>
<div class="f-texts">
  <h4 class="f-title">Rajesh Omar</h4>
  <p class="f-para">Cultral Dancer</p>
  <p class="f-para2">Has represented Ugandan dance culture for over 10 years</p>
</div>
</div>
</div>

<button type="button" name="button" class="btn-f">MORE<span><img src="images/down.png" alt="" class="down"></span></button>

</div>
`;

// ....///features more...//

const dropFeatures = document.querySelector('.btn-f');
const featuresMenu = document.querySelector('.f-hide');
dropFeatures.addEventListener('click', () => {
  featuresMenu.classList.toggle('f-hide');
});
