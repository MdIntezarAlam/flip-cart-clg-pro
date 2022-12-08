import React from 'react'
import { Link } from 'react-router-dom'
import { Boxs, Boxss } from '../../styles/Address/Address'

const AddressPage = () => {
    return (
        <Boxs>
            <h1 style={{ color: "#000", textAlign: 'center' }}>THANKYOU FOR USING MY APP 🥰</h1>
            <h2 style={{ color: "orange", textAlign: 'center' }}>YOUR ORDER HAS BEE PLACED!  🥰</h2>
            <Link to="/" style={{ color: "inherit", textDecoration: 'none' }}>
                <Boxss variant='contained'>Continue</Boxss>
            </Link>
        </Boxs>
    )
}

export default AddressPage