import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { addSearchData } from '../redux/productSlice';

const navItems = [
    { name: "HOME", path: "/" },
    { name: "SIGN UP", path: "/signup" },
    { name: "SIGN IN", path: "/login" },
    { name: "SHOP", path: "/shop" },
    { name: "MEN'S", path: "/mens" },
    { name: "WOMEN'S", path: "/womens" },
    { name: "cart", path: "/cart" },
]
const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { searchData } = useSelector((state) => state.products);
    console.log('searchData', searchData)

    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(addSearchData(search));
    })

    return (
        <nav className='flex gap-4 bg-purple-400 h-8 '>
            {navItems?.map((item) => (
                <div key={item.name} >
                    <Link to={item.path} onClick={() => navigate(item.path)}>
                        {item.name}
                    </Link>
                </div>
            ))}
            <form onSubmit={(e) => {
                e.preventDefault();
                navigate('/search');
            }}>
                <input
                    type="search"
                    name="search"
                    placeholder='Search'
                    className='w-40 h-8'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </nav>
    )
}

export default Navbar