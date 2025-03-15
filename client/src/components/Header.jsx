import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

// Import all images
const images = [
    {
        id: 1,
        src: new URL('../assets/1.jpg', import.meta.url).href
    },
    {
        id: 2,
        src: new URL('../assets/2.jpg', import.meta.url).href
    },
    {
        id: 3,
        src: new URL('../assets/3.jpg', import.meta.url).href
    },
    {
        id: 4,
        src: new URL('../assets/4.jpg', import.meta.url).href
    },
    {
        id: 5,
        src: new URL('../assets/5.jpg', import.meta.url).href
    },
    {
        id: 6,
        src: new URL('../assets/6.jpg', import.meta.url).href
    }
]

const Header = () => {
    const { user, setShowLogin } = useContext(AppContext);
    const navigate = useNavigate();

    const onClickHandler = () => {
        if (user) {
            navigate('/result');
        } else {
            setShowLogin(true);
        }
    };

    return (
        <motion.div 
            className='flex flex-col justify-center items-center text-center my-20' 
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
            >
                <p>Best Text-to-Image Generator</p>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 2 }}
                className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'
            >
                Turn Text into <span className='text-blue-600'>Images</span> Instantly with <span className='text-purple-600'>DreamPixel</span>
            </motion.h1>

            <motion.p 
                className='text-center max-w-xl mx-auto mt-5'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                Unlock limitless creativity with <b>DreamPixel</b>. Transform your imagination into stunning AI-generated visuals effortlessly – just type and watch the magic happen.
            </motion.p>

            <motion.button 
                onClick={onClickHandler} 
                className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
            >
                Generate Images
            </motion.button>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className='flex justify-center items-center gap-3 mt-16 flex-wrap'
            >
                {images.map((img) => (
                    <motion.img
                        whileHover={{ scale: 1.05, duration: 0.1 }}
                        className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-16 sm:w-24 md:w-28 lg:w-32'
                        src={img.src}
                        alt={`Generated Sample ${img.id}`}
                        key={img.id}
                    />
                ))}
            </motion.div>
            
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className='mt-2 text-neutral-600'
            >
                AI-generated images with <b>DreamPixel</b>
            </motion.p>
        </motion.div>
    );
};

export default Header;
