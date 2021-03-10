import React, { Component } from 'react';

const SearchBox = ({value, onChange})  => {
        return (
            <input 
            value={value}
            type="text"
            name="query"
            className="form-control my-3"
            placeholder="Search.."
            onChange={(e) => onChange(e.currentTarget.value)}
            />
        );
}

export default SearchBox;