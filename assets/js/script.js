$(document).ready(function() {
    $(function() {
        (function(name) {
            var container = $('#pagination-' + name);
            $.ajax({
                type: "GET",
                url: "https://digimon-api.vercel.app/api/digimon",
                dataType: "json",
                async: true,
                success: function(data) {
                    let result = ["data"];
                    var sources = function() {
                        for (var i = 1; i < data.length; i++) {
                            result.push("<a href=" + data[i].img + ">" + data[i].name + "</a> " + data[i].level);
                        }
                        return result;
                    }();
                    var options = {
                        dataSource: sources,
                        callback: function(response, pagination) {
                            window.console && console.log(pagination);
                            var dataHtml = '<ul>';
                            dataHtml += "<li><h4>Nombre" + " " + " Nivel</h4></li>"
                            $.each(response, function(index, item) {
                                dataHtml += '<li>' + item + '</li>';
                            });
                            dataHtml += '</ul>';
                            container.prev().html(dataHtml);
                        }
                    };
                    //$.pagination(container, options);
                    container.addHook('beforeInit', function() {
                        window.console && console.log('beforeInit...');
                    });
                    container.pagination(options);
                    container.addHook('beforePageOnClick', function() {
                        window.console && console.log('beforePageOnClick...');
                        //return false
                    });
                }
            })
        })('demo1');
    })
})