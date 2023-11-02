//Beden kutle indeksi kutlenin hundurlutyun kvadratina olan nisbetidir!

//1.Nihad ve Nailin ceki ve boyunu deyisende saxla!
let NihadBoy = 1.69;
let NihadCeki = 78;
let NailBoy = 1.95;
let NailCeki = 92;

//2.onlarin Bki hesabla!
NihadBkI = nihadCeki / NihadBoy ** 2;
NailBkI = nailCeki / nailBoy ** 2;
//3. Nihadin BKI Nailden boyukdurmu?
if (NihadBkI > NailBkI) {
    console.log(true);
  } else {
    console.log(false);
  }


//Data 1.
//Nihad 78 kq - 169sm
//Nail 92kq -195sm

let Data1 = Data1NihadBKI > Data1NailBKI;

console.log(Data1);

let Data2NihadKg = 95;
let Data2NihadM = 1.88;

let Data2NailKq = 85;
let Data2NailM = 1.76;

let Data2NihadBKI = Data2NihadKq / (Data2NihadM ** 2);
let Data2NailBKI = Data2NailKq / (Data2NailM ** 2);
//Data 2.
//Nihad 95 kq - 188sm
//Nail 85kq -176sm
let Data2 = Data2NihadBKI > Data2NailBKI;

console.log(Data2);

