let namadia = john;
console.log(namadia.length);

let teks = 'Belajar Javascript';

console.log(teks.toLowerCase());
console.log(teks.toUpperCase());

let tek = 'Belajar Javascript';

console.log(tek.indexOf('Javascript'));
console.log(tek.indexOf('CSS'));
console.log(tek.lastIndexOf('a'));

let notes = 'Belajar Javascript';

console.log(notes.slice(7));
console.log(notes.slice(0, 7));

let n = 'Belajar Javascript';
console.log(n.replace('Javascript', 'CSS'));

let kalimat = 'Belajar,Javascript';

let hasilSplit = kalimat.split(',');

console.log(hasilSplit);

let kataArray = ['Belajar', 'Javascript'];

let hasilJoin = kataArray.join(' ');

console.log(hasilJoin);

let orang = 'John Doe';

let usia = 25;

let biodata = `Nama: ${orang}, Umur: ${usia}`;
console.log(biodata);