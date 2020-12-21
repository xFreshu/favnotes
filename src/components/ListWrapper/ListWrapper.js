import React from 'react';
import ListItem from "./ListItem/ListItem";
import {twitterAccounts} from "../../data/twitterAccounts";
const ListWrapper = () => (
    <ul className="list__wrapper">
        {twitterAccounts.map(item =>(
            <ListItem key={item.name} {...item} />
        ))}
    </ul>
);

export default ListWrapper

