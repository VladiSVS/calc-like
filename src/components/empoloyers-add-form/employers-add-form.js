import React from 'react';
import './employees-add-form.css';

class EmployersAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log('Form send')
        if (this.state.name.length < 3 || !this.state.salary) {
            return
        }
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const { name, salary } = this.state
        return (
            <div className="app-add-form">
                <h3>Einen neuen Mitarbeiter hinzufügen</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Name des Mitarbeiters"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="lohn"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light">Hinzufügen</button>
                </form>
            </div>
        );
    }
}

export default EmployersAddForm;