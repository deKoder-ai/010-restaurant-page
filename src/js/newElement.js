function newElement(type, content, classes, _id) {
    const element = document.createElement(type);
    if (content) {element.innerHTML = content;}
    if (classes) {
        for (let _class of classes) {
            element.classList.add(_class);
        }
    };
    if (_id) {element.id = _id};
    return element;
}

export { newElement };