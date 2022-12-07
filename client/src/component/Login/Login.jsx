import { useContext, useState } from 'react'
import { AuthenticateSignup, AuthenticateLogin } from '../../utils/services/api'
import { DataContext } from '../../context/DataProviders'
import { AccInitialVal, loginInitialValues, signupInitialValues } from '../../utils/constant'
import { Image, LoginButtons, LoginContainer, LoginWrapper, LoginRequest, Text, CreateAcc } from '../../styles/LoginStyles'
import { Box, Dialog, TextField, Typography } from '@mui/material'
import { allLabel, allName, allVariant } from './LoginValues'



const Login = ({ open, setOpen }) => {
    const [acc, setAcc] = useState(AccInitialVal.login)
    const [signup, setSignup] = useState(signupInitialValues)
    const [login, setLogin] = useState(loginInitialValues)
    const { account, setAccount } = useContext(DataContext)

    const togglesignup = () => {
        setAcc(AccInitialVal.signup)
    }

    const handleClose = () => {    //login users
        setOpen(false)
        setAcc(AccInitialVal.login)
    }

    const allInpuChange = (e) => {    //signup input changes...
        setSignup({ ...signup, [e.target.name]: e.target.value })
    }


    const signupUsers = async () => {     //signup users onClicking the btns
        let responce = await AuthenticateSignup(signup)
        if (!responce) return;
        handleClose()
        setAccount(signup.firstname)
    }

    const allIboutValueCahnge = (e) => {     //all login value changes
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const loginUser = async (e) => {     //login user on btn clicks
        let responce = await AuthenticateLogin(login)
        if (responce.status === 200) {         // console.log(responce)
            handleClose()
            setAccount(responce.data.data.firstname)
        }
    }


    return (
        <Dialog onClose={handleClose} open={open} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <LoginContainer>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography style={{ fontSize: '26px' }}>{acc.headings} </Typography>
                        <Typography style={{ marginTop: '22px', }}> {acc.secHeading}</Typography>
                    </Image>
                    {acc.view === "login" ?
                        <LoginWrapper>
                            <TextField variant={allVariant} name={allName.Uname} label={allLabel.Uname} onChange={(e) => allIboutValueCahnge(e)} />
                            <TextField variant={allVariant} label={allLabel.Password} name={allName.Password} onChange={(e) => allIboutValueCahnge(e)} />
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButtons onClick={() => loginUser()}>Login</LoginButtons>
                            <Typography style={{ textAlign: 'center' }}> OR</Typography>
                            <LoginRequest>Request OTP</LoginRequest>
                            <CreateAcc onClick={() => togglesignup()}>New to Flipkart? Create an account</CreateAcc>
                        </LoginWrapper>
                        :
                        <LoginWrapper>
                            <TextField
                                variant={allVariant}
                                label={allLabel.Fname}
                                name={allName.Fname}
                                onChange={(e) => allInpuChange(e)}
                            />
                            <TextField
                                variant={allVariant}
                                label={allLabel.Lname}
                                name={allName.Lname}
                                onChange={(e) => allInpuChange(e)}
                            />
                            <TextField
                                variant={allVariant}
                                label={allLabel.Uname}
                                name={allName.Uname}
                                onChange={(e) => allInpuChange(e)}
                            />
                            <TextField
                                variant={allVariant}
                                label={allLabel.Email}
                                name={allName.Email}
                                onChange={(e) => allInpuChange(e)}
                            />
                            <TextField
                                variant={allVariant}
                                label={allLabel.Password} name={allName.Password}
                                onChange={(e) => allInpuChange(e)}
                            />
                            <TextField
                                variant={allVariant}
                                label={allLabel.Phone} name={allName.Phone}
                                onChange={(e) => allInpuChange(e)}
                            />
                            <LoginRequest>Request OTP</LoginRequest>
                            <LoginButtons onClick={signupUsers}>Continue</LoginButtons>
                        </LoginWrapper>
                    }
                </Box>
            </LoginContainer>
        </Dialog>
    )
}

export default Login