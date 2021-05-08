class draggable {
    dragSrcEl;
    constructor(options) {
        this.setupList(options);

        for (let listItem of options.el.children) {
            this.addDnDHadler(listItem)
        }
    }

    setupList(options) {
        let { list, el : element , template} = options;

        if (! element) throw Error('The list is not exists');
        if (! list) throw Error('The data is not exists');
        if (! Array.isArray(list)) throw Error('The list is not an array, please insert an array');
        if (! template) throw Error('Please add a template function');
        if ( typeof template !== "function" ) throw Error('Please add a function as template');

        list.forEach( item => element.innerHTML += template(item) )
    }
    addDnDHadler(element) {
        element.setAttribute('draggable' , true);


        element.addEventListener('dragstart', this.handleDragStart.bind(this));
        element.addEventListener('dragenter', this.handleDragEnter.bind(this));
        element.addEventListener('dragover', this.handleDragOver.bind(this));
        element.addEventListener('dragleave', this.handleDragLeave.bind(this));
        element.addEventListener('drop', this.handleDrop.bind(this));
        element.addEventListener('dragend', this.handleDragEnd.bind(this) );
    }


    handleDragStart (e) {
        this.dragSrcEl = e.target;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html' , e.target.outerHTML);

        e.target.classList.add('dragElem')
    }
    handleDragEnter (e) {
    }
    handleDragOver (e) {
        if (e.preventDefault) e.preventDefault();
        e.target.classList.add('over')
    }
    handleDragLeave (e) {
        e.target.classList.remove('over')
    }
    handleDrop (e) {
        e.target.classList.remove('over');
        let target = e.target.closest('.list-item');
        
        if ( this.dragSrcEl !== target) {
            target.parentNode.removeChild(this.dragSrcEl);

            let dropHTML = e.dataTransfer.getData('text/html');
            target.insertAdjacentHTML('beforebegin' , dropHTML);

            this.addDnDHadler(target.previousSibling)
        }
        e.target.classList.remove('over');
    }
    handleDragEnd (e) {
        e.target.classList.remove('dragElem');
    }
}