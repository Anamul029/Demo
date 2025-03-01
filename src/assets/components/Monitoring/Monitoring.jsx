import WebsiteMonitoringCard from "./MonitoringCard";

const Monitoring = () => {
    return (
        <div className='px-[10%] md:w-[1280px] lg:w-[1440px] mx-auto font-inter '>
            <h1 className="font-bold text-3xl md:text-5xl pt-20 text-center md:w-[50%] mx-auto">All you really care about <br />
                <span className="text-teal-600">monitored</span> in one place.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
                <WebsiteMonitoringCard></WebsiteMonitoringCard>
                <WebsiteMonitoringCard></WebsiteMonitoringCard>
                <WebsiteMonitoringCard></WebsiteMonitoringCard>
                <WebsiteMonitoringCard></WebsiteMonitoringCard>
                <WebsiteMonitoringCard></WebsiteMonitoringCard>
                <WebsiteMonitoringCard></WebsiteMonitoringCard>
            </div>
          
        </div>
    );
};

export default Monitoring;