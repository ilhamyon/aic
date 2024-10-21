import { useState } from 'react';
import HeroBG from '../assets/hero-leadership.png'
import LeadTaka from '../assets/lead-taka.png'
import LeadMelvin from '../assets/melvin-tan.png'
import LeadAlfred from '../assets/alfred-sim1.png'
import LeadHirokazu from '../assets/hirokazu.png'

function Leadership() {
    const [activeTab, setActiveTab] = useState('singapore');

    const tabData = {
        singapore: [
            {
                name: 'TAKAYUKI AKAHODANI',
                role: 'Chairman',
                description: 'Taka is Japanese and a medalled athlete. He has been an athlete since elementary school and continues to compete today. In high school, he specialized in the octathlon, and in university, he focused on the decathlon. During his student years, he thoroughly mastered the ‘Mac-style drills,’ a fundamental running technique in Japanese sprinting, and now he incorporates new techniques into his coaching. At the 2024 World Masters Championships in Gothenburg, Sweden, he achieved 8th place in the decathlon. In addition, he was a commercial windsurfing wave rider and a mogul skier at national level.',
                image: LeadTaka
            },
            {
                name: 'MELVIN TAN',
                role: 'Executive Head Coach',
                description: ' Melvin Tan is currently the head coach for sprints at ActiveSG’s athletics club and has previously served as the national relay coach for Singapore. He has been instrumental in coaching the women’s 4x100m relay team and has helped them achieve notable successes, including setting a national junior record. His coaching philosophy focuses on building strong foundations and teamwork among his athletes.',
                image: LeadMelvin
            },
            {
                name: 'ALFRED SIM',
                role: 'Executive General',
                description: 'Alfred Sim was appointed as the Women’s Under-20 4x100m relay head-coach in 2019. As a former Assistant Coach in Sprints and Hurdles, Alfred was in-charge of Singapore’s Youth and Junior Development Team. During Alfred’s 4 year tenure as in-charge, he has led multiple athletes to win both local and international track and field meets. Apart from experience, Alfred also has the necessary technical and theoretical requirements. He completed his IAAF Level 2 (Sprints and hurdles) and NCAP Level 2 coaching courses, and holds a Bachelor of Exercise and Sports Science from Edith Cowan University. Alfred’s interest and passion, combined with his knowledge and expertise in working with athletes across the board has led him to be a recognisable and reliable figure in Singapore’s sporting scene.',
                image: LeadAlfred
            },
        ],
        japan: [
            {
                name: 'HIROKAZU KOBAYASHI',
                role: 'Chairman',
                // description: 'Junior is a dynamic coach known for his innovative training methods. He has a strong background in athletics and has contributed to the development of many successful athletes in Japan.',
                image: LeadHirokazu
            }
        ],
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
                        <div className="container mx-auto lg:pt-40 py-16 lg:py-0 lg:px-14 px-8">
                            <div className="mt-1 text-white text-[1.3rem] md:text-[2rem] font-bold lg:text-[2.8rem]">
                                SENIOR LEADERSHIP
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className='grid grid-cols-2 lg:py-20 py-16'>
                <div
                    className={`px-4 text-center lg:text-xl text-sm font-semibold border-b-4 py-2 cursor-pointer ${activeTab === 'singapore' ? 'border-blue-700' : 'border-transparent'}`}
                    onClick={() => setActiveTab('singapore')}
                >
                    Singapore Senior Executive Committee
                </div>
                <div
                    className={`px-4 text-center lg:text-xl text-sm font-semibold border-b-4 py-2 cursor-pointer ${activeTab === 'japan' ? 'border-blue-700' : 'border-transparent'}`}
                    onClick={() => setActiveTab('japan')}
                >
                    Japan Senior Executive Committee
                </div>
            </div>

            {/* Content of tabs */}
            <div className='lg:grid grid-cols-3 flex flex-col gap-10 px-12 mb-20'>
                {tabData[activeTab].map((member, index) => (
                    <div key={index}>
                        <div className='w-full flex justify-center items-center'>
                            <img src={member.image} alt={member.name} />
                        </div>
                        <div className='lg:px-8'>
                            <div className='text-center text-gray-700 text-xl font-bold mt-4'>{member.name}</div>
                            <div className='text-center text-gray-700 text-lg'>{member.role}</div>
                            <p className='py-2 text-gray-500'>{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Leadership