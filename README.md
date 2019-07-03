## Installation

1) Clone this repo to your machine
2) Run `npm install` to install the dependencies
3) Run `npm start` to run the app in development mode
4) Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Objective
Finance managers use DiviPay to stay on top of their team's expenses. Your challenge is to implement DiviPay's new transaction table to make it easy for finance managers to see what’s happening at a simple glance.

## Requirements
- Your transaction table should look like the design provided in `transaction-table-design.pdf`.
- You do not need to match the exact fonts used. Please pick a font that suits the design.
- You may only show 20 transactions at a time. Please implement pagination so that the user can view multiple pages of transactions and navigate between them.
- Please implement a search feature that can take any input in the search bar and display any matching transactions in the table. Fields that should be searched are:
    - Merchant
    - Team member
    - Category
    - Budget
    - GST
    - Amount
- Please implement a filter feature that can filter the following fields. You will need to design what the filter feature looks like.
    - Status
    - Date
    - Merchant
    - Amount
- All fields should be read-only, except for Category and Billable.
- The Category field should contain a dropdown input where a different Category can be selected.
- The Billable field should be a checkbox that can be enabled or disabled.
- The Receipt field should display an icon coloured blue if the value is true, or a yellow icon if false.

## Required effort
Please spend no more than 2 hours on this challenge. We are interested in seeing your problem solving ability, the way you structure your code and your design skills vs. building a fully functional or perfect solution.

## Resources
- You can find the design for the DiviPay transaction table here [https://github.com/divipayhq/divipay-frontend-challenge/blob/master/transaction-table-design.pdf](https://github.com/divipayhq/divipay-frontend-challenge/blob/master/transaction-table-design.pdf).
- All sample data has been provided for you.
- In the status field, the following values map to a respective icon:
    - incomplete: exclaimation mark with orange background
    - complete: tick with blue background
    - exported: right arrow with green background
