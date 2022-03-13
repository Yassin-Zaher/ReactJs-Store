import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview/preview.component';


class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        };
    };
    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({ id, ...otherColectionItems }) => (
                    <CollectionPreview key={id} {...otherColectionItems} />
                ))

                }
            </div>
        );
    };
};
export default ShopPage;