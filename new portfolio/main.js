//---------------autotyping animation-------------------
    var typed = new Typed('#element', {
      strings: ['Zaid', ' Frontend Developer','Fullstack Developer'],
      typeSpeed: 50,
      backSpeed:50,
      loop:true
    });

  
    //-----------------nav link js------------------------
     const navLink = document.querySelectorAll('.nav-link');
   

      navLink.forEach((e)=>{
        e.addEventListener('click',()=>{

          navLink.forEach((e)=>{
            e.classList.remove('active');
          })
          e.classList.add('active')
           aside.classList.remove('toggle')
        })
      })
       

     
  //Theem box js
   let togglerIcon = document.querySelector('.theem-color-toggler') ;
   let moonIcon = document.querySelector('.day-night')
   let theemBox = document.querySelector('.theem-container');
   let aside = document.querySelector('.aside')
   let mainContent = document.querySelector('.main-content')
   let body = document.querySelector('body')

    //----show and hide theem  box code stard------
    togglerIcon.addEventListener("click",()=>{
      theemBox.classList.toggle('show');
   })
  
    //----show and hide theem  box end coode----

    let state = 'false';
    const  adddarkmood = ()=>{
         if(state == 'false'){
            state = 'true';
            // moonIcon.classList.replace('fa-moon','fa-sun')
            moonIcon.firstElementChild.classList.replace('fa-moon','fa-sun')
            mainContent.classList.add('dark');
            aside.classList.add('darksidebar')
            
         }else if(state == 'true'){
           state = 'false';
          //  moonIcon.classList.replace('fa-sun','fa-moon')
           moonIcon.firstElementChild.classList.replace('fa-sun','fa-moon')
           mainContent.classList.remove('dark');
           aside.classList.remove('darksidebar')
         }      
    }
   //change moods of page
   moonIcon.addEventListener("click",adddarkmood);

// change dark and night mood end------------------

  //-------------change theem---------------
   const setColors = (val)=>{
    let a = body.getAttribute('class')
     if(val.title == 'color-1'){
       body.classList.remove(a)
       body.classList.add('first-theem')
     }
     else if(val.title == 'color-2')
     {
      body.classList.remove(a)
      body.classList.add('second-theem')
     }
     else if(val.title == 'color-3'){
      body.classList.remove(a)
      body.classList.add('third-theem')
     }
     else if(val.title == 'color-4'){
      body.classList.remove(a)
      body.classList.add('fourth-theem')
     }
     else if(val.title == 'color-5'){
      body.classList.remove(a)
      body.classList.add('fifth-theem')
     }
   }
   //------------------change theem end-------------

    //----------When we scroll than theem box hide---------------
    window.addEventListener('scroll',()=>{
      theemBox.classList.remove('show');
    })
     //------------------------------------------------------


   //--------------show and hide sideBar-------------------
 
      let toggleBtn = document.getElementById('togglerIcon')
      let cutBtn = document.getElementById('cutIcon')
      
      // console.log(cutBtn);    
      toggleBtn.addEventListener('click',()=>{
         aside.classList.toggle('toggle');
      })

       cutBtn.addEventListener('click',()=>{
         aside.classList.remove('toggle');
       })