import Optional from './Optional'
import { DigitalMarketingDataOpt } from './optionalPackages/digitalMarketing/DigitalMarketing'

const MarketingOptional = () => {

  return (
        <section>
            {
                DigitalMarketingDataOpt.map((items) => {
                    return (
                        <Optional key={items.id} item={items} />
                    )
                })
            }
        </section>
  )
}

export default MarketingOptional