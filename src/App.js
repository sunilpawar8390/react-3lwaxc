import React, { useState , useEffect} from 'react';
import './style.css';
import axios from "axios";




function App() {

  const [dats, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.npms.io/v2/search?q=react')
      .then((response) => setData(response.data.results));
      
  }, []);
 

  console.log(dats)

  


  const row = dats.map((item)=>{
    return(
     <tbody>
      <tr>
        <td>{item.package.name}</td>
      </tr>
     </tbody>
    )
  });

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      {row}
    </div>
  );
}

export default App;
