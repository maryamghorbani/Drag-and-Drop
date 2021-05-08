class draggable {
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
        if (! typeof template == "function" ) throw Error('Please add a function as template');

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
        console.log('drag start' , e.target);
    }
    handleDragEnter (e) {
        console.log('drag enter' , e.target);
    }
    handleDragOver (e) {
        console.log('drag over' , e.target);
    }
    handleDragLeave (e) {
        console.log('drag leave' , e.target);
    }
    handleDrop (e) {
        console.log('drop' , e.target);
    }
    handleDragEnd (e) {
        console.log('drag end' , e.target);
    }
}