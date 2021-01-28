function sort (){
  let comments = document.querySelectorAll(".comment")
  const comBox = document.getElementById("combox")
  const btnNew = document.getElementById("new")
  const btnOld = document.getElementById("old")
  let newCom = []
  let i = 0
  comments.forEach(function(comment){
    newCom[i] = {}
    newCom[i].key = comment.getAttribute("id")
    newCom[i].value = comment
    i += 1
  })

  

  btnNew.addEventListener('click', function(){
    newCom.sort(function(a,b){
      if (a.key < b.key){
        return 1
      } else if(a.key > b.key) {
        return -1
      }else{
        return 0
      }
    })
    newCom.forEach(function(com){
      comBox.insertAdjacentElement('afterbegin',com.value)
    })
  })

  btnOld.addEventListener('click', function(){
    newCom.sort(function(a,b){
      if (a.key < b.key){
        return -1
      } else if(a.key > b.key) {
        return 1
      }else{
        return 0
      }
    })
    newCom.forEach(function(com){
      comBox.insertAdjacentElement('afterbegin',com.value)
    })
  })
}

window.addEventListener('load', sort)