import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/Products';

describe('ProductImage', () => {

     test( 'Debe mostrar el componente correctamente', () => {

        const wrapper = renderer.create(
            <ProductImage img={ product2.img } />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();


     })


     test( 'Debe mostrar el componente con la imagen', () => {

        const wrapper = renderer.create(
            <ProductCard
                product={ product2 }
            >
                {
                    () => (
                        <ProductImage/>
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();



     })

})