import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../services/API/product";
import Error from "../Components/Error";
import { getUser } from "../services/API/user";
import { loadProducts } from "../store/slices/product.slice";
import {signin, signout} from '../store/slices/user.slice';
import {setToggle} from '../store/slices/menu.slice';
// import Main from "../Components/Main/Main";

function HOC({ child, id, isAuthRequired }) {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const Child = child;

    const [fetchError, setFetchError] = useState(false);
    
    const dispatch = useDispatch();
    const { products, cart, totalPrice, userInfos, isLogged, isToggle } = useSelector((state) => ({ ...state.products, ...state.user, ...state.cart, ...state.menu}));

    useEffect(() => {
        document.title = `${id} - GameOver`;
    }, [child]);
    
    useEffect(() => {
        // console.log("first")
            async function fetchData() {
                const res = await getProducts();
                if (res.code) {
                    setFetchError(true);
                    return;
                }
                if(res.data.result.length){
                    dispatch(loadProducts(res.data.result));
                }
            }
            fetchData();        
    }, []);

    useEffect(()=>{
        
        async function checkAuth(){
            const TOKEN = localStorage.getItem("u_a_u_t_h");
            if(isAuthRequired && !userInfos){
                navigate("/");
            }
            if(!isLogged) {
                if(isAuthRequired) navigate("/");
                if(TOKEN !== null){
                    const res = await getUser(TOKEN);
                    // console.log(res)
                    if(res.status === 200){
                        dispatch(signin(res.data.result));
                    }
                }
            }
            
        }
        checkAuth();
    },[]);

    if (fetchError) {
        return <Error />;
    }

    return (
        <main id={id} >
            <div 
                className={isToggle ? "overlay" : undefined} 
                onClick={() => dispatch(setToggle(!isToggle))}>
            </div>
            {
                !products ? 
                    <p>LOADING ...</p> 
                    :
                    <Child 
                        productsStore={products} 
                        userInfosStore={userInfos} 
                        cartStore={cart} 
                        totalPrice={totalPrice}
                    />
            }
          
        </main>
    );
}

export default HOC;
