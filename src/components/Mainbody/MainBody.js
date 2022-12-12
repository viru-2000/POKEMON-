import './MainBody.css'
import { Data } from '../../Data'
const MainBody = ({category}) => {
   console.log(category);
   let data = [];
   if(category === 'all'){
       data= Data;
   }else{
     data = Data.filter(ele => ele.category === category);
   }
   
  return (
    <div  className='Mainbody'>
       <div className="content">
      { data.map((ele,i) => {
   return (
    <div key={`category${i}`} className="image">
    <img src={ele.path} alt="" />
</div>
   )
      }) }
       
        
       </div>
      </div> 
  )
}

export default MainBody