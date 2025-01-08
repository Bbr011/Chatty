import React from 'react'
import UsersSidebar from '../../components/sidebarcomps/sidebar'
import Coversation from '../../components/convos/conversation'

const Mainpage = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] reounded-lg overflow-hidden bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
      <UsersSidebar />
      <Coversation />
    </div>
  )
}

export default Mainpage