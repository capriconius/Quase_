import * as enums from '../utils/enums/contact'

class Contact {
  constructor(
    public id: number,
    public name: string,
    public genre: enums.Genre,
    public relation: enums.Relation,
    public phone: string,
    public email: string
  ) {}

  getDisplayName(): string {
    return `${this.name} - ${this.relation}`
  }
}

export default Contact
