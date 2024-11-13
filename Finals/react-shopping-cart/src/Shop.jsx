import React, {useState} from "react"


export default function Shop(props) {
    let items = [
        {id: 1, name: "Item 1", price: 10},
        {id: 2, name: "Item 2", price: 15},
        {id: 3, name: "Item 3", price: 20},
    ] 

    let ShopItems = props.items     //these are arrays of objects being passed to ShopItems
    const {cart, setCart} = useState([])

    function AddItem(Item) {
        setCart(c => [...c, Item])
    }

    //function renderItems()
    const renderItems = () => {
        return (
            ShopItems.map((Item) => {
                return (
                    <>
                        <li key = {Item.id} >{Item.name} </li>
                        <p>Price per piece: ${Item.price} </p>
                        <button onClick = {() => AddItem(Item)} >Add to Cart! </button>
                    </>
                )
            })
        )
    }

//function to render the items for the cart
    const renderCart = () => {
        return (
            cart.map((Item) => {
                return (
                    <>
                        <li key = {Item.id}>{Item.name}</li>
                        <p>Price per piece: ${Item.price} </p> 
                        <br/>
                    </>
                )
            })
        )
    }

    if(props.isLoggedIn === false){
        return <Login />
    }
    else{
        return (
            <>
                <h4>This is the shop: </h4>
                <ul>{renderItems()} </ul>
                <h4>Cart Items: </h4>
                <ul>{renderCart}</ul>
                
            </>
        )
    }
}