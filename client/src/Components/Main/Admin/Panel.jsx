import { useEffect } from 'react';
import { useState } from 'react';
import diag from '../../../assets/images/diag.jfif'
import { getUsers } from '../../../services/API/user';
import { getCategories } from '../../../services/API/category';
import { getOrders } from '../../../services/API/order';

function Panel({ productsStore}) {

    const TOKEN = localStorage.getItem("u_a_u_t_h");
    const [usersList, setUsersList] = useState(null);
    const [categoriesList, setCategoriesList] = useState(null);
    const [ordersList, setOrdersList] = useState(null);

    const [isBtnMenuToggled, setIsBtnMenuToggled] = useState(false);
    const [displayElement, setDisplayElement] = useState("home");
    const [btnValues, setBtnValues] = useState({
        user: "user",
        product: "product",
        category: "category",
        order: "order",
    });

    useEffect(()=>{
        async function fetchDatas(){
            const users = await getUsers(TOKEN);
            setUsersList(users.data.result);
            const categories = await getCategories(TOKEN);
            setCategoriesList(categories.data.result);
            const orders = await getOrders(TOKEN);
            setOrdersList(orders.data.result);
        }
        fetchDatas();
    }, []);

    const displayHandler = (e) => {
        e.preventDefault();
        setIsBtnMenuToggled(!isBtnMenuToggled);
        if(e.target.textContent === "home"){
            setDisplayElement("home");
            setBtnValues({...btnValues, [e.target.className]: e.target.className});
            return
        }
        switch (e.target.textContent) {
            case "user":
                setBtnValues({
                    [e.target.className]: "home",
                    product: "product",
                    category: "category",
                    order: "order",
                })
                setDisplayElement("user");
                break;
            case "product":
                setBtnValues({
                    [e.target.className]: "home",
                    user: "user",
                    category: "category",
                    order: "order",
                })
                setDisplayElement("product");
                break;
            case "category":
                setBtnValues({
                    [e.target.className]: "home",
                    user: "user",
                    product: "product",
                    order: "order",
                })
                setDisplayElement("category");
                break;
            case "order":
                setBtnValues({
                    [e.target.className]: "home",
                    user: "user",
                    product: "product",
                    category: "category",
                })
                setDisplayElement("order");
                break;        
        }
    }

        return (
            <>
                <h2>admin panel</h2>
                {
                    displayElement === "home" &&
                    <section>
                    <img src={diag} alt="" />
                    <aside className='ctn-el-diag'>
                        <div className='sub-ctn-el-diag'>
                            <div className='el-diag el-diag-1'></div>
                            <p>customer</p>
                        </div>
                        <div className='sub-ctn-el-diag'>
                            <div className='el-diag el-diag-2'></div>
                            <p>products</p>
                        </div>
                        <div className='sub-ctn-el-diag'>
                            <div className='el-diag el-diag-3'></div>
                            <p>categories</p>
                        </div>
                        <div className='sub-ctn-el-diag'>
                            <div className='el-diag el-diag-4'></div>
                            <p>orders</p>
                        </div>
                    </aside>
                </section>
                }
                {displayElement === "user" &&
                
                    <section className='ctn-admin-panel'> 
                        <div>
                            <h3>user</h3>
                            <input type="text" placeholder='search'/>
                        </div>
                        <section className='ctn-display-list'>
                                           
                            {usersList.map(user=>{
                                return (
                                    <ul className="user-list" key={user.id}>
                                        <li>{user.firstname} {user.lastname}</li>
                                        <li>{user.address} {user.zip} {user.city}</li>
                                        <li>{user.email} {user.phone} {user.city}</li>
                                        <div className="divider"></div>
                                    </ul>
                                )
                            })}
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, obcaecati cumque sequi ipsum rerum possimus nostrum architecto corporis voluptate. Ab vitae perferendis totam, ipsam enim excepturi explicabo tempora possimus ex cumque facere iste perspiciatis quia dolore velit quis recusandae dolorem quas. Delectus veritatis earum distinctio dolorum quas quia nisi quis tempore similique, asperiores minus vitae dolore, perspiciatis tempora a perferendis exercitationem. Ducimus in nobis expedita, illum eum sunt repellendus voluptatibus necessitatibus corporis esse recusandae est ratione voluptas aliquam, vero fugiat, veniam odit libero minus magni quibusdam officiis. Rem aspernatur, expedita dolores accusantium harum facere officiis. Tempore facilis molestias numquam amet nobis modi a quis alias accusantium sunt quaerat quo incidunt reprehenderit, debitis harum rem mollitia delectus unde voluptate optio. Molestiae distinctio dignissimos fugiat neque eligendi natus ipsum beatae voluptates nesciunt quis recusandae dolores, architecto amet officiis repellendus omnis et autem labore, ab est fugit facere. Quaerat dolore deserunt veniam placeat?</p>
                        </section>  
                    </section>
                }
                {displayElement === "product" &&
                
                    <section className='ctn-admin-panel'> 
                        <div>
                            <h3>product</h3>
                            <input type="text" placeholder='search'/>
                        </div>                   
                            {productsStore.map(product=>{
                                console.log(product)
                                return (
                                    <ul className="user-list" key={product.id}>
                                        <li>{product.product_title}</li>
                                        <li>{product.quantity_in_stock}</li>
                                    </ul>
                                )
                            })}
                
                    </section>
                }
                {displayElement === "category" &&
                
                    <section className='ctn-admin-panel'> 
                        <div>
                            <h3>category</h3>
                            <input type="text" placeholder='search'/>
                        </div>                   
                            {categoriesList.map(category=>{
                                return (
                                    <ul className="user-list" key={category.id}>
                                        <li>{category.title}</li>
                                    </ul>
                                )
                            })}
                
                    </section>
                }
                {displayElement === "order" &&
                
                    <section className='ctn-admin-panel'> 
                        <div>
                            <h3>order</h3>
                            <input type="text" placeholder='search'/>
                        </div>    

                            {ordersList ? ordersList.map(order=>{
                                return (
                                    <ul className="user-list" key={order.id}>
                                        {/* <li>{order.title}</li>
                                        <li>{product.quantity_in_stock}</li> */}
                                    </ul>
                                )
                            })
                            :
                            <p>No orders yet 😒</p>
                        }

                    </section>
                }


                <section id='ctn-btn-admin'>
                    <button className='user' onClick={(e)=> displayHandler(e)}>{btnValues.user}</button>
                    <button className='product' onClick={(e)=> displayHandler(e)}>{btnValues.product}</button>
                    <button className='category' onClick={(e)=> displayHandler(e)}>{btnValues.category}</button>
                    <button className='order' onClick={(e)=> displayHandler(e)}>{btnValues.order}</button>
                </section>
              

                </>
        );

}

export default Panel;
