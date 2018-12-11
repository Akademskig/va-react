import React, { Component } from "react"
import { Button } from 'semantic-ui-react'

class ProductsList extends Component {
    render() {
        return (
            <div>
                <div className='ui unstackable items'>
                    Hello, friend! I am a basic React component.
            </div><Button>And I'm a button</Button>
            </div>
        )
    }
}

export default ProductsList