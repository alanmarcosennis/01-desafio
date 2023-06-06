class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    
    const existingProduct = this.products.find((product) => product.code === code);
    if (existingProduct) {
      console.log("Ya existe un producto con el mismo código");
      return;
    }

    
    const newProduct = {
      id: this.nextId++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    
    this.products.push(newProduct);

    console.log("Producto agregado correctamente");
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      return product;
    } else {
      throw new Error("Not found");
    }
  }
}

// Ejemplo de uso:
const productManager = new ProductManager();

const emptyProducts = productManager.getProducts();
console.log(emptyProducts); 

productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

const productsAfterAdding = productManager.getProducts();
console.log(productsAfterAdding); 

productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25); 

try {
  const nonExistentProduct = productManager.getProductById(4);
  console.log(nonExistentProduct); 
} catch (error) {
  console.log(error.message); 
}

const product = productManager.getProductById(1);
console.log(product); 
