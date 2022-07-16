import React from "react"


const Header = (props) => {
    const [searchVal, setSearchVal] = React.useState("")

    return (
        <div
            style={{
                position: 'fixed',
                boxShadow: '0px 4px 15px 0px rgba(34, 60, 80, 0.2)',
                width: '100%',
                backgroundColor: '#ffffff'
            }}
        >
            <div className="container">
                <form className="header-form">
                    <input
                        type="text"
                        value={searchVal}
                        onChange={(e) => setSearchVal(e.target.value)}
                    />
                    <button onClick={(e) => {
                        e.preventDefault()
                        props.fetchDataHandler(searchVal)
                    }}>Translate</button>
                </form>
            </div>
        </div>
    )
}

export default Header