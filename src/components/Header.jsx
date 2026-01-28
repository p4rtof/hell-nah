function Header() {
  return (
    <main className="container mx-auto max-w-2xl pt-12 sm:pt-14 px-6">

      {/* Header Container */}
      <div className="flex items-center justify-between">

        {/* TEXT SECTION */}
        <div className="flex-1 pr-2">
          <h1 className="font-bold md:text-6xl text-4xl">Hi, I'm Aaron</h1>
          <p className="text-base text-gray-600 mt-2 sm:text-xl">
            Front-End Developer crafting immersive and interactive web experiences.
          </p>

          <div className="flex items-center gap-2 mt-4 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>

            <a href="mailto:fadhla153@gmail.com" className="hover:underline underline-offset-2">
              aaron@gmail.com
            </a>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shrink-0 border-2 border-gray-100"
        />

      </div>
    </main>
  )
}

export default Header