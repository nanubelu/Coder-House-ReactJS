export const products = [

    {id: 1, title: "Buzo blanco Zoro One Piece",category: 'invierno', description: "", price: '$2500', pictureUrl:"https://i.postimg.cc/fRTtHm2R/1.jpg"},
    {id: 3, title: "Buzo rojo Killua Hunter x Hunter",category: 'invierno', description: "", price: '$2500', pictureUrl:"https://url24.top/noUKd"},
    {id: 4, title: "Buzo negro Jotaro Jojo Bizarre Adventure",category: 'verano', description: "", price: '$2500', pictureUrl:"https://url24.top/cgavw"},
    {id: 5, title: "Buzo verde/blanco Hisoka Hunter x Hunter",category: 'invierno', description: "", price: '$2500', pictureUrl: "https://url24.top/ebgML"},
    {id: 6, title: "Buzo Monokuma Danganronpa",category: 'verano', description: "", price: '$2500', pictureUrl: "https://url24.top/gCTcd"},

]

export const getAllProducts = () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(products);
        }, 2000)
    })

    return promise
};

export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
        const result = products.find((product) => products.id === parseInt(id))
        setTimeout(() => {
            return resolve(result);
        }, 2000)
    })

    return promise
};

export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
        const results = products.filter((product) => products.category === categoryId);
        setTimeout(() => {
            return resolve(results);
        }, 2000)
    })

    return promise

};
