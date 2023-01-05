import Optional from './Optional'
import { LogoDesignDataOpt } from './optionalPackages/logoDesign/LogoDesignData'

const LogoOptional = () => {

  return (
        <section>
            {
                LogoDesignDataOpt.map((items) => {
                    return (
                        <Optional key={items.id} item={items} />
                    )
                })
            }
        </section>
  )
}

export default LogoOptional