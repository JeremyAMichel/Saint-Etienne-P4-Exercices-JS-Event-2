const img = document.querySelector("#image1");

img.addEventListener("mouseenter", handleMouseOver);

img.addEventListener("mouseleave", handleMouseOver);

function handleMouseOver(event) {
  const imageEvent = event.target;
  imageEvent.classList.toggle("border-red");
}
