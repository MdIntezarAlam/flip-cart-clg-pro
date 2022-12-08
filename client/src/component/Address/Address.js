import React, { useState } from 'react'
import { Button, } from '@mui/material'
import { AddressContainer, AddressBox, TextFields, BoxOne, Typographys, Save } from '../../styles/Address/Address'
import { useNavigate } from 'react-router-dom'
import AddressButton from './AddressButton'

const initialValues = {
    pin: '',
    flat: '',
    floor: '',
    tower: '',
    building: '',
    address: '',
    city: '',
    landmark: '',
}
const Address = () => {
    const [allValues, setInputValues] = useState(initialValues)

    const navigate = useNavigate()
    const allInputChange = (e) => {
        // console.log(e.target.name, e.target.value)  //check wit name in console log
        setInputValues({ ...allValues, [e.target.name]: e.target.value })
        // console.log(allValues)
    }
    // console.log("AllValues=>>>>>>>>>>>>>>>>>>", allValues)

    const formSubmit = async () => {
        if (allValues) {
            navigate("/addresspage")
        }
     else return
    }

    return (
        <AddressContainer>
            <Typographys>Address Details</Typographys>
            <AddressBox>
                <BoxOne>
                    <TextFields
                        name='pin'
                        label="Pin Code"
                        variant="outlined"
                        onChange={(e) => allInputChange(e)}
                    />
                    <TextFields
                        name='flat'
                        label="Flat / House No."
                        variant="outlined"
                        onChange={(e) => allInputChange(e)}
                    />
                    <TextFields
                        name='floor'
                        label="Floor No."
                        variant="outlined"
                        onChange={(e) => allInputChange(e)}
                    />
                    <TextFields
                        name="tower"
                        label="Tower No"
                        variant="outlined"
                        onChange={(e) => allInputChange(e)}
                    />
                    <TextFields
                        name="building"
                        label="Building / Apartment Name"
                        variant="outlined"
                        onChange={(e) => allInputChange(e)}
                    />
                    <TextFields
                        name="address"
                        label="Address"
                        variant="outlined"
                        onChange={(e) => allInputChange(e)}
                    />
                    <TextFields
                        name="city"
                        label="Cit/State"
                        variant="outlined"
                        onChange={(e) => allInputChange(e)}
                    />
                    <TextFields
                        name="landmark"
                        label="Landmark / Area"
                        variant="outlined"
                        onChange={(e) => allInputChange(e)}
                    />
                </BoxOne>
                <Save>
                    <Button
                        variant="contained" onClick={() => formSubmit()}>Submit</Button>
                </Save>
            </AddressBox>
            <AddressButton />
        </AddressContainer>
    )
}

export default Address