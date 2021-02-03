function post(){
  const subThemeBtn = document.getElementsByName("sub-theme-btn")
  const postTextArea = document.getElementById("post-text")

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
    })
  })

  const commentSubmit = document.getElementById("com-submit")
  const themeId = document.getElementById("theme-id").getAttribute("data-themeid")
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
      const item = XHR.response.comment
      console.log(item)
      const comBox = document.getElementById("com-box") 
      const postText = document.getElementById("post-text")
      const HTML = `
        <div class="comment" data-id=${item.id} data-sub-theme=${item.sub_theme_num}>
          <div class="comment-info">
            <h3 class="user-name">${item.user_id}</h3>
            <p class="created-at">${item.created_at}</p>
          </div>
          ${item.text}
        </div>`
      comBox.insertAdjacentHTML("afterbegin", HTML);
      postText.value = ""
    }
    
  })

}

window.addEventListener('load', post)