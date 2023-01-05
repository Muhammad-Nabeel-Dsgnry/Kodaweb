import Optional from './Optional'
import { BrandingIdentityDataOpt } from './optionalPackages/brandingIdentity/BrandingIdentity'

const BrandingOptional = () => {

  return (
        <section>
            {
                BrandingIdentityDataOpt.map((items) => {
                    return (
                        <Optional key={items.id} item={items} />
                    )
                })
            }
        </section>
  )
}

export default BrandingOptional