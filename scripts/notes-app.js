'use strict'

let notes = getSavedNotes();

// DOM - Document Object Model

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters);


document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4();
    const timestamp = moment().valueOf();
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes);
    renderNotes(notes, filters);
    location.assign(`/edit.html#${id}`)
});

document.querySelector('#search-text').addEventListener('input', (e) => {
   filters.searchText = e.target.value;
   renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);    
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
})

// const bday = moment();
// bday.year(1985).month(6).date(8);

// console.log(bday.format('MMM D, YYYY'))

