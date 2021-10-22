import React from 'react';
import EmployersListItem from '../employers-list-item/employers-list-item'
import './employers-list.css'

class EmployersList extends React.Component {

    render() {
        const elements = this.props.data.map(elt => {
            const { id, ...eltProps } = elt
            return (
                <EmployersListItem
                    key={id}
                    {...eltProps}
                    onDelete={() => this.props.onDelete(elt.id)}
                    onToggleProp={(e) => this.props.onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
            )
        })

        return (
            <ul className="app-list list-group">
                {elements}
            </ul>
        );
    }
}

export default EmployersList;