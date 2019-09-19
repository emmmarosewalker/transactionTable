import React from 'react';
import './Filter.css';

const Filter = ( props ) => {

    const onFilterChange = ( e ) => {
        props.handleFilter(e.target);
    }

    return (
        <div className="container">
            <h2>Filter by:</h2>
            <div className="Filter">
                <div>
                    <h3>Status</h3>
                    <input type="radio" name="status" value="complete" onChange={onFilterChange} key={1}/>Complete
                    <input type="radio" name="status" value="incomplete" onChange={onFilterChange} key={2} />Incomplete
                    <input type="radio" name="status" value="exported" onChange={onFilterChange} key={3}/>Exported
                    <input type="radio" name="status" value="all" onChange={onFilterChange} key={4}/>All
                </div>
                <div>
                    <h3>Date</h3>
                    Min <input type="date" name="date-min" onChange={onFilterChange}/>
                    Max <input type="date" name="date-max" onChange={onFilterChange}/>
                </div>
                <div>
                    <h3>Merchant</h3>
                    <input type="radio" name="merchant" value="Facebook" onChange={onFilterChange}/>Facebook
                    <input type="radio" name="merchant" value="Intercom" onChange={onFilterChange}/>Intercom
                    <input type="radio" name="merchant" value="Woolworths" onChange={onFilterChange}/>Woolworths
                    <input type="radio" name="merchant" value="Hubspot" onChange={onFilterChange}/>Hubspot
                    <input type="radio" name="merchant" value="Google" onChange={onFilterChange}/>Google
                    <input type="radio" name="merchant" value="all" onChange={onFilterChange} />All
                </div>
                <div>
                    <h3>Amount</h3>
                    <label>Min 
                        <input type="number" name="amount-min" onChange={onFilterChange}/>
                    </label>
                    <label>Max 
                        <input type="number" name="amount-max" onChange={onFilterChange}/>
                    </label>
                </div>
            </div>
        </div>
    );

}

export default Filter;