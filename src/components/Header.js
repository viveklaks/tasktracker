import React from 'react'
import PropTypes from 'prop-types'
import  Button  from './Button'
import { useLocation } from 'react-router-dom'
import {GrLogout} from 'react-icons/gr'
export const Header = ({username,title, onAdd,showAdd,logOut}) => {
    const location = useLocation()
    return (
        <header className='header'>
            
            <h3>{title}</h3>
            <React.Fragment style={{textalign:'center'}}>welcome {username}</React.Fragment >
            {location.pathname === '/' &&<Button color ={showAdd? 'red':'green'} text={showAdd? 'Close':'Add'} onClick={onAdd} />}
            
            <GrLogout color ={'black'} text={'LogOut'} onClick={logOut} />
        </header>
    )
}
Header.defaultProps = {
    title : 'Null List', 
}
Header.defaultProps = {
    title : PropTypes.string,
}
/*const headingStyle={
    color : 'red',
    backgroundColor: 'black',
}*/
