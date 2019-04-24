var icon_main = "🥔";
var space_main = "&nbsp;&nbsp;&nbsp;"

var list = [];


class yp {
    constructor(name, flag, icon, val) {
        this.name = name;
        this.flag = flag;
        this.icon = icon;
        this.val = val;
    }

    // Método
    change_icon() {
        if (!this.flag) {
            //console.log("flag false");
            this.icon = icon_main;
            this.flag = true;
        } else {
            //console.log("flag true");
            this.icon = space_main;
            this.flag = false;
        }
        $("#"+this.name).html(this.icon);
    }
}



/*var flag_dm_m_1 = false;
$("#dm_m_1").click(function () {
    if (!flag_dm_m_1) {
        $("#dm_m_1").html(icon);
        flag_dm_m_1 = true;
    }
    else{
        $("#dm_m_1").html(space);
        flag_dm_m_1 = false;
    }
});*/
var creado = 0;
var y;

function yupana(value) {

    //Si existen cambia icono
    
    //Si no existe lo crea 

    if (creado == 0) {
        y = new yp(value, false, icon_main, 0);
        creado = 1;
    };
    y.change_icon();
    list.push(y)
    console.log(y);
    console.log(list);

    var pos = list.indexOf(value);
    console.log(pos);
};