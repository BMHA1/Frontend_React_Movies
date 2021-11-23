import imgLoading from './Loading.gif'
import './Loading.scss'

const Loading = () =>{
    
    return(
        <div className = 'centrado'>
            <img src={imgLoading} className='imgloadr' alt="hol"/>

        </div>
    )
};

export default Loading