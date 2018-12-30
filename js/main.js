function showSearchBox() {
        var visible = $('#search-box').is(':visible');
        if (visible) {
            $('#search-box').css('display', 'none');
        }
        else {
            $('#search-box').css('display', 'inline');
        }
    }

    function resizeImage(idImage, size) {
        switch (size) {
            case 'small': {
                width = 50;
                height = 100;
                break;
            }
            case 'big': {
                width = 100;
                height = 200;
                break;
            }
            case 'large': {
                width = 200;
                height = 400;
                break;
            }
        }

        $('#' + idImage).css('width', width + 'px');
        $('#' + idImage).css('height', height + 'px');
    }