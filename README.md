# Steps to use Redux toolkit

1- Create a store.
2- Specify a reducer in the store which you will define in the slice.
3- * Must have step:-  All the components should be aware of store, hence we wrap our <App/> component in the index.js file into Provider
  <Provider store={store}>
    <App/>
  </Provider>

4- Define functionality, its called slices. Declare initial state. use createSlice() method to create a slice, provide name to your slice as there can be many slices. Provide it a initial state which you have already declared. Then provide the list of reducers.
5- Export the above reducer , this will be used in store
6- Also export all these individual methods, they will be useful wherever we use dispatch.

Thats it! Now use it.
