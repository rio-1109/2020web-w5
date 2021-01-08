const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '今日は、華氏32度でとても寒く外は雪が降っていた。:insertx: は暖炉で温まっていた。太郎はお正月に :inserty: を食べ過ぎて10ポンド太った。太郎は初売りで :insertz: を買ったが太ったので着れなくなってしまった。太郎はやけになって :inserty: を食べた。その様子を :insertx: は見ていた。';
let insertX = ['イヌ','ネコ','ウサギ','ハリネズミ'];
let insertY = ['おせち料理','餅','蟹','すき焼き'];
let insertZ = ['セーター','スカート','スラックス','コート'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertx:',xItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('太郎',name);
    newStory = newStory.replace('太郎',name);
    newStory = newStory.replace('太郎',name);
  }

  if(document.getElementById("ja").checked) {
    const weight = Math.round(10*0.453592) + ' kg';
    const temperature = '摂氏'+Math.round((32-32) * 5 / 9) + ' 度';
    newStory = newStory.replace('華氏32度',temperature);
    newStory = newStory.replace('10ポンド',weight);
    newStory = newStory.replace('暖炉','炬燵')
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
