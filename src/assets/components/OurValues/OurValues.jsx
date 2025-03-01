import logo from '../../images/Black.png'
import logo1 from '../../images/Group 6.png'


const OurValues = () => {
    return (
        <div className='py-10 px-[7%] bg-[#0b0c10]   mx-auto font-inter '>
            <div className='flex justify-center items-center gap-4 pb-10'>
                <img src={logo} alt="" className='h-12 w-12' />
                <h1 className='text-4xl text-white font-bold'>Our Values</h1>
            </div>
            <div className='flex flex-col gap-6 mx-auto  justify-center px-10 lg:gap-8 md:flex-row '>
                <div data-aos='fade-up' className='flex justify-center items-center flex-col gap-5 md:scale-75'>
                    <img src={logo1} alt="" className='Md:h-[134px] md:w-[134px]' />
                    <h1 className='text-[28px] text-white font-semibold'>Our Philosophy</h1>
                    <p className='md:text-[22px] w-[252px] text-white lg:w-[342px] md:h-[191px] text-center'>A clean environment supports a healthier, more productive space — our meticulous maintenance system ensures lasting quality for your peace of mind.</p>
                </div>
               
                <div data-aos='fade-up' className='flex justify-center items-center flex-col gap-5 md:scale-75'>
                    <img src={logo1} alt="" className='h-[134px] w-[134px]' />
                    <h1 className='text-[28px]  text-white font-semibold'>Our People</h1>
                    <p className='md:text-[22px] w-[252px] text-white lg:w-[342px] md:h-[191px] text-center'>Our team is our greatest asset, bringing skill, experience, and dedication to every project. We believe that a strong, committed team is key to delivering exceptional service.</p>
                </div>
               
                <div data-aos='fade-up' className='flex justify-center items-center flex-col gap-5 md:scale-75'>
                    <img src={logo1} alt="" className='h-[134px] w-[134px]' />
                    <h1 className='text-[28px]  text-white font-semibold'>Communities</h1>
                    <p className='md:text-[22px] w-[252px] lg:w-[342px] md:h-[191px] text-white text-center'>Local commitment is at our core — we prioritize hiring locally, strengthening community skills, supporting local suppliers, and fostering economic growth.</p>
                </div>
            </div>
        </div>
    )
}

export default OurValues