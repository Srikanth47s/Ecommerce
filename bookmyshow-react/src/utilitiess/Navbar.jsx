import { useSelector } from "react-redux"

export default function Navbar() {

    let cartItems = useSelector(state => state.cartItems)
    // console.log('headers',cartItems)

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
            <div className="container-fluid">
                <a className="navbar-brand me-5">Zepto</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse row ms-5" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-4 ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">🛒 {cartItems.length}</a>
                        </li>
                        
                    </ul>
                    <form className="d-flex col-8" role="search">
                        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

            </div>
        </nav>
    )
}
