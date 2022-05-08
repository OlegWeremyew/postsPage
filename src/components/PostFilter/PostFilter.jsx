import React from 'react';
import {MyInput} from "../../common/MyInput/MyInput";
import {MySelect} from "../../common/MySelect/MySelect";

export const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder='Search'
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                changeSelect={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort by"
                options={[
                    {value: 'title', name: 'On name'},
                    {value: 'body', name: 'On description'},
                ]}
            />
        </div>
    );
};