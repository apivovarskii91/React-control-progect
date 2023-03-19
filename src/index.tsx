import React from 'react'
import ReactDOM from 'react-dom/client'

type HeaderProps = {
    title: string
}

const Header = ({ title }: HeaderProps) => {
    return <h1>Helow {title}</h1>
}

const App = () => {
    return (
        <>
            <Header title="React" />
            <Header title="JS" />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
