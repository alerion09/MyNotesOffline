//FUNKCJE------------------------------
function change_theme()    
{   
    //Ustawienie motywu
    const color = localStorage.getItem("theme"); //Wczytanie aktualnego motywu z pamięci lokalnej
    const top = document.getElementsByClassName("top");
    const green_button = document.getElementsByClassName("green_button");
    const menu_options = document.getElementsByClassName("menu_options");
    if (color == "blue")
    {
        let i;
        for (i = 0; i < top.length; i++) 
        {
            top[i].style.backgroundColor = 'rgb(76, 91, 175)';
        }
        let j;
        for (j = 0; j < green_button.length; j++) 
        {
            green_button[j].style.backgroundColor = 'rgb(76, 91, 175)';
        }
        document.getElementsByTagName("body")[0].style.backgroundColor= '#f6f6fc';
        let k;
        for (k = 0; k < menu_options.length; k++) 
        {
            menu_options[k].style.backgroundColor = 'rgb(76, 91, 175)';
        }
    }
    else if (color == "red")
    {
        let i;
        for (i = 0; i < top.length; i++) 
        {
            top[i].style.backgroundColor = "rgb(175, 76, 76)";
        }
        let j;
        for (j = 0; j < green_button.length; j++) 
        {
            green_button[j].style.backgroundColor = "rgb(175, 76, 76)";
        }
        document.getElementsByTagName("body")[0].style.backgroundColor= '#fcf6f6';
        let k;
        for (k = 0; k < menu_options.length; k++) 
        {
            menu_options[k].style.backgroundColor = 'rgb(175, 76, 76)';
        }
    }
    else if (color == "pink")
    {
        let i;
        for (i = 0; i < top.length; i++) 
        {
            top[i].style.backgroundColor = "rgb(179, 87, 179)";
        }
        let j;
        for (j = 0; j < green_button.length; j++) 
        {
            green_button[j].style.backgroundColor = "rgb(179, 87, 179)";
        }
        document.getElementsByTagName("body")[0].style.backgroundColor= '#fcf6fb';
        let k;
        for (k = 0; k < menu_options.length; k++) 
        {
            menu_options[k].style.backgroundColor = 'rgb(179, 87, 179)';
        }
    }
    else if (color == "black")
    {
        let i;
        for (i = 0; i < top.length; i++) 
        {
            top[i].style.backgroundColor = "rgb(34, 34, 34)";
        }
        let j;
        for (j = 0; j < green_button.length; j++) 
        {
            green_button[j].style.backgroundColor = "rgb(34, 34, 34)";
        }
        document.getElementsByTagName("body")[0].style.backgroundColor= '#ffffff';
        let k;
        for (k = 0; k < menu_options.length; k++) 
        {
            menu_options[k].style.backgroundColor = 'rgb(34, 34, 34)';
        }
    }
}