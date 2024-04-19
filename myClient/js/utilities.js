function insertBefore(parent, referenceElement, contents) {
    let newElement = document.createElement("p")
    newElement.textContent = contents
    newElement.style.color = "black"
    parent.insertBefore(newElement, referenceElement);
    return newElement;
}
  
function removeEle(parent, elementToDelete){
    parent.removeChild(elementToDelete);
}