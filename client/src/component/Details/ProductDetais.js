import React from 'react'
import { Box,styled, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { AvalabeBox, Typographys } from '../../styles/Details/ProductDetails'

const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
export const BadgeIcons = styled(LocalOfferIcon)`

margin-right:10px;
color:green;
font-size:18px;
`
const ProductDetais = ({ product }) => {
    // console.log("SELECTED_PRODUCTS", product)
    //currentDate+5Date mul by 24 hours mul by 60min mul by 1000sec
    const data = new Date(new Date().getTime() + (5 * 24 * 60 * 1000))

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: "5px", color: "#878787", fontSize: "15px" }}>8 Ratings & 1 Reviews
                <Box component="span" >
                    <img src={fassured} alt='img' style={{ width: "78px", marginLeft: "20px" }} />
                </Box>
            </Typography>
            <Typography>
                <Box component={"span"} style={{ fontSize: '29px' }}>₹ {product.price.cost}</Box> &nbsp; &nbsp; &nbsp;
                <Box component={"span"} style={{ color: "#787878" }}>{product.price.mrp}</Box> &nbsp; &nbsp; &nbsp;
                <Box component={"span"} style={{ color: "#388E3C" }}>{product.price.discount} off</Box> &nbsp; &nbsp; &nbsp;
            </Typography>
            <Typography style={{ color: "red", fontSize: '12px', marginTop: '4px', marginBottom: '4px' }}>Hurry, Only a few left!</Typography>
            <Typography style={{ color: "#000", fontWeight: 550 }}>Available offers</Typography>
            <AvalabeBox>
                <Typographys><BadgeIcons />Bank Offers 5% Cashback on Flipkart Axis Bank CardT&C</Typographys>
                <Typographys><BadgeIcons />Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*Know More</Typographys>
                <Typographys><BadgeIcons />Pattern offer Buy this product and get upto ₹500 off on Flipkart FurnitureKnow More</Typographys>
                <Typographys><BadgeIcons />No cost EMI ₹14,916/month. Standard EMI also available</Typographys>
            </AvalabeBox>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ color: "gray", fontSize: "14px" }}>Delivery|</TableCell>
                        <TableCell style={{ color: "#000", fontWeight: 600 }}>Delivery by {data.toDateString()}| ₹ 50</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ color: "gray", }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ color: "gray", }}>Seller|</TableCell>
                        <TableCell>
                            <Box component="span" style={{ color: "#287487" }}>SupperComNet</Box>
                            <Typography>Gst Invoice available</Typography>
                            <Typography>View more Seller Starting ₹ {product.price.cost}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt="img" style={{ width: '350px' }} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TableCell>description</TableCell>
                            <TableCell style={{ fontSize: "14px" }}>{product.description}</TableCell>
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </>
    )
}

export default ProductDetais