import React from 'react';
import './app-info.css';

class AppInfo extends React.Component {
    render() {
        const { dataEmployeesNum } = this.props
        return (
            <div className="app-info">
                <h1>Mitarbeiterdaten im Unternehmen </h1>
                <h2>Gesamtanzahl der Mitarbeiter: {dataEmployeesNum.length}</h2>
                <h2>Prämie erhalten: {dataEmployeesNum.filter(elt => elt.increase).length}</h2>
            </div>
        )
    }
}

export default AppInfo;