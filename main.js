$(document).ready(function () {

    // array of objects of all products.
    var products = [
        {
            id: 1,
            sid: 10,
            title: 'Runnable Shoes',
            price: 13.99,
            spec: 'Runnable Shoes Medium size Fashion and for Gym activites, very comfy for Runnuing.',
            imageUrl: '../Images/pic15.png'
        },
        {
            id: 2,
            sid: 11,
            title: 'Male Sneakers',
            price: 19.99,
            spec: 'Male Sneakeres Large Size Fashion Casual Formal Shoes-BLUE.',
            imageUrl: '../Images/5.jpg'
        },
        {
            id: 3,
            sid: 12,
            title: 'Student Backpack',
            price: 10.99,
            spec: 'Student Backpack Large Size Fashion Casual Formal Student bags, very comfy even with loads.',
            imageUrl: '../Images/pic7.png'
        },
        {
            id: 4,
            sid: 13,
            title: 'Iphone11 4/64GB',
            price: 750.99,
            spec: 'Iphone11 4/64GB White 64G_original-new-apple-i-phone-11-dual-12-mp-c_variants-3',
            imageUrl: '../Images/Black256G_original-new-apple-i-phone-11-dual-12-mp-c_variants-2.jpg'
        },
        {
            id: 5,
            sid: 14,
            title: 'Female Shoes',
            price: 199.99,
            spec: 'Female Shoes Medium Size Fashion Casual Formal Shoes-BLACK.',
            imageUrl: '../Images/pic2.png'
        },
        {
            id: 6,
            sid: 15,
            title: 'Smart Wrist Watch',
            price: 10.99,
            spec: 'Smart Wrist Watch Bluetooth GSM Phone For Android Samsung IPhone (white).',
            imageUrl: '../Images/1.jpg'
        },
        {
            id: 7,
            sid: 16,
            title: 'Sunlight Detergent',
            price: 5.99,
            spec: 'Sunlight 2in1 Spring Sensations Handwash Washing Powder 900g.',
            imageUrl: '../Images/sunlight.jpg'
        },
        {
            id: 8,
            sid: 17,
            title: 'Apple MacBook Pro',
            price: 2999.99,
            spec: 'Apple MacBook Pro - 16" Touch Bar - Intel Core I9 - 16GB - AMD Radeon Pro 5500M - 1TB SSD - Space Gray.',
            imageUrl: '../Images/applelappy.jpg'
        },
    ];

    //variables
    var senderos = [];

    //products sent to local storage
    var sproduct = JSON.stringify(products);
    localStorage.setItem('myProducts', sproduct);

    //getItems of products from l-storage
    var getProduct = localStorage.getItem('myProducts');
    var awaProduct = JSON.parse(getProduct);


    //Products to display in body of Homepage.
    $('#homepage').html(function () {
        displayproducts1();
        displayproducts2();
    })

    function displayproducts1() {
        var spy = '';
        for (let i = 0; i < 4; i++) {
            const ele = awaProduct[i];
            // console.log(ele);
            spy += `<div class="col-sm-12 col-md-3 p-2 tolu" id=${ele.sid}>
            <div class="temi p-2">
            <img src=${ele.imageUrl}
                alt="iphone11" class="img2">
            <div class="shomo mt-2 px-2">
                <div>${ele.title}</div>
                <del class="text-muted">$20,000</del>
                <div>$${ele.price} </div>
            </div>
            <button class="add-cart btn btn-primary shadow mt-2 w-100" id=${ele.id}>
                ADD TO CART
            </button>
            </div>
            </div>
            `;
            getbtnid(`${ele.sid}`)
        }
        $('#homepage').find('#shop').find('.show1').append(spy);
    }

    function displayproducts2() {
        var spy = '';
        for (let i = 4; i < awaProduct.length; i++) {
            const ele = awaProduct[i];
            // console.log(ele);
            spy += `<div class="col-sm-12 col-md-3 p-2 tolu" id=${ele.sid}>
            <div class="temi p-2">
            <img src=${ele.imageUrl}
                alt="iphone11" class="img2">
            <div class="shomo mt-2 px-2">
                <div>${ele.title}</div>
                <del class="text-muted">$20,000</del>
                <div>$${ele.price} </div>
            </div>
            <button class="add-cart btn btn-primary shadow mt-2 w-100" id=${ele.id}>
                ADD TO CART
            </button>
            </div>
            </div>
            `;
            // console.log(`${ele.sid}`);
            getbtnid(`${ele.sid}`)
        }

        $('#homepage').find('#shop').find('.show2').append(spy);
    }


    //function gets the id of a btn and its full details in localstorage
    function getbtnid(x) {
        $(document).on('click', `#${x}`, function () {
            var dato = awaProduct[this.id - 10];

            senderos[0] = dato;
            // console.log(senderos);
            var sender = JSON.stringify(senderos);
            localStorage.setItem('xs', sender);

            window.location.href = "../product-page/index.html";
        })
    }


    //selected products detail set in ls is gotten and siaplayed in productpage; 
    $('#productpage').html(function () {
        productInfo();
    })
    function productInfo() {
        var sender = localStorage.getItem('xs');
        sender = JSON.parse(sender);
        console.log(sender[0].title);
        var sendme = sender[0];

        var dis = `
        <div class="row">
        <div class="col-md-6">
            <img src=${sendme.imageUrl} alt="applelaptop" width="100%">
        </div>
        <div class="col-md-6 pt-2 pb-3">
            <h4>
                ${sendme.spec}
            </h4>

            <div class="smalltext">Brand: <a href="#">HMG</a> | <a href="#">Similar products from Host</a>
            </div>

            <div class="smalltext">
                <span class="fa fa-star text-warning"></span>
                <span class="fa fa-star text-warning"></span>
                <span class="fa fa-star text-warning"></span>
                <span class="fa fa-star text-muted"></span>
                <span class="fa fa-star text-muted"></span>
                <span class="text-muted">( Seller has 3 star ratings )</span>
            </div>

            <div>
                <h4 class="mt-2 pt-2 border-top">$${sendme.price}</h4>
                <del>$25,000.00</del>
            </div>

            <button class="btn ff btn-primary mt-3 shadow w-100 btn-lg" id=${sendme.id}>ADD TO CART
                <i class="fab fa-opencart"></i>
            </button>

        </div>
        </div>        
        `;
        $('#productpage').find('.aa').html(dis);
    }


})