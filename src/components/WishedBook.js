const getStoredBookForWished = () =>{
    const storedBookForRead =localStorage.getItem('Wished-book');
    if(storedBookForRead){
        return JSON.parse(storedBookForRead);
    }
    return [];
}
const saveForWished = bookId =>{
    const storedBookForReads = getStoredBookForWished();
    const exist = storedBookForReads.find(book => book === bookId);
    if(!exist){
        storedBookForReads.push(bookId.id);
        localStorage.setItem('Wished-book',JSON.stringify(storedBookForReads))
    }
    }

export {getStoredBookForWished, saveForWished}
