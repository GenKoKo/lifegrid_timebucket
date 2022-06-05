import React from 'react'
import SidebarOthers from './SidebarOthers'
import SidebarSelf from './SidebarSelf'

const Sidebar = () => {
  return (
    <div className='flex flex-col'>
      <div className=' bg-orange-400'>
        <SidebarSelf></SidebarSelf>
      </div>
      <div className=' bg-orange-600'>
        <SidebarOthers></SidebarOthers>
      </div>

    </div>
  )
}

export default Sidebar