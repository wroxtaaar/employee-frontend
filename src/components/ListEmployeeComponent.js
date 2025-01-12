import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([])
    const [editingEmployee, setEditingEmployee] = useState(null) // Holds the employee being edited
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "" }) // Form state

    const navigator = useNavigate()

    // Dummy data array
    const dummyEmployees = [
        { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com" },
        { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com" },
        { id: 3, firstName: "Sam", lastName: "Wilson", email: "sam.wilson@example.com" },
        { id: 4, firstName: "Emily", lastName: "Johnson", email: "emily.johnson@example.com" }
    ]

    useEffect(() => {
        getAllEmployees()
    }, [])

    // Fetching data from the dummy array
    function getAllEmployees() {
        setEmployees(dummyEmployees) // Simulating API response
    }

    // Handle form input changes
    function handleInputChange(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    // Add a new employee
    function addNewEmployee() {
        if (form.firstName && form.lastName && form.email) {
            const newEmployee = {
                id: employees.length + 1, // Generate a new ID
                ...form
            }
            setEmployees([...employees, newEmployee]) // Add new employee to the array
            setForm({ firstName: "", lastName: "", email: "" }) // Reset the form
        }
    }

    // Start updating an employee
    function startUpdateEmployee(employee) {
        setEditingEmployee(employee)
        setForm({
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email
        })
    }

    // Update an existing employee
    function updateEmployee() {
        if (editingEmployee && form.firstName && form.lastName && form.email) {
            setEmployees(employees.map(employee =>
                employee.id === editingEmployee.id
                    ? { ...employee, ...form } // Update the matching employee
                    : employee
            ))
            setEditingEmployee(null) // Clear the editing state
            setForm({ firstName: "", lastName: "", email: "" }) // Reset the form
        }
    }

    // Remove an employee
    function removeEmployee(id) {
        setEmployees(employees.filter(employee => employee.id !== id))
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Employees</h2>

            {/* Add / Edit Form */}
            <div className='mb-3'>
                <h4>{editingEmployee ? "Edit Employee" : "Add Employee"}</h4>
                <form>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input
                            type='text'
                            name='firstName'
                            value={form.firstName}
                            onChange={handleInputChange}
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <label>Last Name</label>
                        <input
                            type='text'
                            name='lastName'
                            value={form.lastName}
                            onChange={handleInputChange}
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleInputChange}
                            className='form-control'
                        />
                    </div>
                    <button
                        type='button'
                        className='btn btn-primary mt-2'
                        onClick={editingEmployee ? updateEmployee : addNewEmployee}
                    >
                        {editingEmployee ? "Update Employee" : "Add Employee"}
                    </button>
                </form>
            </div>

            {/* Employee Table */}
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button
                                    className='btn btn-info'
                                    onClick={() => startUpdateEmployee(employee)}
                                >
                                    Update
                                </button>
                                <button
                                    className='btn btn-danger'
                                    onClick={() => removeEmployee(employee.id)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent
