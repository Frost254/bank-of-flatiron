import React, { useState } from "react";

function AddTransactionForm() {
    const [newTransaction, setNewTransaction] = useState({
        date: "",
        description: "",
        category: "",
        amount: "",
    });

    function handleChange(event) {
        setNewTransaction({
            ...newTransaction,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:8001/transactions", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTransaction),
            })
            .then(console.log(newTransaction));

    }

    return ( <
        div className = "ui segment" >
        <
        form className = "ui form"
        onSubmit = { handleSubmit } >
        <
        div className = "inline fields" >
        <
        input type = "date"
        name = "date"
        onChange = { handleChange }
        value = { newTransaction.date }
        /> <
        input type = "text"
        name = "description"
        placeholder = "Description"
        onChange = { handleChange }
        value = { newTransaction.description }
        /> <
        input type = "text"
        name = "category"
        placeholder = "Category"
        onChange = { handleChange }
        value = { newTransaction.category }

        /> <
        input type = "number"
        name = "amount"
        placeholder = "Amount"
        step = "0.01"
        onChange = { handleChange }
        value = { newTransaction.amount }
        /> < /
        div > <
        button className = "ui button"
        type = "submit" >
        Add Transaction <
        /button> < /
        form > <
        /div>
    );
}

export default AddTransactionForm;