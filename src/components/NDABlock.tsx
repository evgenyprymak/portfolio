import React, { useRef } from 'react';
import '../css/NDABlock.css';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
import { motion } from "motion/react";

interface NDABlockProps { }

const NDABlock: React.FC<NDABlockProps> = () => {
    const lottieRef = useRef<any>(null);
    const targetRef = useRef<HTMLDivElement | null>(null);

    if (lottieRef.current && targetRef.current) {
        create({
            player: lottieRef.current,
            container: targetRef.current,
            mode: 'scroll',
            actions: [
                {
                    type: "play",
                },
            ],
        });
    }

    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <div className="NDABlock-wrapper" ref={targetRef}>
                    <lottie-player
                        ref={lottieRef}
                        mode="normal"
                        src="/portfolio/assets/animation/NDA2.json"
                        style={{ width: '100%', height: '48px' }}
                        autoplay
                    />
                    <div className="NDABlock-description">
                        I am restricted in publicly displaying extra design files from this work and can only share non-proprietary project and product details.
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default NDABlock;
