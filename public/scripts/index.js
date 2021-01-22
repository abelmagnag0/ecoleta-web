document.querySelector("#page-home main a").addEventListener("click", handleModal)

document.querySelector("#modal header a").addEventListener("click", handleModal)

function handleModal(){
  const modal = document.querySelector("#modal")
  modal.classList.toggle("hide")
}