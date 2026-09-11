const draggables = document.querySelectorAll('.image');

let draggableElement = null;

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', (e) => {
    draggableElement = e.target;
    draggableElement.style.opacity = 0.5;
  });

  draggable.addEventListener('dragend', (e) => {
    e.target.style.opacity = 1;
  });

  let dragEvent = ["dragover", "dragenter", "drop"];

  dragEvent.forEach(drag => {
    draggable.addEventListener(drag, (e) => {
      e.preventDefault();
      
      if (drag === "drop") {
        const targetElement = e.target;
        
        if (targetElement !== draggableElement) {
          // Get the CSS background images of both elements          const draggedBg = window.getComputedStyle(draggableElement).backgroundImage;
          const targetBg = window.getComputedStyle(targetElement).backgroundImage;

          // Swap their inline background images (leaving IDs and innerText unchanged)
          draggableElement.style.backgroundImage = targetBg;
          targetElement.style.backgroundImage = draggedBg;
        }
      }
    });
  });
});