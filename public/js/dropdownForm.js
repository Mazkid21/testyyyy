$(document).ready(function () {
    $("#type").change(function () {
        var val = $(this).val();
        if (val == "Aspen") {
            $("#citySub").html("<option value=''>--select neighborhood for aspen--</option> <option value='b__30312d43656e7472616c20436f7265'>Central Core</option><option value='b__30312d5765737420456e64'>West End</option><option value='b__30312d4561737420417370656e'>East Aspen</option><option value='b__30312d536d7567676c6572'>Smuggler</option><option value='b__30312d5765737420417370656e'>West Aspen</option><option value='b__30312d526564204d6f756e7461696e'>Red Mountain</option><option value='b__30312d4d634c61696e20466c617473'>Mclain Flats</option><option value='b__30332d427275736820437265656b2056696c6c616765'>Brush Creek</option><option value='b__30332d576f6f647920437265656b'>Woody Creek</option>").css("display", "block");
        } else if (val == "b__536e6f776d6173732056696c6c616765") {
            $("#citySub").css("display", "none");
        } else if (val == "b__576f6f647920437265656b") {
            $("#citySub").css("display", "none");
        } else if (val == "Basalt") {
            $("#citySub").html("<option value=''>--select neighborhood for basalt---</option> <option value='b__30352d426173616c742050726f706572'>Basalt Proper</option><option value='b__30352d456c204a6562656c'>El Jebel</option><option value='b__30352d456d6d61536f7072697320437265656b'>Emma-Sopris Creek</option><option value='b__30352d467279696e672050616e5275656469'>Frying Pan-Ruedi</option>").css("display", "block");
        } else if (val == "b__4f6c6420536e6f776d617373") {
            $("#citySub").css("display", "none");
        } else if (val == "Carbondale") {
            $("#citySub").html("<option value=''>--select neighborhood for Carbondale---</option> <option value='b__30372d436172626f6e64616c652050726f706572'>Carbondale Proper</option><option value='b__30372d436172626f6e64616c6520527572616c'>Carbondale Rural</option>").css("display", "block");
        } else if (val == "Glenwood") {
            $("#citySub").html("<option value=''>--select neighborhood for Glenwood---</option> <option value='b__30392d476c656e776f6f642050726f706572'>Glenwood Proper</option><option value='b__30392d536f757468206f6620476c656e776f6f64'>South Glenwood</option><option value='b__30392d57657374206f6620476c656e776f6f64'>West Glenwood</option>").css("display", "block");
        } else if (val == "Redstone") {
            $("#citySub").html("<option value=''>--select neighborhood for Redstone---</option> <option value='b__30382d4372797374616c2056616c6c6579'>Crystal Valley </option><option value='b__30382d4d6172626c65'>Marble</option><option value='b__30382d52656473746f6e65'>Redstone</option>").css("display", "block");
        } else if (val == "b__4372797374616c2056616c6c6579") {
            $("#citySub").css("display", "none");
        } else if (val == "city0") {
            $("#citySub").css("display", "none");
        }
    });
});