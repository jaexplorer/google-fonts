const { RESTDataSource } = require("apollo-datasource-rest");

export class FontsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://www.googleapis.com/webfonts/v1/webfonts?";
  }

  async getFonts() {
    const { items } = await this.get("", {
      key: 'AIzaSyCoxwazgrxEfIEQ2HnSZS5Xzc1ikX2gYZc'
    });
    return items;
  }
}