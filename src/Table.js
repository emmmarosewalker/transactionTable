import React from 'react';
import './Table.css';

class Table extends React.Component {
    render() {
        const transactionRows = this.props.transactions.map((transaction) => {
            const category = this.props.categories.find((category) => category.id === transaction.category);
            const merchant = this.props.merchants.find((merchant) => merchant.id === transaction.merchant);
            return (
                <tr key={transaction.id}>
                    <td>{transaction.status}</td>
                    <td>{transaction.date}</td>
                    <td>{merchant.name}</td>
                    <td>{transaction.team_member}</td>
                    <td>{category.name}</td>
                    <td>{transaction.budget}</td>
                    <td>{transaction.receipt ? "T" : "F"}</td>
                    <td>{transaction.billable ? "T" : "F"}</td>
                    <td>{transaction.gst}</td>
                    <td>{transaction.amount}</td>
                </tr>
            );
        });

        return (
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
        );
    }
}

export default Table;
