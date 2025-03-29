const cities = 
[
    {name:'Москва', description:'Москва - столица России', image: 'images/Moskva.png'},
    {name:'Санкт-Петербург', description:'Санкт-Петербург - культурная столица России', image: 'images/cpb.png'},
    {name:'Ярославль', description:'Ярославль - это Ярославль!!!', image: 'images/yaroslavl.png'},
    {name:'Краснодар', description:'Краснодар - где я живу', image: 'images/kr.png'},
    {name:'Мурманск', description:'Мурманск - это столица в пердях!!!', image: 'images/mu.png'},
    {name:'Чебоксары', description:'Чебоксары - столица Мира', image: 'images/ch.png'},
];

const markers = document.querySelectorAll('.marker');
const infoBox = document.getElementById('info-box');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImg = document.getElementById('modal-img');
console.log(cities.length);

markers.forEach(marker => {
    marker.addEventListener('mouseover', () =>{
        const city = cities[marker.getAttribute('data-id')];
        infoBox.textContent = city.name;
        infoBox.style.top=`${marker.offsetTop - 30}px`;
        infoBox.style.lefts=`${marker.offsetLeft - 30}px`;
        infoBox.classList.add('visible')
    });

    marker.addEventListener('mouseover', () => {
        infoBox.classList.remove('visible')
    });
    marker.addEventListener('click', () => {
        const city = cities[marker.getAttribute('data-id')];
        modalTitle.textContent=city.name;
        modalDescription.textContent= city.description;
        modalImg.src = city.image;
        modal.style.display = 'flex';
    });
});
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