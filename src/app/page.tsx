import Image from "next/image";
import { Navbar, Footer, Form } from "@/components";
import Link from "next/link";
import { experiences, techStack, projects, socmedPattern } from "@/patterns";

export default function Home() {
  return (
    <div className="w-full min-h-svh">
      <Navbar />
      <div className="w-full min-h-svh bg-[url('/bg-1.svg')] bg-cover bg-center flex flex-col lg:flex-row items-center justify-center px-4 py-8 lg:py-0" id="home">
        <div className="flex-1 order-2 lg:order-1 text-center lg:text-left flex items-center justify-center lg:justify-start">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl w-full max-w-2xl mx-auto lg:mx-0 lg:pl-28">
            hello, i am software engineer.
            <Image
              src="/heart.svg"
              alt="heart icon"
              width={40}
              height={40}
              className="inline-block mx-1 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            />
          </h1>
        </div>
        <div className="flex-1 order-1 lg:order-2 flex items-center justify-center">
          <Image
            src="/profile.svg"
            alt="Profile Picture"
            width={300}
            height={300}
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
          />
        </div>
      </div>
      <div className="w-full min-h-screen lg:min-h-svh bg-[#FFF8E8] flex flex-col items-center py-8 lg:py-12 px-4 relative">
        <h2 className="font-bold text-2xl sm:text-3xl mb-6 sm:mb-8">about me</h2>
        <Image
          src="/cat.svg"
          alt="cat icon"
          width={300}
          height={300}
          className="absolute bottom-2 right-2 sm:right-4 w-24 h-28 sm:w-28 sm:h-32 lg:w-[250px] lg:h-[250px] opacity-80"
        />
        <Image
          src="/eye.svg"
          alt="eye icon"
          width={250}
          height={250}
          className="absolute top-20 sm:top-24 lg:top-16 left-2 sm:left-4 w-20 h-20 sm:w-32 sm:h-32 lg:w-[250px] lg:h-[250px] opacity-80"
        />
        <div className="flex-1 flex items-center justify-center w-full min-h-[300px] sm:min-h-[400px]">
          <div className="w-full max-w-7xl h-auto min-h-[400px] lg:h-[600px] bg-[url('/dialog.svg')] bg-cover bg-center flex items-center justify-center px-2 sm:px-4">
            <p className="py-6 sm:py-8 lg:py-50 px-3 sm:px-6 md:px-12 lg:px-60 text-sm sm:text-base lg:text-xl text-center leading-relaxed max-w-4xl">
              My name is Rifqi Alisba Garwita Sutrisno. I specialize in front-end web development, and I also have experience in building back-end systems and deploying applications to various hosting environments.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full min-h-svh bg-[url('/bg-2.svg')] bg-cover bg-center flex flex-col items-center py-12 px-4" id="experiences">
        <h2 className="font-bold text-2xl sm:text-3xl mb-8">experiences</h2>
        <div className="w-full max-w-7xl flex-1 flex items-center justify-center px-4 sm:px-0">
          <ol className="relative border-s border-gray-800 w-full max-w-4xl">
            {experiences.map((experience, index) => (
              <li key={experience.id} className={`mb-8 sm:mb-10 ms-4 ${index === experiences.length - 1 ? 'ms-4' : ''}`}>
                <div className="absolute w-3 h-3 bg-gray-800 rounded-full mt-1.5 -start-1.5 border-2 border-white"></div>
                <time className="mb-1 text-xs sm:text-sm font-normal leading-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">{experience.date}</time>
                <h3 className="text-base sm:text-lg font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-2">{experience.title}</h3>
                <p className="mb-2 text-sm sm:text-base font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {experience.description}
                </p>
                <p className="text-sm sm:text-base font-normal text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {experience.details}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="w-full min-h-svh bg-[#FFF8E8] flex flex-col items-center py-12 px-4 relative" id="projects">
        <h2 className="font-bold text-2xl sm:text-3xl mb-8">projects</h2>
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 flex-1 items-center justify-items-center">
          {projects.map((project) => (
            <Link 
              href={project.href} 
              target="_blank" 
              key={project.id} 
              className="w-full max-w-sm h-[480px] sm:h-[520px] lg:h-[580px] shadow-[_-8px_0_0_0_black,_8px_0_0_0_black,_0_-8px_0_0_black,_0_8px_0_0_black] bg-white block overflow-hidden"
            >
              <div className="w-full h-32 sm:h-40 lg:h-48 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-3 sm:px-4 py-3 sm:py-4 h-[348px] sm:h-[376px] lg:h-[332px] flex flex-col">
                <div className="flex flex-col justify-start mb-3">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black leading-tight line-clamp-2 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2">{project.role}</p>
                </div>
                <div className="flex-1 mb-3">
                  <p className="text-gray-800 text-xs sm:text-sm leading-relaxed line-clamp-4 sm:line-clamp-5 lg:line-clamp-6 overflow-hidden">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto">
                  {project.techStack && (
                    <div>
                      <p className="text-xs font-semibold text-black mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.slice(0, 4).map((tech, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded border"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="text-xs text-gray-500">+{project.techStack.length - 4} more</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full min-h-svh bg-[url('/bg-3.svg')] bg-cover bg-center flex flex-col items-center py-12 px-4" id="skills">
          <h2 className="font-bold text-2xl sm:text-3xl mb-8">skills</h2>
          <div className="w-full max-w-7xl flex-1 flex items-center justify-center">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 w-full px-4 sm:px-0">
              {techStack.map((tech) => (
                <li key={tech.id} className="flex items-center gap-2 justify-center shadow-[_-4px_0_0_0_black,_4px_0_0_0_black,_0_-4px_0_0_black,_0_4px_0_0_black] p-2 sm:p-3">
                  <a href={tech.href} target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-gray-800 text-center">
                    <tech.icon className="text-lg sm:text-xl lg:text-2xl flex-shrink-0" />
                    <span className="text-xs sm:text-sm lg:text-base font-semibold leading-tight">{tech.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>
      <div className="w-full min-h-svh bg-[#FFF8E8] flex flex-col items-center py-12 px-4" id="contact">
        <h2 className="font-bold text-2xl sm:text-3xl mb-8">contact</h2>
        <div className="w-full max-w-7xl flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="w-full lg:flex-1 flex justify-center">
            <Form />
          </div>
          <div className="flex flex-row lg:flex-col items-center justify-center gap-4 lg:gap-6">
            {socmedPattern.map((socmed) => (
              <div
                className="bg-[url('/frame.svg')] bg-cover bg-center w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                key={socmed.id}
              >
                <Link
                  href={socmed.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <socmed.icon className="h-8 w-8 sm:h-12 sm:w-12" />
                  <span className="sr-only">
                    {socmed.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
