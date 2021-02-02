function sort (){
  const comBox = document.getElementById("com-box")
  const btnNew = document.getElementById("new")
  const btnOld = document.getElementById("old")
  const btnDcNew = document.getElementById("dc-new")
  const btnDcOld = document.getElementById("dc-old")

  let comments = document.querySelectorAll(".comment")
  let arrCom = []
  let i = 0
  comments.forEach(function(comment){
    arrCom[i] = {}
    arrCom[i].id = comment.getAttribute("data-id")
    arrCom[i].color = comment.getAttribute("data-color")
    arrCom[i].value = comment
    i += 1
  })

  btnNew.addEventListener('click', function(){
    arrCom.sort(orderAsc)
    arrCom.forEach(function(com){
      comBox.insertAdjacentElement('afterbegin',com.value)
    })
  })

  btnOld.addEventListener('click', function(){
    arrCom.sort(orderDesc)
    arrCom.forEach(function(com){
      comBox.insertAdjacentElement('afterbegin',com.value)
    })
  })

  btnDcNew.addEventListener('click',function(){
    arrCom.sort(orderDesc)
    discontinuousSort(arrCom).forEach(function(com){
      comBox.insertAdjacentElement('afterbegin',com.value)
    })
  }) 

  btnDcOld.addEventListener('click',function(){
    arrCom.sort(orderAsc)
    discontinuousSort(arrCom).forEach(function(com){
      comBox.insertAdjacentElement('afterbegin',com.value)
    })
  })

  function orderAsc(a,b){
    if (a.id < b.id){
      return 1
    } else if(a.id > b.id) {
      return -1
    }else{
      return 0
    }
  }
  
  function orderDesc(a,b){
    if (a.id > b.id){
      return 1
    } else if(a.id < b.id) {
      return -1
    }else{
      return 0
    }
  }

  function discontinuousSort(arr){
    for(let x=0; x < arr.length-2; x++ ){
      let y = x + 1
      let z = 1
      let sliceArr = arr.slice(y)
      let result = sliceArr.every(c => c.color == sliceArr[0].color)
      if (result){
        return arr.reverse()
      }
      while(arr[x].color == arr[y].color){
        let t = arr[y]
        arr[y] = arr[y+z]
        arr[y+z] = t
        z += 1
      }
    }
  }

}

window.addEventListener('load', sort)