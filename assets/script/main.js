
// CONSEGNA - Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// STEP 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
    // - id del post, numero progressivo da 1 a n
    // - nome autore, 
    // - foto autore,
    // - data in formato americano (mm-gg-yyyy),
    // - testo del post,
    // - immagine (non tutti i post devono avere una immagine),
    // - numero di likes.

// STEP 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// STEP 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like

// array di oggetti - post 
const posts = [ 
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null 
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let postContainer = document.getElementById("container")

for (let i = 0; i < posts.length; i++) {
    
    // creazione della data 
    let arrayDate = posts[i].created

    let date = new Date(arrayDate) 

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    let italianDate = day.toString().padStart(2, '0') + '-' + month.toString().padStart(2, '0') + '-' + year

    postContainer.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon d-flex-bg profile-pic-change" style="width: 60px; height: 60px">
                        <img class="profile-pic" src="${posts[i].author.image}">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].author.name}</div>
                        <div class="post-meta__time">${italianDate}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[i].content}</div>
            <div class="post__image">
                <img src="${posts[i].media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button btn" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b class="js-likes-counter like-counter-1">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `

}

// generazioine delle prime due lettere  

let profilePic = document.querySelectorAll(".profile-pic-change")
let likeBtn = document.querySelectorAll(".btn")
let likeCounter = document.querySelectorAll(".like-counter-1")

for(let i = 0; i < profilePic.length; i++){
    // console.log(profilePic)

    if (posts[i].author.image === null){
        
        let nameAndSurname = posts[i].author.name
        let startingLetters = nameAndSurname.split(" ")[0].charAt(0) + nameAndSurname.split(" ")[1].charAt(0);
        console.log(startingLetters)
        profilePic[i].innerHTML = startingLetters
        
    } 

}

for(let i = 0; i < likeBtn.length; i++){
        // aumento del counter dei like 

        likeBtn[i].addEventListener("click", function(e){
            e.preventDefault()


            if (!likeBtn[i].classList.contains("like-button--liked")){
                posts[i].likes++
                likeCounter[i].innerHTML = posts[i].likes
                likeBtn[i].classList.toggle("like-button--liked") 
            } else {
                posts[i].likes--
                likeCounter[i].innerHTML = posts[i].likes
                likeBtn[i].classList.remove("like-button--liked") 
    
            }
    
        }) 
}



