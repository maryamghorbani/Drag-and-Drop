let data = [
    { id : 1 , title : 'Item 1' , text : 'Item description'},
    { id : 2 , title : 'Item 2' , text : 'Item description'},
    { id : 3 , title : 'Item 3' , text : 'Item description'},
    { id : 4 , title : 'Item 4' , text : 'Item description'},
    { id : 5 , title : 'Item 5' , text : 'Item description'},
    { id : 6 , title : 'Item 6' , text : 'Item description'},
    { id : 7 , title : 'Item 7' , text : 'Item description'},
]

new draggable({
    el : document.querySelector('#list'),
    list : data,
    template : (item) => {
        return `
            <div class="list-item" id="${item.id}">
                <div class="list-item_head">
                    <span class="head-id">${item.id}</span>
                </div>
                <div class="list-item_content">
                    <span class="item-title">${item.title}</span>
                    <p>${item.text}</p>
                </div>
            </div>
        `
    },
    update : (list) => {
        console.log('newList' , list)
    }
})