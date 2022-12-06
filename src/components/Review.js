import { Rating } from '@mui/material'
import './Review.css'
export default function Review({title, discription, rating, date, deleteReview}){
    return(
        <div className='review'>
        <h3>{title}</h3>
        <Rating name="read-only" value={rating} readOnly />
       
        <div>{discription}</div>
        
        <button className='deleteButton' onClick={()=>deleteReview(date)}>Delete</button>
        </div>
    )
}