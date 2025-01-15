import React, { useEffect } from 'react';
import { motion, useAnimate, useInView } from "framer-motion";
import type { Variants } from "motion/react";



interface MotionParagraphProps {
    title: string;
    classNameTitle?: string;
    description?: string;
    classNameDescription?: string;
    wrapperClassName?: string;
    animationType?: "slideUp" | "fadeIn" | "scaleIn";
}

const MotionParagraph: React.FC<MotionParagraphProps> = ({
    title,
    classNameTitle,
    description,
    classNameDescription,
    wrapperClassName,
    animationType = "slideUp"
}) => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    const animations: Record<string, Variants> = {
        slideUp: {
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
        },
        fadeIn: {
            offscreen: {
                opacity: 0,
            },
            onscreen: {
                opacity: 1,
                transition: {
                    duration: 0.3,
                },
            },
        },
        scaleIn: {
            offscreen: {
                scale: 0.8,
                opacity: 0,
            },
            onscreen: {
                scale: 1,
                opacity: 1,
                transition: {
                    type: "spring",
                    stiffness: 100,
                    duration: 0.5,
                },
            },
        },
    };

    useEffect(() => {
        if (isInView) {
            animate(scope.current, { opacity: 1 }, { duration: 5 });
        }
    }, [isInView]);

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={animations[animationType] || animations.slideUp}
        >
            <div className={`${wrapperClassName}`}>
                <div className={`${classNameTitle}`}>{title}</div>
                <div className={`${classNameDescription}`}>{description}</div>
            </div>
        </motion.div>
    );
};

export default MotionParagraph;
