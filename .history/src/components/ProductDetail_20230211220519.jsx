import React, { Fragment } from 'react'
import {useParams} from 'react-router'
import DATA from '../Data';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem , delItem} from '../Redux/Actions/index';
/* In our React app sometimes we want to access the parameters of the current route in this case useParams hook 
comes into action. The react-router-dom package has useParams hooks that let you access the parameters 
of the current route */

    const ProductDetail = () => {
        const [cartBtn , setCartBtn] = useState("Add to Cart");
        {/* Now we need a product id which is pass from the product page. */}
        const proid = useParams();
        const proDetail = DATA.filter(x=>x.id == proid.id);
        const product = proDetail[0];
        console.log(product);

        //we need to store useDispatch in variable
        const dispatch = useDispatch();
        const handleCart = (product)=>{
            if(cartBtn === "Add to Cart"){
                dispatch(addItem(product));
                setCartBtn("Remove from Cart");
            }
            else{
                dispatch(delItem(product));
                setCartBtn("Add to Cart");
            }
        }

  return (
    <>
    <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center mx-auto product">
                    <img src={product.img}  alt={product.title} height="400px"/>
                </div>
                <div className="col-md-12 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{product.title}</h1>
                    <hr />
                    <h2 className="my-4">${product.price}</h2>
                    <p className="lead">{product.desc}</p>
                    <button onClick={()=>handleCart(product)} className='btn btn-outline-primary'>{cartBtn}</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default ProductDetail
