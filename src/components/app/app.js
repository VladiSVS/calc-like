import React from 'react';

import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../empoloyers-add-form/employers-add-form';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John C.", salary: 800, increase: false, like: true, id: 1 },
                { name: "Alex M.", salary: 3000, increase: false, like: false, id: 2 },
                { name: "Carl W.", salary: 5000, increase: true, like: false, id: 3 }
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4
    }

    delteItem = (id) => {
        this.setState(({ data }) => {
            // const index = data.findIndex(elt => elt.id === id)
            // const before = data.slice(0, index)
            // const after = data.slice(index + 1)
            // const newArr = [...before, ...after]

            return {
                data: data.filter(elt => elt.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        // this.setState(({ data }) => {
        //     const index = data.findIndex(elt => elt.id === id)
        //     const old = data[index]
        //     const newItem = { ...old, increase: !old.increase }
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

        //     return {
        //         data: newArr
        //     }
        // })
        this.setState(({ data }) => ({
            data: data.map(elt => {
                if (elt.id === id) {
                    return { ...elt, [prop]: !elt[prop] }
                }
                return elt;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(elt => {
            return elt.name.startsWith(term)
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term: term })
    }

    filterPost = (elts, filter) => {
        switch (filter) {
            case 'like':
                return elts.filter(elt => elt.like)
            case 'moreThen1000':
                return elts.filter(elt => elt.salary > 1000)
            default:
                return elts
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter: filter })
    }

    render() {
        const { data, term, filter } = this.state
        const visibleData = this.filterPost(this.searchEmp(data, term), filter)
        return (
            <div className="app">
                <AppInfo
                    dataEmployeesNum={this.state.data}
                />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>
                <EmployersList
                    data={visibleData}
                    onDelete={this.delteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployersAddForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App