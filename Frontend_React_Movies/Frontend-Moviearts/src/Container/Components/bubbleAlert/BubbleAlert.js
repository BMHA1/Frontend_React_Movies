import './bubbleAlert.scss'
const BubbleAlert = (props) => {
    const {value} = props
    console.log(value)
    const getNumber = (n) =>{
        if(!n){return " "}
        return n > 9 ? '9+' : n
    };
    return(
        <span className='bubbleAlert' >
            {getNumber(value)}
        </span>
    )
};

export default BubbleAlert