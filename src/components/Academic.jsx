const Academic = () => {
    return (
        <main className="container mx-auto max-w-2xl px-6 mb-3">
            <div className="font-bold text-2xl mb-2">Academic</div>
            {/* 1 */}
            <div className="p-2 flex gap-5">
                <img src="/ipb.png" alt="Company-1" className="w-16 h-16 rounded-full " />
                {/* company name and est */}
                <div className="">
                    <div className="sm:flex justify-between gap-3">
                        <div className="mb-1">
                            <div className="font-bold text-base mb-1 sm:text-lg">IPB University</div>
                            <div className="font-semibold text-base sm:text-base text-gray-600 underline underline-offset-2 cursor-pointer">Bachelor of Computer Science</div>
                        </div>
                        <div className="text-gray-600">August 2024 - Present</div>
                    </div>
                    {/* description */}
                    <div className="mt-2 text-justify text-sm sm:text-base md:leading-6 leading-2 bg-yellow-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem facilis accusantium officia in rerum soluta odit similique rem corrupti, sequi facere, eius quo omnis alias sint, velit laudantium culpa. </div>
                </div>
            </div>
        </main>
    )
}

export default Academic