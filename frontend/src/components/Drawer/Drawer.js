import React from 'react';
import { motion } from 'framer-motion';
import './Drawer.css';


const Drawer = () => {
    return (
        <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, ease: "easeInOut"}}
            className="drawer"
        >
            <div className="drawer-content">
                <h2>Welcome to My Website</h2>
                <p>Explore the folders below {'>'}:D!</p>
            </div>

        </motion.div>
    );
};

export default Drawer;
