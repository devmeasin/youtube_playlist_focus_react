
export const setItemsStorage = (key , items) => {
    localStorage.setItem(key , JSON.stringify(items));
}
export const getItemsStorage = (key) => {
    const items = localStorage.getItem(key) !== null  ? JSON.parse(localStorage.getItem(key)) : {};
    return items;
}