class draggable {
    constructor(options) {
        this.setupList(options);
    }

    setupList(options) {
        let { list, el : element , template} = options;

        if (! element) throw Error('The list is not exists');
        if (! list) throw Error('The data is not exists');
        if (! Array.isArray(list)) throw Error('The list is not an array, please insert an array');
        if (! template) throw Error('Please add a template function');
        if (! typeof template == "function" ) throw Error('Please add a function as template');


    }
}