function post(){
  const subThemeBtn = document.getElementsByName("sub-theme-btn")
  const postTextArea = document.getElementById("post-text")
  console.log(postTextArea)
  subThemeBtn.forEach(function(e){
    e.addEventListener('click',function(){
      console.log(e.value)
      switch(e.value){
        case "1":
          postTextArea.setAttribute("data-color", "blue")
          break;
        case "2":
          postTextArea.setAttribute("data-color", "red")
          break;
        case "3":
          postTextArea.setAttribute("data-color", "pur")
          break;
      }
    })
  })

  
}

window.addEventListener('load', post)