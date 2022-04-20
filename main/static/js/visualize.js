// 각 노선별 역 숫자
const STATION_1 = 30;
const STATION_2 = 29;
const STATION_3 = 30;

// 노선변경 버튼 첫 클릭 여부 확인
var isClicked_1 = 0;
var isClicked_2 = 0;
var isClicked_3 = 0;

// 실제 시간표
const line1_time = [120000, 120000, 120000, 120000, 60000,
        120000, 120000, 60000, 120000, 120000,
        60000, 120000, 120000, 60000, 120000,
        120000, 60000, 120000, 120000, 120000,
        60000, 120000, 120000, 120000, 120000,
        120000, 120000, 120000, 60000, 120000,
        120000, 120000];

// 테스트용 시간표
var stationTimeTest = [100, 200, 500, 300, 100,
            500, 1000, 300, 200, 500,
            300, 500, 300, 200, 2000,
            100, 200, 300, 100, 100,
            200, 300, 400, 100, 200,
            400, 100, 200, 300, 300,
            500, 500];

// 1호선 안심행 열차 css 정보
var station1_up_css = [240, 290, 340, 390, 440,
       490, 540, 590, 640, 690,
       765, 820, 690, 620, 550, 
       490, 430, 355, 280, 190, 
       900, 970, 1030, 1090, 1140, 
       1190, 1240, 1290, 1340, 1390, 
       1440, 1440];

// 1호선 설화명곡행 열차 css 정보
var station1_down_css = [
    1400, 1350, 1300, 1250, 1200,
    1150, 1100, 1045, 980, 920,
    860, 230, 305, 380, 440,
    505, 565, 640, 715, 790,
    720, 650, 595, 550, 500,
    450, 400, 350, 300, 250,
    200, 200
];

// 2호선 문양행 열차 css 정보
var station2_up_css = 
    [
        1335, 1295, 1255, 1215, 1175,
        1135, 1095, 1055, 1015, 975,
        935, 895, 855, 815, 750,
        700, 665, 630, 590, 580,
        535, 495, 455, 415, 375,
        335, 295, 255, 215
    ];

var station2_up_css_more = 
    [
        810, 670, 570, 470, 380, 
        295, 245
    ];

// 2호선 영남대행 열차 css 정보
var station2_down_css = 
    [
        210, 255, 295, 335, 375,
        415, 455, 495, 535, 580,
        650, 680, 720, 765, 800,
        815, 855, 895, 935, 975,
        1015, 1055, 1095, 1135, 1175,
        1215, 1255, 1295, 1335
    ];

    
var station2_down_css_more = 
    [
        195, 290, 380, 470, 570,
        665, 745
    ];

    
// 3호선 문양행 열차 css 정보
var station3_up_css = 
    [
        820, 790, 760, 730, 700,
        670, 640, 610, 580, 550,
        490, 490, 490, 490, 490, 
        490, 490, 490, 490, 510, 
        490, 460, 430, 400, 370, 
        340, 310, 280, 250, 220
    ];

var station3_up_css_more = 
    [
        995, 945, 895, 845, 795,
        745, 695, 645, 595, 565,
        565
    ];

// 3호선 영남대행 열차 css 정보
var station3_down_left_css = 
    [
        525, 525, 525, 525, 525,
        525, 525, 525, 525, 525,
        545, 595, 645, 695, 745,
        795, 845, 895, 945, 980,
        980, 980, 980, 980, 980,
        980, 980, 980, 980, 980
    ];

var station3_down_top_css = 
    [
        220, 250, 280, 310, 340,
        370, 400, 430, 460, 490,
        545, 543, 541, 539, 537,
        535, 533, 531, 530, 530,
        550, 580, 610, 640, 670,
        700, 730, 760, 790, 820
    ];


window.onload = function(){ 
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");

    line1.style.display = "initial";
    line2.style.display = "none"; 
    line3.style.display = "none";
    
    $(".sec2").css("display", "none");
    $(".sec3").css("display", "none");
    
    setSubway(1);
}

// 1호선 안심행 열차 시각화
function visualizeOneUp(id, index){
    if(isClicked_1 == 0){
        // $(id).prepend('<img id="subImg" src="./media/images/subway_min_left.png" />'); 
        $(id).prepend('<img id="subImg" src="../static/images/subway_min_left.png">'); 
    }
    else{
        return;
    }
    for(var i = index; i < STATION_1; i++){
        let pixel = station1_up_css[i].toString() + "px";
        if(i >= 12 && i < 20){
            $(id).animate({top : pixel}, stationTimeTest[i]);
        }
        else{
            $(id).animate({left : pixel}, stationTimeTest[i]);
        }
    }

    $(id).animate({left : "1440px"}, 200).promise().done(
        function(){
            $(this).hide();
        }
    );

}

// 1호선 설화명곡행 열차 시각화
function visualizeOneDown(id, index){

    if(isClicked_1 == 0){
        $(id).prepend('<img id="subImg" src="../static/images/subway_min_left.png">'); 
    }
    else{
        return;
    }

    for(var i = index; i < STATION_1; i++){
        let pixel = station1_down_css[i].toString() + "px";
        if(i >= 11 && i < 20){
            $(id).animate({top : pixel}, stationTimeTest[i]);
        }
        else{
            $(id).animate({left : pixel}, stationTimeTest[i]);
        }
    }

    $(id).animate({left : "200px"}, 200).promise().done(
        function(){
            $(this).hide();
        }
    );
}

// 2호선 문양행 열차 시각화
function visualizeTwoUp(id, index){

    if (isClicked_2 == 0){
        $(id).prepend('<img id="subImg" src="../static/images/subway_min_left.png" />'); 
    }
    else{
        return;
    }

    if(id == "#sec2_up_4"){
        var j = 2;
    }
    else{
        var j = 0;
    }

    for(var i = index; i < station2_up_css.length - 1; i++){
        let leftPixel = station2_up_css[i].toString() + "px";
        if(i < 13 || i > 19){
            $(id).animate({left : leftPixel}, stationTimeTest[i]);
        }
        else{
            let topPixel = station2_up_css_more[j].toString() + "px";
            $(id).animate({left : leftPixel, top : topPixel}, stationTimeTest[i]);
            j += 1;              
        }
    }

    $(id).animate({left : "215px"}, 200).promise().done(
        function(){
            $(this).hide();
        }
    );

}


// 2호선 영남대행 열차 시각화
function visualizeTwoDown(id, index){
    if (isClicked_2 == 0){
        $(id).prepend('<img id="subImg" src="../static/images/subway_min_left.png" />'); 
    }
    else{
        return;
    }

    if (id == "#sec2_down_4"){
        var j = 5;
    }  
    else
    {
       var j = 1;
    }
    for(var i = index; i < STATION_2 - 1; i++){
        let leftPixel = station2_down_css[i].toString() + "px";
        if(i < 10 || i > 15){
            $(id).animate({left : leftPixel}, stationTimeTest[i]);
        }
        else {
            let topPixel = station2_down_css_more[j].toString() + "px";
            $(id).animate({left : leftPixel, top : topPixel}, stationTimeTest[i]);
            j += 1;              
        }
    }

    $(id).animate({left : "1335px"}, 200).promise().done(
        function(){
            $(this).hide();
        }
    );

}

// 3호선 칠곡경대병원 열차 시각화
function visualizeThreeUp(id, index){
    if (isClicked_3 == 0){
        $(id).prepend('<img id="subImg" src="../static/images/subway_min_left.png" />'); 
    }
    else{
        return;
    }

    if(id == "#sec3_up_3"){
        var j = 2;
    }
    else if (id == "#sec3_up_4"){
        var j = 6;
    }
    else{
        var j = 0;
    }

    for(var i = index; i < STATION_3; i++){
        var topPixel = station3_up_css[i].toString() + "px";
        if(i < 11){
            $(id).animate({top : topPixel}, stationTimeTest[i]);
            t = i;
        }
        else if (i < 21){
            var leftPixel = station3_up_css_more[j].toString() + "px";
            $(id).animate({left : leftPixel}, stationTimeTest[i]);
            j += 1;            
        }
        else{
            topPixel = station3_up_css[i].toString() + "px";
            $(id).animate({top : topPixel}, stationTimeTest[i]);
        }
    }

    $(id).animate({top : "220px"}, 200).promise().done(
        function(){
            $(this).hide();
        }
    );
}

// 3호선 용지행 열차 시각화
function visualizeThreeDown(id, index){
    if (isClicked_3 == 0){
        $(id).prepend('<img id="subImg" src="../static/images/subway_min_left.png" />'); 
    }
    else{
        return;
    }

    for(var i = index; i < STATION_3 - 1; i++){
        var topPixel = station3_down_top_css[i].toString() + "px";
        var leftPixel = station3_down_left_css[i].toString() + "px";
        $(id).animate({left : leftPixel, top : topPixel}, stationTimeTest[i]);
    }

    $(id).animate({top : "820px"}, 200).promise().done(
        function(){
            $(this).hide();
        }
    );
}

// 열차 시각화
function setSubway(lineNumber){
    switch(lineNumber){
        case 1:
            line1_up = [1, 5, 10, 15, 19, 24, 28];
            line1_down = [2, 6, 10, 15, 20, 25, 29];

            for(var i = 0; i < 7; i++){
                up = "#sec1_up_" + (i+1).toString();
                down = "#sec1_down_" + (i+1).toString();
                visualizeOneUp(up, line1_up[i]);
                visualizeOneDown(down, line1_down[i]);
            }

            isClicked_1 = 1;
            break;

        case 2:
            line2_up = [3, 7, 11, 15, 20, 24, 28];
            line2_down = [1, 5, 9, 14, 18, 22, 26];

            for(var i = 0; i < 7; i++){
                up = "#sec2_up_" + (i+1).toString();
                down = "#sec2_down_" + (i+1).toString();
                visualizeTwoUp(up, line2_up[i]);
                visualizeTwoDown(down, line2_down[i]);
            }

            isClicked_2 = 1;
            break;

        case 3:
            line3_up = [4, 8, 12, 16, 21, 25, 29];
            line3_down = [4, 8, 12, 16, 20, 24, 28];

            for(var i = 0; i < 7; i++){
                up = "#sec3_up_" + (i+1).toString();
                down = "#sec3_down_" + (i+1).toString();
                visualizeThreeUp(up, line3_up[i]);
                visualizeThreeDown(down, line3_down[i]);
            }

            isClicked_3 = 1;
            break;

        default:
            return;
    }
}