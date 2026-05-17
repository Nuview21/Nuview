import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

function Privacy() {
  const containerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    // Smooth fade in for the policy content
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    )
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    {
      title: 'Information Collection',
      content: 'We collect information necessary to deliver high-performance web solutions. This includes contact details, project assets, and technical metadata required for deployment and site optimization.'
    },
    {
      title: 'Data Usage',
      content: 'Your data is used strictly for project development, communication, and ensuring the scalability of your platform. We do not sell your information to third parties.'
    },
    {
      title: 'Developer Scope',
      content: 'NuView acts as a Data Processor. While we engineer secure tools for your platform, the Client (as the Data Controller) is responsible for the privacy compliance of their own end-users.'
    },
    {
      title: 'Security',
      content: 'We employ industry-standard encryption and secure access protocols (SSL/TLS) to protect your intellectual property and project data during the development lifecycle.'
    }
  ]

  return (
    <div className="bg-neutral-950 min-h-screen w-full text-white font-sans selection:bg-orange-400 selection:text-neutral-950">
      {/* Navigation / Header Gap */}
      <div className="h-20" />

      <main ref={contentRef} className="max-w-4xl mx-auto px-6 py-20">
        {/* Breadcrumb / Label */}
        <p className="text-orange-400 font-[space-mono] text-sm tracking-widest uppercase mb-4">
          Legal Documentation
        </p>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 font-[inria-serif]">
          Privacy <span className="text-orange-400">Policy</span>
        </h1>

        <div className="h-px bg-gradient-to-red from-orange-400/50 to-transparent w-full mb-12" />

        <div className="space-y-16">
          <section>
            <p className="text-xl text-neutral-400 font-[space-mono] leading-relaxed">
              Last Updated: May 14, 2026. <br />
              At NuView, we prioritize the integrity of your digital assets. This policy defines our commitment to data transparency.
            </p>
          </section>

          {/* Policy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sections.map((section, index) => (
              <div key={index} className="group border-l border-neutral-800 pl-6 hover:border-orange-400 transition-colors duration-300">
                <span className="font-[space-mono] text-orange-400/40 text-xs tracking-widest uppercase">
                  Section 0{index + 1}
                </span>
                <h2 className="text-2xl font-bold mt-2 mb-4 group-hover:text-orange-400 transition-colors">
                  {section.title}
                </h2>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 font-[space-mono] text-sm border border-neutral-700 text-neutral-400 px-8 py-4 hover:border-orange-400 hover:text-orange-400 transition-all duration-200"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </main>

      <footer className="border-t border-neutral-900 py-10 px-6 text-center">
        <p className="text-[10px] font-[space-mono] text-neutral-600 uppercase tracking-widest">
          © 2026 NuView Web Development / Portmore, Jamaica
        </p>
      </footer>
    </div>
  )
}

export default Privacy