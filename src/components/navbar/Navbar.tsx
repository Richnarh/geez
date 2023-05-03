import { motion } from "framer-motion"
import { useState } from "react";

import '../../styles/main.scss';
import './navbar.scss';
import CreateFolderModal from "../modals/CreateFolderModal";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <header className="sticky">
        <a href="#" className="logo">GeezFile Mgr</a>
        <ul className="nav-item">
            <motion.li onClick={() => setOpenModal(true)} whileTap={{scale:1.2}}><a href="#">Create Folder</a></motion.li>
            <motion.li whileTap={{scale:1.2}}><a href="#">Logout</a></motion.li>
        </ul>
      </header>
      <CreateFolderModal open={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  )
}

export default Navbar
