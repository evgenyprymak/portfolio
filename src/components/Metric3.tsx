import React, { useEffect } from 'react';
import { motion, useAnimate, useInView } from "framer-motion"
import type { Variants } from "motion/react"

import '../css/Metrics.css';
import TextAnimated1 from './TextAnimated1';

interface MetricProps {
    className?: string;
    above?: string;
    oldMetric?: string;
    mainMetric?: string;
    below?: string;
    color?: string;
    colorOldMetric?: string;
    animatedText?: boolean;
    words?: string[];
    swapIntervalProp?: number;
}


const Metric3: React.FC<MetricProps> = ({ className, words=[], swapIntervalProp, animatedText, above, mainMetric, oldMetric, below, colorOldMetric, color = "#555555" }) => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)

    const metricBlockVariants: Variants = {
        offscreen: {
            y: 150,
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 0.5,
            },
        },
    }

    const mainMetricVariants: Variants = {
        offscreen: {
            opacity: 0,
            y: 10,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                duration: 0.5,
                delay: 0.3
            },
        },
    }


    useEffect(() => {
        if (isInView) {
            animate(scope.current, { opacity: 1 }, { duration: 5 })
        }
    }, [isInView])


    return (
        <motion.div
            className={`metric3_card ${className || ''}`}
            initial="offscreen"
            whileInView="onscreen"
            variants={metricBlockVariants}
        >
            <p className="metric3_above">{above}</p>
            <div className='d-inline-flex'>
                {oldMetric && (
                    <>
                        <div
                            className="metric3_main_number metric3_old_number"
                            style={{ color: colorOldMetric }}
                        >
                            {oldMetric}
                        </div>
                        <div className="px-3">
                            <img
                                src="/portfolio/assets/icons/arrow2_black.svg"
                                alt="Arrow"
                            />
                        </div>
                    </>
                )}
                <motion.div
                    variants={mainMetricVariants}
                >
                    {animatedText ? (
                        <TextAnimated1
                            words={words}
                            className='metric3_main_number'
                            style={{ color }}
                            swapInterval={swapIntervalProp}
                        />
                    ) : (
                        <div className="metric3_main_number" style={{ color }}>
                            {mainMetric}
                        </div>
                    )}
                </motion.div>
            </div>
            <div>
                <p className="metric3_below">{below}</p>
            </div>
        </motion.div>
    );
};

export default Metric3;