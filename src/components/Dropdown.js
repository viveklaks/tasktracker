import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const CategoryOptions = [
  {
    key: 'Hobby',
    text: 'Hobby',
    value: 'Hobby',
    
  },
  {
    key: 'Personal',
    text: 'Personal',
    value: 'Personal',
    
  },
  {
    key: 'Professional',
    text: 'Professional',
    value: 'Professional',
    
  }
  
]

const DropdownCategory = () => (
    <Dropdown
    button
    className='icon'
    placeholder='Select Category'
    fluid
    selection
    options={CategoryOptions}
  />
)
  

export default DropdownCategory