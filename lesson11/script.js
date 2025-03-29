const cities = 
[
    {name:'Москва', description:'Москва - столица России', image: 'images/Moskva.png'},
    {name:'Санкт-Петербург', description:'Санкт-Петербург - культурная столица России', image: 'images/cpb.png'},
    {name:'Ярославль', description:'Ярославль - это Ярославль!!!', image: 'images/yaroslavl.png'},
    {name:'Краснодар', description:'Краснодар - где я живу', image: 'images/kr.png'},
    {name:'Чебоксары', description:'Чебоксары - столица Мира', image: 'images/ch.png'},
    {name:'Мурманск', description:'Мурманск - это столица в пердях!!!', image: 'images/mu.png'}
];

const markers = document.querySelectorAll('.marker')
const infoBox = document.getElementById('info-box')
const modal = document.getElementById('modal')
const modalTitle = document.getElementById('modal-title')
const modalDescription = document.getElementById('modal-description')
const modalImg = document.getElementById('modal-img')
console.log(cities.length)

function openmodal()
{
    modal.style.display = "block"
}

function closeModal()
{
    modal.style.display= "none"
}

window.onclick = function(event)
{
    if (event.target=== modal)
    {
        closeModal()
    }
}

markers.addEventListener('click',() => {openmodal()})
