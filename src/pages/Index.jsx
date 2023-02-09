import { useLoaderData } from "react-router-dom";
import { getClients } from "../data/clients"
import Client from "../components/Client";

export function loader() {
    return getClients();
}
const Index = () => {
    const data = useLoaderData();
    return (
        <>
            <h1 className='font-black text-xl text-green-500'> Clientes</h1>
            <p className='mt-3 text-white'>Administra tus clientes</p>
            {data.length ? (
                <table className="w-full bg-gray-900 shadow mt-5 table-auto text-white">
                    <thead className="bg-green-600 text-white">
                        <tr>
                            <th className="p-2"> Cliente</th>
                            <th className="p-2"> Contacto</th>
                            <th className="p-2"> Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(client => (
                            <Client key={client.id} client={client} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No hay clientes</p>
            )
            }
        </>
    )
}

export default Index