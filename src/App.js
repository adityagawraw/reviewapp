
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

// function reviewValue(e){
//   setReview({...review, [e.target.name]:e.target.value});
//   console.log(review);
// }

function handleSubmit(e){
  e.preventDefault();
  setReview({...review,title:title, discription:discription, rating:rating, date: (new Date()).getTime()});
  setData([ review, ...data]);
  setTitle('');
  setDiscription('');
  setRating(0);
  console.log(data);
  e.target.reset();
}
function handleReset(e){
  e.preventDefault();
  setTitle('');
  setDiscription('');
  setRating(0);
  setReview(reviewObj);
}

function deleteReview(date){
  setData((data)=>{
    return data.filter((element)=>element.date!=date)
  })
}

  return (
    <div className="App">
      
        <form className='forms'>
          
          <input id='title' placeholder='Title' name='title' 
          value={title}
           required onChange={(e)=>setTitle(e.target.value)}></input>

          
          <textarea id='discription' placeholder='Discription'
            value={discription}
           name='discription' onChange={(e)=>setDiscription(e.target.value)}></textarea>

<Rating
  name="simple-controlled"
  value={rating}
  onChange={(event, newValue) => {
    setRating(newValue);
  }}
/>
          {/* <input id='rating' placeholder='Rating' name='rating'
           required='true' onChange={(e)=>reviewValue(e)}></input> */}

          <button onClick={(e)=>handleSubmit(e)}>Submit</button>
          <button onClick={(e)=>handleReset(e)}>Reset</button>

        </form>
      
      <div className='reviews'>
        {data.length? data.map((element)=>{
          return(
            <Review 
            key={element.date} 
            title={element.title} 
            discription={element.discription}
            rating={element.rating}
            date={element.date}
            deleteReview ={deleteReview}
            />
          )
        }):<div> no reviews</div>}
      </div>
    </div>
  );
}

export default App;
