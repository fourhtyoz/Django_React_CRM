import React from "react";
import CustomerService from "./CustomersService";

const customerService = new CustomerService()

export default class CustomerCreateUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const { match: {params} } = this.props
        if (params && params.pk) {
            customerService.getCustomer(params.pk).then(customer => {
                this.refs.firstName.value = customer.first_name
                this.refs.lastName.value = customer.lastName
                this.refs.phone.value = customer.phone
                this.refs.email.value = customer.email
                this.refs.address.value = customer.address
                this.refs.description.value = customer.description
            })
        }
    }

    handleCreate() {
        customerService.createUser({
            'first_name': this.refs.firstName.value,
            'last_name': this.refs.lastName.value,
            'phone': this.refs.phone.value,
            'email': this.refs.email.value,
            'description': this.refs.description.value,
        }).then(() => alert('A new customer has been created')).catch(() => alert('There was an error'))
    }

    handleUpdate(pk) {
        customerService.updateCustomer({
            'pk': pk,
            'first_name': this.refs.firstName.value,
            'last_name': this.refs.lastName.value,
            'phone': this.refs.phone.value,
            'email': this.refs.email.value,
            'description': this.refs.description.value,
        }).then(() => alert('Customer has been updated')).catch(() => alert('There was an error'))
    }

    handleSubmit(event) {
        const { match: {params} } = this.props
        if (params && params.pk) {
            this.handleUpdate(params.pk)
        } else {
            this.handleCreate()
        }
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First name:</label>
                    <input className="form-control" type="text" ref="firstName" />
                    <label>Last name:</label>
                    <input className="form-control" type="text" ref="lastName" />
                    <label>Phone:</label>
                    <input className="form-control" type="text" ref="phone" />
                    <label>Email:</label>
                    <input className="form-control" type="text" ref="email" />
                    <label>Address:</label>
                    <input className="form-control" type="text" ref="address" />
                    <label>Description:</label>
                    <textarea className="form-control" ref="description"></textarea>
                    <input className="btn btn-primary" type="submit" value="submit" />
                </div>
            </form>
        )
    }
}