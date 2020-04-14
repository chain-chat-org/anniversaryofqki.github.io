
qki_start = new Date(2018, 02, 08);
main_start = new Date(2018, 12, 05);
cct_start  = new Date(2019, 01, 02);
qkf_start = new Date(2020, 01, 10);

significant_names = Array('qki', 'qkimain', 'cct', 'qkf');
significant_days = Array(qki_start, main_start, cct_start, qkf_start);
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
    qkf_days = date_substract(today, qkf_start);
    document.getElementById('qki_days').innerHTML = qki_days;
    document.getElementById('main_days').innerHTML = main_days;
    document.getElementById('cct_days').innerHTML = cct_days;
    document.getElementById('qkf_days').innerHTML = qkf_days;
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