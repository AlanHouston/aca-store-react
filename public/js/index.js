ReactDOM.render(
    // let props = {
    //     numberOfItemsInCart:state.numberOfItemsInCart
    // }
    // let myApp = App(props)
    <App 
        numberOfItemsInCart = {state.numberOfItemsInCart}
        products = {state.products}
    />,
    // <App /> is like calling a function - if you 're calling it, you get somehing back, ie variable, which you can do something with
    document.getElementById("root"));

