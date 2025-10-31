import axios from "axios";
import { useEffect, useState } from "react";
export default function DisplayData() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        let responce = async () => {
            const data = await axios.get('https://dummyjson.com/products')
            setProducts(data.data.products)
        }
        responce()
    }, [])
    console.log(products)



    return (
        <div className="container mt-3">
            <div className="row ">
                {
                    products.map(product => (
                        <div className="col-md-3 mb-4" key={product.id}>
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="card-img-top"
                                        style={{ height: "180px", objectFit: "cover" }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h6 className="card-title">{product.title}</h6>
                                        <p className="text-muted small mb-2">{product.brand}</p>
                                        <p className="fw-bold">₹ {product.price}</p>
                                        <button className="btn btn-primary mt-auto">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                    ))
                }


            </div>
        </div>

    )
}