// make sure it only runs after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const draggable = document.getElementById('draggable');
    const header = document.getElementById('draggableheader');

    let pos1 = pos2 = pos3 = pos4 = 0;

    const dragMouseDown = (e) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.addEventListener('mouseup', closeDragElement);
        document.addEventListener('mousemove', elementDrag);
    };

    const elementDrag = (e) => {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        draggable.style.top = (draggable.offsetTop - pos2) + "px";
        draggable.style.left = (draggable.offsetLeft - pos1) + "px";
    };

    const closeDragElement = () => {
        document.removeEventListener('mouseup', closeDragElement);
        document.removeEventListener('mousemove', elementDrag);
    };

    header.addEventListener('mousedown', dragMouseDown);
});