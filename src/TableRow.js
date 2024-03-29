import React from 'react';
import Icon from './Icon';
import Receipt from './Receipt.js';
import './TableRow.css';

const TableRow = ( { transaction, categories, handleCheckBox, handleCategoryChange } ) => {

    const onCheckChange = ( e ) => {
        handleCheckBox( e.target, transaction.id, e.target.name );
    }

    const onCatChange = ( e ) => {
        handleCategoryChange( transaction.id, e.target.value);
    } 

    return (<tr key={transaction.id}>
        <td><input type="checkbox" name="checked" checked={false} readOnly/></td>
        <td><Icon status={transaction.status} content={false} /></td>
        <td>{new Date(transaction.date).toLocaleDateString("de")}</td>
        <td><div className="d-flex"><Icon status="incomplete" content={transaction.merchant.charAt(0)} /><span>{transaction.merchant}</span></div></td>
        <td><div className="d-flex"><Icon status="neutral" content={transaction.team_member.split(" ").map(t => t.charAt(0))} /><span>{transaction.team_member}</span></div></td>
        <td><select className="select" value={transaction.category} id={transaction.id} onChange={onCatChange}>{categories.map( (cat, i) => <option key={i} value={cat}>{cat}</option>)}</select></td>
        <td>{transaction.budget}</td>
        <td className="center"><div className={`fill-${transaction.receipt}`}><Receipt/></div></td>
        <td className="center"><input type="checkbox" name="billable" checked={transaction.billable} onChange={onCheckChange}/></td>
        <td>${transaction.gst}</td>
        <td>${transaction.amount}</td>
    </tr>)
}

export default TableRow;