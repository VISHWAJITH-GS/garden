import Navbar from '@/components/layout/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, HeartHandshake, Clock3, Flag, Phone, UserRound, ArrowRight, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn, HoverLift } from '@/components/ui/motion'

export default function HomePage() {
  const visionText = 'Empower youth to protect health, serve communities, and lead humanitarian action with responsibility and compassion.'

  const missionIntro = 'Inspire and organize humanitarian action that reduces suffering and builds a more peaceful, resilient society.'

  const missionPoints = [
    'Build awareness of Red Cross roles and responsibilities',
    'Promote personal and community health practices',
    'Encourage civic responsibility through service',
    'Develop leadership with discipline and empathy',
    'Foster friendship without discrimination',
  ]

  const principles = [
    'Protection of Health & Life',
    'Service to the Sick & Suffering',
    'Promotion of National & International Friendship, to develop the mental and moral capacities of the youth',
  ]

  const ircsIntro = 'The Indian Red Cross society is a voluntary humanitarian organization having a network of over 1100 branches throughout the country, providing relief in times of disasters/emergencies and promotes health & care of the vulnerable people and communities. It is a leading member of the largest independent humanitarian organization in the world, the International Red Cross & Red Crescent Movement. The movement has three main components, the International Committee of Red Cross (ICRC), 192 National Societies and International Federation of Red Cross and Red Crescent Societies.'

  const ircsHighlights = [
    { label: 'Founded', value: '1920' },
    { label: 'Branches', value: '1100+' },
    { label: 'Reach', value: '36 States/UTs' },
    { label: 'Movement', value: 'Global Red Cross Network' },
  ]

  const historyText = "After witnessing the 1859 Battle of Solferino, Henry Dunant organized emergency aid and inspired the global Red Cross Movement, formally recognized in 1864."

  const originText = 'The Indian Red Cross Society was established in 1920 through an Act of Parliament, evolving from wartime relief initiatives into a nationwide humanitarian institution.'

  return (
    <>
      <Navbar />

      <main className="mx-auto w-full max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl pb-20 md:pb-14">
        <FadeIn>
          <section id="home" className="px-4 sm:px-5 md:px-10 lg:px-16 py-8 md:py-10 min-h-[calc(100svh-6rem)] md:min-h-[calc(100svh-5rem)] flex items-center scroll-mt-28 md:scroll-mt-24">
            <div className="mx-auto w-full max-w-5xl text-center p-1 sm:p-2 md:p-3">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/images/YRC%20logo.jpeg"
                  alt="YRC TCE Logo"
                  width={160}
                  height={160}
                  className="h-20 w-auto rounded-md object-contain md:h-24"
                  priority
                />
              </div>

              <h1 className="heading-hero text-4xl md:text-6xl text-[var(--color-maroon)]">
                Youth Red Cross
              </h1>

              <p className="mt-3 text-xl md:text-3xl font-semibold font-body text-[var(--color-gold)]">
                Serve. Care. Lead.
              </p>

              <p className="copy-muted mt-4 text-sm md:text-lg mx-auto max-w-3xl">
                Join the Thiagarajar College of Engineering YRC community to promote health awareness,
                humanitarian service, and student-led social impact.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/garden"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-lg bg-[var(--color-maroon)] px-6 py-3 text-sm md:text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-maroon-dark)]"
                >
                  Explore Garden
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="https://www.tce.edu/campuslife/yrc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-lg border border-[var(--color-maroon)] px-6 py-3 text-sm md:text-base font-semibold text-[var(--color-maroon)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-maroon-light)]"
                >
                  Official YRC Page
                  <ExternalLink size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <HoverLift>
                  <div className="group rounded-2xl border border-[var(--color-border)] bg-[#faf7f8] p-5 md:p-6 smooth-shadow transition-all duration-300 hover:shadow-[0_14px_34px_-26px_rgba(122,31,50,0.8)]">
                    <ShieldCheck size={32} className="mx-auto text-[var(--color-maroon)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" strokeWidth={2.2} />
                    <p className="mt-4 heading-section text-xl md:text-2xl text-[var(--color-maroon)] transition-colors duration-300 group-hover:text-[var(--color-maroon-dark)]">Health Protection</p>
                    <p className="mt-3 text-sm md:text-base font-body text-[var(--color-text-secondary)] leading-relaxed max-w-[24ch] mx-auto">Awareness and preventive care for campus community.</p>
                  </div>
                </HoverLift>
                <HoverLift>
                  <div className="group rounded-2xl border border-[#e8dcc2] bg-[#f7f4eb] p-5 md:p-6 smooth-shadow transition-all duration-300 hover:shadow-[0_14px_34px_-26px_rgba(122,31,50,0.8)]">
                    <UserRound size={32} className="mx-auto text-[var(--color-gold)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" strokeWidth={2.2} />
                    <p className="mt-4 heading-section text-xl md:text-2xl text-[var(--color-maroon)] transition-colors duration-300 group-hover:text-[var(--color-maroon-dark)]">Youth Leadership</p>
                    <p className="mt-3 text-sm md:text-base font-body text-[var(--color-text-secondary)] leading-relaxed max-w-[24ch] mx-auto">Student-driven initiatives and civic responsibility.</p>
                  </div>
                </HoverLift>
                <HoverLift>
                  <div className="group rounded-2xl border border-[var(--color-border)] bg-[#faf7f8] p-5 md:p-6 smooth-shadow transition-all duration-300 hover:shadow-[0_14px_34px_-26px_rgba(122,31,50,0.8)]">
                    <HeartHandshake size={32} className="mx-auto text-[var(--color-maroon)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" strokeWidth={2.2} />
                    <p className="mt-4 heading-section text-xl md:text-2xl text-[var(--color-maroon)] transition-colors duration-300 group-hover:text-[var(--color-maroon-dark)]">Humanitarian Service</p>
                    <p className="mt-3 text-sm md:text-base font-body text-[var(--color-text-secondary)] leading-relaxed max-w-[24ch] mx-auto">Blood donation and relief-oriented social outreach.</p>
                  </div>
                </HoverLift>
              </div>
            </div>
          </section>
        </FadeIn>

        <div id="about" className="scroll-mt-28 md:scroll-mt-24">
          <FadeIn delay={0.08} className="px-4 sm:px-5 md:px-10 lg:px-16 pt-6 md:pt-10">
            <div className="mb-4 max-w-3xl">
              <h2 className="heading-section text-2xl md:text-3xl text-[var(--color-maroon)]">About TCE YRC</h2>
              <p className="heading-section text-base md:text-lg text-[var(--color-text-primary)] mt-2">Building a Service-First Student Movement</p>
            </div>
            <section className="rounded-3xl border border-[var(--color-border)] bg-gradient-to-b from-[#fffdfd] to-[#faf7f8] p-5 md:p-8">
              <div className="max-w-3xl">
                <p className="copy-muted text-sm md:text-base mt-2">
                  Vision, mission, core principles, IRCS context, and historical foundation of the Youth Red Cross at TCE.
                </p>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-maroon-border)]">
                    <p className="text-xs text-[var(--color-text-secondary)]">Youth Network</p>
                    <p className="text-sm font-semibold text-[var(--color-maroon)]">10M+</p>
                  </div>
                  <div className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-maroon-border)]">
                    <p className="text-xs text-[var(--color-text-secondary)]">IRCS Founded</p>
                    <p className="text-sm font-semibold text-[var(--color-maroon)]">1920</p>
                  </div>
                  <div className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-maroon-border)]">
                    <p className="text-xs text-[var(--color-text-secondary)]">Branches</p>
                    <p className="text-sm font-semibold text-[var(--color-maroon)]">1100+</p>
                  </div>
                  <div className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-maroon-border)]">
                    <p className="text-xs text-[var(--color-text-secondary)]">Core Motto</p>
                    <p className="text-sm font-semibold text-[var(--color-maroon)]">Serve. Care. Lead.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
                <HoverLift className="lg:col-span-7">
                  <Card className="group rounded-2xl tce-elevated smooth-shadow border-l-4 border-l-[var(--color-maroon)] h-full">
                    <CardContent className="p-5 md:p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <ShieldCheck size={18} className="text-[var(--color-maroon)] transition-transform duration-300 group-hover:scale-110" />
                        <h3 className="heading-section text-[var(--color-text-primary)] text-lg">Vision</h3>
                      </div>
                      <p className="copy-muted text-sm md:text-base">{visionText}</p>
                    </CardContent>
                  </Card>
                </HoverLift>

                <HoverLift className="lg:col-span-5">
                  <Card className="group rounded-2xl tce-elevated smooth-shadow h-full">
                    <CardContent className="p-5 md:p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Flag size={18} className="text-[var(--color-maroon)] transition-transform duration-300 group-hover:scale-110" />
                        <h3 className="heading-section text-[var(--color-text-primary)] text-lg">Principles</h3>
                      </div>
                      <ul className="space-y-2 text-sm md:text-base copy-muted">
                        {principles.map((principle) => (
                          <li key={principle} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                            <span>{principle}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </HoverLift>

                <HoverLift className="lg:col-span-7">
                  <Card className="group rounded-2xl tce-elevated smooth-shadow border-l-4 border-l-[var(--color-gold)] h-full">
                    <CardContent className="p-5 md:p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <HeartHandshake size={18} className="text-[var(--color-maroon)] transition-transform duration-300 group-hover:scale-110" />
                        <h3 className="heading-section text-[var(--color-text-primary)] text-lg">Mission</h3>
                      </div>
                      <p className="copy-muted text-sm md:text-base mb-4">{missionIntro}</p>
                      <ul className="space-y-2 text-sm md:text-base copy-muted">
                        {missionPoints.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-maroon)]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </HoverLift>

                <HoverLift className="lg:col-span-5">
                  <Card className="group rounded-2xl tce-elevated smooth-shadow h-full">
                    <CardContent className="p-5 md:p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <UserRound size={18} className="text-[var(--color-maroon)] transition-transform duration-300 group-hover:scale-110" />
                        <h3 className="heading-section text-[var(--color-text-primary)] text-lg">YRC Coordinators</h3>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm md:text-base font-semibold text-[var(--color-text-primary)]">Dr. V. Velkannan</p>
                          <p className="copy-muted text-sm md:text-base mt-1">Assistant Professor, Chemistry</p>
                          <a
                            href="tel:9840839171"
                            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-[var(--color-maroon-border)] bg-white px-3 py-2 text-sm font-medium text-[var(--color-maroon)] transition-colors hover:bg-[var(--color-maroon-light)]"
                          >
                            <Phone size={14} className="text-[var(--color-maroon)]" />
                            9840839171
                          </a>
                        </div>

                        <div>
                          <p className="text-sm md:text-base font-semibold text-[var(--color-text-primary)]">Dr. P. Priyadharshini</p>
                          <p className="copy-muted text-sm md:text-base mt-1">Assistant Professor, English</p>
                          <a
                            href="tel:9487648432"
                            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-[var(--color-maroon-border)] bg-white px-3 py-2 text-sm font-medium text-[var(--color-maroon)] transition-colors hover:bg-[var(--color-maroon-light)]"
                          >
                            <Phone size={14} className="text-[var(--color-maroon)]" />
                            9487648432
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverLift>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.12} className="px-4 sm:px-5 md:px-10 lg:px-16 pt-5 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
            <HoverLift className="lg:col-span-2">
              <Card className="group rounded-2xl tce-elevated smooth-shadow">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck size={18} className="text-[var(--color-maroon)] transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="heading-section text-[var(--color-text-primary)] text-lg">About IRCS</h3>
                  </div>
                  <p className="copy-muted text-sm md:text-base mb-4">{ircsIntro}</p>
                  <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm md:text-base">
                    {ircsHighlights.map((item) => (
                      <li key={item.label} className="rounded-xl border border-[var(--color-border)] bg-white px-3 py-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-maroon-border)]">
                        <p className="text-xs text-[var(--color-text-secondary)]">{item.label}</p>
                        <p className="mt-1 font-semibold text-[var(--color-maroon)]">{item.value}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </HoverLift>

            <HoverLift>
              <Card className="group rounded-2xl tce-elevated smooth-shadow h-full">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock3 size={18} className="text-[var(--color-maroon)] transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="heading-section text-[var(--color-text-primary)] text-lg">History</h3>
                  </div>
                  <p className="copy-muted text-sm md:text-base">{historyText}</p>
                </CardContent>
              </Card>
            </HoverLift>

            <HoverLift>
              <Card className="group rounded-2xl tce-elevated smooth-shadow h-full">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Flag size={18} className="text-[var(--color-maroon)] transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="heading-section text-[var(--color-text-primary)] text-lg">Origin</h3>
                  </div>
                  <p className="copy-muted text-sm md:text-base">{originText}</p>
                </CardContent>
              </Card>
            </HoverLift>
          </FadeIn>
        </div>

      </main>

    </>
  )
}
