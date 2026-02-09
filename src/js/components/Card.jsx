function Card(){
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="Card text-center">
                <img src="https://placehold.jp/500x325.png" className="card-img-top" alt="imagen"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora eligendi explicabo animi quas placeat sint ullam vel atque odit, deserunt, suscipit voluptatibus id autem quis voluptas impedit. Recusandae, culpa veniam.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}
export default Card