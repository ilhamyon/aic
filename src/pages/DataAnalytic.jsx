import HeroBG from '../assets/hero-dataanalytic.png'
import Img1Analytic from '../assets/img1-analytic.png'
import ImgAnalyticSprint from '../assets/img-analysing-sprint.png'
import ImgVs from '../assets/vs.png'
import ImgDa1 from '../assets/img-dataanalytics1.png'
import ImgDa2 from '../assets/img-dataanalytics2.png'
import ImgIcDa1 from '../assets/ic-da1.png'
import ImgIcDa2 from '../assets/ic-da2.png'
import ImgIcDa3 from '../assets/ic-da3.png'
import ImgImprove from '../assets/img-improve.png'
import ImgIcDashboard from '../assets/img-icdashboard.png'
import { Button, Steps } from 'antd'

const { Step } = Steps;

function DataAnalytic() {
  return (
    <div>
        <div className="relative">
            <div 
                className="w-full lg:h-[377px] relative"
                style={{
                backgroundImage: `url(${HeroBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="w-full h-full" 
                    style={{
                        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.4))",
                    }}
                >
                    <div className="container mx-auto lg:pt-40 py-16 lg:py-0 lg:px-14 px-8">
                        <div className="mt-1 text-white text-[1.3rem] md:text-[2rem] font-bold lg:text-[2.8rem]">
                            DATA ANALYTIC
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='relative mb-20'>
            <div className='lg:px-16 px-8 py-10 text-xl font-medium'>How Data Analytics is transforming Sports Performance</div>
            <div className='absolute lg:block hidden right-20 -top-20'>
                <img src={ImgIcDashboard} width={280} />
            </div>
        </div>

        <div className='lg:px-20 px-8 lg:mt-60 mt-20 lg:grid grid-cols-2 flex flex-col lg:gap-20 gap-6 items-center'>
            <div className='flex justify-center'>
                <img src={Img1Analytic} width={500}/>
            </div>
            <div>
                <h2 className='font-bold lg:text-4xl text-xl mb-6'>Analysing sprint performance</h2>
                <p className='mb-6 lg:text-xl'>Faster top sprinting speeds require shorter ground contact times, larger vertical forces, and greater thigh angular velocities and accelerations. Our data analytics, a framework using fundamental kinematic and kinetic relationships is presented that explores the effect of body dimensions on these mechanical determinants of sprinting performance.</p>
            </div>
        </div>

        <div className='lg:px-16 px-8 mt-28'>
            <div>
                <h2 className='font-bold lg:text-4xl text-xl mb-6'>What does a data analytic actually do?</h2>
                <p className='mb-6 lg:text-xl'>By analyzing your sprint data, you can understand where you currently stand and what you need to do to reach the next level.</p>
            </div>

            <div className='lg:grid grid-cols-4 mt-16 flex flex-col lg:gap-0 gap-12'>
                <div className='col-span-2 -mt-4'>
                    <img src={ImgAnalyticSprint} />
                </div>
                <div className='flex justify-center mt-2'>
                    <ul className='custom-list text-gray-600 flex flex-col gap-1'>
                        <li>Running TOP Speed (m/s)</li>
                        <li>Predicted100-m time (sec)</li>
                        <li>SF-Step Frequency (Hz)</li>
                        <li>SL-Step Length(m)</li>
                        <li>SF/SL Ratio</li>
                        <li>SL/Height Ratio</li>
                        <li>Contact Time (sec)</li>
                        <li>Flight Time (sec)</li>
                        <li>Contact/Flight Ratio</li>
                    </ul>
                </div>
                <div>
                    <img src={ImgVs} />
                </div>
            </div>
        </div>

        <div className='lg:px-16 px-8 mt-28 bg-[#0A192B] text-white py-16'>
            <div>
                <h2 className='font-bold lg:text-4xl text-xl mb-6'>How Is Athlete Data Analytics Collected?</h2>
                <p className='mb-6 lg:text-xl'>Specific attention is focused on how the following variables scale with leg length and top speed: ground contact time, step rate, step length, ratio of step length to leg length, ratio of vertical force to body weight, total thigh range of motion, average thigh angular velocity, and maximum thigh angular acceleration.</p>
            </div>

            <div className='flex flex-col gap-2 py-6'> 
                <div className='lg:flex gap-4'>
                    <div className='bg-white text-[#0A192B] px-4 w-24 text-center'>Step 1</div>
                    <div>Secure 30m Acceleration phase</div>
                </div>
                <div className='lg:flex gap-4'>
                    <div className='bg-white text-[#0A192B] px-4 w-24 text-center'>Step 2</div>
                    <div>Put Corn/Mark exactly at 30m and 40m to make 10m</div>
                </div>
                <div className='lg:flex gap-4'>
                    <div className='bg-white text-[#0A192B] px-4 w-24 text-center'>Step 3</div>
                    <div>Fix the iPhone at a distance of 10m from the 35m mark</div>
                </div>
                <div className='lg:flex gap-4'>
                    <div className='bg-white text-[#0A192B] px-4 w-24 text-center'>Step 4</div>
                    <div>Only take video (horizontal) between 30m and 40m. (No video of the acceleration phase up to 30m is needed)</div>
                </div>
            </div>

            <div className='mt-16'>
                <h3 className='text-center text-xl font-semibold'>Accelerate to top speed by around 30 meters. Maintain that speed from 30 to 40 meters.</h3>
                <div className='lg:grid grid-cols-2 flex flex-col gap-8 py-10'>
                    <div>
                        <img src={ImgDa1} />
                    </div>
                    <div>
                        <img src={ImgDa2} />
                    </div>
                </div>
            </div>

            <div className='mt-16'>
                <h2 className='font-bold lg:text-4xl text-xl mb-6'>How do you request for data analytics?</h2>
                <div className='mt-20 lg:block hidden'>
                    <Steps>
                        <Step status="process" />
                        <Step status="process" />
                        <Step status="process" />
                    </Steps>
                </div>
                <div className='lg:grid grid-cols-3 gap-32 mb-10'>
                    <div>
                        <div className='flex justify-center py-10'>
                            <img src={ImgIcDa1} />
                        </div>
                        <h3 className='font-semibold text-xl mb-4'>Account Registration</h3>
                        <p>Open your own dashboard through account registration and subscribe package.</p>
                    </div>
                    <div>
                        <div className='flex justify-center py-10'>
                            <img src={ImgIcDa2} />
                        </div>
                        <h3 className='font-semibold text-xl mb-4'>Video uploading</h3>
                        <p>Your sprint Video data through Step 1-4, you can upload it on dashboard.</p>
                    </div>
                    <div>
                        <div className='flex justify-center py-10'>
                            <img src={ImgIcDa3} />
                        </div>
                        <h3 className='font-semibold text-xl mb-4'>Data Visualization</h3>
                        <p>Provide the collected data in an engaging way, like charts, statistics that can reveal patterns and trend on dashboard.</p>
                    </div>
                </div>
            </div>

            <div className='mt-28'>
                <h2 className='font-bold lg:text-4xl text-xl mb-6'>Understand growth trends and strive to improve performance</h2>
                <div className='py-16'>
                    <img src={ImgImprove} />
                </div>
                <p className='mb-6 lg:text-xl'>This data is collected every 3-4 weeks and analyzed for six-month development trends, helping to identify strengths and weaknesses, and making data-driven decisions to improve player performance while minimizing the risk of injury</p>
            </div>

            <div className='mt-28 mb-16'>
                <h2 className='font-bold lg:text-4xl text-xl mb-6'>How do you request for data analytics?</h2>
                <div className='lg:grid grid-cols-2 flex flex-col lg:gap-28 gap-10 mt-20 lg:px-20'>
                    <div className='border border-gray-300 rounded-xl shadow-xl py-8 lg:px-28 px-8 flex flex-col gap-1 justify-between h-full'>
                        <div className='flex-grow'>
                            <div className='text-center text-green-600 text-2xl'>One-Time Service</div>
                            <div className='text-center font-bold text-3xl'>SGD 70</div>
                            <div className='text-center text-xl text-gray-400'>Upload 1 Video</div>

                            <div className='flex justify-center py-6'>
                                <ul className='custom-list-white flex flex-col gap-2'>
                                    <li>Basic statistics and comparisons</li>
                                    <li>Data result and sprint type</li>
                                </ul>
                            </div>
                        </div>

                        <div className='flex justify-center mt-auto'>
                            <Button size='large' className='bg-green-600 text-white lg:px-20'>Subscribe Now</Button>
                        </div>
                    </div>

                    <div className='border border-gray-300 rounded-xl shadow-xl py-8 lg:px-28 px-8 flex flex-col gap-1 justify-center'>
                        <div className='text-center text-red-600 text-2xl'>Premium</div>
                        <div className='text-center font-bold text-3xl'>SGD 350</div>
                        <div className='text-center text-xl text-gray-400'>Upload 6 videos</div>

                        <div className='flex justify-center py-6'>
                            <ul className='custom-list-white flex flex-col gap-2'>
                                <li>Basic statistics and comparisons</li>
                                <li>Data results and sprint type</li>
                                <li>Every 3-4 weeks upload</li>
                                <li>5 - 6 months growing statistics</li>
                                <li>Recommendations</li>
                            </ul>
                        </div>

                        <div className='flex justify-center'>
                            <Button size='large' className='bg-red-600 text-white lg:px-20'>Subscribe Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataAnalytic