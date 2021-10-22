import React from 'react';
import './app-filter.css';

class AppFilter extends React.Component {

    render() {
        const buttonsData = [
            { name: 'all', label: 'Alle angestellten' },
            { name: 'like', label: 'Befördert' },
            { name: 'moreThen1000', label: 'Mehr als 1000$' },
        ]

        const buttons = buttonsData.map(({ name, label }) => {
            const active = this.props.filter === name
            return (
                <button type="button"
                    className={active ? ' btn btn-light' : ' btn btn-outline-light'}
                    key={name}
                    onClick={() => this.props.onFilterSelect(name)}>
                    {label}
                </button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default AppFilter;