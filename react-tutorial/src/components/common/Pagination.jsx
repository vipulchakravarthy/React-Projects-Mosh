import React from 'react';
import _ from 'lodash';

function Pagination(props) {

    const pagesCount = Math.ceil(props.itemsCount/props.pageSize);
    const pages = _.range(1, pagesCount+1);
    if(pagesCount === 1) return null;
    return (
        <nav>
            <ul className="pagination">
                {pages.map((item, index) => <li key = {index} className="page-item"><a href="" className="page-link">{item}</a></li>)}
            </ul>
        </nav>
    );
}

export default Pagination;