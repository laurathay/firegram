import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {

    //to close the modal on click outside the image
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);    
        }
    
    }

  return (
    <motion.div className="backdrop" onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
        <motion.img src={selectedImg} alt="enlarge pic"
            //to make it fade in from the top 
            initial={{ y: "-100vh" }}
            animate={{ y: 0}}
        />
    </motion.div>
  )
}

export default Modal