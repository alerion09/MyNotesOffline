//FUNKCJE------------------------------
function change_theme()    
{   
    class Theme
    {
        constructor (firstColor, secondColor)
        {
            this.firstColor = firstColor;
            this.secondColor = secondColor;
        }
        set_color() 
        {   
            const top = document.getElementsByClassName("top");
            const green_button = document.getElementsByClassName("green_button");
            const menu_options = document.getElementsByClassName("menu_options");
            let i;
            for (i = 0; i < top.length; i++) 
            {
                top[i].style.backgroundColor = this.firstColor;
            }
            let j;
            for (j = 0; j < green_button.length; j++) 
            {
                green_button[j].style.backgroundColor = this.firstColor;
            }
            document.getElementsByTagName("body")[0].style.backgroundColor= this.secondColor;
            let k;
            for (k = 0; k < menu_options.length; k++) 
            {
                menu_options[k].style.backgroundColor = this.firstColor;
            }
        }
    }
    //Ustawienie motywu
    const color = localStorage.getItem("theme"); //Wczytanie aktualnego motywu z pamięci lokalnej
    const col = new Theme();

    switch (color)
    {
        case "blue":
            {
                col.firstColor = "rgb(76, 91, 175)";
                col.secondColor = "#f6f6fc";
            }break;
        case "red":
            {
                col.firstColor = "rgb(175, 76, 76)";
                col.secondColor = "#fcf6f6";
            }break;
        case "pink":
            {
                col.firstColor = "rgb(179, 87, 179)";
                col.secondColor = "#fcf6fb";
            }break;
        case "black":
            {
                col.firstColor = "rgb(34, 34, 34)";
                col.secondColor = "#ffffff";
            }break;
    }
    col.set_color();
}