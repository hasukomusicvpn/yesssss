let menu = ["rau xào", "thịt luộc", "gà rán"];
let input;
localStorage.setItem("menu", JSON.stringify(menu));
let thing = JSON.parse(localStorage.getItem("menu"));
do{
input = prompt("Mời người dùng nhập c, r, u, d: (bản beta không hỗ trợ viết hoa :))");
if(input == `c`){
    thing.push(prompt("Moi nguoi dung nhap mon an can them: "));
    localStorage.setItem("menu", JSON.stringify(thing));
} else if(input == `r`){
    let result = thing;
    alert(result);
} else if(input == `u`){
    let vitriUpdate = thing.indexOf(prompt("Người dùng nhập món ăn cũ: "))
    thing[vitriUpdate] = prompt("Người dùng nhập món ăn thay thế: ");
    localStorage.setItem("menu", JSON.stringify(thing));
} else if(input == `d`){
    let vitriDelete = thing.indexOf(prompt("Nguoi dung nhap mon an can xoa:"));
    thing.splice(vitriDelete, 1);
}
}
while(input == 'c' || input == 'r' || input == 'u' || input == 'd');
