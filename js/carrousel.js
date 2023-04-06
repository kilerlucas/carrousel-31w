(function(){
/////// helooooo
    var selectedImage = 0;

    // fonction IFEE
    console.log('début du carrousel')
    // let bouton__ouvrir = document.querySelector('.bouton__ouvrir')
    let elmCarrousel = document.querySelector('.carrousel')
    let elmBouton__x = document.querySelector('.bouton__x')
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerie__img = elmGalerie.querySelectorAll('img')
    let elmBouttonPrev = document.querySelector('.bouton__prev')
    let elmBouttonNext = document.querySelector('.bouton__next')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure') // conteneur d'images
    let elmCarrousel__form = document.querySelector('.carrousel__form') // conteneur des radio bouton
    console.log(elmGalerie__img.length)
    // console.log(bouton__ouvrir.tagName)
    
    // bouton__ouvrir.addEventListener('mousedown', function(){
    //     console.log('boîte modale')
    //     elmCarrousel.classList.add('carrousel--ouvrir')
    //     ajouter_carrousel()
    // })
    elmBouton__x.addEventListener('mousedown', function(){
        console.log('boîte modale')
        elmCarrousel.classList.remove('carrousel--ouvrir')
    })

    elmBouttonPrev.addEventListener('mousedown', function(){
        var newIndex = 0;
        if(selectedImage === 0){
            newIndex = elmGalerie__img.length - 1
        } else {
            newIndex = selectedImage - 1 
        }
        activer__image(newIndex)
        selectedImage = newIndex
        // console.log();

    })

    elmBouttonNext.addEventListener('mousedown', function(){
        var newIndex = 0;
        console.log("next")
        if(selectedImage === elmGalerie__img.length - 1){
            newIndex = 0;
        } else {
            newIndex = selectedImage + 1 
        }
        activer__image(newIndex)
        selectedImage = newIndex
    })

    document.querySelectorAll('.galerie img').forEach(function(elmImg, index){
        elmImg.addEventListener('mousedown', function(){
            selectedImage = index;
            
            if(index__precedent !== -1){
                elmCarrousel__figure.children[index__precedent].classList.remove('carrousel__img--activer')
            }

            elmCarrousel.classList.add('carrousel--ouvrir')
            console.log('boîte modale')
            ajouter_carrousel()
        })
    });

    
    function ajouter_carrousel()
    {
        elmCarrousel__form.innerHTML = ''
        for (const elmImg of elmGalerie__img){
            ajouter_radio() // ajoute les radio bouton dans carrousel__form
            ajouter_img(elmImg) // ajoute l'image dans le carrousel
            
        }
        if (selectedImage !== 0) {
            index__precedent = selectedImage
        }
        elmCarrousel__figure.children[selectedImage].classList.add('carrousel__img--activer')
    }
    
    function ajouter_img(elmImg){
        let elmCarrousel__img = document.createElement('img')
        elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'))
        elmCarrousel__img.classList.add('carrousel__img')
        elmCarrousel__img.dataset.index = index
        elmCarrousel__figure.appendChild(elmCarrousel__img)
    }
    let index = 0;
    let index__precedent = -1
    
    function ajouter_radio(){
      let elmCarrousel__radio = document.createElement('input')
      elmCarrousel__radio.setAttribute('type','radio')
      elmCarrousel__radio.setAttribute('name', 'radCarrousel')

      if(index === selectedImage) {
        elmCarrousel__radio.checked = true
      }

      elmCarrousel__radio.dataset.index = index
      index++
      elmCarrousel__form.appendChild(elmCarrousel__radio)
      elmCarrousel__radio.addEventListener('mousedown', function(){
        activer__image(this.dataset.index)
      })
    }
    
    function activer__image(index)
    {
        if (index__precedent != -1)
        {
            elmCarrousel__figure.children[index__precedent].classList.remove('carrousel__img--activer')  
            elmCarrousel__form.children[index__precedent].checked = false
        }

        console.log(index)
        elmCarrousel__form.children[index].checked = true

        elmCarrousel__figure.children[index].classList.add('carrousel__img--activer') 
        index__precedent = index;
    }
    
    
    })()
    
