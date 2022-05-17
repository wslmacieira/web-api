import HeroRepository from '../repositories/heroRepository'
import HeroService from '../services/heroService'

const generateInstance = ({
  filePath
}) => {
  // hero goes all db connections
  const heroRepository = new HeroRepository({ file: filePath })
  const heroService = new HeroService({ heroRepository })

  return heroService
}

export { generateInstance }