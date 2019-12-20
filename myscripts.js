    // function timer() {
    //         var start = new Date(2018, 2, 8); 
    //         var t = new Date() - start;
    //         var h = ~~(t / 1000 / 60 / 60 % 24);
    //         if (h < 10) {
    //             h = "0" + h;
    //         }
    //         var m = ~~(t / 1000 / 60 % 60);
    //         if (m < 10) {
    //             m = "0" + m;
    //         }
    //         var s = ~~(t / 1000 % 60);
    //         if (s < 10) {
    //             s = "0" + s;
    //         }
    //         document.getElementById('d').innerHTML = ~~(t / 1000 / 60 / 60 / 24);
    //         document.getElementById('h').innerHTML = h;
    //         document.getElementById('m').innerHTML = m;
    //         document.getElementById('s').innerHTML = s;
    //     }
    //     timer();

    // function qkizwtinmer() {
    //     var fs = new Date(2018, 12, 5);
    //     var tt = new Date() - fs;
    //     var hh = ~~(tt / 1000 / 60 / 60 % 24);
    //     if (hh < 10) {
    //         hh = "0" + hh;
    //     }
    //     var mm = ~~(tt / 1000 / 60 % 60);
    //     if (mm < 10) {
    //         mm= "0" + mm;
    //     }
    //     var ss = ~~(tt / 1000 % 60);
    //     if (ss < 10) {
    //         ss = "0" + ss;
    //     }
    //     document.getElementById('dd').innerHTML = ~~(tt / 1000 / 60 / 60 / 24);
    //     document.getElementById('hh').innerHTML = hh;
    //     document.getElementById('mm').innerHTML = mm;
    //     document.getElementById('ss').innerHTML = ss;
        

    // }
    // qkizwtinmer();

    //   function kklxtinmer() {
    //       var ds = new Date(2019, 1, 2); 
    //       var ttt = new Date() - ds;
    //       var hhh = ~~(ttt / 1000 / 60 / 60 % 24);
    //       if (hhh < 10) {
    //           hhh = "0" + hhh;
    //       }
    //       var mmm = ~~(ttt / 1000 / 60 % 60);
    //       if (mmm < 10) {
    //           mmm = "0" + mmm;
    //       }
    //       var sss = ~~(ttt / 1000 % 60);
    //       if (sss < 10) {
    //           sss = "0" + sss;
    //       }
    //       document.getElementById('ddd').innerHTML = ~~(ttt / 1000 / 60 / 60 / 24);
    //       document.getElementById('hhh').innerHTML = hhh;
    //       document.getElementById('mmm').innerHTML = mmm;
    //       document.getElementById('sss').innerHTML = sss;


    //   }
    //   kklxtinmer();


    //     setInterval(timer, 1000);
    //     setInterval(qkizwtinmer, 1000);
    //     setInterval(kklxtinmer,1000);
        

qki_start = new Date(2018, 02, 08);
main_start = new Date(2018, 12, 05);
cct_start  = new Date(2019, 01, 02)

significant_names = Array('qki', 'qkimain', 'cct');
significant_days = Array(qki_start, main_start, cct_start);
for (index in significant_days) {
    significant_days[index].setMonth(significant_days[index].getMonth() - 1)
}

function date_substract(old_date, new_date) {
    less = old_date - new_date;
    less = parseFloat(less / (1000 * 60 * 60 * 24));
    less = Math.ceil(less);
    return less
}

function timer() {
    var today = new Date();
    qki_days = date_substract(today, qki_start);
    main_days = date_substract(today, main_start);
    cct_days = date_substract(today, cct_start);
    document.getElementById('qki_days').innerHTML = qki_days;
    document.getElementById('main_days').innerHTML = main_days;
    document.getElementById('cct_days').innerHTML = cct_days;
}

function next_anniversary() {
    today = new Date();
    next_index = 0;
    next_days = 365;
    for (index in significant_days) {
        the_day = new Date(significant_days[index].getTime());
        the_day.setFullYear(today.getFullYear());
        days = date_substract(the_day, today);
        days = days % 365;
        if (days > 0 && days < next_days) {
            next_index = index;
            next_days = days;
        }
    }
    document.getElementById('anniversary_days').innerHTML = next_days;
    document.getElementById('anniversary_name').innerHTML = significant_names[next_index];
}
timer();
setInterval(timer, 1000);
next_anniversary();
setInterval(next_anniversary, 1000 * 600);