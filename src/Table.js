import React from 'react';
import './Table.css';
import TableRow from './TableRow';
import SearchBox from './SearchBox';
import Filter from './Filter';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            page: 0,
            transactions: ""
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);

    }

    parsedTransactions = this.props.transactions.map(transaction => {
        let clone = {...transaction};
        clone.category = this.props.categories.find((category) => category.id === transaction.category).name;
        clone.merchant = this.props.merchants.find((merchant) => merchant.id === transaction.merchant).name;
        return clone;
    });

    componentWillMount() {
        this.setState( { transactions: this.parsedTransactions } );
    }

    search( transaction ) {
        return Object.values(transaction).toString().toLowerCase().includes(this.state.searchTerm);
    }

    handleSearch( term ) {
        this.setState( { searchTerm: term } );
    }

    handleFilter( target ) {
        let updated;
        let filterBy = target.name.includes('date') ? 'date' : 'amount';
        if (target.name.includes('min')) {
            updated = this.parsedTransactions.filter( t => t[filterBy] >= target.value) 
        }
        else if (target.name.includes('max')) {
            updated = this.parsedTransactions.filter( t => t[filterBy] <= target.value);
        } else {
            updated = target.checked 
                ? this.parsedTransactions.filter( t => t[target.name] === target.value) 
                : updated = this.parsedTransactions;
        }
        this.setState({transactions: updated});
    }

    handlePageChange( e ) {
        e.preventDefault();
        // increment or decrement the state of the current page number depending on the pagination button pressed
        e.target.value === "next" ? this.setState( (prevState) => ({ page: prevState.page + 1 })) : this.setState( (prevState) => ({ page: prevState.page - 1 }));
    }

    handleCheckBox( val, id, checkboxName ) {
        let idx = this.state.transactions.findIndex( t => t.id === id );
        let updated = [...this.state.transactions];
        updated[idx][checkboxName] = !updated[idx][checkboxName];
        this.setState({transactions: updated});
    }

    handleCategoryChange( id, newCat ) {
        let idx = this.state.transactions.findIndex( t => t.id === id );
        let updated = [...this.state.transactions];
        updated[idx].category = newCat;
        this.setState({transactions: updated});
    }

    render() {
        const transactionRows = this.state.transactions.filter(transaction => this.search(transaction)).map((transaction) => {
            const categories = this.props.categories.map(cat => cat.name);
            return (
                <TableRow 
                    key={transaction.id}
                    transaction={transaction} 
                    categories={categories} 
                    handleCheckBox={this.handleCheckBox} 
                    handleCategoryChange={this.handleCategoryChange}
                />
            );
        });

        return (
            <div>
                <SearchBox handleSearch={this.handleSearch} />
                <Filter 
                    handleFilter={this.handleFilter} 
                    merchants={this.props.merchants}
                />
                <div className="Table">
                    <table>
                        <thead>
                            <tr>
                                <th><input readOnly type="checkbox" name="checkAll" checked={false}/></th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Merchant</th>
                                <th>Team Member</th>
                                <th>Category</th>
                                <th>Budget</th>
                                <th>Receipt</th>
                                <th>Billable</th>
                                <th>GST</th>
                                <th>Amount</th>
                            </tr>
                        </thead>                
                        <tbody>
                            {transactionRows.slice(this.state.page, this.state.page + 20)}
                        </tbody>
                    </table>
                    <button disabled={this.state.page <= 0 ? true : false} href="#" onClick={this.handlePageChange} value="prev">Prev Page</button>
                    <button disabled={this.state.page > transactionRows.length/20 ? true : false} href="#" onClick={this.handlePageChange} value="next">Next Page</button>
                </div>
            </div>
        );
    }
}

export default Table;
