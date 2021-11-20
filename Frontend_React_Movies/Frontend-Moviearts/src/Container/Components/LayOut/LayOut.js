import './LayOut.scss'
const LayOut = (props) => {
    return(
        <div className="layOut">
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default LayOut