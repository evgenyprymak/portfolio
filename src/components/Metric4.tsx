import React, { useEffect } from 'react';
import { motion, useAnimate, useInView } from "framer-motion"
import type { Variants } from "motion/react"

import '../css/Metrics.css';

interface MetricProps {
    className?: string;
    above?: string;
    title?: string;
    mainMetric?: string;
    below?: string;
    color?: string;
}


const Metric4: React.FC<MetricProps> = ({ className, mainMetric, above, below, color = "#555555" }) => {
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
        },
        onscreen: {
            opacity: 150,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 5,
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
            className={`metric4_card ${className || ''}`}
            initial="offscreen"
            whileInView="onscreen"
            variants={metricBlockVariants}
        >
            <div>
                <div className="metric4_above" style={{ color }}>{above}</div>
                <motion.div
                    className=''
                    variants={mainMetricVariants}
                >
                    <div className="metric4_main_number" style={{ color }}>{mainMetric}</div>
                </motion.div>
                <p className="metric3_below">{below}</p>
            </div>
        </motion.div>
    );
};

export default Metric4;