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
        $("#" + this.name).html(this.icon);
    }
}

var creado = 0;
var y;
var y_existe;
var existe = true;

function yupana(value) {
    //console.log(list.length);
    //console.log(list);
    y = new yp(value, false, icon_main, 0);
    if (list.length == 0) {
        //console.log("es nuevo");
        y.change_icon();
        list.push(y);
        return;
    } else {
        for (i = 0; i < list.length; i++) {
            //console.log("list[i]");
            //console.log(list[i]);
            //console.log("y");
            //console.log(y);
            if (list[i].name == y.name) {
                y_existe = list[i];
                //console.log("existe");
                existe = true;
                break;
            } else {
                existe = false;
            }
        }
    }
    
    //Si existen cambia icono

    if(existe){
        y_existe.change_icon();
        //list.push(y)
    }
    
    //Si no existe lo agrega 
    else{
        //console.log("es nuevo");
        y.change_icon(); 
        list.push(y);
    }
};