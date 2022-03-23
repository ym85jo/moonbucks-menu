// 


const $ = (selector) => {
  return document.querySelector(selector)
}



function App(){

  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault()
  })  

  $('#espresso-menu-name').addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
      console.log($('#espresso-menu-name').value)
    }
  })
}

App();