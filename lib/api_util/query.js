class Query {
  constructor() {
    this.search = {
      products: [],
      reactions: [],
      outcomes: [],
    };
    this.countBy = "reactions";
    this.limit = "10";
    this.dateRange = ["20000101, 20170101"];
  }

  addSearch(kind, searchParam) {
    if (this.search.kind) {
      this.search.kind.push(searchParam);
    }
  }

  countBy(param) {
    this.countBy = param;
  }

  getTop(num) {
    if (typeof num === "number") this.limit = String(num);
  }

  _addParamToSearch(kind, array) {
    let searchSubstring = '';
    for (let x = 0; x < array.length; x ++) {
      switch(kind) {
        case 'products':
          searchSubstring += `products.name_brand:"${array[x]}""+`;
          break;
        case 'reactions':
          searchSubstring += `reactions:"${array[x]}"+`;
          break;
        case 'outcomes:'
          searchSubstring += `outcomes:"${array[x]}"+`;
          break;
      }
    }

    return productQuery.slice(0, -1);
  }

  _searchString() {
    const searchString = `search=date_started:[${begin}+TO+${end}]+AND+`;
    for (let param in this.search) {
      if(this.search.param.length > 0) {
        searchString += _addParamToSearch(param, this.search.param) + "+AND+";
      }
    }
    return searchString.slice(0, -5) + '&';
  }

  _countString() {
    const countString = 'count=';
    switch(this.countBy) {
      case 'products':
        return countString + 'products.name_brand.exact&';
      case 'reactions':
        return countString + 'reactions.exact&';
      case 'outcomes':
        return countString + 'outcomes.exact&';
    }
  }

  _limitString() {
    return `limit="${this.limit}"`;
  }

  getQueryString() {
    return _searchString() + _countString() + _limitString();
  }
}

export default Query;

const nonSerious = () => 'NON-SERIOUS';
const otherSerious = () => 'OTHER SERIOUS';
const visitedHealthCare = () => 'HEALTH CARE';
const hospitalized = () => 'HOSPITALIZATION';
const visitedER = () => 'VISITED AN ER';
const lifeThreatened = () => 'LIFE THREATENING';
const reqIntervention = () => 'INTERVENTION';
const seriousInjuries = () => 'SERIOUS INJURIES';
const disabled = () => 'DISABILITY';
const death = () => 'DEATH';

const fastFood = 'fast food';
const chicken = 'chicken';
const salmon = 'salmon';
const alcohol = 'alcohol';
const peanut = "PEANUT";
const milk = "MILK";
const cosmetics = ["cosmetics", "make up", "shampoo", "conditioner"];
const vitamins = ["vitamin", "vitamins", "supplements", "centrum"];
