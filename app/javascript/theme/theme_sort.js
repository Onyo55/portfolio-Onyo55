function themeSort(){
  const sortMenu = document.getElementById("theme-sort")
  const themes = document.querySelectorAll(".theme-wrapper")
  const themeArea = document.getElementById("theme-area")

  let aryThemes = []
  let i = 0
  themes.forEach(function(theme){
    aryThemes[i] = {}
    aryThemes[i].commentsCount = theme.getAttribute("data-comments-count")
    aryThemes[i].value = theme
    i += 1
  }) 

  sortMenu.addEventListener('change',function(){
    switch(sortMenu.value){
      case 'many': 
        aryThemes.sort(function(a,b){ 
          if(Number(a.commentsCount) > Number(b.commentsCount)) return 1;
          if(Number(a.commentsCount) < Number(b.commentsCount)) return -1;
          return 0;
        })
        aryThemes.forEach(function(theme){
          themeArea.insertAdjacentElement('afterbegin',theme.value)
        })
        break;
      case 'few':
        aryThemes.sort(function(a,b){
          if(Number(a.commentsCount) > Number(b.commentsCount)) return -1;
          if(Number(a.commentsCount) < Number(b.commentsCount)) return 1;
          return 0;
        })
        aryThemes.forEach(function(theme){
          themeArea.insertAdjacentElement('afterbegin',theme.value)
        })
        break;
      default:
        break;
    }
  })
}

window.addEventListener("turbolinks:load", themeSort)