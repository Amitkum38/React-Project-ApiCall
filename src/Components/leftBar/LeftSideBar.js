import { useEffect, useState } from 'react';
import Logo from './logo';

function LeftSideBar(){
  // const [data, setData] = useState([]);

  //  const getdata = () => {
  //    fetch('http://192.168.2.87:8080/get_federated_sources')
  //   .then((res)=> res.json())
  //   .then((data)=> {
  //     console.log(data)
  //    setData(data.job);
      
  //   })
  //   .catch((err)=> console.log(err))
  //  }
   
  //  useEffect(() => {
  //   getdata();
  //  }, [])

   
  

  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch("http://192.168.2.87:8080/get_federated_sources")
    .then((result)=>{
      result.json().then((resp)=>{
       //  console.log(resp)
        setUser(resp)
      })
    })
  },[])
  //console.log(users)

    return(
    <>
    <div className="aside aside-left aside-fixed d-flex flex-column flex-row-auto">
      <Logo/>
      <div className="aside-menu-wrapper flex-column-fluid">
        <div className="aside-menu ">
          <ul className="menu-nav">
            <li className="menu-item menu-item-submenu"> <span className="menu-link menu-toggle"> <span className="menu-text">Sources</span> </span>
              <div className="menu-submenu">
                <ul className="menu-subnav" >
                  {
                   users.map((item,i)=>
                     <li key={i} className="menu-item"> <span className="menu-link"> <i className="menu-bullet menu-bullet-dot"> <span></span> </i> <span className="menu-text">{item.job}</span> </span> </li>
                     

                   ) 
                  }
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
    )
};

export default LeftSideBar;