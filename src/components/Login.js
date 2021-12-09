import React ,{ useState}from 'react'
import { Link } from 'react-router-dom'


export const Login = ({ onLoginfill }) => {
    const [username,setUsername] =useState('');
    
   const [password,setPassword] =useState('');
    const onLogin = e =>{
        console.log(e)
       // console.log(username)
        
        console.log(password)
        e.preventDefault()
        if(!username || !password){
            alert('Please enter username ')
            
        }
        
        onLoginfill({username,password})
        setUsername('')
       
        setPassword('')

    }
    return (
        
           <form onSubmit={onLogin} >
                 <h2 style={{textAlign:'center'}}>Login</h2>
                <div className='form-control'>
                <label>Username</label>
                     <input className="mb-3" type="text" placeholder='Username' required="required" name ="username" value={username} onChange={e=>setUsername(e.target.value)}  />
                </div>
                <div className='form-control '>
                <label>Password</label>
                <input className="mb-3"  type="password" placeholder='Password' required="required" name ="password"   value={password} onChange={e=>setPassword(e.target.value)} />
                </div>
               
                
                <input className='btn btn-block' type="submit" value='Login'/>
                <div style={{textAlign:"center"}}> <Link to='/register'>Register</Link></div>
                
                
      
                
               
            
            </form>
            
       
    )
}
export default Login