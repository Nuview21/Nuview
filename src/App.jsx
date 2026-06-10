import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger, SplitText)

const services = [
  {
    number: '01',
    title: 'Web Design & UI',
    explanation:
      'Pixel-perfect interfaces built for conversion. We craft visually striking layouts that guide users effortlessly from landing to checkout.',
    tools: ['Figma', 'Framer', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Web Development',
    explanation:
      'Scalable, performant builds using modern frameworks. From landing pages to full-stack applications — clean code, zero compromise.',
    tools: ['React'],
  },
  {
    number: '03',
    title: 'SEO & Performance',
    explanation:
      'Visibility is everything. We engineer sites that rank, load fast, and keep Google happy without sacrificing design quality.',
    tools: ['Lighthouse', 'Semrush', 'Schema.org'],
  },
]

const techStack = [
  'React', 'Javascript',
  'Tailwind CSS', 'Vercel',
  'Figma', 'GSAP', 'Framer Motion', 'Stripe',
]

const demo = [{
  image:"https://cdn.jsdelivr.net/gh/Dwaynewisdom/Portfolio-New@c23d98829b33490b8ef0293713e720878aeb00d3/Images/Website.png",
  Company:"Central Belts and Hosing",
  goal:"We strived to potray the premium quality of the company and it's beliefs, presenting reliability and trust",
  Demo:"https://nuview-26.github.io/CentralBelts/",
  view:"View Demo"
  

}]

function App() {
  const containerRef = useRef(null)
  const headingRef   = useRef(null)
  const paraRef      = useRef(null)
  const dividerRef   = useRef(null)
  const serviceRefs  = useRef([])
  const statRefs     = useRef([])
  const stackRef     = useRef(null)
  const ctaRef       = useRef(null)

  serviceRefs.current = []
  statRefs.current    = []

  const addServiceRef = (el) => el && serviceRefs.current.push(el)
  const addStatRef    = (el) => el && statRefs.current.push(el)

  useEffect(() => {
    let split = SplitText.create('#title', { type: 'words' })

    gsap.from(split.words, {
      x: -100,
      autoAlpha: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
    })

    gsap.fromTo('.animate-img', {
      x: 500,
      opacity: 0,
    }, {
      opacity: 1,
      x: 0,
      stagger: 0.7,
      duration: 1.5,
      ease: 'power2.out',
      delay: 1,
    })

    gsap.fromTo('#demos', {
      x: -500,
      opacity: 0,
    }, {
     
      opacity: 1,
      x: 0,
      stagger: 0.7,
      duration: 2,
      ease: 'power2.out',
      delay: 1, 
      scrollTrigger: {
        trigger: '#demos', 
        start: "70% bottom",
        end:"+300",
        scrub: 1,          
      },
    });
    
  }, [])

  return (
    <div className="bg-neutral-950 min-h-screen w-full relative overflow-hidden text-white">

      <div className="md:h-screen mt-10 md:flex md:flex-row items-center flex flex-col md:items-center md:px-20 md:w-50">
        <h1
          id="title"
          className="text-gray-100 text-5xl w-100 font-bold text-center md:text-left mt-0 uppercase md:text-8xl md:text-gray-100 md:z-10 font-[inria-serif]"
        >
          Build Something that<br />
          <span className="text-amber-600"> matters</span> with NuView
          <br />
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 font-[space-mono] text-sm border border-orange-400 text-orange-400 px-8 py-4 hover:bg-orange-400 hover:text-neutral-950 transition-all duration-200 shrink-0"
          >
            Get Started
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </h1>

        <img src="1.jpg" alt="img" className="animate-img w-60 ml-5 mt-80 absolute h-60 rounded-2xl md:absolute md:right-0 md:w-150 md:h-150 md:mt-100 md:mb-150 md:mr-14 md:rounded-2xl md:object-cover" id="picture" />
        <img src="3.jpg" alt="img" className="animate-img w-40 ml-60 mt-100 absolute h-40 rounded-2xl md:absolute md:right-0 md:w-150 md:h-150 md:mt-300 md:mb-250 md:mr-70 md:rounded-2xl md:object-cover" />
        <img src="2.jpg" alt="img" className="animate-img w-40 mr-60 mt-100 absolute h-40 rounded-2xl md:absolute md:right-0 md:w-150 md:h-100 md:mt-300 md:mb-200 md:mr-5 md:rounded-2xl md:object-cover" />
      </div>


      <div id="about-container" ref={containerRef} className="mt-100">

        <section className="px-6 md:px-16 mt-50 pb-20 max-w-5xl">
          <p className="text-orange-400 font-[space-mono] text-sm tracking-widest uppercase mb-4 mt-50">
            About Us
          </p>
          <h1 ref={headingRef} className="text-5xl md:text-7xl font-bold leading-tight">
            Built to{' '}
            <span className="text-orange-400 relative inline-block">Perform</span>
          </h1>
          <p ref={paraRef} className="mt-8 text-xl md:text-2xl text-neutral-400 max-w-2xl font-[space-mono] leading-relaxed">
            We don't just build websites. We engineer digital platforms that convert
            visitors into customers, scale with your ambitions, and outlast trends.
          </p>
          <div ref={dividerRef} className="mt-12 h-px from-orange-400 via-orange-400/30 to-transparent w-full max-w-2xl" />
        </section>

        <section className="px-6 md:px-16 py-20 max-w-6xl">
          <h2 className="text-sm font-[space-mono] text-orange-400 tracking-widest uppercase mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            {services.map((s) => (
              <div
                key={s.number}
                ref={addServiceRef}
                className="group bg-neutral-950 p-8 hover:bg-neutral-900 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <span className="font-[space-mono] text-orange-400/50 text-xs tracking-widest">{s.number}</span>
                <h3 className="text-2xl font-bold mt-3 mb-4 group-hover:text-orange-400 transition-colors duration-200">{s.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">{s.explanation}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tools.map((t) => (
                    <span key={t} className="font-[space-mono] text-xs px-3 py-1 border border-neutral-700 text-neutral-400 rounded-full group-hover:border-orange-400/40 transition-colors duration-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id='DEMOS' className='font-[space-mono] flex flex-col  items-center align-center justify-center gap-2 mb-50'>
          <h1 className='text-4xl font-bold text-orange-400 p-20'>Demo's </h1>
          {demo.map(({ image, Company, goal, Demo, view }, index) => (
            <div id='demos' key={index} className='w-70 rounded-2xl text-center border-3 border-amber-700 md:w-90 hover:scale-110'>
              <img src={image} className='rounded-t-2xl' alt="Website homepage"/>
              <div className = ' bg-amber-900 rounded-b-2xl'>
                <h1 className='text-2xl uppercase font-bold md:text-3xl'>{Company}</h1>
                <h2 className='md:text-2xl md:p-5'>{goal}</h2>
                <a href={Demo} target = "_blank"><span className='text-orange-200 hover:text-3xl' >{view}</span></a>
              </div>
            </div> 
          ))}
        </section>

        <section className="px-6 md:px-16 py-20 max-w-5xl">
          <h2 className="text-sm font-[space-mono] text-orange-400 tracking-widest uppercase mb-10">
            Our Stack
          </h2>
          <div ref={stackRef} className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="font-[space-mono] text-sm px-4 py-2 border border-neutral-700 text-neutral-300 hover:border-orange-400 hover:text-orange-400 transition-colors duration-200 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section ref={ctaRef} className="px-6 md:px-16 py-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-t border-neutral-800 max-w-6xl">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to build<br />
              <span className="text-orange-400">something real?</span>
            </h2>
            <p className="mt-4 text-neutral-400 font-[space-mono] text-sm max-w-md">
              Let's talk about your project, no templates, your ideas shape your design and we give the{' '}
              <span className="uppercase text-amber-600 font-bold text-2xl">results</span>
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-[space-mono] text-sm border border-orange-400 text-orange-400 px-8 py-4 hover:bg-orange-400 hover:text-neutral-950 transition-all duration-200 shrink-0"
          >
            Start a Project
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </section>


        <footer className="w-full border-t border-neutral-900 bg-neutral-950 pt-16 pb-8 px-6 md:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">NuView</h3>
              <p className="text-white font-[space-mono] text-md leading-relaxed font-bold">
                Helping <span className="text-amber-600 font-bold uppercase">Local</span> businesses stand out online with modern, fast, and affordable web solutions.
              </p>
              <p className="mt-6 text-[10px] font-[space-mono] uppercase tracking-widest text-neutral-600">
                Est. 2026 / Based in Portmore
              </p>
            </div>

            <div>
              <h4 className="font-[space-mono] text-xs uppercase tracking-widest text-orange-400 mb-6"><Link to="/services">Services</Link></h4>
              <ul className="space-y-3 text-sm text-white font-[space-mono]">
                <li><Link to="/webdesign" className="hover:text-orange-400 transition-colors">Web Design / UI</Link></li>
                <li><Link to="/seo" className="hover:text-orange-400 transition-colors">SEO Optimization</Link></li>
                <li><Link to="/development" className="hover:text-orange-400 transition-colors">Web Development</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-[space-mono] text-xs uppercase tracking-widest text-orange-400 mb-6">Connect</h4>
              <ul className="space-y-3 text-sm text-white font-[space-mono]">
                <li className="hover:text-orange-400 transition-colors cursor-pointer underline decoration-orange-400/30"><a href="https://linkedin.com/in/nuview-limited-b8306440b" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li className="hover:text-orange-400 transition-colors cursor-pointer underline decoration-orange-400/30"><a href="https://www.instagram.com/nuview2026/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li className="hover:text-orange-400 transition-colors cursor-pointer underline decoration-orange-400/30"><a href="https://x.com/Nuview2026" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-[space-mono] text-xs uppercase tracking-widest text-orange-400 mb-6">Inquiries</h4>
              <p className="text-sm text-neutral-400 font-[space-mono]">Available Mon — Fri</p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-[space-mono] text-neutral-300 uppercase tracking-tighter md:text-lg">
              © 2026 NuView Web Development. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-[10px] font-[space-mono] text-neutral-600 uppercase">
              <span className="hover:text-neutral-400 cursor-pointer"><Link to="/privacy">Privacy</Link></span>
              <span className="hover:text-neutral-400 cursor-pointer"><Link to="/terms">Terms</Link></span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default App