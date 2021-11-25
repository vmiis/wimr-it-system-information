(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wimr";
    //-------------------------------------------------------------------------------------
    m[p+"information-system"]     ={url:H+"/business/information-system/page.html",prefix:p,router:1};
    m[p+"printer"]                ={url:H+"/business/printer/page.html",prefix:p,router:1};
})();
