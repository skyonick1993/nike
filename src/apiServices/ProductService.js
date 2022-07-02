import BaseService from "./BaseService";

class ProductService extends BaseService {
  getProductList(gender, typeProduct) {
    return this.get(`product/?gender=${gender}&typeProduct=${typeProduct}`);
  }
}

const productService = new ProductService();
export default productService;
