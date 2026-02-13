function Card(props){
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="Card text-center">
                <img src="https://placehold.jp/500x325.png" className="card-img-top" alt="imagen"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">{props.texto}</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}
export default Card