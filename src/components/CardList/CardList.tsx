import React, {memo} from 'react';
import CardItem from "./CardItem";
import {TCardListProps} from "./types";

const CardList = ({items}: TCardListProps) => {
    return (
        <>
            {items && !items.length && (
                <div>
                    Nothing
                </div>
            )}
            <div className='card'>
                <ul className="card__list">
                    {items.map(item => (
                        <li key={item.id}>
                            <CardItem {...item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default memo(CardList);
