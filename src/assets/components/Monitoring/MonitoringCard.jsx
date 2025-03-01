
const Card = () => {
    return (
        <div data-aos='fade-up' className=" rounded-2xl  overflow-hidden shadow-2xl bg-[#ffffff] p-5">
            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                <img
                    alt=""
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqs3Z1MtSXvEJYn6djfZTzkrXVkLJv__YUOw&s"
                    className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6">
                    <time  className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                    <a href="#">
                        <h3 className="mt-0.5 text-lg text-gray-900">Card Tittle Name                       </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Keep your online presence secure and avoid any potential damage by monitoring your domain's expiration date.
                    </p>
                </div>
            </article>
        </div>
    );
};

export default Card;