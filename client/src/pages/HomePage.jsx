import { Link } from 'react-router-dom'

const portals = [
  {
    title: "I'm Student",
    description: 'Access your student portal',
    image: 'https://i.ibb.co/844D9Lrt/mascot-student.png',
    imageAlt: 'Student mascot',
    path: '/student',
  },
  {
    title: "I'm Teacher",
    description: 'Access your teacher portal',
    image: 'https://i.ibb.co/CsmQQV6X/mascot-prof.png',
    imageAlt: 'Teacher mascot',
    path: '/teacher',
  },
]

function PortalCard({ portal }) {
  return (
    <section className="flex flex-col items-center rounded-[2.5rem] bg-[#E0E3FF] px-6 py-9 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 sm:px-10 sm:py-12">
      <h2 className="text-2xl font-extrabold text-black sm:text-3xl">
        {portal.title}
      </h2>

      <img
        src={portal.image}
        alt={portal.imageAlt}
        className="my-6 h-36 w-36 object-contain"
      />

      <p className="mb-6 text-sm text-gray-700">
        {portal.description}
      </p>

      <Link
        to={portal.path}
        className="inline-flex items-center gap-3 rounded-full bg-[#5865F2] px-6 py-3 font-semibold text-white transition hover:bg-[#4752C4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        {portal.title.replace("I'm ", '')} Portal
        <span aria-hidden="true">↗</span>
      </Link>
    </section>
  )
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#5865F2] px-5 py-8 sm:px-8">
      <header className="mb-10 flex flex-col items-center text-center">
        <img
          src="https://i.ibb.co/YTYGn5qV/logo.png"
          alt="Snap Attend logo"
          className="h-24 w-24 object-contain"
        />

        <h1 className="mt-3 font-['Climate_Crisis'] text-4xl leading-tight text-[#E0E3FF] sm:text-6xl">
          SNAP
          <br />
          ATTEND
        </h1>

        <p className="mt-4 text-sm text-white/90 sm:text-base">
          Smart attendance, simplified.
        </p>
      </header>

      <div className="mx-auto grid w-full max-w-4xl flex-1 content-center grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {portals.map((portal) => (
          <PortalCard key={portal.path} portal={portal} />
        ))}
      </div>

      <footer className="mt-10 flex items-center justify-center gap-2 text-sm font-medium text-white">
        <span>Created with ❤️ by</span>
        <span className="font-bold">Snap Attend</span>
      </footer>
    </main>
  )
}