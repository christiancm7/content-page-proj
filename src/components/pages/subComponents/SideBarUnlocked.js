import React from 'react'
import ResourcesDownload from './ResourcesDownload'
import InstructorInfo from './InstructorInfo'
import ArrayForm from '../../ArrayForm'

export const SideBarUnlocked = () => {
    return (
        <aside className="sidebar">
                <ResourcesDownload />
                <InstructorInfo/>
                <ArrayForm />
              </aside>
    )
}

export default SideBarUnlocked