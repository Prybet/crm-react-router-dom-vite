import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {

    const location = useLocation();
    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-gray-900 px-5 py-10">
                <h2 className="text-4xl font-black text-center text-green-400"> CRM - Clientes</h2>
                <nav className="mt-10">
                    <Link
                        className={`${location.pathname === '/' ? 'text-white' : 'text-green-600'} text-2xl block mt-2 hover:text-white`}
                        to="/">Clientes</Link>
                    <Link
                        className={`${location.pathname === '/clients/new' ? 'text-white' : 'text-green-600'} text-2xl block mt-2 hover:text-white`}
                        to="/clients/new">Nuevo Cliente</Link>
                </nav>
            </aside>
            <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout