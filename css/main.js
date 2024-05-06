/*let rost = 45 == 45?true:false;
document.write(typeof rost)*/
/*let arrayObject = [45,78, 'salom','matn',true,false,'javascript','olma',123];*/
/*let oddiyObject = {ism: "islom",yoshi:18, mahallasi: "oltintopgan", dusti: "Sardor"};*/
/*console.log(oddiyObject.ism, oddiyObject.dusti, oddiyObject.mahallasi);*/

/*
function savatchaniTekshir(uzatilganContainer =[12,"text" ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]) {
    if (uzatilganContainer.length == 0){
        document.write("Savatchaning ichida " + uzatilganContainer.length + " dona malumot bor!")
    }else{
        document.write("Savatchaning ichida " + uzatilganContainer.length + " dona malumot bor!")
    }
}
let  container = [12,78, "math",true]
savatchaniTekshir();*/



let sana = new Date()

sana.setFullYear(2009   );
sana.setMonth(2)
sana.setDate(17)

let yil = sana.getFullYear()
let oy = sana.getMonth()
let kun = sana.getDate()
let haftakuni = sana.getDay()

let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentabr","oktabr","noyabr","dekabr"];

let haftalar = ["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"]

document.write("Bugun " + yil + "-yil " + oylar[oy] + "ning " + kun + "-kuni. Haftaning  " + haftalar[haftakuni] + "-kuni.")
