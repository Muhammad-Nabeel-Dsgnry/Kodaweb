import Optional from './Optional'
import { WebsitesDataOpt } from './optionalPackages/websites/Websites'

const WebsiteOptional = () => {

  return (
        <section>
            {
                WebsitesDataOpt.map((items) => {
                    return (
                        <Optional key={items.id} item={items} />
                    )
                })
            }
        </section>
  )
}

export default WebsiteOptional