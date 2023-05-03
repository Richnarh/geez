import { motion } from "framer-motion";
import './modal.scss';

const CreateFolderModal = ({open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <div className="modal-title">
            <p className="title">Create Folder</p>
            <div className='closeBtn' onClick={onClose}>X</div>
          </div>
          <div className='content'>
            <label htmlFor="directory">Directories</label>
            <select name="" id="directory">
              <option value="">Document</option>
              <option value="">Movies</option>
              <option value="">Pdf</option>
            </select>
            <small>Select a directory and create folder under it.</small>

            <label htmlFor="folderName">Folder <span className="required">*</span></label>
            <input id="folderName" type="text" placeholder="Enter folder name"/>
          </div>
          <div className='btnContainer'>
            <motion.button whileTap={{scale:1.2}} className='btnPrimary'>
              Create Folder
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateFolderModal
