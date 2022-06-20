$(document).ready(function () {
    $("#toobin").click(function () {
        getData("toobin");
    })
    $("#sorkin").click(function () {
        getData("sorkin");
    })
    $("#chua").click(function () {
        getData("chua");
    })
    $("#sampson").click(function () {
        getData("sampson");
    })
}); // end ready


function getData(filename) {
    $.getJSON(`./json_files/${filename}.json`, function (data) {
        $.each(data, function () {
            $.each(this, function (key, value) {
                $("#content").empty();
                $("#content").append(
                    "<h1>" + value.title + "</h1>" +
                    `<img src="${value.image}" >` +
                    "<h2>" + value.month + "<br>" + value.speaker + "</h2>" +
                    "<p>" + value.text + "</p>"
                )
            });
        });
    });
}