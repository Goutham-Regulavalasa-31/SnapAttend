
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Eye,
  EyeOff,
  KeyRound,
  UserRoundPlus,
} from 'lucide-react'

function TeacherHeader() {
  return (
    <header className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
      <Link to="/" className="flex items-center gap-3">
        <img
          src="https://i.ibb.co/YTYGn5qV/logo.png"
          alt="Snap Attend logo"
          className="h-16 w-16 object-contain"
        />

        <h1 className="font-['Climate_Crisis'] text-2xl leading-tight text-[#5865F2]">
          SNAP
          <br />
          ATTEND
        </h1>
      </Link>

      <Link
        to="/"
        className="flex items-center gap-2 rounded-full bg-[#EB459E] px-5 py-3 text-sm font-semibold text-white transition hover:scale-105"
      >
        Go back to Home

        <span className="px-1 text-xs font-normal text-white/60">
            Ctrl + Backspace
        </span>
      </Link>
    </header>
  )
}

function TeacherFooter() {
  return (
    <footer className="mt-10 text-center text-sm font-medium text-gray-700">
      Created with ❤️ by Snap Attend
    </footer>
  )
}

function FormInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === 'password'

  const inputType =
    isPassword && showPassword ? 'text' : type

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-gray-800">
        {label}
      </label>

      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-14 text-gray-900 outline-none transition focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            title={showPassword ? 'Hide password' : 'Show password'}
            className="absolute right-2 top-1/2 flex h-9 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#5865F2] text-white transition hover:bg-[#4752C4]"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default function TeacherAuthPage() {
  const navigate = useNavigate()
  const formRef = useRef(null)

  const [mode, setMode] = useState('login')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const isLogin = mode === 'login'

  function switchMode(nextMode) {
    setMode(nextMode)
    setMessage('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    // Backend authentication will be implemented later.
    setMessage(
      isLogin
        ? 'Teacher login is not connected to a backend yet.'
        : 'Teacher registration is not connected to a backend yet.'
    )
  }

  // Keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(event) {
      // Ctrl + Backspace: Go back to Home
      if (event.ctrlKey && event.key === 'Backspace') {
        event.preventDefault()
        navigate('/')
      }

      // Ctrl + Enter: Submit current form
      if (event.ctrlKey && event.key === 'Enter') {
        event.preventDefault()
        formRef.current?.requestSubmit()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [navigate])

  return (
    <main className="flex min-h-screen flex-col bg-[#E0E3FF] px-5 py-8 sm:px-10">

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col">

        <TeacherHeader />

        <section className="mx-auto my-auto w-full max-w-lg py-12">

          <h2 className="mb-8 text-center text-2xl font-extrabold text-black sm:text-3xl">
            {isLogin
              ? 'Login using password'
              : 'Register your teacher profile'}
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <FormInput
              label="Enter username"
              placeholder="zoroRoronoa03"
              value={username}
              onChange={setUsername}
            />

            {!isLogin && (
              <FormInput
                label="Enter name"
                placeholder="Roronoa Zoro"
                value={name}
                onChange={setName}
              />
            )}

            <FormInput
              label="Enter password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={setPassword}
            />

            {!isLogin && (
              <FormInput
                label="Confirm your password"
                type="password"
                placeholder="Enter password"
                value={confirmPassword}
                onChange={setConfirmPassword}
              />
            )}

            <div className="border-t border-gray-300 pt-6">

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {/* Login / Register submit */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#EB459E] px-4 py-3 font-semibold text-white transition hover:scale-105"
                >
                  <KeyRound size={17} />

                  {isLogin ? 'Login' : 'Register now'}

                  <span className="px-1 text-xs font-normal text-white/60">
                    Ctrl + Enter
                  </span>
                </button>

                {/* Switch between Login and Register */}
                <button
                  type="button"
                  onClick={() => switchMode(isLogin ? 'register' : 'login')}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#5865F2] px-4 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#4752C4]"
                >
                  <UserRoundPlus size={17} />

                  {isLogin ? 'Register Instead' : 'Login Instead'}
                </button>

              </div>
            </div>

            {message && (
              <p
                role="status"
                className="rounded-xl bg-white p-3 text-center text-sm text-gray-700"
              >
                {message}
              </p>
            )}

          </form>
        </section>

      </div>

      <TeacherFooter />

    </main>
  )
}
