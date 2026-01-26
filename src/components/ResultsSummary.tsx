import '../css/resultsSummary.css';
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import Metric3 from './Metric3';
import Metric4 from './Metric4';




const ResultsSummary: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const activeBGColor = '#B8CDE6'
    const activeTextColor = '#000'
    const colorOldMetric = '#71809C'

    const defaultBGColor = 'var(--bg-dark-2)'
    const defaultTextColor = 'var(--txt-light-2)'

    const variants = {
        active: {
            backgroundColor: activeBGColor,
            color: activeTextColor,
        }

    }

    useEffect(() => {
    }, [isInView])

    return (
        <div id="metricsSummary" className="f-width px-0 py-0">
            <motion.div
                style={{ backgroundColor: `${defaultBGColor}`, color: `${defaultTextColor}` }}
                className='resultsSummary'
                ref={ref}
                variants={variants}
                transition={{ duration: 0.2, type: "easeInOut" }}
                viewport={{ margin: '0px 0px -100px 0px' }}
                whileInView={"active"}
            >
                <div className="container-xxl px-4">
                    <div className='row'>
                        <div className='col-lg-4 col-md-12 col-sm-12 px-0'>
                            <div className='d-flex flex-column flex-lg-column flex-md-row flex-sm-column flex-sm-wrap'>
                                <Metric4 className='px-0 col-lg-12 col-md-4 col-sm-12 flex-sm-grow-1' above='Role' mainMetric='Lead Product Designer' color={activeTextColor} />
                                <Metric4 className='px-0 col-lg-12 col-md-4 col-sm-12 flex-sm-grow-1' above='Timeline' mainMetric='2020–2024' color={activeTextColor} />
                                <Metric4 className='px-0 col-lg-12 col-md-4 col-sm-12 flex-sm-grow-1' above='Team size' mainMetric='3-10' color={activeTextColor} />
                            </div>
                            <div className='mobileDivider'></div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 px-0'>
                            <Metric3 className='' oldMetric='230' mainMetric='1200' colorOldMetric={colorOldMetric} color={activeTextColor} below='Number of music events per year' />
                            <Metric3 className='' oldMetric='80K' mainMetric='1M+' colorOldMetric={colorOldMetric} color={activeTextColor} below='Tickets sold growth per year' />
                            <Metric3 className='' oldMetric='14%' mainMetric='38%' colorOldMetric={colorOldMetric} color={activeTextColor} below='Primary sales Conversion Rate growth' />
                            <Metric3 className='' oldMetric='22%' mainMetric='54%' colorOldMetric={colorOldMetric} color={activeTextColor} below='Secondary sales Conversion Rate growth' />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 px-0'>
                            <Metric3 className='' oldMetric='2,5m' mainMetric='45s' colorOldMetric={colorOldMetric} color={activeTextColor} below='Average time to purchase tickets' />
                            <Metric3 className='' mainMetric='35+' colorOldMetric={colorOldMetric} color={activeTextColor} below='Features successfully released' />
                            <Metric3 className='' mainMetric='$750M+' colorOldMetric={colorOldMetric} color={activeTextColor} below='Secured in ticket reservations' />
                            <Metric3 className='' animatedText swapIntervalProp={5000} words={['Coachella', 'BottleRock', 'Burning Man', 'Comic-Con', 'Lost Paradise', 'EDC', 'Governors Ball', 'Lost Lands', 'Baja Beach Fest']} colorOldMetric={colorOldMetric} color={activeTextColor} below='Trusted by major events' />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ResultsSummary;
