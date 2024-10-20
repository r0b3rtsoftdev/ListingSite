import dataListing from '../data/listings.json'

export default class ApiService {
  static getListing() {
    return fetch('').then(() => dataListing)
  }
}
