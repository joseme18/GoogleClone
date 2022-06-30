var boton = document.getElementById("boton");
boton.addEventListener("click",buscar);

function buscar(){
    var texto = document.getElementById("buscador");
    var search = texto.value;
return window.location.assign("https://www.google.co.ve/search?q=" + search + "&sxsrf=ALiCzsZIzjNkh2VLvy0Xs__mLHKf-LcuMA%3A1656554791367&source=hp&ei=JwW9YsqzFMDbwbkPyoKZyA8&iflsig=AJiK0e8AAAAAYr0TN5raIxZWTpSMJoknQZ9NA40GSX6c&ved=0ahUKEwiK442_i9T4AhXAbTABHUpBBvkQ4dUDCAc&uact=5&oq=" + search + "&gs_lcp=Cgdnd3Mtd2l6EAM6EQguEIAEELEDEIMBEMcBENEDOhEILhCABBCxAxCDARDHARCjAjoLCAAQgAQQsQMQgwE6DgguEIAEELEDEIMBENQCOggIABCABBCxA1AAWPcHYLoNaABwAHgAgAGLAogBogaSAQUwLjQuMZgBAKABAQ&sclient=gws-wiz");
}