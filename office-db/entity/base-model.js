const PAGE_SIZE = 20;

export default class BaseModel {
  constructor(
    options = { tableName: null, primaryKey: null, store: null, keys: null }
  ) {
    let { tableName, primaryKey, store, keys } = options;
    if (!tableName || !primaryKey || !store || !keys) {
      throw new Error("Invalid Values passed to Model!");
    }
    this.table = tableName;
    this.primaryKey = primaryKey;
    this.store = store;
    this.keys = keys;
  }

  async addNew(entity) {
    return this.store(this.table).insert(entity);
  }

  async find(id, query) {
    if (id) {
      return this.findOne(id);
    }
    let selectAll = this.store.select("*").from(this.table);
    let page = query.page || 0;
    return selectAll.limit(PAGE_SIZE).offset(page * PAGE_SIZE);
  }

  async update(id, data) {
    return this.store(this.table)
      .where(this.primaryKey, id)
      .update(data);
  }

  async delete(id) {
    return this.store(this.table)
      .where(this.primaryKey, id)
      .del();
  }

  async findOne(id) {
    return this.store
      .select("*")
      .from(this.table)
      .where(this.primaryKey, id);
  }

  validateAddNewData(inputKey) {
    let expectedKey = this.keys;
    if (
      inputKey.length - expectedKey.length > 1 ||
      inputKey.length < expectedKey.length
    ) {
      return false;
    }
    return expectedKey.every(key => {
      if (key !== this.primaryKey && inputKey.indexOf(key) < 0) {
        return false;
      }
      return true;
    });
  }
  isPartOfExpected(key) {
    return !(this.keys.indexOf(key) < 0);
  }

  isValidData(data) {
    console.log(data);
    data = Object.assign({}, data);
    let inputKey = Object.keys(data);
    console.log(inputKey, this.keys);
    return inputKey.every(this.isPartOfExpected.bind(this));
  }
}
