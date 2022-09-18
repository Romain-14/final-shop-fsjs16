import {update} from '../../../services/API/user';

function EditForm({userState, togglePopupForm}) {
    
    const onSubmitHandler = async (e) => {
        const TOKEN = localStorage.getItem("u_a_u_t_h");
        e.preventDefault();
        const res = await update(userState[0], TOKEN);
        if(res.status === 200){
            togglePopupForm(e);
        }
    }

    return (
        <section className="popup">
            <form onSubmit={onSubmitHandler}>
                <input placeholder="alias" type="text" value={userState[0].alias} onChange={(e) => userState[1]({...userState[0], alias: e.target.value})}/>
                <input placeholder="firstname" type="text" value={userState[0].firstname} onChange={(e) => userState[1]({...userState[0], firstname: e.target.value})}/>
                <input placeholder="lastname" type="text" value={userState[0].lastname} onChange={(e) => userState[1]({...userState[0], lastname: e.target.value})}/>


                <input placeholder="address" type="address" value={userState[0].address} onChange={(e) => userState[1]({...userState[0], address: e.target.value})}/>
                <input placeholder="zip" type="text" value={userState[0].zip} onChange={(e) => userState[1]({...userState[0], zip: e.target.value})}/>
                <input placeholder="city" type="text" value={userState[0].city} onChange={(e) => userState[1]({...userState[0], city: e.target.value})}/>
                <input placeholder="phone" type="tel" value={userState[0].phone} onChange={(e) => userState[1]({...userState[0], phone: e.target.value})}/>
                <button type="submit">update info</button>
            </form>
        </section>
    );
}


export default EditForm;
