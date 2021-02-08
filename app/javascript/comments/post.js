function post(){
  const subThemeBtn = document.getElementsByName("sub-theme-btn")
  const postTextArea = document.getElementById("post-text")
  const commentSubmit = document.getElementById("com-submit")
  const themeId = document.getElementById("theme-id").getAttribute("data-theme-id")

  subThemeBtn.forEach(function(e){
    e.addEventListener('click',function(){
      switch(e.value){
        case "1":
          postTextArea.setAttribute("data-sub-theme", "1")
          break;
        case "2":
          postTextArea.setAttribute("data-sub-theme", "2")
          break;
        case "3":
          postTextArea.setAttribute("data-sub-theme", "3")
          break;
      }
      postTextArea.disabled = false
      postTextArea.placeholder = "テキストは必須です"
    })
  })

  postTextArea.addEventListener('keyup', function(){
    if(postTextArea.value != ""){
      commentSubmit.disabled = false
    }else{
      commentSubmit.disabled = true
    }
  })

  commentSubmit.addEventListener('click',function(e){
    e.preventDefault()
    const formData = new FormData(document.getElementById("comment-form"))
    const XHR = new XMLHttpRequest()
    XHR.open("POST", `/themes/${themeId}/comments`, true)
    XHR.responseType = "json"
    XHR.send(formData)
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response
      const comBox = document.getElementById("com-box") 
      const postText = document.getElementById("post-text")
      const HTML = `
        <div class="comment" data-id=${item.comment.id} data-sub-theme=${item.comment.sub_theme_num}>
          <div class="comment-info">
            <h3 class="user-name">${item.user_name}</h3>
            <p class="created-at">${item.l_created_at}</p>
          </div>
          ${item.comment.text}
        </div>`
      comBox.insertAdjacentHTML("afterbegin", HTML);
      postText.value = ""
    }
    
  })

}

window.addEventListener('load', post)
window.addEventListener("turbolinks:load", post)