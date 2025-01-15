import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TextAnimated1 {
    className?: string;
    words: string[];
    swapInterval?: number;
    style?: React.CSSProperties;
}


const TextAnimated1: React.FC<TextAnimated1> = ({ className, words, swapInterval, style }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, swapInterval);
        return () => clearInterval(interval);
    }, [words.length, swapInterval]);

    return (
        <div>
            <AnimatePresence mode="wait">
                <motion.h1
                    style={{ marginBottom: 0, ...style }}
                    className={className}
                    key={words[index]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0, y: -10 }}
                >{words[index]}
                </motion.h1>
            </AnimatePresence>
        </div>

    );
}


export default TextAnimated1;