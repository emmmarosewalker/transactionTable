import React from 'react';
import './App.css';
import Table from './Table';
import categories from './data/categories.json';
import merchants from './data/merchants.json';
import transactions from './data/transactions.json';

function App() {
    return (
        <div className="App">
            <Table 
              categories={categories} 
              merchants={merchants} 
              transactions={transactions}
            />
        </div>
    );
}

export default App;