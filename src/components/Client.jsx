import { Form, useNavigate, redirect } from "react-router-dom";
import { destroy } from "../data/clients";
export async function action({ params }) {
    await destroy(params.id);
    return redirect('/');
}


const Client = ({ client }) => {
    const navigate = useNavigate();
    const { id, name, email, phone, company } = client;

    return (
        <tr className="border-b border-green-600 ">
            <td className="p-6 space-y-2">
                <p className="text-2xl text-green-600"> {name}</p>
                <p>{company}</p>
            </td>
            <td className="p-6">
                <p className="text-white"> <span className="text-green-600 uppercase font-bold">Email: </span> {email} </p>
                <p className="text-white"> <span className="text-green-600 uppercase font-bold">Telefono: </span> {phone} </p>
            </td>
            <td className="p-6 flex gap-3 justify-center">
                <button
                    type="button"
                    className="text-green-600 hover:text-green-400 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clients/${id}/edit`)}
                >
                    Editar
                </button>
                <Form
                    method="post"
                    action={`/clients/${id}/destroy`}
                    onSubmit={(e) => {
                        if (!confirm('¿Deseas Elimanr este Registro?')) {
                            e.preventDefault();
                        }
                    }}>
                    <button type="submit" className="text-red-600 hover:text-red-400 uppercase font-bold text-xs">
                        Eliminar
                    </button>
                </Form>


            </td>
        </tr >
    )
}

export default Client