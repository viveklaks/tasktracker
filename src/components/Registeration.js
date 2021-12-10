import React ,{useState}from 'react';

import axios from 'axios';

export const Registeration = () => {
    const [username,setUsername] =useState('');
    const [firstname,setFirstname] =useState('')
    const [lastname,setLastname] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const onRegisteration = e =>{
        console.log(e)
        console.log(username)
        console.log(firstname)
        console.log(lastname)
        console.log(email)
        console.log(password)
        
        if(!username && !firstname && !lastname && email && !password){
            alert('Please fill  the form ')
            
        }
        
        //onRegisterfill({username,firstname,lastname,email,password})
        axios.post('http://localhost:5500/register',{username,firstname,lastname,email,password})
        .then(res => console.log(res.data)).catch(err => console.log(err));
        setUsername('')
        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')

    }
    return (
        
           <form path='/' method="POST"onSubmit={onRegisteration}>
                <h2 style={{textAlign:'center'}}>Registration Form</h2>
                <div className='form-control'>
                <label>Username</label>
                     <input className="mb-3" type="text" placeholder='Username' required="required" name ="username" value={username} onChange={e=>setUsername(e.target.value)} />
                </div>
                <div className='form-control'>
                <label>First Name</label> 
                    <input type="text" placeholder='First Name' required="required" name ="firstname"  value={firstname} onChange={e=>setFirstname(e.target.value)}  />
                </div>
                <div className='form-control '>
                <label>Last Name</label>
                <input type="text" placeholder='First Name' required="required" name ="lastname"  value={lastname} onChange={e=>setLastname(e.target.value)}  />
                </div>
                <div className='form-control '>
                <label>Email</label>
                <input type="email" placeholder='Email' required="required" name ="email"  value={email} onChange={e=>setEmail(e.target.value)}  />
                </div>
                <div className='form-control'>
                <label>Password</label>
                <input type="password" placeholder='Password' required="required" name ="password"  value={password} onChange={e=>setPassword(e.target.value)}  />
                </div>
                
                <input className='btn btn-block' type="submit" value='Register'/>
                
                
                
      
                
               
            
            </form>
            
       
    )
}
export default Registeration