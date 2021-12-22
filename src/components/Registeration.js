import React ,{useState}from 'react';

import axios from 'axios';

export const Registeration = () => {
    const [username,setUsername] =useState('');
    const [firstname,setFirstname] =useState('')
    const [lastname,setLastname] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [retypePassword,setRetypePassword] =useState('')
    const onUserNameCheck=e=>{
            setUsername(e.target.value)
            console.log(username)
    }
    const onRegisteration = e =>{
        console.log(e)
        console.log(username)
        console.log(firstname)
        console.log(lastname)
        console.log(email)
        console.log(password)
        
        
        
        //onRegisterfill({username,firstname,lastname,email,password})
        if(password !==retypePassword ){
            alert('Password not matching ')
            e.preventDefault()
            
        }else{
            axios.post('http://localhost:5500/register',{username,firstname,lastname,email,password})
            .then(res => console.log(res.data)).catch(err => console.log(err));
        }
        
        setUsername('')
        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')
        setRetypePassword('')

    }
    return (
        
           <form path='/' method="POST"onSubmit={onRegisteration}>
                <h2 style={{textAlign:'center'}}>Registration Form</h2>
                <div className='form-control'>
                <label>Username</label>
                     <input className="mb-3" type="text" placeholder='Username' required="required" name ="username" value={username} onChange={onUserNameCheck} />
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
                <div className='form-control'>
                <label>Retype Password</label>
                <input type="password" placeholder='Password' required="required" name ="password"  value={retypePassword} onChange={e=>setRetypePassword(e.target.value)}  />
                </div>
                
                <input className='btn btn-block' type="submit" value='Register'/>
                
                
                
      
                
               
            
            </form>
            
       
    )
}
export default Registeration