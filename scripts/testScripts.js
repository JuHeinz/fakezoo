let icon = document.querySelector("#foo");

const onMouseMove = (e) => {
    icon.style.left = e.pageX + 'px';
    icon.style.top = e.pageY + 'px';
}

document.addEventListener("mousemove", onMouseMove)