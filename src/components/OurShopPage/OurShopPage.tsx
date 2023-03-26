import React, { useState } from 'react'
import './OurShopPage.scss'

interface Item {
    id: number
    name: string
    price: number
    quantity: number
}

interface ExchangeRates {
    [key: string]: number
    USD: number
    EUR: number
    UAH: number
}

const exchangeRates: ExchangeRates = {
    USD: 1,
    EUR: 0.8,
    UAH: 36.5,
}

function Cart(): JSX.Element {
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: 'iphone 12', price: 850, quantity: 0 },
        { id: 2, name: 'iphone 8', price: 250, quantity: 0 },
        { id: 3, name: 'iphone X', price: 300, quantity: 0 },
    ])

    const [totalUSD, setTotalUSD] = useState<number>(0)
    const [totalEUR, setTotalEUR] = useState<number>(0) // eslint-disable-line @typescript-eslint/no-unused-vars
    const [totalUAH, setTotalUAH] = useState<number>(0) // eslint-disable-line @typescript-eslint/no-unused-vars
    const [selectedCurrency, setSelectedCurrency] = useState<string>('USD')

    const handleIncrease = (itemId: number): void => {
        const newItems: Item[] = [...items]
        const itemIndex: number = newItems.findIndex(
            (item) => item.id === itemId
        )
        newItems[itemIndex].quantity++
        setItems(newItems)
        calculateTotal()
    }

    const handleCurrencyChange = (selectedCurrency: string) => {
        setSelectedCurrency(selectedCurrency)
        calculateTotal()
    }

    const calculateTotal = (): void => {
        let sumUSD: number = 0
        let sumEUR: number = 0
        let sumUAH: number = 0
        items.forEach((item) => {
            sumUSD += item.price * item.quantity
            sumEUR += item.price * exchangeRates.EUR * item.quantity
            sumUAH += item.price * exchangeRates.UAH * item.quantity
        })
        setTotalUSD(parseFloat(sumUSD.toFixed(2)))
        setTotalEUR(parseFloat(sumEUR.toFixed(2)))
        setTotalUAH(parseFloat(sumUAH.toFixed(2)))
    }

    const getCurrencySymbol = (currency: string): string => {
        switch (currency) {
            case 'USD':
                return '$'
            case 'EUR':
                return '€'
            case 'UAH':
                return '₴'
            default:
                return ''
        }
    }

    const getConvertedPrice = (price: number, currency: string): number => {
        return price * exchangeRates[currency]
    }

    return (
        <>
            <div className="item-block">
                <h1>Our shop page</h1>
                <div className="btn-holder">
                    <button onClick={() => handleCurrencyChange('USD')}>
                        USD
                    </button>
                    <button onClick={() => handleCurrencyChange('EUR')}>
                        EUR
                    </button>
                    <button onClick={() => handleCurrencyChange('UAH')}>
                        UAH
                    </button>
                </div>
                <div className="products-holder">
                    {items.map((item) => (
                        <div>
                            <h2>{item.name}</h2>
                            <p>This is {item.name}...</p>
                            <span>
                                {getConvertedPrice(
                                    item.price,
                                    selectedCurrency
                                )}{' '}
                                {getCurrencySymbol(selectedCurrency)}
                            </span>
                            <button onClick={() => handleIncrease(item.id)}>
                                Buy
                            </button>
                        </div>
                    ))}
                </div>
                <div>
                    Total in {selectedCurrency}:{' '}
                    {getCurrencySymbol(selectedCurrency)}
                    {getConvertedPrice(totalUSD, selectedCurrency).toFixed(2)}
                </div>
            </div>
        </>
    )
}

export default Cart
