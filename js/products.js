$(document).ready(function () {
        // var data;
        // $.ajax({
        //     dataType: "json",
        //     url: 'data.json',
        //     contentType: 'application/json',
        //     data: data,
        //     success: function (data) {
        //         // console.log(data.products[0].title);
        //         // console.log(data.products[0].price);
        //         // console.log(data.products[0].sale);
        //         // for (var i = 0; i < 10; data.length; i++) {
        //         //     console.log(i);
        //         // }
        //     }
        // });

        $.ajax({
            url : 'data.json',
            type : 'get',
            dataType : 'json',
            success : function (data){
                var html = '';
                $.each (data, function (data, item){
                    for(i = 0; i < item.length; ){
                        if(i<12){
                            html += '<div class="col-md-3 items-product">';
                            html += '<a href="#">';
                            html +=     '<img src="' + item[i].hinhanh + '" alt="'+item[i].title+'">';
                            html += '</a>';
                            html += '<h3>';
                            html +=     '<a href="#">';
                            html +=         item[i].title;
                            html +=     '</a>';
                            html += '</h3>';
                            html += '<span>';
                            html +=     item[i].price;
                            html += '</span>';
                            html += '<button data-toggle="modal" data-target="#exampleModal" id="'+ item[i].idpro +'" data-name="'+ item[i].title +'" data-price="'+ item[i].price +'" class="btn btn-success add-to-cart">Thêm vào giỏ hàng</button>';
                            html += '</div>';
                            html += '<div id="resultScroll"></div>';
                        }
                        i++;
                    }
                });
                $('#result').html(html);
                $(window).scroll(function() {
                    if($(window).scrollTop() + $(window).height() == $(document).height()) {
                        $.each (data, function (data, item){
                            for(i = 50; i < item.length; i++){
                                if(i>12){
                                    html += '<div class="col-md-3 items-product">';
                                    html += '<a href="#">';
                                    html +=     '<img src="' + item[i].hinhanh + '" alt="'+item[i].title+'">';
                                    html += '</a>';
                                    html += '<h3>';
                                    html +=     '<a href="#">';
                                    html +=         item[i].title;
                                    html +=     '</a>';
                                    html += '</h3>';
                                    html += '<span>';
                                    html +=     item[i].price;
                                    html += '</span>';
                                    html += '<button data-toggle="modal" data-target="#exampleModal" class="btn btn-success">Thêm vào giỏ hàng</button>';
                                    html += '</div>';
                                }
                            }
                        });
                        $('#resultScroll').html(html);
                    }
                });
            }
        });


    });