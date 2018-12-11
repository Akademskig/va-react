import React, { Component } from "react"
import { Button } from 'semantic-ui-react'
import Product from './Product'

class ProductsList extends Component {
    render() {
        return (
            <div>
                <div className='ui unstackable items'>
                    <Product />
                </div><Button>Vote!</Button>
            </div>
        )
    }
}

export default ProductsList
