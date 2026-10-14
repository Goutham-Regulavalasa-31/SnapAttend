import { Link, useLocation } from 'react-router-dom'

export default function PortalPlaceholder() {
  const location = useLocation()

  const isTeacher = location.pathname === '/teacher'
  const role = isTeacher ? 'Teacher' : 'Student'

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#5865F2] px-5 text-center">
      <div className="w-full max-w-md rounded-3xl bg-[#E0E3FF] p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-extrabold text-black">
          {role} Portal
        </h1>

        <p className="mt-4 text-gray-700">
          The {role.toLowerCase()} interface will be implemented
          in a future lecture milestone.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex rounded-full bg-[#5865F2] px-6 py-3 font-semibold text-white transition hover:bg-[#4752C4]"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}