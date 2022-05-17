export default class HeroService {
  constructor({ heroRepository }) {
    this.heroRepository = heroRepository
  }

  find() {
    return this.heroRepository.find()
  }

  async create(data) {
    await this.heroRepository.create(data)
  }
}