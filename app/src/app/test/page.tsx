import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Test() {
  return (
    <>
      <h1 className="text-sm font-bold underline">
        Hello world with Tailwind CSS!
      </h1>
    </>
  )
}
