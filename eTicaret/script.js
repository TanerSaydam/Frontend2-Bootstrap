let products = [
    {
        name: "Domates",
        img: "https://adrossen.com/wp-content/uploads/2022/12/adrossen-katalog-fotolar_raptor-scaled.jpg",
        price: 100,
        category: "Meyveler"
    },
    {
        name: "Salatalık",
        img: "https://d1mm3tuyihn37h.cloudfront.net/wp-content/uploads/Salatalik.jpg",
        price: 100,
        category: "Meyveler"
    },
    {
        name: "Biber",
        img: "https://st2.myideasoft.com/idea/gr/96/myassets/products/010/regina.PNG?revision=1599125812",
        price: 100,
        category: "Meyveler"
    },
    {
        name: "Patlıcan",
        img: "https://www.seraf.com.tr/patlican-sebze-989-30-B.jpg",
        price: 100,
        category: "Meyveler"
    },
    {
        name: "Armut",
        img: "https://st3.myideasoft.com/idea/ha/92/myassets/products/573/armut.png?revision=1656925102",
        price: 100,
        category: "Meyveler"
    }
]

showProducts(products);

function showProducts(data){
    let element = document.getElementById("products");

    element.innerHTML = "";
    
    for(let p of data){
        element.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-4 mt-2">
                        <div class="card">
                            <div class="card-header">
                                <h3>${p.name}</h3>
                                <img src="${p.img}" class="card-img">
                            </div>
                            <div class="card-body">
                                <p class="alert alert-warning center">Kg Fiyatı: <b>${p.price}₺ </b></p>
                                <button class="btn btn-success w-100">
                                    <i class="fa-solid fa-cart-plus"></i>
                                    Sepete Ekle
                                </button>
                            </div>
                        </div>                    
                    </div>       
        `
    }
}




function search(e){
    let newProducts = products.filter(p=> p.name.toLowerCase().includes(e.target.value.toLowerCase()));

    showProducts(newProducts);
}