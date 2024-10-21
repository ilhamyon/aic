import Logo from '../assets/Logo.png'
import MenuConstant from '../constants/menu.json'
import { useState } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

function Navbar() {
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
      setCurrent(e.key);
      setMenuVisible(false);
    };

    const items = MenuConstant.map((menu) => ({
        label: (
            <NavLink 
                to={`/${menu.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={({ isActive }) => (isActive ? 'active' : '')} 
                onClick={() => onClick({ key: menu.pvid.toString() })} // Trigger onClick for the menu
            >
                {menu.name}
            </NavLink>
        ),
        key: menu.pvid.toString(),
        children: menu.publicSubMenus?.map((submenu) => ({
            label: (
                <NavLink 
                    to={`/${submenu.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={() => onClick({ key: submenu.pvid.toString() })} // Trigger onClick for the submenu
                >
                    {submenu.name}
                </NavLink>
            ),
            key: submenu.pvid.toString(),
        })),
    }));

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
    return (
        <>
        <div className="relative shadow-none">
            <div className="mx-auto lg:px-12 px-4 py-2 flex justify-between items-center">
                <div className="flex justify-start lg:w-auto lg:flex-initial">
                    <a href="/">
                        <span className="sr-only">AIC</span>
                        <img
                            className="lg:w-auto w-60 sm:h-20"
                            src={Logo}
                            alt="AIC logo"
                        />
                    </a>
                </div>
                <div className='lg:flex hidden gap-8 font-medium text-red-600 items-center'>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ width: 470 }} />
                    <div className='bg-red-700 text-white py-2 px-6 rounded-3xl'>
                        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => onClick({ key: `contact` })}>Contact</NavLink>
                    </div>
                </div>
                <div className='lg:hidden text-2xl' onClick={toggleMenu}>
                    {menuVisible ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                </div>
            </div>
            {menuVisible && (
                <div className='absolute gap-8 font-medium text-red-600 items-center z-50 w-full'>
                    <Menu
                        mode="inline"
                        onClick={onClick}
                        selectedKeys={[current]}
                        style={{
                            width: '100%',
                        }}
                        items={items}
                    />
                </div>
            )}
        </div>
        </>
    )
}

export default Navbar