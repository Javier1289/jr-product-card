# jr-product-card

Este es un paquete de pruebas de despliegue en NPM

### Javier Rojas

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jr-product-card';

```

```
<ProductCard 
    product = { product }
    initialValues = {{
        count: 4,
        maxCount: 15
    }}
>
    {
        ({ reset, count, increaseBy, isMaxCountReached }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />  
            </>
        )
    }
</ProductCard>

```