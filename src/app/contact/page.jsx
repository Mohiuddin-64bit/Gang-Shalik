import ContactForm from '@/components/Others/ContactForm'
import PageHeader from '@/components/Others/PageHeader'
import TitleSection from '@/components/Others/TitleSection'
import React from 'react'

const ContactPage = () => {
  return (
    <>
      <PageHeader title='Contact' subTitle='TASTY AND CRUNCHY' description='Take a virtual tour through our gallery and immerse yourself in the enchanting ambiance of Gangshalik.' />
      <section className='pt-36 container'>
        <ContactForm />
      </section>
      <div className="w-full mt-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14608.202842455468!2d90.4666232!3d23.745571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7cf6cfeb315%3A0x34206751f953a2a8!2zR2FuZyBTaGFsaWsgKOCml-CmvuCmgiDgprbgpr7gprLgpr_gppUp!5e0!3m2!1sen!2sbd!4v1718304132438!5m2!1sen!2sbd" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}

export default ContactPage