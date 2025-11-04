import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { additem, deleteItem } from "../store/CartCount";
import { ClipLoader } from 'react-spinners'




export default function DisplayData() {
    let cartItems = useSelector(state => state.cartItems)
    let dispatch = useDispatch()

    const [products, setProducts] = useState([])
    const [addCart, setAddCart] = useState([])
    const [cartTotalPrice, setCartTotalPrice] = useState(0)
    // const [deleteCartItems, setDeleteCartItems]= useState([])
    useEffect(() => {
        let responce = async () => {
            const data = await axios.get('https://dummyjson.com/products')
            setProducts(data.data.products)
        }
        responce()
    }, [])


    // console.log(cartItems)
    // let dispatchCart = useDispatch()

    const addToCart = async (product) => {
        // const upadatedCart = [...cartItems, product]

        dispatch(additem(product))
        // debugger

        debugger

        console.log("cartitems", cartItems)
        await axios.post('https://dummyjson.com/carts/add', {
            userId: 1, products: [
                { id: product.id, quantity: 1 }
            ]
        }).catch(err => console.log(err.message))
        setAddCart(addCartPost.data.products)
        console.log('addcart', addCartPost)

        debugger
        // console.log(addCartPost)

        // fetch('https://dummyjson.com/carts/add', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         userId: 1,
        //         products: [
        //            cartItems
        //         ]
        //     })
        // })
        //     .then(res => res.json())
        //     .then(console.log);

    }

    let deleteToCart = async (product) => {
        // console.log("delete",product)

        dispatch(deleteItem(product))
        console.log(cartItems, 'delete cart items')
        await axios.delete('https://dummyjson.com/carts/1').catch(err => console.log(err.message))
        console.log('deleteItem', deleteItems)
    }

    



    return (

        <div className="container-fluide m-3">
            <div className="row ">
                <div className="col-md-8">
                    <div className="row">
                        {products.length === 0 ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <ClipLoader color="#369cd7ff" size={100} />
                        </div> :
                            products.map(product => (
                                <div className="col-3 mb-4" key={product.id}>
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
                                            <p className="fw-bold">$ {product.price}</p>

                                            <button className="btn btn-primary mt-auto" onClick={e => addToCart(product)}>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className="col-md-4 text-center bg-light ">
                    {cartItems.length > 0 && <div className="d-flex justify-content-between">
                        <h3 className="text-primary  p-2">🛒 Cart {cartItems.length}</h3>
                        <h3 className="text-primary p-2"></h3>
                    </div>}


                    {cartItems.length === 0 ? (
                        <button className="btn btn-primary form-control">Your cart is empty.</button>
                    ) : (
                        <ul className="list-group border-bottom">
                            {cartItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="list-group-item d-flex flex-column align-items-center  border-bottom"
                                >
                                    <div className="card  mb-3 border border-0">
                                        <img src={item.thumbnail} className="card-img-top img-fluid"
                                            style={{ width: "100px", height: "auto", margin: "auto" }} alt={item.title} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p><b>Price:</b> $ {item.price}</p>


                                        </div>
                                        <div className="d-block">
                                            <button className="btn btn-danger ps-5 pe-5 p-2" onClick={e => deleteToCart(item)}>Remove</button>
                                        </div>

                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    {/* <h5 className="bg-warning p-2 mt-2 text-white">Total cart value: 100</h5> */}
                </div>






            </div>
        </div >

    )
}