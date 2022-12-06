
import './App.css';
import { useState } from 'react';
import Review from './components/Review';
import { Rating } from '@mui/material';
let reviewObj = {
  title:'',
  discription:'',
  rating:0
};
function App() {
  let [title, setTitle] = useState('');
  let [rating, setRating] = useState(0);
  let [discription, setDiscription] = useState('');
  let [review, setReview] = useState(reviewObj);
  let [data, setData] = useState([]);

function reviewValue(e){
  setReview({...review, [e.target.name]:e.target.value});
  console.log(review);
}

function handleSubmit(e){
  e.preventDefault();
  setReview({...review, date: new Date()});
  setData([ review, ...data]);
  console.log(review);
  // setTitle('');
  // setDiscription('');
  // setRating(0);
  setReview(reviewObj);
  console.log(review);
  
}
function handleReset(e){
  e.preventDefault();
  // setTitle('');
  // setDiscription('');
  // setRating(0);
  setReview(reviewObj);
}

function deleteReview(date){
  setData((data)=>{
    return data.filter((element, index)=>index!=date)
  })
}

  return (
    <div className="App">
      
        <form className='forms'>
          
          <input id='title' placeholder='Title' name='title' 
          value={review.title}
           required onChange={(e)=>reviewValue(e)}></input>

          
          <textarea id='discription' placeholder='Discription'
            value={review.discription}
           name='discription'onChange={(e)=>reviewValue(e)}></textarea>

<Rating
  name="simple-controlled"
  value={review.rating}
  onChange={(event, newValue) => {
    setReview({...review, rating:newValue});
  }}
/>
          {/* <input id='rating' placeholder='Rating' name='rating'
           required='true' onChange={(e)=>reviewValue(e)}></input> */}

          <button onClick={(e)=>handleSubmit(e)}>Submit</button>
          <button onClick={(e)=>handleReset(e)}>Reset</button>

        </form>
      
      <div className='reviews'>
        {data.length? data.map((element, index)=>{
          return(
            <Review 
            key={index} 
            title={element.title} 
            discription={element.discription}
            rating={element.rating}
            date={index}
            deleteReview ={deleteReview}
            />
          )
        }):<div> no reviews</div>}
      </div>
    </div>
  );
}

export default App;
