import { Form, useActionData, useLoaderData, useNavigate, redirect } from "react-router-dom";
import Error from "../components/Error";
import FormComponent from "../components/Form";
import { updateClient, getClient } from "../data/clients"

export async function loader({ params }) {
    const client = await getClient(params.id);
    if (Object.values(client).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: `Cliente ${params.id} no fue encontrado`
        });
    }
    return client;
}

export async function action({ request, params }) {
    const formDat = await request.formData();
    const errors = [];
    if (Object.values(Object.fromEntries(formDat)).includes('')) {
        errors.push("Todos los campos son nesesarios");
    }

    if (!new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])").test(formDat.get("email"))) {
        errors.push("El email no es válido");
    }


    if (Object.keys(errors).length) {
        return errors;
    }

    await updateClient(params.id, Object.fromEntries(formDat));

    return redirect('/');
}


const UpdateClient = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    const errors = useActionData();
    return (
        <>
            <h1 className='font-black text-xl text-green-500'> Editar Cliente <span className="text-white uppercase">{data.name}</span></h1>
            <p className='mt-3 text-white'>A continuacion podras modificar los datos de un cliente</p>
            <div className="flex justify-end">
                <button className="bg-green-600  text-white px-3 py-1 font-bold uppercase" onClick={() => navigate(-1)}>
                    Volver
                </button>
            </div>
            {errors?.length && errors.map((error, i) => <Error key={i}> {error}</Error>)}
            <Form method='post' noValidate>
                <div className="bg-gray-900 shadow rounded-sm md:w-3/4 mx-auto px-5 py-10 mt-20">
                    <FormComponent client={data} />
                    <input type="submit" className="mt-5 w-full bg-green-600 p-3 uppercase font-bold text-white text-lg" value="Actualizar cliente" />
                </div>
            </Form>


        </>
    )
}

export default UpdateClient