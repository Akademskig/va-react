import React, { Component } from "react"
import { Button } from 'semantic-ui-react'
import Product from './Product'
import Seed from '../data/seed'


class ProductsList extends Component {
    render() {
        const products = Seed().products.sort((a,b)=> b.votes -a.votes)
        const productComponents = products.map((product) => (
            <Product
              key={'product-' + product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              url={product.url}
              votes={product.votes}
              submitterAvatarUrl={product.submitterAvatarUrl}
              productImageUrl={product.productImageUrl}
            />
          ));
        return (
            <div>
                <div className='ui unstackable items'>
                 {productComponents}
                </div><Button>Vote!</Button>
            </div>
        )
    }
}

export default ProductsList
