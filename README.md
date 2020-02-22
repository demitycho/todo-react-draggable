# Zendesk Coding Assignment

Live demo: https://demitycho.github.io/todo-react-draggable/

## Requirements: 
`node version 10 or higher (tested on node 12)`

The project is already hosted on gh-pages, but to run locally: 

## Installation
- `git clone` or download the repository zip
- Run `npm install`
- Run `npm start`

## Packages used and why
- React-redux: to maintain global state for better organisation of components and codebase
- Atlassian Beautiful React DnD: For drag and drop functionality

## Instructions for further development
- Add todo lists (QA/Review) or remove todo lists
    - Add or remove fields to `initialState` in `js/reducers/index.js`
    - Add or remove `<TodoList/>` components in the `<Board/>` draggable area

  
Much thought has been put into trying to make this project extensible/compartmentalised with good coding practices. Thank you for your consideration! 