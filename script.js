// selecting pop-up overlay and pop-up box
var popup_overlay=document.querySelector('.popup-overlay')
var popup_box=document.querySelector('.popup-box')
var add_popup_btn=document.getElementById('add-popup-btn')

add_popup_btn.addEventListener('click', function(){
    popup_overlay.style.display='block'
    popup_box.style.display='block'
})

// select cancel btn 
var cancel_btn=document.getElementById('cancel-btn')

cancel_btn.addEventListener('click', function(){
    event.preventDefault()
     popup_overlay.style.display='none'
    popup_box.style.display='none'
} )

// selecting add-popup-btn, add-btn, book-title-input,Book-author-input,book-description-input

var container=document.querySelector('.container')
var add_btn=document.getElementById('add-popup-btn')
var add_btn=document.getElementById('add-btn')
var book_title_input=document.getElementById('book-title-input')
var book_author_input=document.getElementById('Book-author-input')
var book_description_input=document.getElementById('book-description-input')

add_btn.addEventListener('click',function(event){
    event.preventDefault()
    var div=document.createElement('div')
    div.setAttribute('class', 'book-container')
    div.innerHTML=`<h2>${book_title_input.value}</h2>
            <h5>${book_author_input.value}</h5>
            <p>${book_description_input.value}</p>
            <button onclick='deletebook(event)'>Delete</button>`
    container.append(div)
    popup_overlay.style.display='none'
    popup_box.style.display='none'
})

function deletebook(event){
    event.target.parentElement.remove()
}