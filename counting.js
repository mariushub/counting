let volume = 0

let objects = [
  {
    name: 'Chaise',
    icon: 0,
    size: 1
  },
  {
    name: 'Canapé 2 places',
    icon: 0,
    size: 2
  },
  {
    name: 'Canapé 3 places',
    icon: 0,
    size: 3
  },
  {
    name: "Canapé d'angle",
    icon: 0,
    size: 3
  },
  {
    name: 'Fauteuil',
    icon: 0,
    size: 4
  },
  {
    name: 'blibliothèque',
    icon: 0,
    size: 2
  },
  {
    name: 'Lustre',
    icon: 0,
    size: 1
  },
  {
    name: 'Table basse',
    icon: 0,
    size: 1
  },
  {
    name: 'Table de salon',
    icon: 0,
    size: 2
  },
  {
    name: 'télévision',
    icon: 0,
    size: 1
  },
  {
    name: 'Meuble TV',
    icon: 0,
    size: 1
  },
  {
    name: 'Petit bureau',
    icon: 0,
    size: 1
  },
  {
    name: 'Grand bureau',
    icon: 0,
    size: 1
  },
  {
    name: 'Plante',
    icon: 0,
    size: 1
  },
  {
    name: 'Ordinateur',
    icon: 0,
    size: 1
  },
]

let baseObject = document.querySelector('.calcul__objects__object')



objects.forEach(e => {
  let newObject = baseObject.cloneNode(true)

  // remove default value from base element
  newObject.classList.remove('hide')
  newObject.querySelector('.calcul__objects__object__header__name').innerText = e.name
  newObject.querySelector('.calcul__objects__object__header__icon').innerText = e.icon
  newObject.querySelector('.calcul__objects__object__footer__btnAdd').id = e.size
  newObject.querySelector('.calcul__objects__object__footer__btnSub').id = e.size
  
  // add logic to new element 
  newObject.querySelector('.calcul__objects__object__footer__btnAdd').addEventListener('click', (e) => {
    let totalResult = document.querySelector('.sorry')
    let objectAmount = e.target.parentElement.querySelector('.calcul__objects__object__footer__amount')

    objectAmount.innerText = parseInt(objectAmount.innerText) + 1
    totalResult.innerText = parseInt(totalResult.innerText) + parseInt(e.target.id) + "M3"
  })

  newObject.querySelector('.calcul__objects__object__footer__btnSub').addEventListener('click', (e) => {
    let totalResult = document.querySelector('.sorry')
    let objectAmount = e.target.parentElement.querySelector('.calcul__objects__object__footer__amount')

    // check so amount don't do go under 0
    if (parseInt(objectAmount.innerText) == 0) { return }

    objectAmount.innerText = parseInt(objectAmount.innerText) - 1
    totalResult.innerText = parseInt(totalResult.innerText) - parseInt(e.target.id) + "M3"
  })
  
  // append new element after getting modified
  document.querySelector('.calcul__objects').appendChild(newObject)
})
