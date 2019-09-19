import React from 'react';
import './Table.css';
import TableRow from './TableRow';
import SearchBox from './SearchBox';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            page: 0,
            transactions: ""
        }
        this.handleSearch = this.handleSearch.bind(this);
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

    render() {
        const transactionRows = this.state.transactions.filter(transaction => this.search(transaction)).map((transaction) => {
            const categories = this.props.categories.map(cat => cat.name);
            return (
                <TableRow 
                    key={transaction.id}
                    transaction={transaction} 
                    categories={categories}
                />
            );
        });

        return (
            <div>
                <SearchBox handleSearch={this.handleSearch} />
                <div className="Table">
                    <table>
                        <thead>
                            <tr>
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
                            {transactionRows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Table;
