window.onload = function () {
    setInterval(function () { $("[id^=trainLink_]").find("strong.station-name:not(:contains('Köpenhamn'))").parent().parent().hide() }, 500);
}
