
function ListSuperheroComponent() {

    const dummyData = [
        {
            "id": 1,
            "firstName": "Clark",
            "lastName": "Kent",
            "email": "Superman"
        },
        {
            "id": 2,
            "firstName": "Bruce",
            "lastName": "Wayne",
            "email": "Batman"
        },
        {
            "id": 3,
            "firstName": "Barry",
            "lastName": "Allen",
            "email": "Flash"
        }
    ]


    return (



        <div >

            <h1><span className="blue">&lt;</span>DC<span className="blue">&gt;</span> <span className="yellow">Superheros</span></h1>
            <h2>Created by <a href="https://github.com/pablorgarcia" target="_blank">Abdul Wasiq</a></h2>


            <h2 className="text-center">List of Superheros</h2>
            <table className="container">
                <thead>
                    <tr>
                        <th><h1>Superhero Id</h1></th>
                        <th><h1>Human First Name</h1></th>
                        <th><h1>Human Last Name</h1></th>
                        <th><h1>Superhero Name</h1></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dummyData.map(superhero =>
                            <tr key={superhero.id}>
                                <td>{superhero.id}</td>
                                <td>{superhero.firstName}</td>
                                <td>{superhero.lastName}</td>
                                <td>{superhero.email}</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListSuperheroComponent
