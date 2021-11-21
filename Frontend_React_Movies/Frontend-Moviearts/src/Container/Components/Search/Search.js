import './Search.scss'

const Search = (props) => {

    const handleGetData = (e) =>{
        e.preventDefault()
        console.log(e.target.value);
    };
    
    return(
            <input type="search" className="search" placeholder="Search" onChange={handleGetData}/>
    )
};

export default Search