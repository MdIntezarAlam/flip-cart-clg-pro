import React, { useState, useEffect } from 'react';
import { SearchComponent, InputSearchBase, SearchIconWrappers, WrapperSeatchProduct } from '../../styles/header/SearchStyle'
import SearchIcon from '@mui/icons-material/Search';
import { getProductAction } from '../../redux/action/product.action'
import { useDispatch, useSelector } from 'react-redux'
import { ListItem } from '@mui/material';

const Search = () => {

  const [textValues, setTextValues] = useState('')
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.productReducer)

  // console.log("Products search values", products)
  const getSearhValues = (textValues) => {
    setTextValues(textValues)
  }

  useEffect(() => {
    dispatch(getProductAction(textValues))
  }, [dispatch])

  return (
    <SearchComponent>
      <InputSearchBase
        value={textValues}
        onChange={(e) => getSearhValues(e.target.value)}
        placeholder='Search for products, brands and more'
      />
      <SearchIconWrappers>
        <SearchIcon />
      </SearchIconWrappers>

      {textValues &&
        <WrapperSeatchProduct>
          {
            products.filter((product) => (
              product.title.longTitle.toLowerCase().includes(textValues.toLowerCase())
            ))
              .map((product) => (
                <a href={`/product/${product.id}`} style={{textDecoration:"none", color:"inherit"}}>
                  <ListItem>{product.title.longTitle}</ListItem>
                </a>
              ))
          }
        </WrapperSeatchProduct>
      }
    </SearchComponent>
  )
}

export default Search


//Note work on search bar
//get the reducer using useSelector
//dispatch the action then set getProducAction inside set the TextValues
//put onChange fun in inputfield when we type somthing that shold be work
//whichever we search that should be display so
//first filter the products if products foud convert in to lowecase then map and display it then
//navigate to the details page