const question = document.getElementById('text')
const options = document.getElementById('opt')

///////////////////////////////////
let state = {}
///////
const showText = (level) => {

  const clevel = levels.find(e => e.id == level)
  question.innerText = clevel.text;
  while(options.firstChild){
    options.removeChild(options.firstChild)
  }
  clevel.options.forEach(option => {
    const button = document.createElement('button')
    button.innerText = option.text
    button.classList.add('btn')
    button.onclick = () => {
      selectLevel(option.nextLvl)
    }
    opt.appendChild(button)
  })
}
//////////////

const newGame = () => {
  showText(1)
}

const selectLevel = level => {
 if(!level) {
   newGame()
 }
 showText(level)
}


const levels = [
  {
    id:1,
    text:"Hello krauz, theese buttons will redirect you to corresponding levels",
    options:[
      {
        text:"Level 1(here again)",
        nextLvl:1
      },
      {
        text:"Level 2(Not here)",
        nextLvl:2
      }
    ]
    
  },
  {
    id:2,
    text:"This is lvl 2, impressive?",
    options:[
      {
        text:"Take me back (Level 1)",
        nextLvl:1
      }
    ]
  }
];

newGame()