
let ListProduct = [
    {
        name: "Iphone",
        price: 35000000
    },
    {
        name: "Sámung",
        price: 25000000
    }
]
function showListProduct() {
    let str = `<h2>Danh Sách Sản Phẩm</h2>`
    str += `<h3>Số lượng sản phẩm: ${ListProduct.length}</h3>`
    for (let i = 0; i < ListProduct.length; i++) {
        str+= `<p>Tên sản Phẩm: ${ListProduct[i].name} Giá: ${ListProduct[i].price}<button onclick="edit(${[i]})">Edit</button></p>`
    }
    document.getElementById('display').innerHTML = str
}
function  addProduct() {
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
function edit(item){
    let str = `<input type="text" id="Editname" value="${ListProduct[item].name}"><br>
                       <input type="number" id="Editprice" value="${ListProduct[item].price}"><button onclick="save(${[item]})" >Lưu</button></br>`
    document.getElementById('display').innerHTML = str
}
function save(item){
    ListProduct[item].name = document.getElementById('Editname').value
    ListProduct[item].price = document.getElementById('Editprice').value
    showListProduct()
}