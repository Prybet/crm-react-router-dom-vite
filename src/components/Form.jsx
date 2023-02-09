const Form = ({ client }) => {

    return (
        <>
            <div className="mb-4">
                <label
                    className="text-green-600"
                    htmlFor="name"
                >Nombre:</label>
                <input
                    id="name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-600"
                    placeholder="Nombre del Cliente"
                    name="name"
                    defaultValue={client?.name}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-green-600"
                    htmlFor="company"
                >Empresa:</label>
                <input
                    id="company"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-600"
                    placeholder="Empresa del Cliente"
                    name="company"
                    defaultValue={client?.company}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-green-600"
                    htmlFor="email"
                >E-mail:</label>
                <input
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-600"
                    placeholder="Email del Cliente"
                    name="email"
                    defaultValue={client?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-green-600"
                    htmlFor="phone"
                >Teléfono:</label>
                <input
                    id="phone"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-600"
                    placeholder="Teléfono del Cliente"
                    name="phone"
                    defaultValue={client?.phone}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-green-600"
                    htmlFor="notes"
                >Notas:</label>
                <textarea
                    as="textarea"
                    id="notes"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-600 h-40 align-self"
                    placeholder="Notas del Cliente"
                    name="notes"
                    defaultValue={client?.notes}
                />
            </div>
        </>
    )
}

export default Form