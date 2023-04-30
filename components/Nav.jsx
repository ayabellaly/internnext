import { useState, useEffect } from 'react';

import { NavLink } from '.';
import { userService } from 'services';
import Image from 'next/image'

export { Nav };

function Nav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    if (!user) return null;
    
    return (
        <nav className="navbar navbar-expand navbar-dark bg-light"  style={{ border: "1px solid green" }}>
            <div className="navbar-nav ">
                <NavLink href="/" exact className="nav-item nav-link"> <Image
          src="https://www.creditagricole.ma/sites/default/files/2019-07/al%20akhdar%20bank.png"
          className=" rounded  w-25 h-100 "
          alt="Phone image"
        /></NavLink>
        <NavLink href="/" className="nav-item nav-link text-secondary">About</NavLink>
                <NavLink href="/users" className="nav-item nav-link text-secondary">Users</NavLink>
                <NavLink href="/cheque" className="nav-item nav-link text-secondary">cheque</NavLink>
                <NavLink href="/users" className="nav-item nav-link text-secondary">see more</NavLink>



                <a onClick={logout} className="nav-item nav-link text-secondary">Logout</a>
            </div>
        </nav>
    );
}