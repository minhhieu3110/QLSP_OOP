
let ListProduct = []
/*
function createproduct() {
    let str = ""
    let n = document.getElementById('n').value
    for (let i = 0; i < n; i++) {
        str += `<form id="Product">
                            <input type="text" id=""nameProduct"+i" placeholder="Nhập tên sản phẩm"><br>
                            <input type="number" id=""priceProduct"+i" placeholder="Nhập giá sản phẩm"><hr>

                            </form>`
    }
    str +=`<button onclick="createList()">Nhập danh sách</button>`
    document.getElementById('display').innerHTML = str
}
function createList(){
    let nameProduct = document.getElementById('').value
    let priceProduct = document.getElementById('priceProduct').value
    let newListProduct =
        {
            name: nameProduct,
            price: priceProduct
        }
    ListProduct.push(newListProduct)
    showListProduct()
}*/
function createproduct(){
    let sl = document.getElementById('n').value
    for (let i = 1; i <= sl; i++) {
        let nameProduct = prompt(`Nhập tên sản phẩm thứ: ${i}`)
        let priceProduct = prompt(`Nhập giá sản phẩm thứ: ${i}`)
        ListProduct.push({name: nameProduct, price: priceProduct})
        console.log(ListProduct)
    }
    showListProduct()
}
function showListProduct() {
    let str = `<h2>Danh Sách Sản Phẩm</h2>`
    str += `<h3>Số lượng sản phẩm: ${ListProduct.length}</h3>`
    for (let i = 0; i < ListProduct.length; i++) {
        str += `<p>Tên sản Phẩm: ${ListProduct[i].name} Giá: ${ListProduct[i].price}<button onclick="edit(${[i]})">Edit</button></p>`
    }
    document.getElementById('display').innerHTML = str
}

function addProduct() {
    let str = `<input type="text" id="name" placeholder="Nhập tên sản phẩm"><br>
    <input type="number" id="price" placeholder="Nhập giá sản phẩm">
    <button onclick="add()">Thêm</button>`
    document.getElementById('display').innerHTML = str
}

function add() {
    let namespnew = document.getElementById('name').value
    let pricespnew = document.getElementById('price').value
    let spnew =
        {
            name: namespnew,
            price: pricespnew
        };
    console.log(namespnew)
    ListProduct.push(spnew)
    showListProduct()
}

function edit(item) {
    let str = `<input type="text" id="Editname" value="${ListProduct[item].name}"><br>
                       <input type="number" id="Editprice" value="${ListProduct[item].price}"><button onclick="save(${[item]})" >Lưu</button></br>`
    document.getElementById('display').innerHTML = str
}

function save(item) {
    ListProduct[item].name = document.getElementById('Editname').value
    ListProduct[item].price = document.getElementById('Editprice').value
    showListProduct()
}