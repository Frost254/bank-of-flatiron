import React, { useState, useEffect } from "react";

function Transaction() {
    const [transactionData, setTransactionData] = useState([])

    useEffect(() => {
        fetch("http://localhost:8001/transactions")
            .then(res => res.json())
            .then(data => setTransactionData(data))

    }, []);

    console.log(transactionData)



    return (
        transactionData.map(data => {
            return < >
                <
                tr key = { data.id } >
                <
                td > { data.date } < /td>   <
                td > { data.description } < /td>    <
                td > { data.category } < /td>    <
                td > { data.amount } < /td>   <
                /tr>  <
                />
        })

    );
}

export default Transaction;