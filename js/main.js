var ball = prompt("Balingizni kiriting");

if (ball < 80){
    alert('O\'qishga kira olmadingiz');
}else if (ball >= 80 && ball < 100){
    alert('Super kontrak asosida o\'qishga qabul qilindingiz');
    var money = prompt('Kontrakt miqdori yiliga 3000$, Qancha pulingiz bor?');
    if (money >= 3000){
        var extraMoney = money - 3000;    
        alert(`O\'qishga qabul qilindingiz, sizda ${extraMoney}$ pul qoldi`);
    }else if (money < 3000){
        var extraMoney = money - 3000; 
        alert(`O\'qishga qabul qilinmadingiz, sizga ${extraMoney}$ pul yetmadi`);
    }
}else if (ball >= 100 && ball < 150){
    alert('Kontrakt asosida o\'ishga qabul qilindingiz');
    var money = prompt('Kontrakt miqdori yiliga 2000$, Qancha pulingiz bor?');
    if (money >= 2000){
        var extraMoney = money - 2000;
        alert(`O\'qishga qabul qilindingiz, sizda ${extraMoney}$ pul qoldi`);
    }else if (money < 2000){
        var extraMoney = money - 2000;
        alert(`O\'qishga qabul qilinmadingiz, sizga ${extraMoney}$ pul yetmadi`);
    }
}else if(ball >= 150 && ball <= 180){
    alert('Grant asosida o\'qishga qabul qilindingiz');
}else{
    alert('Qiymat noto\'g\'ri kiritilgan');
}