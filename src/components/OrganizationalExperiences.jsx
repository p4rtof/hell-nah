import React from 'react'

const OrganizationalExperiences = () => {
  return (
    <main className="container mx-auto max-w-2xl px-6 ">
      <div className="font-bold text-2xl mb-2">Organizational Experience</div>
      {/* 1 */}
      <div className="p-2 flex gap-5">
        <img src="/logo-himalkom.svg" alt="Company-1" className="w-14 h-14  " />
        {/* company name and est */}
        <div className="">
          <div className="flex justify-between gap-3">
            <div className="mb-1 w-fit">
              <div className="font-bold mb-1.5 text-sm sm:text-lg ">Computer Science Student Association (Himalkom), IPB University</div>
              <div className="font-semibold text-gray-600 underline text-sm sm:text-base underline-offset-2 cursor-pointer">Research and Technology Department</div>
            </div>
            <div className="text-gray-600">January 2026 - Present</div>
          </div>
          {/* description */}
          <div className="mt-2 text-justify text-sm sm:text-base bg-yellow-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem facilis accusantium officia in rerum soluta odit similique rem corrupti, sequi facere, eius quo omnis alias sint, velit laudantium culpa. </div>
        </div>
      </div>

      {/* 2 */}
      {/* <div className="p-2 flex gap-5">
        <img src="/image.png" alt="Company-1" className="w-16 h-16 rounded-full border border-black" />
        
        <div className="">
          <div className="flex justify-between gap-3">
            <div className="font-bold">Munshot Del Rey </div>
            <div className="text-gray-600">August 2025 - December 2025</div>
          </div>
       
          <div className="mt-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem facilis accusantium officia in rerum soluta odit similique rem corrupti, sequi facere, eius quo omnis alias sint, velit laudantium culpa. </div>
        </div>
      </div> */}

    </main>
  )
}

export default OrganizationalExperiences