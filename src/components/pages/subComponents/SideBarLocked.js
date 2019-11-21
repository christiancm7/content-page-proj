import React from 'react'
import Advertisement from './Advertisement'
import InstructorInfo from './InstructorInfo'
import ArrayForm from '../../ArrayForm'

export const SideBarLocked = () => {
    return (
        <aside className="sidebar">
                <Advertisement />
                <InstructorInfo/>
                <ArrayForm />
              </aside>
    )
}

export default SideBarLocked