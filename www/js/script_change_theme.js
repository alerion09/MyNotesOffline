//FUNKCJE------------------------------
function change_theme()    
{   
    //Ustawienie motywu
    var color = localStorage.getItem("theme"); //Wczytanie aktualnego motywu z pamięci lokalnej

    if (color == "blue")
    {
        var top = document.getElementsByClassName("top");
        var i;
        for (i = 0; i < top.length; i++) 
        {
            top[i].style.backgroundColor = 'rgb(76, 91, 175)';
        }
        var green_button = document.getElementsByClassName("green_button");
        var j;
        for (j = 0; j < green_button.length; j++) 
        {
            green_button[j].style.backgroundColor = 'rgb(76, 91, 175)';
        }
        document.getElementsByTagName("body")[0].style.backgroundColor= '#f6f6fc';
        var menu_options = document.getElementsByClassName("menu_options");
        var k;
        for (k = 0; k < menu_options.length; k++) 
        {
            menu_options[k].style.backgroundColor = 'rgb(76, 91, 175)';
        }
    }
    else if (color == "red")
    {
        var top = document.getElementsByClassName("top");
        var i;
        for (i = 0; i < top.length; i++) 
        {
            top[i].style.backgroundColor = "rgb(175, 76, 76)";
        }
        var green_button = document.getElementsByClassName("green_button");
        var j;
        for (j = 0; j < green_button.length; j++) 
        {
            green_button[j].style.backgroundColor = "rgb(175, 76, 76)";
        }
        document.getElementsByTagName("body")[0].style.backgroundColor= '#fcf6f6';
        var menu_options = document.getElementsByClassName("menu_options");
        var k;
        for (k = 0; k < menu_options.length; k++) 
        {
            menu_options[k].style.backgroundColor = 'rgb(175, 76, 76)';
        }
    }
    else if (color == "pink")
    {
        var top = document.getElementsByClassName("top");
        var i;
        for (i = 0; i < top.length; i++) 
        {
            top[i].style.backgroundColor = "rgb(179, 87, 179)";
        }
        var green_button = document.getElementsByClassName("green_button");
        var j;
        for (j = 0; j < green_button.length; j++) 
        {
            green_button[j].style.backgroundColor = "rgb(179, 87, 179)";
        }
        document.getElementsByTagName("body")[0].style.backgroundColor= '#fcf6fb';
        var menu_options = document.getElementsByClassName("menu_options");
        var k;
        for (k = 0; k < menu_options.length; k++) 
        {
            menu_options[k].style.backgroundColor = 'rgb(179, 87, 179)';
        }
    }
    else if (color == "black")
    {
        var top = document.getElementsByClassName("top");
        var i;
        for (i = 0; i < top.length; i++) 
        {
            top[i].style.backgroundColor = "rgb(34, 34, 34)";
        }
        var green_button = document.getElementsByClassName("green_button");
        var j;
        for (j = 0; j < green_button.length; j++) 
        {
            green_button[j].style.backgroundColor = "rgb(34, 34, 34)";
        }
        document.getElementsByTagName("body")[0].style.backgroundColor= '#ffffff';
        var menu_options = document.getElementsByClassName("menu_options");
        var k;
        for (k = 0; k < menu_options.length; k++) 
        {
            menu_options[k].style.backgroundColor = 'rgb(34, 34, 34)';
        }
    }
}