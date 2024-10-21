// import HeroBG from '../assets/hero-dashboard.png'
import { Watermark } from 'antd'
import HeroBG from '../assets/hero-competition.png'
import ImgDashboard1 from '../assets/img-dashboard1.png'
import { useState } from 'react';

function PerformanceDashboard() {
    const [config] = useState({
        content: 'Sample',
        color: 'rgba(0, 0, 0, 0.15)',
        fontSize: 32,
        zIndex: 11,
        rotate: -22,
        gap: [50, 50],
        offset: undefined,
    });
    const { content, color, fontSize, zIndex, rotate, gap, offset } = config;
    const watermarkProps = {
        content,
        zIndex,
        rotate,
        gap,
        offset,
        font: {
            color: typeof color === 'string' ? color : color.toRgbString(),
            fontSize,
        },
    };
    return (
        <div>
            <div className="lg:flex grid">
                <div className='flex flex-col justify-center bg-[#D9F2D0] lg:w-2/4 order-2 lg:order-1'>
                    <div className='bg-[#00B050] text-center font-bold lg:text-3xl text-2xl py-8 text-white'>Performance Dashboard</div>
                    <p className='lg:px-16 px-8 lg:py-0 py-4 flex-grow flex items-center lg:text-xl text-lg'>The dashboard enables the visualization of performance by inputting individual training progress, competition results, videos, goals, and milestones.</p>
                </div>
                <div className='lg:w-3/5 h-auto order-1 lg:order-2'>
                    <img src={HeroBG} className="w-full h-full object-cover" />
                </div>
            </div>

            <div className='lg:px-16 px-8 py-10 text-xl font-medium'>Let`s your track performance and predict future performance on dashboard!</div>

            <div className='lg:px-20 px-8 lg:mt-32 mt-10 lg:grid grid-cols-2 flex flex-col lg:gap-20 gap-6 items-center'>
                <div className='flex justify-center'>
                    <Watermark {...watermarkProps}>
                        <img src={ImgDashboard1}/>
                    </Watermark>
                </div>
                <div>
                    <p className='mb-6 lg:text-xl'>Your dashboard helps athletes put real-time data to work for you with interactive dashboards and apps anyone can use. The data experience platform stands on a secure, flexible data foundation that connects across data systems. With your dashboard, you can move from basic charts and graphs to data experiences that spark curiosity, power insights and action, and deliver exponential results.</p>
                </div>
            </div>

            <div className='bg-[#0A192B] lg:py-32 py-20 lg:mt-32 mt-14 text-white lg:px-16 px-8'>
                <p className='mb-6 lg:text-xl'>With your dedicated dashboards, you can:</p>
                <ul className='lg:text-xl list-disc list-outside mb-6 lg:ml-5 ml-4'>
                    <li>Create pie charts, graphs, interactive maps, and more with just a few clicks.</li>
                    <li>Build a dashboard once and make it instantly available on any device.</li>
                    <li>Tell a story with your data with your own custom data for events, training details, and commentary—all with no coding and changes available instantly to users.</li>
                    <li>Know you always have current reports with real-time data you manually updates.</li>
                    <li>Analylze your trend / growing path, to find out peak period for next competition.</li>
                    <li>Access your dashboards from anywhere—computer, tablet, or phone</li>
                </ul>
            </div>
        </div>
    )
}

export default PerformanceDashboard