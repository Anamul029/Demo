import { TbExternalLink } from 'react-icons/tb';

const InformCustomer = () => {
    return (
        <div>
            <section className="   bg-[#0b0c10] text-white font-inter  px-[10%] py-12 border-t-1 border-t-gray-600 mx-auto md:flex flex-col md:flex-row-reverse items-center justify-between  ">

                <div className="w-full md:w-1/2 flex justify-center">
                    {/* <div className="absolute hidden lg:block top-[8vw] w-[450px] h-[450px] bg-blue-400 rounded-full"></div> */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqs3Z1MtSXvEJYn6djfZTzkrXVkLJv__YUOw&s" alt="Monitoring App" data-aos="fade-up" className="mt-12 lg:mt-0 relative z-10 w-full shadow-lg" />
                </div>

                {/* text content  */}

                <div data-aos="fade-up"  className="w-full mt-8 lg:mt-0 md:w-1/2 text-center space-y-12 md:text-left">
                    <h2 className="text-3xl lg:text-5xl font-bold">
                        Inform your <br /> customers about <br />incidents with  <br />
                        <span className='text-blue-500'> status pages.</span>
                    </h2>
                    <p className="text-xl mt-2">
                        Be transparent. Inform customers of <br /> planned outages. Show them that you <br />
                        strive to keep your service 100% online.
                    </p>
                    <div className="flex justify-center items-center md:justify-start gap-4 mt-4">
                        {/* buttons  */}
                        <button className='flex  gap-2text-left underline hover:no-underline cursor-pointer text-xl font-semibold text-blue-600'>
                            <span>Check LIVE demo</span> <TbExternalLink />
                        </button>

                        <span className='text-xl'>or</span>

                        <button className='text-left underline hover:no-underline cursor-pointer text-xl font-semibold text-blue-600'> Explore Status Pages</button>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default InformCustomer;