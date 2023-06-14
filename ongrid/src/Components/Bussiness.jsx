import React, { useContext } from 'react'
import '../Style/style.css';
import { DataBlog } from './context/BussinessStore';
import { useNavigate } from 'react-router-dom';
 
function Bussiness() {
  
  const [dataValue] = useContext(DataBlog);
const Nav = useNavigate();
  
  
  const handlNavigate = (id,item) => {
    Nav(`/`, { state: { details: item } })
    
  }
  return (
     <div>
            <h1 className=' section5heading'>Businesses</h1>
              <hr id='sec5hr'></hr> 
          <p className='section5intro'>OnGrid provides comprehensive background verification services that can be
              customized to any requirement for any industry. Every business has a different purpose for verification and compliance, and hence we offer tailor-made solutions for your
              unique background check needs.</p><br />
          <div className='section5body'>
        
             {
                 dataValue.map((item,index)=>{
                   return (
          <>
                       <div className='businessgrid' key={item.id} onClick={() => handlNavigate(item.id, item)} >
                         <div key={item.id} >
                           
                        
                         <div>
                           <img className='businessimage' src={item.image} alt=''></img>
                           </div>
                         <div>
                           <h1 className='title'>{item.title}
                             
                         </h1></div>
                          </div>

                       </div>
                       </>
        )
                  })
             }
          </div >



          </div>
  )
}
export default Bussiness;