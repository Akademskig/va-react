import React, { Component } from "react"
import { Button } from 'semantic-ui-react'
import Product from './Product'
import Seed from '../data/seed'


class ProductsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.setState({ products: Seed().products })
    }
    handleProductUpVote=(productId)=> {
        this.newProducts = this.state.products.map((product) => {
            if (product.id == productId) {
                return Object.assign({}, product, { votes: product.votes + 1 })
            }
            else { return product }
        })
        this.setState({ products: this.newProducts })
    }
    render() {
        const products = this.state.products.sort((a, b) => a.votes - b.votes)
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
                onVote={this.handleProductUpVote}
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
