let panjang = 30, lebar = 20.5, luas = 0;
let harga = 0;
let total = 0;

luas = panjang*lebar;
harga = luas*1500000;
let ppn = harga*15/100;
total += ppn;

console.log("Total Harga Tanah = "+total);