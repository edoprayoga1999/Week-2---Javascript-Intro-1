const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa =  69
let jumlahNilai = mtk + bahasaIndonesia + bahasaInggris + ipa

function hitungRataRata(num){
    if (typeof(mtk) != "number" || mtk == null || mtk == ""){
        console.log("Nilai MTK harus diisi dan harus tipe number!")}
    else if (typeof(bahasaIndonesia) != "number" || bahasaIndonesia == null || bahasaIndonesia == ""){
        console.log("Nilai Bahasa Indonesia harus diisi dan harus angka!")}
    else if (typeof(bahasaInggris) != "number" || bahasaInggris == null || bahasaInggris == ""){
        console.log("Nilai Bahasa Inggris harus diisi dan harus angka!")}
    else if (typeof(ipa) != "number" || ipa == null || ipa == ""){
        console.log("Nilai IPA harus diisi dan harus angka!")}
    else{
let grade
let rataRata = num / 4
if (rataRata >= 90){
    grade = "A"
} else if (rataRata >= 80){
    grade = "B"
} else if (rataRata >= 70){
    grade = "C"
} else if (rataRata >= 60){
    grade = "D"
} else {
    grade = "E"
}
console.log (`Rata-rata= ${rataRata}
Grade= ${grade}`)
}
}
hitungRataRata(jumlahNilai)

