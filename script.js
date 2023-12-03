const accordionButton = document.querySelectorAll('.btn-wrap')
const accordionContent = document.querySelectorAll('.accordion-content')

// on click of the button, we want to check if content has an expanded class; 
//if not, change to expanded and toggle button class minus
//if it does have an expanded class, remove it, toggle button class minus

accordionButton.forEach(tab => {

    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        const btnClassMinus = tab.classList.contains('minus')

       if (btnClassMinus) {
            tab.classList.remove('minus')           
            target.classList.remove('expanded')
          
       } else {
            tab.classList.add('minus')            
            target.classList.add('expanded')
           
       }      
    
    })
})