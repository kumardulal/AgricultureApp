import React from 'react'

const SearchListFilter = (textToSearch, { setSearchedList }, newsitems) => {
    // console.log(textToSearch)
    let matches = newsitems.filter((val) => {
        const regex = new RegExp(`^${textToSearch}`, "gi");
        return val.newstitle.match(regex) || val.newsdesc.match(regex);
    });

    if (textToSearch.length === 0) {
        matches = [];
        setSearchedList([]);
    }
    setSearchedList(matches);

}

export default SearchListFilter;