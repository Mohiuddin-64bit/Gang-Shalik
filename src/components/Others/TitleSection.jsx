import React from 'react'

const TitleSection = (props) => {
  const { title, subTitle, description } = props
  return (
    <div className='text-center mx-auto'>
      <h4 className='text-sm'>{subTitle}</h4>
      <h1 className='text-4xl font-bold py-3 '>{title}</h1>
      <p className='text-lg text-gray-500 py-3 max-w-[100ch] mx-auto'>{description}</p>
    </div>
  )
}

export default TitleSection