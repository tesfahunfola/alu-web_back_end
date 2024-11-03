// Methods, static methods, computed method names

export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
