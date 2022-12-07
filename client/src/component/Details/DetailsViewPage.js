
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Grid, } from '@mui/material'
import ActionItems from './ActionItems'
import ProductDetais from './ProductDetais'
import { Component, Container, RightContainer } from '../../styles/Details/DetailsViewPage'

import { getProductByIdAction } from '../../redux/action/product.action'


const DetailsViewPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { loading, product } = useSelector((state) => state.getProductDetails)

    // console.log("Product in Details page", product)

    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductByIdAction(id))
    }, [dispatch, id, loading, product])

    return (
        <Component>
            {product && Object.keys(product).length &&
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItems product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetais product={product} />
                    </RightContainer>
                </Container>
            }
        </Component>
    )
}

export default DetailsViewPage
