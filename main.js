
// BÀI TẬP 1: Sắp xếp thứ tự tăng dần của 3 số nguyên

document.getElementById("btnsapXep").onclick = function (){
    var soThu1 = document.getElementById("soThu1").value * 1;
    var soThu2 = document.getElementById("soThu2").value * 1;
    var soThu3 = document.getElementById("soThu3").value * 1;
    var vt1 = 0;
    var vt2 = 0;
    var vt3 = 0;

    if (soThu1 < soThu2 && soThu1 < soThu3 && soThu2 < soThu3) {
        vt1 = soThu1;
        vt2 = soThu2;
        vt3 = soThu3;

    } else if (soThu2 < soThu1 && soThu2 < soThu3 && soThu1 < soThu3) {
        vt1 = soThu2;
        vt2 = soThu1;
        vt3 = soThu3;

    } else if (soThu2 < soThu1 && soThu2 < soThu3 && soThu1 > soThu3) {
        vt1 = soThu2;
        vt2 = soThu3;
        vt3 = soThu1;
    } else if (soThu3 < soThu2 && soThu3 < soThu1 && soThu2 < soThu1) {
        vt1 = soThu3;
        vt2 = soThu2;
        vt3 = soThu1;
    } else if (soThu3 < soThu2 && soThu3 < soThu1 && soThu2 > soThu1) {
        vt1 = soThu3;
        vt2 = soThu1;
        vt3 = soThu2;
    } else {
        vt1 = soThu1;
        vt2 = soThu3;
        vt3 = soThu2;
    }

    var ketQua = "Thứ tự tăng dần của 3 số nguyên bạn nhập là: <br>" + vt1 + " < " + vt2 + " < " + vt3;
    document.getElementById("inSapXep").innerHTML = ketQua;
}

// BÀI TẬP 2: Gửi lời chào đến thành viên gia đình

document.getElementById("btnChaoHoi").onclick = function (){
    var tenGoi = document.getElementById("tenGoi").value;
    var chaoHoi = "";

    if (tenGoi == "Người lạ ơi!") {
        chaoHoi = "Xin chào Người lạ!";
    } else if (tenGoi == "Bố") {
        chaoHoi = "Xin chào Bố!";
    } else if (tenGoi == "Mẹ") {
        chaoHoi = "Xin chào Mẹ!";
    } else if (tenGoi == "Anh Trai") {
        chaoHoi = "Xin chào anh trai!";
    } else {
        chaoHoi = "Xin chào em gái!";
    }

    document.getElementById("inChaoHoi").innerHTML = chaoHoi;
}

// BÀI TẬP 3: ĐIẾM SỐ CHẴN LẼ

document.getElementById("btnDiem").onclick = function (){
    var soT1 = document.getElementById("soT1").value * 1;
    var soT2 = document.getElementById("soT2").value * 1;
    var soT3 = document.getElementById("soT3").value * 1;
    var diemChan = 0;
    var diemLe = 0;

    if(soT1 % 2 == 0 && soT2 % 2 == 0 && soT3 % 2 == 0){
        diemChan = 3;
    }else if (soT1 % 2 != 0 && soT2 % 2 == 0 && soT3 % 2 == 0){
        diemChan = 2;
    }else if (soT1 % 2 == 0 && soT2 % 2 != 0 && soT3 % 2 == 0){
        diemChan = 2;
    }else if (soT1 % 2 == 0 && soT2 % 2 == 0 && soT3 % 2 != 0){
        diemChan = 2;
    }else if (soT1 % 2 == 0 && soT2 % 2 != 0 && soT3 % 2 != 0){
        diemChan = 1;
    }else if (soT1 % 2 != 0 && soT2 % 2 != 0 && soT3 % 2 == 0){
        diemChan = 1;
    }else if (soT1 % 2 != 0 && soT2 % 2 == 0 && soT3 % 2 != 0){
        diemChan = 1;
    }else{
        diemChan = 0;
    }
    diemLe = 3 - diemChan;

    var ketQua = "Có " + diemChan + " số chẵn và " + diemLe + " số lẽ";
    document.getElementById("inDiem").innerHTML = ketQua;
}

// BÀI TẬP 4: DỰ ĐOÁN TAM GIÁC

document.getElementById("btnDuDoan").onclick = function (){
    var canh1 = document.getElementById("canh1").value * 1;
    var canh2 = document.getElementById("canh2").value * 1;
    var canh3 = document.getElementById("canh3").value * 1;
    var duDoan ="";

    if(canh1 == canh2 && canh2 == canh3 && canh1 == canh3){
        duDoan = "Đây là tam giác điều";
    }else if(canh1 == canh2 || canh1 == canh3 || canh2 == canh3){
        duDoan = "Đây là tam giác cân";
    }else if(canh1 * canh1 == canh2 * canh2 + canh3 * canh3){
        duDoan = "Đây là tam giác vuông";
    }else if(canh2 * canh2 == canh1 * canh1 + canh3 * canh3){
        duDoan = "Đây là tam giác vuông";   
    }else if(canh3 * canh3 == canh1 * canh1 + canh2 * canh2){
        duDoan = "Đây là tam giác vuông";
    }else{
        duDoan = "Đây là tam giác thường";
    }
    
    document.getElementById("inDuDoan").innerHTML = duDoan;
}