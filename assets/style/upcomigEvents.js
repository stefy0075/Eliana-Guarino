import {createCards, createCheckbox, filter} from '../module/funciones.js'

const containerCheckbox = document.getElementById('contain-check')
const containerCards = document.getElementById('row')
const activeSearch = document.getElementById('inputSearch')
const eventos = data.events
const valueSearch = document.getElementById("inputSearch").value
const eventosFiltrados = eventos.filter(events => events.date > data.currentDate)

const categoryEvents = [ ...new Set(eventosFiltrados.map(events => {return events.category})) ]
let categoriasSeleccionadas = []
const activeCheckbox = document.getElementById("contain-check")
activeCheckbox.addEventListener('change', (e) => {
  const checkbox = document.querySelectorAll('input[type="checkbox"]:checked')
  categoriasSeleccionadas = Array.from(checkbox).map(element => element.value)
  const eventosFiltradosPorCategoria = filter(categoriasSeleccionadas, valueSearch, eventosFiltrados) 
  createCards( containerCards, eventosFiltradosPorCategoria, "../assets/details.html", valueSearch)
})

activeSearch.addEventListener('input', (e) => {
  const eventosFiltradosPorBusqueda = filter(categoriasSeleccionadas, valueSearch, eventosFiltrados)
  createCards(containerCards, eventosFiltradosPorBusqueda, "../assets/details.htmls", valueSearch)
 })

createCheckbox(containerCheckbox, categoryEvents)
createCards(containerCards, eventosFiltrados, "../assets/details.html")