import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';


const CollectionPreview = ({ title, items }) => (
<div className='Collection-preview'>
<h1 className='title'>{title.toUpperCase()}</h1>
<div className='preview'>
{
    items.filter((item, idx) => idx < 4).map(({id, ...OtherItemProps}) => (
        <CollectionItem key={id} {...OtherItemProps}/>
    ))}
</div>
</div>

);

export default CollectionPreview;