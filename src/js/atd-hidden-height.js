export default function getHiddenHeight(el) {
    if(!el || !el.cloneNode) {
        return null;
    }

    let clone = el.cloneNode(true);
    let height = 0;
    clone.style.overflow = 'visible';
    clone.style.height = 'auto';
    clone.style.opacity = '0';
    clone.style.visibility= 'hidden';
    
    el.after(clone);
    height = clone.offsetHeight;

    clone.remove();

    return height;
}