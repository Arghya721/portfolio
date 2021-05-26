var a = 0;
        $(window).scroll(function() {

        var oTop = $('#facts').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.purecounter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-purecounter-end');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
                },

                {

                duration: 1000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

                });
            });
            a = 1;
        }

        });