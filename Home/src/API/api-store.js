const ApiStore = {
    getAllProducts: async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const result = res.json();
        return result;
    }
};

export { ApiStore }