import React from 'react'

var orders = [
    {
        price: 26.78,
        quantity: 34,
    },
    {
        price: 26.79,
        quantity: 46,
    },
    {
        price: 26.85,
        quantity: 34,
    }
]

const OrderBookSell = () => {
    return <div>
        <h4>Sell Offers (ASK)</h4>
        <table>
            <thead>
                <th>
                    <td><b>Prices</b></td>
                    <td><b>Quantity</b></td>
                    <td><b>Sum</b></td>
                </th>
            </thead>
            <tbody>
                {orders.map(order =>
                    <tr>
                        <td>{order.price}</td>
                        <td>{order.quantity}</td>
                        <td>{order.price * order.quantity}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}

export default OrderBookSell
export { sellPrices }
export { sellQuantity }
