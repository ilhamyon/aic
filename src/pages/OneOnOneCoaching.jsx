import HeroBG from '../assets/bg-oneonone.png'
import ImgIcDashboard from '../assets/apps-one.png'
import ImgOoc1 from '../assets/img-ooc1.png'
import ImgOoc2 from '../assets/img-ooc2.png'
import ImgOoc3 from '../assets/img-ooc3.png'
import ImgOoc4 from '../assets/img-ooc4.png'
import ImgOoc5 from '../assets/img-ooc5.png'
import ImgOoc6 from '../assets/img-ooc6.png'
import { Select } from 'antd'

function OneOnOneCoaching() {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
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
                        <div className="container mx-auto lg:pt-28 py-10 lg:py-0 lg:px-14 px-8">
                            <div className="mt-1 text-white text-[1.3rem] md:text-[2rem] font-bold lg:text-[2.8rem]">
                                One-On-One Coaching
                            </div>
                        </div>
                        <div className='lg:grid grid-cols-4 flex flex-col lg:px-14 px-8 justify-center lg:mt-6 lg:py-0 py-10 gap-2 text-sm lg:text-[1rem]'>
                            <div className='bg-white rounded py-2 px-4 flex justify-between items-center'>
                                <div>Athlete type</div>
                                <Select
                                    defaultValue="sprint"
                                    style={{
                                        width: 190,
                                    }}
                                    variant="borderless"
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: 'sprint',
                                            label: 'SPRINT',
                                        },
                                        {
                                            value: 'mid-long',
                                            label: 'MID-LONG DISTANCE',
                                        },
                                        {
                                            value: 'hurdle',
                                            label: 'HURDLE',
                                        },
                                        {
                                            value: 'throw',
                                            label: 'THROW',
                                        },
                                        {
                                            value: 'jump',
                                            label: 'JUMP',
                                        },
                                    ]}
                                />
                            </div>
                            <div className='bg-white rounded py-2 px-4 flex justify-between items-center'>
                                <div>Event</div>
                                <Select
                                    defaultValue="60/80M"
                                    style={{
                                        width: 160,
                                    }}
                                    variant="borderless"
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: '60/80M',
                                            label: '60/80M',
                                        },
                                        {
                                            value: '200M',
                                            label: '200M',
                                        },
                                        {
                                            value: '300M',
                                            label: '300M',
                                        },
                                        {
                                            value: '400M',
                                            label: '400M',
                                        },
                                    ]}
                                />
                            </div>
                            <div className='bg-white rounded py-2 px-4 flex justify-between items-center'>
                                <div>Are of focus</div>
                                <Select
                                    defaultValue="Starting blocks"
                                    style={{
                                        width: 160,
                                    }}
                                    variant="borderless"
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: 'Starting blocks',
                                            label: 'Starting blocks',
                                        },
                                        {
                                            value: 'Acceleration',
                                            label: 'Acceleration',
                                        },
                                        {
                                            value: 'Top Speed',
                                            label: 'Top Speed',
                                        },
                                        {
                                            value: 'Drills & Forming',
                                            label: 'Drills & Forming',
                                        },
                                    ]}
                                />
                            </div>
                            <div className='flex gap-2 w-full'>
                                <div className='bg-white rounded py-2 px-4 w-full flex justify-between items-center'>
                                    <div>People</div>
                                    <Select
                                        defaultValue="1"
                                        style={{
                                            width: 60,
                                        }}
                                        variant="borderless"
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: '1',
                                                label: '1',
                                            },
                                            {
                                                value: '2',
                                                label: '2',
                                            },
                                            {
                                                value: '3',
                                                label: '3',
                                            },
                                            {
                                                value: '4',
                                                label: '4',
                                            },
                                            {
                                                value: '5',
                                                label: '5',
                                            },
                                        ]}
                                    />
                                </div>
                                <div className='bg-orange-600 text-white rounded p-2 w-full text-center cursor-pointer flex items-center justify-center'>Search</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative mb-20'>
                <div className='lg:px-16 px-8 py-10 text-xl font-medium'>AIC Solutions Tailored For athletes who are looking for improvement and quick adjustments</div>
                <div className='absolute lg:block hidden right-20 -top-20'>
                    <img src={ImgIcDashboard} width={120} />
                </div>
            </div>

            <div className='lg:px-14 px-8 lg:mt-40 mt-16 lg:grid grid-cols-2 flex flex-col lg:gap-20 gap-6 items-center'>
                <div className='flex justify-start'>
                    <img src={ImgOoc1} className='shadow-xl' />
                </div>
                <div>
                    <h2 className='font-bold lg:text-4xl text-xl mb-6'>What is One-on-One Coaching?</h2>
                    <p className='mb-6 lg:text-xl'>
                        One-on-one coaching helps athletes overcome their problems, achieve their goals, and improve their performance.
                    </p>
                    <p className='lg:mb-20 mb-6 lg:text-xl'>
                        The essence of one-on-one coaching revolves around sharing experiences and knowledge about specific topics, helping athletes overcome their issues, and creating a plan structured to assist them to reach a specific result.
                    </p>

                    <h2 className='font-bold lg:text-4xl text-xl mb-6'>Benefits of Individual Coaching</h2>
                    <p className='mb-6 lg:text-xl'>
                        Offering advice and helping athlete achieve their goals can give tremendous value to athlete. With one-on-one coaching, you are not only offering advice: we are offering highly personalized suggestions tailored to athlete`s individual situation.
                    </p>
                </div>
            </div>

            <div className='lg:px-14 px-8 lg:grid grid-cols-2 mt-28 lg:mt-40 flex flex-col lg:gap-20 gap-6 items-center'>
                <div className='order-2 lg:order-1'>
                    <h2 className='font-bold lg:text-4xl text-xl mb-6'>Who is coach for ONE-ON-ONE and How to find your coach?</h2>
                    <p className='mb-6 lg:text-xl'>You can choose an AIC certified coach according to the athlete`s achievements and requirements.</p>
                    <ul className='lg:text-xl list-disc list-outside mb-6 lg:ml-5 ml-4'>
                        <li>Acquiring techniques in a short period</li>
                        <li>Achieving goals in the medium to long term</li>
                        <li>Identifying challenges</li>
                        <li>Practice partner</li>
                        <li>Maintaining mental health</li>
                        <li>Final adjustments before the race</li>
                    </ul>
                    {/* <p className='mb-6 lg:text-xl'>AIC online platform for finding a high-quality coach through AIC certified coaching network.</p> */}
                </div>
                <div className='flex justify-end order-1 lg:order-2'>
                    <img src={ImgOoc2} className='shadow-xl' />
                </div>
            </div>

            <div className='relative mt-14 lg:px-40 px-8'>
                <div className='lg:px-16 px-2 py-10 text-xl font-medium text-center'>AIC online platform for finding a high-quality coach through AIC certified coaching network.</div>
                <div className='rounded-3xl bg-gradient-to-r from-[#002462] to-[#00B0EF] p-8 lg:mt-10 mt-20'>
                    <div className='text-white text-center text-xl lg:px-64 lg:mt-12 mt-20'>
                        I used this matching service for pre-race training. 
                        With the coach`s advice, I gained confidence and was able to create a strategy for the next race
                    </div>
                    <div className='text-white font-semibold text-center lg:text-left mt-10 lg:mt-0'>
                        Marek <br/>21 yrs
                    </div>
                    <div className='absolute hidden lg:block text-[#00B0EF] text-[13rem] tracking-[-1.7rem] top-20 left-52 rotate-180'>{`,,`}</div>
                    <div className='absolute hidden lg:block text-[#002462] text-[13rem] tracking-[-1.7rem] top-36 right-60'>{`,,`}</div>
                    <div className='absolute lg:top-48 top-48 md:top-40 lg:right-28 right-28 md:right-[18.5rem] border-2 border-white rounded-full'><img src={ImgOoc6} width={150} /></div>
                </div>
            </div>
            
            <div className='lg:text-4xl text-xl font-bold text-center lg:py-40 mt-32 lg:mt-0 lg:px-20'>
                Get and chose 50 certified AIC coaches for your <br/>one-on-one lesson in 3 simple steps
            </div>

            <div className='lg:px-14 px-8 lg:grid grid-cols-2 mt-16 lg:mt-0 flex flex-col lg:gap-20 gap-6 items-center'>
                <div className='order-2 lg:order-1'>
                    <h2 className='font-bold lg:text-4xl text-xl mb-2'>STEP 1</h2>
                    <h3 className='mb-10 text-2xl font-semibold'>Tell us about the area you need</h3>
                    <p className='mb-6 lg:text-xl'>
                        Tell us about your profile, requirements, and the area you focus.
                        <br/><br/>
                        Select the event you want to learn, enter your Personal Best (PB) and Season Best (SB), and narrow down the areas you want to improve.
                        <br/><br/>
                        Our system will then match you with certified AIC coach.
                    </p>    
                </div>
                <div className='flex justify-end order-1 lg:order-2'>
                    <img src={ImgOoc3} />
                </div>
            </div>

            <div className='lg:px-14 px-8 lg:grid grid-cols-2 mt-28 lg:mt-40 flex flex-col lg:gap-20 gap-6 items-center'>
                <div className='order-2 lg:order-1'>
                    <h2 className='font-bold lg:text-4xl text-xl mb-2'>STEP 2</h2>
                    <h3 className='mb-10 text-2xl font-semibold'>Request for One-on-One lesson to certified coach</h3>
                    <p className='mb-6 lg:text-xl'>
                        Browse and connect with certified AIC coach. Explore coach you fit with ease and convenience.
                    </p>    
                </div>
                <div className='flex justify-end order-1 lg:order-2'>
                    <img src={ImgOoc4} />
                </div>
            </div>

            <div className='lg:px-14 px-8 lg:grid grid-cols-2 mt-28 lg:mt-40 mb-20 flex flex-col lg:gap-20 gap-6 items-center'>
                <div className='order-2 lg:order-1'>
                    <h2 className='font-bold lg:text-4xl text-xl mb-2'>STEP 3</h2>
                    <h3 className='mb-10 text-2xl font-semibold'>Book a coach with the date, time, and venue, and make the payment through AIC apps</h3>
                    <p className='mb-6 lg:text-xl'>
                        You can book a private lesson if the date and location you prefer are agreed upon with the coach.
                        <br/><br/>
                        All payments must be made in advance through AIC
                    </p>    
                </div>
                <div className='flex justify-end order-1 lg:order-2'>
                    <img src={ImgOoc5} />
                </div>
            </div>
        </div>
    )
}

export default OneOnOneCoaching