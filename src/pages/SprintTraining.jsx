import HeroBG from '../assets/hero-sprint-training.png'
import ImgSp1 from '../assets/img-sprint1.png'
import ImgSp2 from '../assets/img-sprint2.png'
import ImgSp3 from '../assets/img-sprint3.png'
import ImgSp4 from '../assets/wa-group.png'
import ImgLazy from '../assets/img-lazy.png'
import LeadMelvin from '../assets/melvin-tan.png'
import LeadAlfred from '../assets/alfred-sim1.png'
import LeadHirokazu from '../assets/hirokazu.png'

function SprintTraining() {
    const guestCoaches = {
        coaches: [
            {
                name: 'MELVIN TAN',
                role: 'Executive Head Coach',
                image: LeadMelvin
            },
            {
                name: 'ALFRED SIM',
                role: 'Executive General',
                image: LeadAlfred
            },
            {
                name: 'HIROKAZU KOBAYASHI',
                role: 'AIC Japan Chairman',
                image: LeadHirokazu
            },
            {
                name: 'YUKO KAWAKAMI',
                role: 'Former Olympian',
                image: ImgLazy
            },
            {
                name: 'SOUICHIRO KAWASE',
                role: 'Japan skill coach',
                image: ImgLazy
            },
        ],
    };
    return (
        <div>
            <div className="lg:flex grid">
                <div className='flex flex-col justify-center bg-[#CAEEFB] lg:w-2/4 order-2 lg:order-1'>
                    <div className='bg-[#2D6AE3] text-center font-bold lg:text-3xl text-2xl py-8 text-white'>Regular Sprint Training</div>
                    <p className='lg:px-16 px-8 lg:py-0 py-4 flex-grow flex items-center lg:text-xl text-lg'>Regular free training sessions, access to the stadium, and free coaching techniques can really help members improve their skills and enjoy their time at the club.</p>
                </div>
                <div className='lg:w-3/5 h-auto order-1 lg:order-2'>
                    <img src={HeroBG} className="w-full h-full object-cover" />
                </div>
            </div>

            <div className='lg:px-16 px-8 py-10 text-xl font-medium'>Our programs are designed to be challenging and fun, and we offer a supportive athlete community</div>

            <div className='lg:px-16 px-8 lg:mt-28 mt-20 lg:grid grid-cols-2 flex flex-col lg:gap-20 gap-6 items-center'>
                <div className='flex justify-start'>
                    <img src={ImgSp1} className='shadow-xl' />
                </div>
                <div>
                    <h2 className='font-bold lg:text-4xl text-xl mb-6'>Themed Training Sessions</h2>
                    <p className='mb-6 lg:text-xl'>Focus on different aspects of the sprint each week, such as SPEED, TECHNIQUE, ENDURANCE, and SKILLS. The training program will be provided before the training session through WhatsApp.</p>
                </div>
            </div>

            <div className='lg:px-16 px-8 flex flex-col lg:grid grid-cols-2 lg:gap-20 gap-10 mt-40 py-16 items-center bg-gradient-to-r from-[#002462] to-[#00B0EF]'>
                <div className='lg:text-xl text-lg order-2 lg:order-1 text-white'>
                    <div className='flex flex-col gap-2 border border-gray-200 rounded-xl p-4 shadow'>
                        <h3 className='font-bold text-2xl'>TUESDAY</h3>
                        <p>52 Stadium Rd (Home of Athletics)
                        7:00PM to 8:30/or 9:00PM</p>
                    </div>
                    <div className='flex flex-col gap-2 border border-gray-200 rounded-xl p-4 shadow mt-10'>
                        <h3 className='font-bold text-2xl'>THURSDAY</h3>
                        <p>52 Stadium Rd (Home of Athletics)
                        7:00PM to 8:30/or 9:00PM</p>
                    </div>
                    <div className='flex flex-col gap-2 border border-gray-200 rounded-xl p-4 shadow mt-10'>
                        <h3 className='font-bold text-2xl'>SUNDAY</h3>
                        <p>52 Stadium Rd (Home of Athletics)
                        4:00PM to 6:00PM</p>
                    </div>
                </div>
                <div className='flex lg:justify-center order-1 lg:order-2 lg:py-6'>
                    <img src={ImgSp4} width={410} />
                </div>
            </div>

            <div className='lg:px-16 px-8 lg:mt-28 mt-20 lg:grid grid-cols-2 flex flex-col lg:gap-20 gap-6 items-center'>
                <div className='flex justify-start'>
                    <img src={ImgSp3} className='shadow-xl' />
                </div>
                <div>
                    <p className='mb-6 lg:text-xl'>If you are looking to enrol your trial booking, kindly contact us (WhatsApp) at +65 96607117 (Taka).</p>
                </div>
            </div>

            <div className='lg:px-16 px-8 lg:mt-40 mt-20'>
                <div>
                    <h2 className='font-bold lg:text-4xl text-xl mb-6'>What does a data analytic actually do?</h2>
                    <p className='mb-6 lg:text-xl'>By analyzing your sprint data, you can understand where you currently stand and what you need to do to reach the next level.</p>
                </div>

                <div className='flex flex-col lg:grid grid-cols-2 lg:gap-20 gap-10 mt-20 items-center'>
                    <div className='lg:text-xl text-lg order-2 lg:order-1'>
                        <p className='mb-8'><span className='font-bold'>Injury Prevention:</span> Proper form reduces the risk of injuries by ensuring that your body moves efficiently and avoids unnecessary strain on muscles and joints.</p>
                        <p className='mb-8'><span className='font-bold'>Performance Enhancement:</span> Good form maximizes your speed and endurance by optimizing your body`s biomechanics, allowing you to run faster and longer.</p>
                        <p className='mb-8'><span className='font-bold'>Energy Efficiency:</span> Proper technique helps you use your energy more effectively, reducing fatigue and improving overall performance.</p>
                        <p><span className='font-bold'>Consistency:</span> Maintaining good form helps you perform consistently well, whether in training or competition.</p>
                    </div>
                    <div className='flex lg:justify-end order-1 lg:order-2'>
                        <img src={ImgSp2} />
                    </div>
                </div>
            </div>

            <div className='lg:px-16 px-8 lg:mt-32 mt-28'>
                <div>
                    <h2 className='font-bold lg:text-4xl text-xl mb-6'>Guest Coaches</h2>
                    <p className='mb-6 lg:text-xl'>Invite experienced coaches or former players to run special sessions.</p>
                </div>

                <div className='lg:grid grid-cols-5 flex flex-col gap-10 mb-20 mt-16'>
                    {guestCoaches.coaches.map((member, index) => (
                        <div key={index}>
                            <div className='w-full flex justify-center items-center'>
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className='lg:px-2'>
                                <div className='text-center text-gray-700 text-xl font-bold mt-4'>{member.name}</div>
                                <div className='text-center text-gray-700 text-lg'>{member.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SprintTraining