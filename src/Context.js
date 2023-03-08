import { createContext, useState } from "react";

const Context = createContext()


export const ContextProvider = ({ children }) => {

    const [search, setSearch] = useState("")
    const [showMenu, setShowMenu] = useState(false)
    const [basket, setBasket] = useState([])

    const addToBasket = (product,quantity) => {
        let productExist = basket.find(arrayItem => arrayItem.id === product.id)
        if(productExist){
            productExist.quantity += quantity
            setBasket([...basket.filter(arrayItem => arrayItem.id !== product.id), productExist])
        } else {
            setBasket([...basket, {
                id: product.id, 
                img: product.images[0],
                title: product.title,
                quantity: quantity,
                price: product.price
             }])
        }
    }

    const removeFromBasket = (product) => {
        let productExist = basket.find(arrayItem => arrayItem.id === product.id)
        productExist.quantity -= 1
        if(productExist.quantity === 0){
            setBasket([...basket.filter(arrayItem => arrayItem.id !== product.id)])
        } else {
            setBasket([...basket.filter(arrayItem => arrayItem.id !== product.id), productExist])
        }
    }

    const clearBasket = () => {
        setBasket([])
    }

    const values = {
        search, setSearch,
        showMenu,setShowMenu,
        basket, setBasket,
        addToBasket, removeFromBasket, clearBasket
    }

    return(
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export default Context