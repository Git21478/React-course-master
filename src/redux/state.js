import rerenderEntireTree from "../render"

let state = {
    profilePage: {
        posts: [
            {message: 'Hi', likes: 12},
            {message: 'How are you', likes: 15},
          ],

        newPostText: 'it-kamasutra.com'
    },
    
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Evgeniy'},
            {id: 2, name: 'Alexander'},
            {id: 3, name: 'Alena'},
            {id: 4, name: 'Sveta'},
            {id: 5, name: 'Konstantin'},
            {id: 5, name: 'Konstantin'},
            {id: 5, name: 'Konstantin'},
          ],
          
        messages: [
            {id: 1, message: 'Hi',},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Welcome'},
            {id: 3, message: 'Welcome'},
            {id: 3, message: 'Welcome'},
          ]
    }
    
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state;