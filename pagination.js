module.exports = (page, pages, perPage) => {
    let elements = [];
    for(let i = 1; i<4; i++){
        elements[i] = i;
    }
    if(page > 2){
        elements.push('...');
    }
    if(page<pages-1){
        for(let i = page-1; i<page+2; i++){
            elements[i] = i;
        }
    }
    if(page<pages-2){
        elements.push('...');
    }
    for(let i = pages-2; i<pages+1; i++){
        elements[i] = i;
    }
    elements = elements.filter(e => e);
    return {
        pages,
        current: page,
        perPage,
        onFirstPage: page == 1,
        onLastPage: page == pages,
        elements
    }
}