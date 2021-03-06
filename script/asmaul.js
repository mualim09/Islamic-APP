AOS.init();

$(document).ready(function () {
    if (localStorage.getItem("asmaul") != null) {
        let result = JSON.parse(localStorage.getItem("asmaul"));
        $("#loadingText").fadeOut();
        for (var x = 0; x < 99; x++) {
            var original = '<div class="glass col-sm-12 col-md-3 pb-4 mb-4 " data-aos="fade-up" data-aos-delay="200">';
            var gutter = '<div class="glass col-sm-12 col-md-3 offset-md-1 mb-4 pb-4 " data-aos="fade-up" data-aos-delay="200">';
            var content = '<h3 class=" text-center display-5 mt-4 mb-4" id="prayTitle">' + result.data[x].arabic + '</h3><div class="text-center"><span class="lead" style="font-weight: bold;">' + result.data[x].latin + '</span> <div class="text-center"><span class="lead">' + result.data[x].translation_id + '</span></div> </div>';
            if (x % 3 == 0) {
                content = original + content;
            }
            else {
                content = gutter + content;
            }
            $("#mainFrameAsmaul").append(content);
        }
    }
    else {
        $.ajax({
            url: "https://islamic-api-indonesia.herokuapp.com/api/data/json/asmaulhusna",
            type: "get",
            success: function (response) {
                localStorage.setItem("asmaul", JSON.stringify(response.result));
                $("#loadingText").fadeOut();
                for (var x = 0; x < 100; x++) {
                    var original = '<div class="glass col-sm-12 col-md-3 pb-4 mb-4 " data-aos="fade-up" data-aos-delay="200">';
                    var gutter = '<div class="glass col-sm-12 col-md-3 offset-md-1 mb-4 pb-4 " data-aos="fade-up" data-aos-delay="200">';
                    var content = '<h3 class=" text-center display-5 mt-4 mb-4" id="prayTitle">' + response.result.data[x].arabic + '</h3><div class="text-center"><span class="lead" style="font-weight: bold;">' + response.result.data[x].latin + '</span> <div class="text-center"><span class="lead">' + response.result.data[x].translation_id + '</span></div> </div>';
                    if (x % 3 == 0) {
                        content = original + content;
                    }
                    else {
                        content = gutter + content;
                    }
                    $("#mainFrameAsmaul").append(content);
                }
            },
            error: function (response) {
                alert("Maaf Terjadi Kesalahan!");
            }
        })
    }
})