function App(props){
    const productDetails = props.products.map((p,i)=>{
        return <ProductDetail key={i} product={p} />
    });
    return (
    <div>
        <div className="App">
            <Header numberOfItemsInCart={props.numberOfItemsInCart}/>        
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