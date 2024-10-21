import HeroBG from '../assets/hero-competition.png'
import { Table, Tag } from 'antd';

const columns = [
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Event',
        dataIndex: 'event',
        key: 'event',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Event Status',
        key: 'status',
        dataIndex: 'status',
        render: (_, { status }) => (
        <>
            {status.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'result') {
                color = 'volcano';
            }
            return (
                <Tag color={color} key={tag}>
                {tag.toUpperCase()}
                </Tag>
            );
            })}
        </>
        ),
    },
    {
        title: 'Venue',
        dataIndex: 'venue',
        key: 'venue',
    },
];

const data = [
    {
        key: '1',
        event: '26th Asian Athletics Championships 2024',
        date: '26 - 29 Sept 2024',
        type: 'Local Competitions',
        venue: 'Supachalasai Stadium',
        status: ['result'],
    },
    {
        key: '2',
        event: 'SA Combined Events Championships 2024',
        date: '27 - 29 Sept 2024',
        type: 'Local Competitions',
        venue: 'Home of Athletics',
        status: ['register'],
    },
    {
        key: '3',
        event: 'Asian Throwing Championships 2024',
        date: '20 - 22 Sept 2024',
        type: 'Local Competitions',
        venue: 'Mokpo, Korea',
        status: ['register'],
    },
];

function Competitions() {
    return (
        <div>
            <div className="lg:flex grid">
                <div className='flex flex-col justify-center bg-[#FFF9D7] lg:w-2/4 order-2 lg:order-1'>
                    <div className='bg-[#F3CB03] text-center font-bold lg:text-3xl text-2xl py-8'>Competition</div>
                    <p className='lg:px-16 px-8 lg:py-0 py-4 flex-grow flex items-center lg:text-xl text-lg'>Athletes are competitive individuals who relish improving their skills and showing their prowess in their chosen sport. One of the ways they showcase their talents and earn glory for themselves and their countries is by participating in competitions.</p>
                </div>
                <div className='lg:w-3/5 h-auto order-1 lg:order-2'>
                    <img src={HeroBG} className="w-full h-full object-cover" />
                </div>
            </div>

            <div className='lg:px-16 px-8 py-10 text-xl font-medium'>Let`s participate in races as AIC, both domestically and internationally!</div>

            <div className='lg:px-16 px-8 lg:mt-10 lg:mt-28 mt-10 mb-20'>
                <h2 className='font-bold lg:text-4xl text-xl mb-6'>Race Calendar</h2>
                <div className='mt-10'>
                    <Table
                        columns={columns}
                        dataSource={data}
                        className="custom-table-header"
                        scroll={{ x: '100%' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Competitions