//your code here
const draggables = document.querySelectorAll('.image');

let draggableElement = null;

draggables.forEach(draggable => {

    draggable.addEventListener('dragstart', (e) => {

        draggableElement = e.target;
      
        draggableElement.style.opacity = 0.5
})

draggable.addEventListener('dragend', (e) => {
  e.target.style.opacity = 1;

})

let dragEvent = ["dragover", "dragenter", "drop"]

dragEvent.forEach(drag =>{

    draggable.addEventListener(drag,(e) =>{
        e.preventDefault();
        if(drag == "drop"){

            const targetElement = e.target;
            if(targetElement != draggableElement){

                const draggedBackground = draggableElement.id;
                draggableElement.id = targetElement.id;
                targetElement.id = draggedBackground;

                const draggedText = draggableElement.innerText
                draggableElement.innerText = targetElement.innerText;
                targetElement.innerText = draggedText;
            }
        }
    })
});

})