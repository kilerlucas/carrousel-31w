(function(){
    console.log('début du carrousel')
    let elmCarrousel = document.querySelector('.carrousel')
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerie__img = elmGalerie.querySelectorAll('img')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')
    let elmCarrousel__form = document.querySelector('.carrousel__form')
    let elmCarrousel__arrows = document.querySelectorAll('.carrousel__arrow');
    let elmCarrousel__prev = elmCarrousel__arrows[0];
    let elmCarrousel__next = elmCarrousel__arrows[1];
    let elmCarrousel__close = document.querySelector('.bouton__x');

    elmCarrousel__close.addEventListener('click', function() {
        elmCarrousel.classList.remove('carrousel--ouvrir');
    });
    
    console.log(elmGalerie__img.length)

    function ajouter_carrousel(elmImgClicada) {
        let index = Array.from(elmGalerie__img).indexOf(elmImgClicada);
        ajouter_img(elmImgClicada, index);
        elmCarrousel__figure.children[0].classList.add('carrousel__img--activer');
        elmCarrousel.addEventListener('click', function(event) {
          if (!elmCarrousel__figure.contains(event.target)) {
            elmCarrousel.classList.remove('carrousel--ouvrir');
          }
        });
      }
      
      for (const elmImg of elmGalerie__img) {
        elmImg.addEventListener('click', function() {
          console.log('clique sur image');
          ajouter_carrousel(elmImg);
          elmCarrousel.classList.add('carrousel--ouvrir');
        });
      }
      
    
    function ajouter_carrousel(elmImgClicada)
{
    let index = Array.from(elmGalerie__img).indexOf(elmImgClicada);
    ajouter_img(elmImgClicada, index)
    elmCarrousel__figure.children[0].classList.add('carrousel__img--activer')
    elmCarrousel.addEventListener('click', function(event) {
        if (!elmCarrousel__figure.contains(event.target)) {
            elmCarrousel.classList.remove('carrousel--ouvrir');
        }
    });
    
}

    function ajouter_img(elmImg, index) {
        let elmCarrousel__img = document.createElement('img');
        elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'));
        elmCarrousel__img.classList.add('carrousel__img');
        elmCarrousel.classList.add('carrousel--ouvrir');
        elmCarrousel__img.dataset.index = index;
        index++;
        elmCarrousel__figure.appendChild(elmCarrousel__img);
    }
  

    
    for (const elmImg of elmGalerie__img){
        elmImg.addEventListener('click', function(){
            console.log('clique sur image');
            ajouter_carrousel(elmImg);
            elmCarrousel.classList.add('carrousel--ouvrir');
        });
    }
    
    function ajouter_img(elmImg, index){
        let elmCarrousel__img = document.createElement('img')
        elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'))
        elmCarrousel__img.classList.add('carrousel__img')
        elmCarrousel__img.dataset.index = index
        index++
        elmCarrousel__figure.appendChild(elmCarrousel__img)
    }
    
    let index = 0;
    let index__precedent = -1
    
    function activer__image(index)
    {
        if (index__precedent != -1)
        {
            elmCarrousel__figure.children[index__precedent].classList.remove('carrousel__img--activer')  
        }
        elmCarrousel__figure.children[index].classList.add('carrousel__img--activer') 
        index__precedent= index;
    }
    
    elmCarrousel__prev.addEventListener('click', function(){
        let index = index__precedent - 1;
        if(index < 0){
            index = elmCarrousel__figure.children.length - 1;
        }
        activer__image(index);
    });
    
    elmCarrousel__next.addEventListener('click', function(){
        let index = index__precedent + 1;
        if(index >= elmCarrousel__figure.children.length){
            index = 0;
        }
        activer__image(index);
    });

    elmCarrousel__close.addEventListener('click', function() {
        elmCarrousel.classList.remove('carrousel--ouvrir');
      });
      
      
    })()