

function drawMask(paper, array, strokeColor, strokeWidth, fillColor, animateSpeed, textColor, textHoverColor, hasRect, isStructure){
    $.each( array, function(k, v){
        var that = this;

        that.setupInteraction = function(item){
            item.mouseover(function(e){
                obj.animate({
                    fill: fillColor
                }, animateSpeed);
                if(that.text){
                    text.animate({
                        fill : textHoverColor
                    }, animateSpeed);
                }

                e.preventDefault();
            });
            item.mouseout(function(e){
                obj.animate({
                    fill: that.fill
                }, animateSpeed);
                if(that.text){
                    text.animate({
                        fill : textColor
                    }, animateSpeed);
                }
            });

            if(!isStructure){
                item.click(function(e){
                    var data;
                    $.ajax({
                        //здесь должна быть ссылка, на скрипт, который будет возращать данные о квартире
                        url: '', //например flat.php
                        type: "GET",
                        data: {id : that.name},
                        dataType: "html"
                    }).done(function ( data ) {

                            //тестовые данные, которые якобы пришли от сервера
                            data = '<span class="realty__pl-name">3-комнатная квартира,</span> <p class="realty__pl-param realty__pl-param_fst">Тип <span class="realty__pl-data">1-1</span></p> <p class="realty__pl-param realty__pl-param_fst">Этаж <span class="realty__pl-data">2</span></p> <p class="realty__pl-param">Количество комнат <span class="realty__pl-data">3</span></p> <p class="realty__pl-param">Общая площадь <span class="realty__pl-data">80,83 м<sup>2</sup></span></p> <p class="realty__pl-param">Жилая площадь <span class="realty__pl-data">47,20 м<sup>2</sup></span></p> <div class="realty__pl-view"> <img src="img/plan03.jpg" alt=""> </div> <div class="realty__pl-form realty__pl-form_tabl"> <table> <tbody> <tr> <td class="realty__pl-form_tabl-itm"> <a class="realty__pl-form-link" href="1.1.1.1.2-plans-5.html"><span class="ico ico_type_type"></span>Распечатать страницу</a> или отправьте на </td> <td> <div class="b-input-i"> <input class="b-input" type="text" placeholder="электронную почту"> </div> </td> <td class="realty__pl-form_tabl-itm_lst"> <a class="btn btn_disable" href="#">Отправить</a> </td> </tr> </tbody> </table> </div> '


                            $('#flat-desc').html(data).fadeIn(animateSpeed);
                            $("html:not(:animated),body:not(:animated)").animate({ scrollTop: $('#flat-desc').position().top }, animateSpeed);
                        });

                    e.preventDefault();
                });
            }
        };

        var obj = paper.path(that.path);
        obj.attr({
            'fill': that.fill,
            'fill-opacity': that.fillOpacity,
            'stroke': strokeColor,
            'stroke-width': strokeWidth,
            'stroke-linejoin': 'miter',
            'href': that.link ? that.link : '#' + that.name
        });
        that.setupInteraction(obj);

        if (that.text){
            if (hasRect){
                var rect = paper.rect(that.textPos[0] -14,that.textPos[1] -14,30,30,'50%');
                rect.attr({
                    'fill': '#9a3e27',
                    'z-index': '-1',
                    'opacity': 1,
                    'stroke': 0,
                    'href':that.link
                });
                that.setupInteraction(rect);
            }

            //var bbox = obj.getBBox();
            //var text( bbox.x + bbox.width / 2, bbox.y + bbox.height / 2, that.text )
            var text = paper.text(that.textPos[0],that.textPos[1],that.text);
            text.attr({
                'font-size': 14,
                'href':that.link,
                'fill': textColor
            });

            that.setupInteraction(text);
        }
    });
}
