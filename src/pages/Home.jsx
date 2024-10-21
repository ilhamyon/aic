import { Button } from 'antd'
import HeroBG from '../assets/Hero.png'
import ImgAIC from '../assets/img-aic-accs.png'
import ImgAICWorkshop from '../assets/img-aic-workshop.png'
import ImgGrid1 from '../assets/img-grid1.png'
import ImgGrid2 from '../assets/img-grid2.png'
import ImgGrid3 from '../assets/img-grid3.png'
import Sponsor1 from '../assets/sp-saa.jpg'
import Sponsor2 from '../assets/sp-futureathletics.jpg'
import Sponsor3 from '../assets/sp-jca.jpg'
import Sponsor4 from '../assets/sp-club.jpg'
import Sponsor5 from '../assets/sp-aic.jpg'
import Sponsor6 from '../assets/sp-hakovo.jpg'
import Ic1 from '../assets/ic-1.png'
import Ic2 from '../assets/ic-2.png'
import Ic3 from '../assets/ic-3.png'
import Ic4 from '../assets/ic-4.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className="relative">
            <div 
                className="w-full h-[100vh] relative"
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
                    <div className="container mx-auto lg:pt-40 pt-32 lg:px-14 px-8">
                        <div className="mt-1 text-white text-[1.3rem] md:text-[2rem] font-bold lg:text-[2.8rem]">
                            READY TO WIN
                        </div>
                        <div className="text-white lg:text-2xl font-light max-w-3xl mt-4">
                            <p>Winning coaches know how to win. Good coaching is about knowledge, skills, communication, and technical understanding.</p>
                            <p className='mt-4'>
                                The <span className='font-semibold italic'>ASIAN INTER-CLUBS ATHLETICS ALLIANCE SINGAPORE</span> is conducting exchange opportunities to improve the quality of coaches and athletes in the Asia region.
                            </p>
                        </div>
                        <div className='hidden lg:flex gap-4 mt-10'>
                            <Link to='one-on-one-coaching'>
                                <Button size='large' className='bg-transparent text-white'>Find a Coach for ONE-ON-ONE</Button>
                            </Link>
                            <Button size='large' className='bg-red-700 border-0 text-white'>Registration</Button>
                        </div>
                        <div className='flex lg:hidden gap-4 mt-10 flex flex-col'>
                            <Button className='bg-transparent text-white'>
                                <Link to='one-on-one-coaching'>Find a Coach for ONE-ON-ONE</Link>
                            </Button>
                            <Button className='bg-red-700 border-0 text-white'>Registration</Button>
                        </div>
                    </div>
                    <div className='container mx-auto lg:text-xl text-sm font-light text-white flex justify-center text-center space-x-6 md:space-x-5 lg:py-28 py-16 px-8 xl:px-0'>
                        <p>We provide the <span className='italic font-semibold'>CERTIFICATE OF THE COACHING IN SPORTS</span> at regional level</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='lg:px-12 px-8 lg:py-36 py-28 lg:grid grid-cols-4 flex flex-col gap-10 text-white'>
            <div className='bg-red-700 p-5 rounded flex justify-center shadow-xl'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div><img src={Ic1} className='lg:h-28 h-20' /></div>
                    <div className='text-center'>Unique method of AIC-ACCS</div>
                </div>
            </div>
            <div className='bg-red-700 p-5 rounded flex justify-center shadow-xl'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div><img src={Ic2} className='lg:h-28 h-20' /></div>
                    <div className='text-center'>Experienced senior coach</div>
                </div>
            </div>
            <div className='bg-red-700 p-5 rounded flex justify-center shadow-xl'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div><img src={Ic3} className='lg:h-28 h-20' /></div>
                    <div className='text-center'>Data analytics</div>
                </div>
            </div>
            <div className='bg-red-700 p-5 rounded flex justify-center shadow-xl'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div><img src={Ic4} className='lg:h-28 h-20' /></div>
                    <div className='text-center'>Regional network exchange</div>
                </div>
            </div>
        </div>

        <div className='lg:px-20 px-8 lg:grid grid-cols-2 flex flex-col lg:gap-20 gap-6 items-center'>
            <div className='order-2 lg:order-1'>
                <h2 className='font-bold lg:text-4xl text-xl mb-6'>What is AIC-ACCS?</h2>
                <p className='mb-6 lg:text-xl'>The foundation of AIC is coaching development for Asian coaches. Even today, Western coaching is the mainstream, but both our athletes and coaches are Asian.</p>
                <p className='lg:text-xl'>ASIAN INTER-CLUBS ATHLETICS ALLIANCE (AIC) provides “Advanced Coaching Certification System” (ACCS), founded by AIC Headquarter in Japan. There are stages for certification.</p>
            </div>
            <div className='flex justify-end order-1 lg:order-2'>
                <img src={ImgAIC} className='shadow-xl' />
            </div>
        </div>

        <div className='lg:px-20 px-8 lg:mt-40 mt-28 lg:grid grid-cols-2 flex flex-col lg:gap-20 gap-6 items-center'>
            <div className='flex justify-start'>
                <img src={ImgAICWorkshop} className='shadow-xl' />
            </div>
            <div>
                <h2 className='font-bold lg:text-4xl text-xl mb-6'>AIC Workshop</h2>
                <p className='mb-6 lg:text-xl'>This organization aims to improve the development and strategies to coaching qualities of athletic club/school organizations in Asian countries and regions. Planned in 2019 and officially established in 2022, AIC aims to become an organization that promotes Asian-Japanese-style coaching and international exchange of athletes by setting its headquarters in Japan.</p>
                <p className='lg:text-xl'>Two workshops held in Singapore and Tokyo in 2023 solidified the bonds between AIC Japan, AIC Singapore, and AIC Hong Kong. In addition, a Taiwanese member joined the Tokyo workshop, and it was decided to establish AIC Taiwan.</p>
            </div>
        </div>

        <div className='flex justify-between lg:gap-4 lg:mt-40 mt-20 w-full'>
            <div className='flex col-span-3'>
                <img src={ImgGrid1} />
            </div>
            <div className='flex'>
                <img src={ImgGrid2} />
            </div>
            <div className='flex'>
                <img src={ImgGrid3} />
            </div>
        </div>

        <div className='grid lg:grid-cols-6 grid-cols-2 gap-16 lg:py-40 py-20 w-full px-12'>
            <div className='flex justify-center'>
                <img src={Sponsor1} className='w-auto' />
            </div>
            <div className='flex justify-center'>
                <img src={Sponsor2} className='w-auto' />
            </div>
            <div className='flex justify-center'>
                <img src={Sponsor3} className='w-auto' />
            </div>
            <div className='flex justify-center'>
                <img src={Sponsor4} className='w-auto' />
            </div>
            <div className='flex justify-center'>
                <img src={Sponsor5} className='w-auto' />
            </div>
            <div className='flex justify-center'>
                <img src={Sponsor6} className='w-auto' />
            </div>
        </div>
    </div>
  )
}

export default Home