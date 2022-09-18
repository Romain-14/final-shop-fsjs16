import React, {useState, useRef} from "react";
import { useEffect } from "react";
import Detail from "./Detail";
import {getCategories} from '../../services/API/category';

function Shop({ productsStore, cartStore }) {

    const [toggleDetail, setToggleDetail] = useState(false);
    const [categories, setCategories] = useState(null);
    const [categorySelected, setCategorySelected] = useState("all");

    const detailProduct = useRef(null);

    useEffect(()=>{
        async function fetchCategory(){
            const res = await getCategories();
            console.log(res)
            if(res.status === 200){
                setCategories(res.data.result)
            }
        }
        fetchCategory();
    },[])


    const toggleDetailFunc = (e,product) => {
        e.preventDefault();
        setToggleDetail(!toggleDetail);
        detailProduct.current = product;
    }

    const displayProduct = (product) => {
        return (<article key={product.id}>                            
            <figure>
                <figcaption>{product.product_title}</figcaption>
                <img src={`/images/${product.image_name}`} alt="" />                                
            </figure>
            <div className="qtt-price">
                <p>{product.quantity_in_stock} in stock</p>
                <p>{product.price} €</p>
            </div>
           
            <button className="btn btn-detail" onClick={(e)=> toggleDetailFunc(e, product)}>Detail</button>
        </article>)
        
    }
    
    return (
        <>      
            <section>
           { console.log('categorySelected --> ',categorySelected)}
				<h2>Shop</h2>
                <select name="category" id="category" onChange={(e)=>setCategorySelected(e.target.value)}>
                    <option value="all" >All categories</option>
                    
                    {
                        categories && categories.map(category=> {
                            return (
                                <React.Fragment key={category.id}>

                                <option value={category.title}  >{category.title}</option>
                                </React.Fragment>
                            )
                        })
                    }

                </select>
                
                {productsStore.map((product) => {
                    // if(categorySelected === "all"){
                    //     return (displayProduct(product))
                    // } else return product.category_title === categorySelected && (
                    //     displayProduct(product)
                    // )    
                    return categorySelected !== "all" ? 
                            product.category_title === categorySelected && 
                                displayProduct(product)
                                :
                                displayProduct(product)
                })}

                {toggleDetail && <Detail product={detailProduct.current} cart={cartStore} toggleDetailFunc={toggleDetailFunc}/>}
            </section>
            </>
    );
}

export default Shop;
