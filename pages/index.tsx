import type { NextPage } from 'next'
import { useState } from 'react'
import { Card } from '../components/Card'
import { Data, demoData } from '../data/demoData'

const Home: NextPage = () => {
  const [data, setData] = useState<Data>(demoData)
  return (
      <Card data={data}/>
  )
}

export default Home
