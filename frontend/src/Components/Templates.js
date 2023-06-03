import React from 'react'
import './css/templates.css'
import Workplan from './Workplan'
function Templates() {
  return (
    <div>
     <div className="templateheading">Templates</div>
       <div className="headings">
         <h4 className="docheading">Doc Name</h4>
         <h3 className="fileheading">File</h3>
       </div>


          <div className="file1">
              <h5 className="docname1">Work plan:</h5>

              <div className="filename1">
              </div>
              <tr>
                  <td className='workplanbox'>
                      {/* <button onClick={() => handleDetailsClick(rig)}>
                  View Details
                </button> */}
                      <a class="btn" href="Workplan" target="newtab" title="View details"> Work Plan File<img src="https://seekicon.com/free-icon-download/box-arrow-up-right_1.svg" height="15" width="49" /> </a>
                  </td>
              </tr>
          </div>  


             
               <div className="docname2">
                 <h5 >Dos Plan:</h5>
               </div>
              
                 <div className="filename2">
                 <tr>
              <td className='dosplanbox'>
                {/* <button onClick={() => handleDetailsClick(rig)}>
                  View Details
                </button> */}
                <a class="btn" href="Dosplan" target="newtab" title="View details"> Dos Plan File<img src="https://seekicon.com/free-icon-download/box-arrow-up-right_1.svg" height="15" width="49"/> </a>
              </td>
              </tr> 
                 </div>
                
                <div className='vertical-line'>

                </div>
                        
    </div>
  )
}

export default Templates;