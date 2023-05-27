import React from 'react'
import CustomerService from './CustomersService'

const customerService = new CustomerService()

export default class CustomerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: [],
            nextPageUrl: '',
        }
        this.nextPage = this.nextPage.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        let self = this
        customerService.getCustomers().then(res => {
            self.setState({customers: res.data,
                           nextPageUrl: res.nextLink
                        })
        })
    }

    handleDelete(e, pk) {
        let self = this
        customerService.deleteCustomer({pk: pk}).then(() => {
            let newArray = self.state.customers.filter(obj => {
                return obj.pk !== pk
            })
            self.setState({customers: newArray})
        })
    }

    nextPage() {
        let self = this
        customerService.getCustomerByURL(this.state.nextPageUrl).then(res => {
            self.setState({customers: res.data, nextPageUrl: res.nextLink})
        })
    }

    render() {
        return (
            <div className='customers--list'>
                <table className='table'>
                    <thead key='thead'>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map(customer => 
                            <tr key={customer.pk}>
                                <td>{customer.pk}</td>
                                <td>{customer.first_name}</td>
                                <td>{customer.last_name}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.email}</td>
                                <td>{customer.address}</td>
                                <td>{customer.description}</td>
                                <td>
                                    <button onClick={event => this.handleDelete(event, customer.pk)}>Delete</button>
                                    <a href={`/customer/${customer.pk}`}>Update</a>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <button className='btn btn-primary' onClick={this.nextPage}>Next</button>
            </div>
        )
    }

}