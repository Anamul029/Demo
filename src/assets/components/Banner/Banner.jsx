const Banner = () => {
    return (
        // <div className="bg-[#131a26]  max-w-[1900px]  mx-auto  px-[10%]">

        <div className='pt-10 bg-white  mx-auto font-inter '>


            <section
                className="relative max-w-[1900px] px-[10%] mx-auto bg-[url(Z)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-black"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div data-aos='fade-up' className="max-w-xl text-center mx-auto ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl text-center font-extrabold text-white sm:text-5xl">
                        Smart Monitoring for 

                            <strong className="block font-extrabold text-rose-500">  a Safer Future </strong>
                        </h1>

                        <p className="mt-4 max-w-lg text-center text-white sm:text-xl/relaxed">
                            Comprehensive Surveillance Solutions with Instant Alerts and Proactive Protection – Because Your Security Matters!
                        </p>

                        <div className="mt-8 flex justify-center flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded-sm bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow-sm hover:text-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;