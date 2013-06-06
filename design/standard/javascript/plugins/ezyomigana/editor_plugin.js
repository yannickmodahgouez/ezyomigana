(function () {

    tinymce.create("tinymce.plugins.ezYomiganaPlugin", {

        getInfo:function () {
            return{
                longname:"eZYomigana",
                author:"Yannick Modah Gouez",
                authorurl:"https://github.com/yannickgouez",
                infourl:"https://github.com/yannickgouez/ezyomigana",
                version:"1.0"
            };
        },

        init:function (ed, url) {
            // Register button
            url = url.replace("/ezoe/", "/ezyomigana/")

            ed.addButton('ruby', {  title:'ルビ',
                onclick:function () {
                    ed.execCommand('mceCustom', false, 'yomigana')
                },
                image:url + '/img/ruby.gif'});
        }
    });

    tinymce.PluginManager.add("ezyomigana", tinymce.plugins.ezYomiganaPlugin);
})();