import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import Error from "../components/Error";
import { setClient } from "../data/clients"
import FormComponent from "../components/Form"

export async function action({ request }) {
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

    await setClient(Object.fromEntries(formDat));

    return redirect('/');
}

const NewClient = () => {

    const navigate = useNavigate()

    const errors = useActionData();

    return (
        <>
            <h1 className='font-black text-xl text-green-500'> Nuevo Cliente</h1>
            <p className='mt-3 text-white'>llena todos los campos para registrar un nuevo cliente</p>
            <div className="flex justify-end">
                <button className="bg-green-600  text-white px-3 py-1 font-bold uppercase" onClick={() => navigate(-1)}>
                    Volver
                </button>
            </div>
            {errors?.length && errors.map((error, i) => <Error key={i}> {error}</Error>)}
            <Form method='post' noValidate>
                <div className="bg-gray-900 shadow rounded-sm md:w-3/4 mx-auto px-5 py-10 mt-20">
                    <FormComponent />
                    <input type="submit" className="mt-5 w-full bg-green-600 p-3 uppercase font-bold text-white text-lg" value="Registrar cliente" />
                </div>
            </Form>


        </>
    )
}

export default NewClient