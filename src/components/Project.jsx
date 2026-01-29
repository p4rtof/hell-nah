const Project = () => {
    return (
        <main className="container mx-auto max-w-2xl px-6 py-5 text-center mt-10">
            <div className="items-center mx-auto w-fit rounded-lg text-lg font-semibold text-center py-1 px-3 bg-black text-white">My Project</div>
            <div className="text-3xl font-bold tracking-tighter md:text-5xl mt-3 md:mt-5">Check out my latest work</div>
            <div className="mt-4 text-xl  text-gray-600 text-justify mb-5 leading-8 ">To Be Continued ...... </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
                {/* 1 */}
                <div className="container text-left border border-gray-300 px-2 py-1 rounded-lg w-full md:w-full pl-3">
                    <div className="font-bold text-lg mb-1 mt-0.5">Lorem Ipsum</div>
                    <div className="font-sans text-pretty text-sm text-gray-500 leading-5 mb-4 font-medium text-justify mr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perspiciatis? Aliquam, sunt nostrum voluptas deleniti ratione, commodi possimus dolore delectus cumque incidunt rem minus debitis eum sequi! Mollitia, eligendi non?</div>

                    <div className="container flex flex-wrap">
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">Python</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">AI</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">PostgreSQL</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">HTML</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">C++</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">Oracle</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">R Studio</div>
                    </div>

                    <div className="container flex mt-2 mb-1">

                        <div className="bg-black text-white px-1 pr-2 py-1 rounded-md m-1 font-semibold cursor-pointertext-xs flex text-sm h-fit gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>Website </div>
                        <div className="bg-black text-white px-1 pr-2 py-1 rounded-md m-1 font-semibold cursor-pointertext-xs flex text-sm h-fit gap-1 items-center"><a href="https://github.com/username-kamu" target="_blank" className="text-white gap-1 transition flex items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-4">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg> Source
                        </a></div>
                    </div>
                </div>

                {/* 2 */}
                <div className="container text-left border border-gray-300 px-2 py-1 rounded-lg w-full md:w-full pl-3">
                    <div className="font-bold text-lg mb-1 mt-0.5">Lorem Ipsum</div>
                    <div className="font-sans text-pretty text-sm text-gray-500 leading-5 mb-4 font-medium text-justify mr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perspiciatis? Aliquam, sunt nostrum voluptas deleniti ratione, commodi possimus dolore delectus cumque incidunt rem minus debitis eum sequi! Mollitia, eligendi non?</div>

                    <div className="container flex flex-wrap">
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">Python</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">AI</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">PostgreSQL</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">HTML</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">C++</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">Oracle</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">R Studio</div>
                    </div>

                    <div className="container flex mt-2 mb-1">

                        <div className="bg-black text-white px-1 pr-2 py-1 rounded-md m-1 font-semibold cursor-pointertext-xs flex text-sm h-fit gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>Website </div>
                        <div className="bg-black text-white px-1 pr-2 py-1 rounded-md m-1 font-semibold cursor-pointertext-xs flex text-sm h-fit gap-1 items-center"><a href="https://github.com/username-kamu" target="_blank" className="text-white gap-1 transition flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-4">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg> Source
                        </a></div>
                    </div>
                </div>

                {/* 3 */}
                <div className="container text-left border border-gray-300 px-2 py-1 rounded-lg w-full md:w-full pl-3">
                    <div className="font-bold text-lg mb-1 mt-0.5">Lorem Ipsum</div>
                    <div className="font-sans text-pretty text-sm text-gray-500 leading-5 mb-4 font-medium text-justify mr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perspiciatis? Aliquam, sunt nostrum voluptas deleniti ratione, commodi possimus dolore delectus cumque incidunt rem minus debitis eum sequi! Mollitia, eligendi non?</div>

                    <div className="container flex flex-wrap">
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">Python</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">AI</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">PostgreSQL</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">HTML</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">C++</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">Oracle</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">R Studio</div>
                    </div>

                    <div className="container flex mt-2 mb-1">

                        <div className="bg-black text-white px-1 pr-2 py-1 rounded-md m-1 font-semibold cursor-pointertext-xs flex text-sm h-fit gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>Website </div>
                        <div className="bg-black text-white px-1 pr-2 py-1 rounded-md m-1 font-semibold cursor-pointertext-xs flex text-sm h-fit gap-1 items-center"><a href="https://github.com/username-kamu" target="_blank" className="text-white gap-1 transition flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-4">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg> Source
                        </a></div>
                    </div>
                </div>

                {/* 4 */}
                <div className="container text-left border border-gray-300 px-2 py-1 rounded-lg w-full md:w-full pl-3">
                    <div className="font-bold text-lg mb-1 mt-0.5">Lorem Ipsum</div>
                    <div className="font-sans text-pretty text-sm text-gray-500 leading-5 mb-4 font-medium text-justify mr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perspiciatis? Aliquam, sunt nostrum voluptas deleniti ratione, commodi possimus dolore delectus cumque incidunt rem minus debitis eum sequi! Mollitia, eligendi non?</div>

                    <div className="container flex flex-wrap">
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">Python</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">AI</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">PostgreSQL</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">HTML</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">C++</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">Oracle</div>
                        <div className="bg-gray-200 px-2 py-1 rounded-md m-0.5 font-semibold text-xs cursor-pointer">R Studio</div>
                    </div>

                    <div className="container flex mt-2 mb-1">

                        <div className="bg-black text-white px-1 pr-2 py-1 rounded-md m-1 font-semibold cursor-pointertext-xs flex text-sm h-fit gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>Website </div>
                        <div className="bg-black text-white px-1 pr-2 py-1 rounded-md m-1 font-semibold cursor-pointertext-xs flex text-sm h-fit gap-1 items-center"><a href="https://github.com/username-kamu" target="_blank" className="text-white gap-1 transition flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-4">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg> Source
                        </a></div>
                    </div>
                </div>
                
            </div>
        </main>
    )
}

export default Project