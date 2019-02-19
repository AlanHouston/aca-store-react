function ProductDetail(props){

    let star = [];
    for (let i=0; i<props.product.rating; i++){
        star.push(<span className="glyphicon glyphicon-star" key={i}></span>);
    }
    let emptyStars = [];
    for (let i=0; i<(5-props.product.rating); i++){
        emptyStars.push(<span className="glyphicon glyphicon-star-empty" key={i}></span>);
    }
    return(
        <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img src="http://placehold.it/320x150" alt=""/>
                <div className="caption">
                    <h4 className="pull-right">{props.product.price}</h4>
                    <h4><a href="#">{props.product.name}</a></h4>
                    <p>{props.product.description}</p>
                </div>
                <div className="ratings">
                    <p className="pull-right">{props.product.reviews} reviews</p>
                    <p>
                        {star}{emptyStars}
                        {/* <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span> */}
                    </p>
                </div>
            </div>
        </div>
    )
}