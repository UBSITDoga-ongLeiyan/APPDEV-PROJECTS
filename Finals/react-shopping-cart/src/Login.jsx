import React, {useState} from "react"
import Shop from "./Shop.jsx";
import AdminPanel from "./AdminPanel.jsx";

export default function Login() {
    let items = [
        {id: 1, name: "Item 1", price: 10},
        {id: 2, name: "Item 2", price: 15},
        {id: 3, name: "Item 3", price: 20},
      ] 

    let accounts = [
        {id: 1, username: "customer", password: "customer", role: "customer"},
        {id: 2, username: "admin", password: "admin", role: "admin"},
        {id: 3, username: "customer1", password: "customer1", role: "customer1"},
        {id: 4, username: "customer2", password: "customer2", role: "customer2"}
    ]
    //boolean state for logging in
    const [isLoggedIn, setIsLoggedIn] = useState (false);
    const [role, setRole] = useState ("")
    const [enteredUsernames, setEnteredUsernames] = useState ("");
    const [enteredPasswords, setEnteredPasswords] = useState ("");

    //functional handlers for updating our username states
    function getUsernames(event) {
        setEnteredUsernames (event.target.value)
    }

    //functional handlers for updating our passwords states
    function getPasswords(event) {
        setEnteredPasswords (event.target.value)
    }

    //functional handlers for handling the Login process
    function handleLogin () {
        accounts.map((account) => 
        {
            if(account.username === enteredUsernames && account.password === enteredPasswords){
                setIsLoggedIn(true)
                setRole(account.role)
            }
        })
    }

    //component for rendering the Login Page
    const renderLogin = () => {
        return (
            <div>
                <h1> Login: </h1>
                Username: <input type="text" placeholder="Username" id="username" onChange={getUsernames} />
                Password: <input type="text" placeholder="Password" id="password" onChange={getPasswords} />
                <button onClick = {handleLogin} >Login </button>
            </div>
        )
    }

    const renderShop = () => {
        return (
            <Shop isLoggedIn = {isLoggedIn} items = {items}/>
        )
    }

    //component for rendering the Admin Panel Page
    const renderAdmin = () => {
        return(
            <AdminPanel isLoggedIn = {isLoggedIn}
            accounts = {accounts} />
        )
    }
        if(isLoggedIn === false){
            return renderLogin()
        }else {
            if(role === "customer"){
                return renderShop() 
            }
            else {
                return renderAdmin()
            }

            }
        
}