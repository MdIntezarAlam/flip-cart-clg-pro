import { Button } from '@mui/material'
import { Paymnet, PaymentHeading, BoxFlex } from '../../styles/Address/Address'

const AddressButton = () => {
    return (
        <Paymnet>
            <PaymentHeading>Pay Using UPI</PaymentHeading>
            <BoxFlex>
                <Button style={{ color: '#fff' }} variant='contained'>Google pay</Button>
                <Button style={{ color: '#fff' }} variant='contained'>Phone pay</Button>
                <Button style={{ color: '#fff' }} variant='contained'>Paytm</Button>
                <Button style={{ color: '#fff' }} variant='contained'>Other pay</Button>
            </BoxFlex>
        </Paymnet>
    )
}

export default AddressButton