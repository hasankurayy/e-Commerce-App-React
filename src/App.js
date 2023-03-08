import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"

// components 
import Header from './components/Header';

//pages
import Home from './pages/Home';
import Category from './pages/Category';
import Search from './pages/Search';
import SingleProduct from './pages/SingleProduct';
import Basket from './pages/Basket';

function App() {
    return (
        <div className='App text-black'>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/category/:category' element={<Category />} />
                    <Route path='/search/:search' element={<Search />} />
                    <Route path='/product/:id' element={<SingleProduct />} />
                    <Route path='/basket' element={<Basket />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
