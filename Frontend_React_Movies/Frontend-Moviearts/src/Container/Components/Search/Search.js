import './Search.scss'

const Search = (props) => {


    
    return(
            <input type="search" className="search" placeholder="Search" onChange={props.handleSearch}/>
    )
};

export default Search