function goDate() {
    var today = new Date();
    var y = today.getFullYear();
    var mo = today.getMonth() + 1;
    var d = today.getDate();
    var h = today.getHours();
    if(mo<10)
        mo="0"+mo;
    startDate = y + "-" + mo + "-" + d;
    endDate = y + "-" + mo + "-" + (d);
    var res = new Array(startDate, endDate);
    return res;
}

function randomn(n) {
    if (n > 21) return null
    return parseInt((Math.random() + 1) * Math.pow(10, n - 1))
}
function Random() {
    var name = ["李孟洵", "李哉予", "李期良", "李君止", "赵子邦", "赵维其", "孙须悠", "周良之", "周之怀", "郑之功", "郑行露", "王皋野"];
    var number = ["2020", "2019", "2018"];
    var college = ["计算机科学与信息工程学院"];
    var major = ["电子信息", "软件工程", "计算机科学与技术"];
    var reason = ["实验室团日活动", "实验室团日活动", "实验室团日活动", "实验室团日活动", "导师交代任务", "导师交代任务", "身体不适去医院看病", "牙疼去医院", "身份证丢失补办", "没有理由", "今天就想去吃南门的煎饼果子", "I want to look at the scenery outside！"];
    var storage = window.localStorage;
    res = goDate();

    storage.uid = number[Math.floor((Math.random() * number.length))] + randomn(3) + randomn(3);
    storage.uname = name[Math.floor((Math.random() * name.length))];
    storage.startDate = res[0];
    storage.endDate = res[1];
    storage.ucollege = "计算机科学与信息工程学院";
    storage.umajor = major[Math.floor((Math.random() * major.length))];
    storage.ureason = reason[Math.floor((Math.random() * reason.length))];
    storage.uwhereabouts = "桂林";

    window.location.href = "yzdx.html";
}



function oldTo() {
    var storage = window.localStorage;
    if (typeof (localStorage.uid) == "undefined" || typeof (localStorage.uname) == "undefined" || typeof (localStorage.ucollege) == "undefined" || typeof (localStorage.umajor) == "undefined" || typeof (localStorage.ureason) == "undefined" || typeof (localStorage.uwhereabouts) == "undefined") {
        var r = confirm("本地数据不完整，是否继续？");
        if (r == true) {
            window.location.href = "yzdx.html";
        }
        else {
            location.reload();
        }
    } else {
        var today = new Date();
        var y = today.getFullYear();
        var mo = today.getMonth() + 1;
        var d = today.getDate();
        var h = today.getHours();
        startDate = y + "/" + mo + "/" + d;
        endDate = y + "/" + mo + "/" + (d + 1);


        window.localStorage.startDate = startDate;
        window.localStorage.endDate = endDate;

        window.location.href = "yzdx.html";
    }
}
function newToYZDX() {
    window.location.href = "from.html";
}

function toYZDX() {
    if (!window.localStorage) {
        alert("浏览器不支持localstorage");
    } else {
        var storage = window.localStorage;

        storage.uid = document.getElementsByName('uid')[0].value;
        storage.uname = document.getElementsByName("uname")[0].value;
        storage.startDate = document.getElementsByName("startDate")[0].value;
        storage.endDate = document.getElementsByName("endDate")[0].value;
        storage.ucollege = document.getElementsByName("ucollege")[0].value;
        storage.umajor = document.getElementsByName("umajor")[0].value;
        storage.ureason = document.getElementsByName("ureason")[0].value;
        storage.uwhereabouts = document.getElementsByName("uwhereabouts")[0].value;

        window.location.href = "yzdx.html";
    }
}

function ClearLocal() {
    window.localStorage.clear();
    showMessage();
}
function showMessage(data) {
    $('.modal').html(data);
    $('.modal').fadeIn();
    setTimeout(function () {
        $('.modal').fadeOut();
    }, 2000);
};
$(':input').click(function () {
    var text = $(this).val();
    showMessage(text);
});
