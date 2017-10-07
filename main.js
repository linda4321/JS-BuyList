$(function(){

    var $list = $(".bl-list");
    var LIST_ROW = $(".bl-row").html();

    var $bought = $(".bl-bought");
    var SEGMENT = $(".bl-segment-elements-area").html();
    var SEGMENT_BOUGHT = $(".bl-segment-elements-area-bought").html();

    function addItem(title){
        var $new_row = $(LIST_ROW);

        $new_row.find(".bl-list-row-product").text(title);

        var amount = 1;
        $amount_label = $new_row.find("span.bl-list-row-count-label");
        $amount_label.text(amount);

        var $segment_element = $(SEGMENT);
        var $segment_element_bought = $(SEGMENT_BOUGHT);
        var $segment_title = $segment_element.find(".bl-segment-elements-area-element-product");
        var $segment_amount =  $segment_element.find(".bl-segment-elements-area-element-number");
        var $segment_title_bought = $segment_element_bought.find(".bl-segment-elements-area-element-product");
        var $segment_amount_bought =  $segment_element_bought.find(".bl-segment-elements-area-element-number");
        $segment_title.text(title);
        $segment_amount.text(amount);
        $segment_title_bought.text(title);
        $segment_amount_bought.text(amount);
        $segment_element.appendTo($bought.find(".bl-segment-element")).hide().fadeIn("slow");
        $bought.find(".bl-segment-bought").append($segment_element_bought);
        $segment_element_bought.hide();


        $new_row.find("button.bl-list-row-count-minus").click(function(){
           if(amount > 1) {
               amount -= 1;
               $amount_label.text(amount);
               $segment_amount.text(amount);
               $segment_amount_bought.text(amount);
           }
        });

        $new_row.find("button.bl-list-row-count-plus").click(function(){
            amount += 1;
            $amount_label.text(amount);
            $segment_amount.text(amount);
            $segment_amount_bought.text(amount);
        });

        $new_row.find("button.bl-list-row-buttons-cross-button").click(function(){
            $new_row.fadeOut("slow");
            $segment_element.fadeOut("slow");
        });

        $new_row.find("button.bl-list-row-buttons-bought-button").click(function(){
            $new_row.addClass("bl-list-row-is-bought");
            $new_row.removeClass("bl-list-row");

            $segment_element_bought.show();
            $segment_element.hide();
        });

        $new_row.find("button.bl-list-row-buttons-unbuy-button").click(function(){
            $new_row.addClass("bl-list-row");
            $new_row.removeClass("bl-list-row-is-bought");

            $segment_element_bought.hide();
            $segment_element.show();
        });

        var $change_name = $new_row.find(".name-input");
        var $name_label = $new_row.find(".bl-list-row-product");

        $name_label.click(function(){
            $(this).hide();
            $change_name.val($(this).text());
            $change_name.css("display", "inline");
            $change_name.focus();
        });

        $change_name.focusout(function(){
            var new_title = $.trim($change_name.val());
            if(new_title.length > 0){
                $name_label.text(new_title);
                $segment_title.text(new_title);
                $segment_title_bought.text(new_title);
            }
            $(this).hide();
            $name_label.show();
        });

        $new_row.appendTo($list).hide().fadeIn("slow");
    }

    var $input = $list.find(".add-good input.add-good-area-name");

    $list.find("button.add-good-area-button").click(function(){
        var title = $input.val();
        title = $.trim(title);
        if(title.length !== 0)
            addItem(title);
        $input.val("");
    });

});
