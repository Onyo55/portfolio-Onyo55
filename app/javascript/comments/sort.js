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
    arrCom[i].subTheme = comment.getAttribute("data-sub-theme")
    arrCom[i].value = comment
    i += 1
  })

  btnNew.addEventListener('click', function(){
    arrCom.sort(orderAsc)
    console.log(arrCom)
    arrCom.forEach(function(com){
      comBox.insertAdjacentElement('afterbegin',com.value)
    })
  })

  btnOld.addEventListener('click', function(){
    arrCom.sort(orderDesc)
    console.log(arrCom)
    arrCom.forEach(function(com){
      comBox.insertAdjacentElement('afterbegin',com.value)
    })
  })

  btnDcNew.addEventListener('click',function(){
    arrCom.sort(orderDesc)
    discontinuousSort(arrCom).reverse().forEach(function(com){
      comBox.insertAdjacentElement('afterbegin',com.value)
    })
  }) 

  btnDcOld.addEventListener('click',function(){
    arrCom.sort(orderAsc)
    discontinuousSort(arrCom).reverse().forEach(function(com){
      comBox.insertAdjacentElement('afterbegin',com.value)
    })
  })

  function orderAsc(a,b){
    if(Number(a.id) < Number(b.id)) return -1;
    if(Number(a.id) > Number(b.id)) return 1;
    return 0;
  }
  
  function orderDesc(a,b){
    if(Number(a.id) < Number(b.id)) return 1;
    if(Number(a.id) > Number(b.id)) return -1;
    return 0;
  }

  function discontinuousSort(arr){
    for(let x=0; x < arr.length-2; x++ ){
      let y = x + 1
      let z = 1
      let sliceArr = arr.slice(y)
      console.log(sliceArr)
      let result = sliceArr.every(c => c.subTheme == sliceArr[0].subTheme)
      if (result){
        return arr
      }
      while(arr[x].subTheme == arr[y].subTheme){
        let t = arr[y]
        arr[y] = arr[y+z]
        arr[y+z] = t
        z += 1
      }
    }
    return arr
  }

}

window.addEventListener('load', sort)