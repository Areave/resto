export default class RestoService {
  _apiBase = 'http://localhost:3004';

  async getData(url) {
    const res = await fetch(this._apiBase + url);
    if (!res.ok) {
      throw new Error(`Couldn't fetch url ${url}, error is ${res.status}`);
    }

    return await res.json();
  }

  async getMenuItems() {
    return await this.getData('/menu/');
  }
}
