$(document).ready(function () {

    // array of objects of all products.
    var products = [
        {
            id: 1,
            sid: 10,
            title: 'Runnable Shoes',
            price: 13.99,
            spec: 'Runnable Shoes Medium size Fashion and for Gym activites, very comfy for Runnuing.',
            imageUrl: '../Images/pic15.png',
            amount: 1
        },
        {
            id: 2,
            sid: 11,
            title: 'Male Sneakers',
            price: 19.99,
            spec: 'Male Sneakeres Large Size Fashion Casual Formal Shoes-BLUE.',
            imageUrl: '../Images/5.jpg',
            amount: 1
        },
        {
            id: 3,
            sid: 12,
            title: 'Student Backpack',
            price: 10.99,
            spec: 'Student Backpack Large Size Fashion Casual Formal Student bags, very comfy even with loads.',
            imageUrl: '../Images/pic7.png',
            amount: 1
        },
        {
            id: 4,
            sid: 13,
            title: 'Iphone11 4/64GB',
            price: 750.99,
            spec: 'Iphone11 4/64GB White 64G_original-new-apple-i-phone-11-dual-12-mp-c_variants-3',
            imageUrl: '../Images/iphone11s.jpg',
            amount: 1
        },
        {
            id: 5,
            sid: 14,
            title: 'Female Shoes',
            price: 199.99,
            spec: 'Female Shoes Medium Size Fashion Casual Formal Shoes-BLACK.',
            imageUrl: '../Images/pic2.png',
            amount: 1
        },
        {
            id: 6,
            sid: 15,
            title: 'Smart Wrist Watch',
            price: 10.99,
            spec: 'Smart Wrist Watch Bluetooth GSM Phone For Android Samsung IPhone (white).',
            imageUrl: '../Images/1.jpg',
            amount: 1
        },
        {
            id: 7,
            sid: 16,
            title: 'Sunlight Detergent',
            price: 5.99,
            spec: 'Sunlight 2in1 Spring Sensations Handwash Washing Powder 900g.',
            imageUrl: '../Images/sunlight.jpg',
            amount: 1
        },
        {
            id: 8,
            sid: 17,
            title: 'Apple MacBook Pro',
            price: 2999.99,
            spec: 'Apple MacBook Pro - 16" Touch Bar - Intel Core I9 - 16GB - AMD Radeon Pro 5500M - 1TB SSD - Space Gray.',
            imageUrl: '../Images/applelappy.jpg',
            amount: 1
        },
    ];

    //variables
    var users = [];
    var senderos = [];
    var cart = [];
    var logindata = {};
    var userdata = [];
    var userprofile;
    var userIndex;
    var serc;
    var spy = '';

    //users
    // localStorage.setItem('UserInfo', JSON.stringify(users));
    var profile = JSON.parse(localStorage.getItem('UserInfo'));
    var onlyUser = JSON.parse(localStorage.getItem('UserData'));

    //products sent to local storage
    var sproduct = JSON.stringify(products);
    localStorage.setItem('myProducts', sproduct);

    //getItems of products from l-storage
    var getProduct = localStorage.getItem('myProducts');
    var awaProduct = JSON.parse(getProduct);

    //functions for SignUp page
    $('#formpage').html(function () {
        getData();
        login();
    })

    function getData() {
        //signin part
        $('.btn1').on('click', function () {
            if ($('.fullname').val() == '' || $('.username').val() == '' || $('.emailx').val() == '' || $('.passwordx').val() == '') {
                $('.nospace').removeClass('d-none');
                setTimeout(() => {
                    $('.nospace').addClass('d-none');
                }, 2000);
                return
            } else {
                var Signup = new profl(
                    $('.fullname').val(),
                    $('.username').val(),
                    $('.emailx').val(),
                    $('.passwordx').val()
                );
            }

            // testing.push(Signup);
            // console.log(testing);

            if (profile == null) {
                users.push(Signup);
                localStorage.setItem('UserInfo', JSON.stringify(users));

                userprofile = users[users.length - 1];
                userdata[1] = users.length - 1;
            } else {
                profile.push(Signup);
                localStorage.setItem('UserInfo', JSON.stringify(profile));

                userprofile = profile[profile.length - 1];
                userdata[1] = profile.length - 1;
            }

            userdata[0] = userprofile;

            // console.log(userdata);
            localStorage.setItem('UserData', JSON.stringify(userdata));
            loadicon();
        })
        // console.log(profile.length);

    }

    //function to create new object for users
    function profl(fullname, username, email, password) {
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    function login() {
        //login
        $('.btn2').on('click', function () {
            var eml = $('.emaily').val();
            var pwd = $('.passwordy').val();

            if (eml == '' && pwd == '') {
                $('.nospace').removeClass('d-none');
                setTimeout(() => {
                    $('.nospace').addClass('d-none');
                }, 2000);
                return
            } else {
                logindata.email = eml;
                logindata.password = pwd;
            }
            // console.log(logindata);
            if (profile == null) {
                $('.alat').removeClass('d-none');
                setTimeout(() => {
                    $('.alat').addClass('d-none');
                }, 2000);
                return
            } else {
                userprofile = profile.find(userprofile => userprofile.email == logindata.email && userprofile.password == logindata.password);
                userIndex = profile.findIndex(userprofile => userprofile.email == logindata.email && userprofile.password == logindata.password);
            }

            // console.log(userprofile);
            if (userprofile == undefined) {
                $('.alat').removeClass('d-none');
                setTimeout(() => {
                    $('.alat').addClass('d-none');
                }, 2000);
                return
            } else {
                loadicon();
            }
            // console.log(userprofile);
            userdata[0] = userprofile;
            userdata[1] = userIndex;
            // console.log(userdata);
            localStorage.setItem('UserData', JSON.stringify(userdata));
        })
    }

    //loading icon function
    function loadicon() {
        $('.loadicn').removeClass('d-none');
        setTimeout(() => {
            window.location.href = "../home-page/index.html";
        }, 2000);
    }

    //function to updata navbar if a user is logged in
    function navdom() {
        // console.log(onlyUser);

        if (onlyUser == null || onlyUser[0] == undefined) {
            $('.usa1').removeClass('d-none');
        } else {
            var usa2 = `
            <div class="dropdown">
            <span>${onlyUser[0].username} <i class="fa fa-user"></i></span>
            <div class="dropdown-content logout btn">
                Log Out <i class="fas fa-sign-out-alt"></i>
            </div>
            </div>
            `;
            $('.usa1').after(usa2);
        }

        $('.logout').click(function () {
            onlyUser = [];
            localStorage.setItem('UserData', JSON.stringify(userdata));
            window.location.href = "../signup/index.html";
        })
    }

    //Products to display in body of Homepage.
    $('#homepage').html(function () {
        displayproducts1();
        displayproducts2();
        homepageaddcart();
        navdom();
    })

    function displayproducts1() {
        var spy = '';
        for (let i = 0; i < 4; i++) {
            const ele = awaProduct[i];
            // console.log(ele);
            spy += `<div class="col-sm-12 col-md-3 p-2 tolu" >
            <div class="temi p-2">
            <img src=${ele.imageUrl}
                alt="iphone11" class="img2" id=${ele.sid}>
            <div class="shomo mt-2 px-2">
                <div class="d-none msg border border-success text-center text-success smalltext">Added to cart</div>
                <div>${ele.title}</div>
                <del class="text-muted">$20,000</del>
                <div>$${ele.price} </div>
            </div>
            <button class="addcartbtn add-cart btn btn-primary shadow mt-2 w-100" id=${ele.id}>
                ADD TO CART
            </button>
            </div>
            </div>
            `;
            // getbtnid(`${ele.id}`);
            getprdid(`${ele.sid}`);
        }
        $('#homepage').find('#shop').find('.show1').append(spy);
    }

    function displayproducts2() {
        var spy = '';
        for (let i = 4; i < awaProduct.length; i++) {
            const ele = awaProduct[i];
            // console.log(ele);
            spy += `<div class="col-sm-12 col-md-3 p-2 tolu" >
            <div class="temi p-2">
            <img src=${ele.imageUrl}
                alt="iphone11" class="img2" id=${ele.sid}>
            <div class="shomo mt-2 px-2">
                <div class="d-none msg border border-success text-center text-success smalltext">Added to cart</div>
                <div>${ele.title}</div>
                <del class="text-muted">$20,000</del>
                <div>$${ele.price} </div>
            </div>
            <button class="addcartbtn add-cart btn btn-primary shadow mt-2 w-100" id=${ele.id}>
                ADD TO CART
            </button>
            </div>
            </div>
            `;
            // console.log(`${ele.sid}`);
            // getbtnid(`${ele.id}`);
            getprdid(`${ele.sid}`);
        }

        $('#homepage').find('#shop').find('.show2').append(spy);
    }

    function homepageaddcart() {
        $('#homepage').find('.addcartbtn').on('click', function () {

            //displays success message when btn to add to cart is clicked.
            $(this).closest('.temi').find('.msg').addClass('d-block');
            setTimeout(() => {
                $(this).closest('.temi').find('.msg').removeClass('d-block');
            }, 1500);

            // console.log(awaProduct[this.id - 1]);

            var carto = awaProduct[this.id - 1];
            cart.push(carto);
            console.log(cart);


            if (onlyUser == null || onlyUser[0] == undefined) {
                var carter = JSON.stringify(cart);
                localStorage.setItem('carts', carter);

                var carty = localStorage.getItem('carts');
                carty = JSON.parse(carty);
                // console.log(carty.length);
                $('.cartnum').find('.badge').html(carty.length);

            } else {
                profile[onlyUser[1]].userCart = cart;
                // console.log(profile[onlyUser[1]].userCart);
                localStorage.setItem('UserInfo', JSON.stringify(profile));
            }

            chkcartnum();
        })

        var carty = localStorage.getItem('carts');
        carty = JSON.parse(carty);
        // console.log(cart);

        if (onlyUser == null || onlyUser[0] == undefined) {
            if (carty == null) {
                cart = [];
            } else {
                cart = carty;
            }
        } else {
            cart = profile[onlyUser[1]].userCart;
            if (profile[onlyUser[1]].userCart == undefined) {
                cart = [];
            }
        }

        // console.log(cart.length);
        // console.log(profile[onlyUser[1]].userCart);

    }


    //function gets the id of a btn and its full details in localstorage
    function getprdid(x) {
        $(document).on('click', `#${x}`, function () {
            var dato = awaProduct[this.id - 10];

            senderos[0] = dato;
            // console.log(senderos);
            var sender = JSON.stringify(senderos);
            localStorage.setItem('xs', sender);

            window.location.href = "../product-page/index.html";
        })
    }


    //selected products detail set in ls is gotten and displayed in productpage; 
    $('#productpage').html(function () {
        productInfo();
        productaddcart();
        navdom();
    })

    function productInfo() {
        document.querySelector('.ee').addEventListener('click', function () {
            window.location.href = "../Cart-page/index.html";
        })

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

            <button class="addcartbtd btn ff btn-primary mt-3 shadow w-100 btn-lg" id=${sendme.id}>ADD TO CART
                <i class="fab fa-opencart"></i>
            </button>

        </div>
        </div>        
        `;
        $('#productpage').find('.aa').html(dis);
    }



    var carty = localStorage.getItem('carts');
    carty = JSON.parse(carty);

    function productaddcart() {
        var sender = localStorage.getItem('xs');
        sender = JSON.parse(sender);
        var sendme = sender[0];

        $('#productpage').find('.addcartbtd').click(function () {
            if (onlyUser == null || onlyUser[0] == undefined) {
                if (carty == null) {
                    carty = [];
                };
                // console.log(carty);
                serc = carty.findIndex(serc => serc.title === sendme.title);

                if (serc == -1) {
                    carty.push(sendme);
                    // console.log(sendme.amount);
                } else {
                    sendme.amount++;
                    carty[serc].amount++;
                }

                carty = localStorage.setItem('carts', JSON.stringify(carty));
                location.reload();

                var cartp = localStorage.getItem('carts');
                cartp = JSON.parse(cartp);

            } else {
                serc = profile[onlyUser[1]].userCart.findIndex(serc => serc.title === sendme.title);
                // console.log(serc);
                if (serc == -1) {
                    profile[onlyUser[1]].userCart.push(sendme);
                } else {
                    // sendme.amount++;
                    profile[onlyUser[1]].userCart[serc].amount++;
                }
                // console.log(profile[onlyUser[1]].userCart);
                localStorage.setItem('UserInfo', JSON.stringify(profile));

            }
            chkcartnum();
        })
        // console.log(profile[onlyUser[1]].userCart);
        // console.log(carty);

    }

    //Functions for cartpage.
    $('#cartpage').html(function () {
        getcartdetails();
        delspecproduct();
        showandhidenocart();
        linkcarttoproductpage();
        calccart();
        subtotalfn();
        navdom();
    })

    function getcartdetails() {
        if (onlyUser == null || onlyUser[0] == undefined) {
            var cartp = localStorage.getItem('carts');
            cartp = JSON.parse(cartp);

            if (cartp == null) {
                cartp = cart;
            } else {
                for (items of cartp) {
                    var cpt = items.price * items.amount;
                    cpt = cpt.toFixed(2);
                    spy += `
                    <tr>
                    <td><img src=${items.imageUrl} class="img-fluid img-click" width="50px"> </td>
                    <td colspan="2" class="title-click">${items.title}</td>

                    <td><input class="item-qty form-control w-50 mx-auto" type="number" value=${items.amount} min="1" /></td>
                    <td class="item-price text-right font-weight-bold">$ ${cpt}</td>
                    <td class="text-right">
                        <button class="btn btn-sm btn-danger" id=${items.id}>
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                    </tr>            
                    `;

                }
                $('#cartpage').find('tbody').prepend(spy);
            }
        } else {
            // console.log(profile[onlyUser[1]].userCart);

            for (items of profile[onlyUser[1]].userCart) {
                console.log(items);

                var cpt = items.price * items.amount;
                cpt = cpt.toFixed(2);
                spy += `
                <tr>
                <td><img src=${items.imageUrl} class="img-fluid img-click" width="50px"> </td>
                <td colspan="2" class="title-click">${items.title}</td>

                <td><input class="item-qty form-control w-50 mx-auto" type="number" value=${items.amount} min="1" /></td>
                <td class="item-price text-right font-weight-bold">$ ${cpt}</td>
                <td class="text-right">
                    <button class="btn btn-sm btn-danger" id=${items.id}>
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
                </tr>            
                `;

            }
            $('#cartpage').find('tbody').prepend(spy);

        }

    }

    //functions to delete specific product from cart.
    function delspecproduct() {
        $(document).on('click', '.btn-danger', function () {
            let z = $(this).closest('tr').index();
            // console.log(z);

            if (onlyUser == null || onlyUser[0] == undefined) {
                var cartp = localStorage.getItem('carts');
                cartp = JSON.parse(cartp);

                cartp.splice(z, 1);
                cartp = localStorage.setItem('carts', JSON.stringify(cartp));

                $(this).closest('tr').remove();
            } else {
                profile[onlyUser[1]].userCart.splice(z, 1);
                localStorage.setItem('UserInfo', JSON.stringify(profile));

                $(this).closest('tr').remove();
            }

            showandhidenocart();
            chkcartnum();
            subtotalfn()
        })
    }

    function showandhidenocart() {
        if (onlyUser == null || onlyUser[0] == undefined) {
            var cartp = localStorage.getItem('carts');
            cartp = JSON.parse(cartp);
            // console.log(cartp);

            if (cartp == null) {
                cartp = cart;
                if (cartp.length == 0) {
                    $('.nocart').show();
                    $('.cartlog').hide();
                } else {
                    $('.cartlog').show();
                    $('.nocart').hide();
                }
            } else {
                if (cartp.length == 0) {
                    $('.nocart').show();
                    $('.cartlog').hide();
                } else {
                    $('.cartlog').show();
                    $('.nocart').hide();
                }
            }
        } else {
            if (profile[onlyUser[1]].userCart.length == 0) {
                $('.nocart').show();
                $('.cartlog').hide();
            } else {
                $('.cartlog').show();
                $('.nocart').hide();
            }
        }
    }

    function linkcarttoproductpage() {
        $(document).on('click', '.title-click , .img-click', function () {
            var cartp = localStorage.getItem('carts');
            cartp = JSON.parse(cartp);

            let q = $(this).closest('tr').index();

            senderos[0] = cartp[q];
            // console.log(senderos[0]);

            var sender = JSON.stringify(senderos);
            localStorage.setItem('xs', sender);

            window.location.href = "../product-page/index.html";
        })
    }

    function calccart() {

        $(document).on('keyup , click', '.item-qty', function () {

            if (onlyUser == null || onlyUser[0] == undefined) {
                var cartp = localStorage.getItem('carts');
                cartp = JSON.parse(cartp);

                var prc = $(this).closest('tr').find('.item-qty').val();
                // console.log(prc);

                var tt = $(this).closest('tr').index();
                // var cp = prc * cartp[tt].price;

                cartp[tt].amount = parseInt(prc);
                var cp = cartp[tt].amount * cartp[tt].price;
                cp = cp.toFixed(2)

                // cartp[tt].price = parseFloat(cp);
                var ptotal = $(this).closest('tr').find('.item-price').html(`$ ${cp}`);

                cartp = localStorage.setItem('carts', JSON.stringify(cartp));
            } else {
                var prc = $(this).closest('tr').find('.item-qty').val();
                // console.log(prc);

                var tt = $(this).closest('tr').index();
                // var cp = prc * cartp[tt].price;

                profile[onlyUser[1]].userCart[tt].amount = parseInt(prc);
                var cp = profile[onlyUser[1]].userCart[tt].amount * profile[onlyUser[1]].userCart[tt].price;
                cp = cp.toFixed(2)

                // cartp[tt].price = parseFloat(cp);
                var ptotal = $(this).closest('tr').find('.item-price').html(`$ ${cp}`);

                localStorage.setItem('UserInfo', JSON.stringify(profile));
            }

            chkcartnum();
            subtotalfn();
        })

    }

    function subtotalfn() {
        if (onlyUser == null || onlyUser[0] == undefined) {
            var cartp = localStorage.getItem('carts');
            cartp = JSON.parse(cartp);

            if (cartp == null) {
                return
            } else {
                var sur = 0;
                for (items of cartp) {
                    var vd = items.amount * items.price;
                    sur += vd
                }
                console.log(sur);
                var surn = sur.toFixed(2);
                $('.sub-total').html(`$ ${surn}`);

                var shipn = 5;
                var stote = sur + 5;
                stote = stote.toFixed(2);
                // console.log(stote);
                $('.s-total').html(`$ ${stote}`);
            }
        } else {
            var sur = 0;
            for (items of profile[onlyUser[1]].userCart) {
                var vd = items.amount * items.price;
                sur += vd
            }
            console.log(sur);
            var surn = sur.toFixed(2);
            $('.sub-total').html(`$ ${surn}`);

            var shipn = 5;
            var stote = sur + 5;
            stote = stote.toFixed(2);
            // console.log(stote);
            $('.s-total').html(`$ ${stote}`);
        }
    }

    //function to update cart number
    function chkcartnum() {
        let amount = 0;

        if (onlyUser == null || onlyUser[0] == undefined) {
            JSON.parse(localStorage.getItem('carts')).map(data => {
                amount = amount + data.amount;
            });
            // console.log(amount);
        } else {
            profile[onlyUser[1]].userCart.map(data => {
                amount = amount + data.amount;
            })
        }

        $('.badge').html(amount);
        $('.cartnum').html(`( ${amount} Items )`)
    }






})