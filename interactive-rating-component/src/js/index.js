const selectButton = document.querySelector('.warning__button-submit')
const selectList = document.getElementsByClassName('warning__interative-list-item')
const selectItemContent = document.querySelectorAll('.warning__interative-list-item')

let currentIndex = 0

// See the "Thank you" card state after submitting a rating
function updateContent(index) {
  const selectTitle = document.querySelector('.warning__content-title')
  const selectText = document.querySelector('.warning__content-text')
  const selectImg = document.querySelector('.warning__image-logo')

  if (index === selectList.length - 1) {
    const selectParent = document.querySelector('.warning__content')

    selectTitle.innerText = 'Thank you'
    selectText.innerText =
      "We appreciate you taking the time to give a rating.If you ever need more support, don't hesitate to get in touch"
    selectImg.src = './src/assets/images/illustration-thank-you.svg'

    selectImg.classList.toggle('warning__image-logo-alt')
    selectParent.classList.toggle('warning__content-alt')
    selectText.classList.toggle('warning__content-text-alt')

    selectButton.remove()
  }
}

//See hover states for all interactive elements on the page
function validatesStep(index) {
  const selectSpan = document.querySelector('.warning__content-current-step')

  for (let i = 0; i < selectList.length; i++) {
    const element = selectList[i]

    element.classList.toggle('item-select', i === index)

    if (i === index) {
      element.dataset = selectItemContent.innerHTML
    }
    if (i === index - 1) {
      element.innerHTML = '<li><img src="/src/assets/images/verified_white_24dp.svg"></li>'
      selectSpan.innerText = `You selected ${selectList[i].dataset.item} out of ${selectList.length} `
    }
  }
  selectList[index].innerHTML = selectList[index].innerHTML
  updateContent(index)
}

function controlStep(params) {
  currentIndex = (currentIndex + 1) % (selectList.length + 1)

  if (currentIndex >= selectList.length) {
    currentIndex = 4
  }
  validatesStep(currentIndex)
}

// Select and submit a number rating
selectButton.addEventListener('click', controlStep)

for (let i = 0; i < selectList.length; i++) {
  selectList[i].addEventListener('click', () => {
    currentIndex = i
    validatesStep(currentIndex)
  })
}
