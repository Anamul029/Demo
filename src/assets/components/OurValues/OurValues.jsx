import logo from '../../images/Black.png'
import logo1 from '../../images/Group 6.png'
import devider from "../../images/Group_4-removebg-preview.png";


const OurValues = () => {
    return (
        <div className='py-10 md:w-[1280px] lg:w-[1440px] mx-auto font-inter '>
            <div className='flex justify-center items-center gap-4 pb-10'>
                <img src={logo} alt="" className='h-12 w-12' />
                <h1 className='text-4xl text-black font-bold'>Our Values</h1>
            </div>
            <div className='flex flex-col gap-6 mx-auto  justify-center md:gap-22 md:flex-row'>
                <div className='flex justify-center items-center flex-col gap-5'>
                    <img src={logo1} alt="" className='h-[134px] w-[134px]' />
                    <h1 className='text-[28px] text-black font-semibold'>Our Philosophy</h1>
                    <p className='md:text-[22px] w-[252px] text-black md:w-[342px] md:h-[191px] text-center'>A clean environment supports a healthier, more productive space — our meticulous maintenance system ensures lasting quality for your peace of mind.</p>
                </div>
                {/* <div className='mt-10 mx-auto'>
                    <img src={devider} alt="" className='w-[227px]' />
                </div> */}
                <div className='flex justify-center items-center flex-col gap-5'>
                    <img src={logo1} alt="" className='h-[134px] w-[134px]' />
                    <h1 className='text-[28px]  text-black font-semibold'>Our People</h1>
                    <p className='md:text-[22px] w-[252px] text-black md:w-[342px] md:h-[191px] text-center'>Our team is our greatest asset, bringing skill, experience, and dedication to every project. We believe that a strong, committed team is key to delivering exceptional service.</p>
                </div>
                {/* <div className='mt-10 mx-auto'>
                    <img src={devider} alt="" className='w-[227px]' />
                </div> */}
                <div className='flex justify-center items-center flex-col gap-5'>
                    <img src={logo1} alt="" className='h-[134px] w-[134px]' />
                    <h1 className='text-[28px]  text-black font-semibold'>Communities</h1>
                    <p className='md:text-[22px] w-[252px] md:w-[342px] md:h-[191px] text-black text-center'>Local commitment is at our core — we prioritize hiring locally, strengthening community skills, supporting local suppliers, and fostering economic growth.</p>
                </div>
            </div>
        </div>
    )
}

export default OurValues