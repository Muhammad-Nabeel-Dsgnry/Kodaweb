import React from 'react'
import SectionContent from '../sectionContent'
import OptionalPackage from './optionalPackage'

const stepPackageDetails = () => {
  return (
    <>
        <SectionContent
            contentTitle='Package'
            contentMainTitle='Package Details'
            contentText='Do you need more than a logo?'
            contentColorText=''
        />
        <OptionalPackage />
    </>
  )
}

export default stepPackageDetails