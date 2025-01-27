import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle-favorite"
export default class extends Controller {
  static targets = ["link", "card", "cacheCard"]

  connect() {
    // console.log(this.linkTarget);
  }

  toggleIconFill() {
    // console.log(this.linkTarget);
    // this.linkTarget.className == 'fa-solid fa-heart-circle-minus fa-2xl' ? 'fa-solid fa-heart-circle-plus fa-2xl' : 'fa-solid fa-heart-circle-minus fa-2xl';
    ['fa-heart-circle-plus', 'fa-heart-circle-minus'].map(v=> this.linkTarget.classList.toggle(v) )

    if (this.hasCardTarget) {
      this.showCard();
    }

    if (this.hasCacheCardTarget) {
      // console.log(this.cacheCardTarget);
      // console.log("hello");
      this.removeCacheCard();
    }
  }

  showCard() {
    this.cardTarget.classList.toggle('d-none')
  }

  removeCacheCard() {
    // console.log(this.cacheCardTarget);
    this.cacheCardTarget.classList.add('d-none')
  }
}
