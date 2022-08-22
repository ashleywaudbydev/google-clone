//access dom elements//
let dark = document.querySelector(".dark");
let searchField = document.querySelector("#input")
let searchBtn = document.querySelector("#search-btn")


//dark mode on and off switch//
function darkModeOn(){
    dark.classList.toggle("darkMode")
}

// google search function//
function search(){
    
    let input = searchField.value;
    window.location = "https://www.google.com/search?q=" + input + "&sxsrf=ALiCzsaSDEKXqHuqyfmku65cKH85UiRSkQ%3A1658403453240&source=hp&ei=fTrZYu2iDPWBhbIPhLm-0AM&iflsig=AJiK0e8AAAAAYtlIjQzVE_eOQSTi63LLXfFFzHaQIkY6&ved=0ahUKEwit1eOl8on5AhX1QEEAHYScDzoQ4dUDCAo&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyCwguELEDENQCEJECMggILhDUAhCRAjIICC4Q1AIQkQIyCwguELEDENQCEJECMggIABCABBCxAzIECAAQQzIICC4Q1AIQkQIyDggAEIAEELEDEIMBEMkDMgUIABCSAzoHCCMQ6gIQJzoLCAAQgAQQsQMQgwE6FAguEIAEELEDEIMBEMcBENEDENQCOg4ILhCABBCxAxDHARDRAzoICAAQsQMQgwE6CwguEIAEELEDEIMBOggILhCABBCxAzoFCAAQgARQkApY6g9gwxNoAXAAeACAAXCIAfEDkgEDMy4ymAEAoAEBsAEK&sclient=gws-wiz";
}

  searchBtn.addEventListener("click", function(){
      if(searchField.value === ""){
          alert("INVALID INPUT!")
      }else{
          search()
          
      }
  })

 searchField.addEventListener("keydown", function(event){
   
    if(event.code === "Enter"){
        search()
        event.preventDefault()
    }
})










 







    
