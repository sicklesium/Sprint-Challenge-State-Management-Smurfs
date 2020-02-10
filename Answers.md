1. What problem does the context API help solve?
    It simplifies state management, providing a way to share values between components without having to pass props down the tree.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    The store is a single immutable state tree in redux where all state changes are handled explicitly by actions, which is why it is known as the 'single source of truth' in a redux application.
    A reducer is a function that takes two arguments and returns a new state object, the two arguments being current state and action.
    An action is represented by an object and contains properties related to an action that occurs in the app.  
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    In application state the programmer never writes to the store object when changes are made. Because the original store is immutable, the object is cloned and modified, and then it replaces the original state in a new copy. It is better to use application state when you are working on a massively scaled project, such as Facebook. 
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    `redux-thunk` is a middleware that allows asynchronous operations inside action creators. A thunk, at its most basic level, is a function returned by another. A thunk intercepts every action creator before it flows to the reducer. It makes it so we can make API calls. 
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    Redux! Although it seems hard at first, I started to catch onto it after practicing it a few times. It's quite interesting and I like that the immutability. 
