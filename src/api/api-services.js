import "regenerator-runtime/runtime.js";

export default class ApiService {
  async getResource() {
    const res = await fetch('https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY');
    return await res.json();
  }
}
