import React from 'react';
import assets from '../assets';
import { motion } from 'framer-motion';
import img6 from '../assets/6.jpg'

const Description = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
        >
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Transform Text into Stunning AI Images</h1>
            <p className='text-gray-500 mb-8'>Bring your ideas to life with the power of AI.</p>

            <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
                <img 
                    src={assets.sample_img_6} 
                    alt="AI-generated preview" 
                    className='w-80 xl:w-96 rounded-lg'
                />
                <div>
                    <h2 className='text-3xl font-medium max-w-lg mb-4'>Unleash Creativity with AI-Powered Image Generation</h2>
                    <p className='text-gray-600 mb-4'>
                        Generate stunning visuals effortlessly with our advanced AI image generator. Whether you need unique artwork, concept designs, or realistic portraits, simply describe your vision, and AI will create it in seconds.
                    </p>
                    <p className='text-gray-600'>
                        Type in a text prompt, and watch AI transform your imagination into high-quality visuals instantly. From product designs to fantasy worlds, our cutting-edge technology ensures endless creative possibilities. Experience the future of digital artistry today!
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Description;
