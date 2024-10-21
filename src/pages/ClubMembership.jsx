import HeroBG from '../assets/hero-membership.png'
import ImgAthleteMember from '../assets/athlete-member.png'
import ImgCompetitions from '../assets/img-competitions.png'
import ImgTraining from '../assets/img-training.png'
import ImgDashboard from '../assets/img-dashboard.png'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

function ClubMembership() {
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
                            CLUB MEMBERSHIP
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='lg:px-20 px-8 lg:mt-40 mt-28 lg:grid grid-cols-2 flex flex-col lg:gap-20 gap-6 items-center'>
            <div className='flex justify-start'>
                <img src={ImgAthleteMember} className='shadow-xl' />
            </div>
            <div>
                <h2 className='font-bold lg:text-4xl text-xl mb-6'>Become an AIC Club Athlete Member</h2>
                <p className='mb-6 lg:text-xl'>By becoming a member of AIC Athlete Club, you join a passionate community dedicated to advocating for the growth, development, and recognition of club athlete across the regional. Our members are at the heart of everything we do, and we are here to train your skill and technique every step of the way.</p>
            </div>
        </div>

        <div className='lg:px-20 px-8 lg:mt-20 mt-10'>
            <p className='lg:text-xl'>As a member, you gain access to a wide range of benefits that aim to enhance your club`s experience and elevate the standards of Athlete excellence. Here are just a few of the advantages you can expect:</p>
        </div>

        <div className='lg:px-20 px-8 lg:py-28 py-16 lg:grid grid-cols-3 flex flex-col lg:gap-10 gap-6 text-white'>
            <Link to='/competition'>
                <div className="relative border-b-8 border-[#F3CB03] shadow-xl">
                    <div 
                        className="w-full h-[300px] relative"
                        style={{
                        backgroundImage: `url(${ImgCompetitions})`,
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
                            <div className="container mx-auto flex justify-center items-end mb-0">
                                <div className="mt-56 text-white text-[1.3rem] md:text-[2rem] font-light lg:text-3xl">
                                    Competition
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='/sprint-training'>
                <div className="relative border-b-8 border-[#CAEEFB] shadow-xl">
                    <div 
                        className="w-full h-[300px] relative"
                        style={{
                        backgroundImage: `url(${ImgTraining})`,
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
                            <div className="container mx-auto flex justify-center items-end mb-0">
                                <div className="mt-56 text-white text-[1.3rem] md:text-[2rem] font-light lg:text-3xl">
                                    Regular Sprint Training
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='/performance-dashboard'>
                <div className="relative border-b-8 border-[#D9F2D0] shadow-xl">
                    <div 
                        className="w-full h-[300px] relative"
                        style={{
                        backgroundImage: `url(${ImgDashboard})`,
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
                            <div className="container mx-auto flex justify-center items-end mb-0">
                                <div className="mt-56 text-white text-[1.3rem] md:text-[2rem] font-light lg:text-3xl">
                                    Performance Dashboard
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

        <div className='lg:px-20 px-8 lg:mt-6 lg:mt-28 mt-10 mb-28'>
            <h2 className='font-bold lg:text-4xl text-xl mb-6'>Club Membership Subscription</h2>
            <div className='lg:grid grid-cols-2 flex flex-col lg:gap-28 gap-10 mt-14 lg:px-20'>
                <div className='border border-gray-300 rounded-xl shadow-xl py-8 lg:px-28 px-8 flex flex-col gap-1 justify-between h-full'>
                    <div className='flex-grow'>
                        <div className='text-center text-green-600 text-2xl'>Trial</div>
                        <div className='text-center font-bold text-gray-800 text-3xl'>FREE</div>
                        <div className='text-center text-xl text-gray-400'>Up to 1 weeks</div>

                        <div className='flex justify-center py-6'>
                            <ul className='custom-list text-gray-600 flex flex-col gap-2'>
                                <li>Join Reguler Sprint Training</li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex justify-center mt-auto'>
                        <Button size='large' className='bg-green-600 text-white px-28'>Trial</Button>
                    </div>
                </div>

                <div className='border border-gray-300 rounded-xl shadow-xl py-8 lg:px-28 px-8 flex flex-col gap-1 justify-center'>
                    <div className='text-center text-red-600 text-2xl'>Annual Membership</div>
                    <div className='text-center font-bold text-gray-800 text-3xl'>SGD 75</div>
                    <div className='text-center text-xl text-gray-400'>per year</div>

                    <div className='flex justify-center py-6'>
                        <ul className='custom-list text-gray-600 flex flex-col gap-2'>
                            <li>Attend National and Overseas Competitions</li>
                            <li>Go to Oversea training camp</li>
                            <li>Join Regular Sprint Training</li>
                            <li>Develop Proper Sprinting Form</li>
                            <li>Participate in Special Sessions by Overseas Guests</li>
                            <li>Secure Your Own Online Performance/Record Dashboard</li>
                            <li>Get a 20% Discount on Sprint Data Analytics/One-on-One-Coaching</li>
                        </ul>
                    </div>

                    <div className='flex justify-center'>
                        <Button size='large' className='bg-red-600 text-white px-20'>Subscribe Now</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClubMembership