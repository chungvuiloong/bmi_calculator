import Image from 'next/image'
import { HeroBanner } from '@/components/HeroBanner'
import { Benefits }  from '@/components/Benefits'
import { BMIResults } from '@/components/BMIResults'
import { Limitation } from '@/components/Limitations'

export default function Home() {
  return (
    <main>
        <HeroBanner />
        <BMIResults />
        <Benefits />
        <Limitation />
    </main>
  )
}
