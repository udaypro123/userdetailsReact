import React, { useEffect, useState } from 'react'

const User = () => {

const [data,setdata]=useState([])
const [person, setperson] = useState("all")


const getuserdata=(url)=>{
    fetch(`https://randomuser.me/api/?results=30&gender=${url}`)
    .then((res)=>res.json())
    .then((datas)=>setdata(datas))
}


useEffect(()=>{
   getuserdata(person)
},[person])



  return (
    <>
        <div className='container'>
        <div className='userMaincard'>
          <div className='Userdiv'>
            <h3> User Details</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, quas praesentium aspernatur corporis, modi temporibus itaque nihil unde architecto, deleniti quisquam odit vitae doloribus accusamus ipsa iste ipsum quos culpa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt accusantium ratione blanditiis, vitae sapiente quisquam mollitia dicta eveniet cum quos illo sed officiis accusamus eaque, velit rem repudiandae nam non. </p>
          </div>

          <div className='radioBtn'>

            <input type="radio" name='gender' value='all' checked={ person === "all" } onChange={ (e) => setperson(e.target.value) } /> <label htmlFor="">All</label>

            <input type="radio" name='gender' value='male' checked={person==="male"} onChange={ (e) => setperson(e.target.value) } />
            <label htmlFor="">Male</label>

            <input type="radio" name='gender' value='female' checked={person==='female'} onChange={ (e) => setperson(e.target.value) } /> <label htmlFor="">Female</label>

          </div>
          <div className='userdetailsdata'>
            <div className="container">
              <div className="row row-cols-4">
                <div className="col">Image</div>
                <div className="col">Name</div>
                <div className="col">Email</div>
                <div className="col text-end">Gender</div>

              </div>
            </div>
          </div>


          <div className='userdetails'>
            {
              data.results && data.results.map((e) => {
                return (
                  <>
                    <div className="row row-cols-4 mt-3">
                      <div className="col"><img src={ e.picture.medium } alt="" /></div>
                      <div className="col">{ e.name.first }</div>
                      <div className="col">{ e.email }</div>
                      <div className="col text-end ml-3">{ e.gender }</div>
                    </div>
                  </>
                )
              })
            }
          </div> 



        </div>
      </div>
    </>
  )
}

export default User
