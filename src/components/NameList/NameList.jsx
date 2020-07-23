import React from 'react';
import NamelistItem from './NameListItem'; 

function Namelist(){
     return(

<React.Fragment>
<h1>Name List</h1>
  <hr />
  <ul>
  
<NamelistItem name="avishka" course="js" email="avishkadevinda@gmail.com"/>
<NamelistItem name="pathum" course="python" email="pathumBandara@gmail.com"/>
<NamelistItem name="shan" course="HTML"  email="sahan1234@gmail.com"/>

  </ul> 
  </React.Fragment>


     );
}

export default Namelist;