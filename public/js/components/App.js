class App extends React.Component{
    state={
        cart:[]
    }
    addItemToCart=(product)=>{
        this.setState(()=>{
            this.state.cart.push(product);
            return {cart:this.state.cart}
        })
    }
    render(){
    // props={
    //     products:[{},{},{}],
    // }
    const productDetails = this.props.products.map((p,i)=>{
        // let productDetail = ProductDetail();
        // return productDetail
        return <ProductDetail 
        key={i} 
        product={p} 
        addItemToCart={this.addItemToCart}
        />
    });

    return (
        <div>
            <div className="App">
                <Header cart={this.state.cart}/>        
                <div className="container">
                <div className="row">
                    <LeftMenu />
                    <div className="col-md-9">
                            <Carousel />
                            <div className="row">
                            {productDetails}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="container">
                    <hr/>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
}