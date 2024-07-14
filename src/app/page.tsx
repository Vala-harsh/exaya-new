import { Contact_us } from '@/component/common/Contact_us'
import Image from 'next/image'
import { Contact } from '@/component/Contact'
import data from '@/content/home.json'
import { Herosection } from '@/component/home/Herosection'
import { Features } from '@/component/Features'
import { Card } from '@/component/Card'
import { Mobilecard } from '@/component/Mobilecard'
import { Our_client } from '@/component/home/Our_client'
import { Our_services } from '@/component/home/Our_services'
import { SlideIn } from '@/component/animations/SlideIn'
import { Metadata } from 'next'
export const metadata: Metadata  = {
   title: data.seo.title,
   description:data.seo.desc,
 }
export default function Home() {
  return (
    <div>
      <div className='mt-10'>

      <Herosection data={data.herosection} imageside={"left"} />
      </div>
          
        <Features data={data.featurs} imageside={"right"} />
      <div className='mt-10'>
        <SlideIn>
          <Our_services data={data.ourservices} />
        </SlideIn>

      </div>
      <div className='desktop-only mt-20'>
        <SlideIn>
          <Card data={data.card.list_1} imageside={"right"} snapDirections={"start"} />
        </SlideIn>
        <SlideIn>
          <Card data={data.card.list_2} imageside={"left"} snapDirections={"end"} />
        </SlideIn>

      </div>

      <div className='md:hidden'>
      <SlideIn>
        <Mobilecard data={{ title: data.card.list_1.title, desc: data.card.list_1.desc, items: [...data.card.list_1.items, ...data.card.list_2.items] }} />
     </SlideIn>
      </div>

      <div className='md:my-20 my-10'>
        <SlideIn>
          <Our_client data={data.our_client} />
        </SlideIn>
      </div>

      <div className='mt-10'>
        <SlideIn>
          <Contact data={data} />
        </SlideIn>

      </div>
    </div>
  )
}
