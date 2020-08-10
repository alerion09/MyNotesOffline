//FUNKCJE------------------------------
function is_logged_in()    //Uchwyty do rozwijanego menu
{   
    //wydarzenie do przycisku Opcje
    var options = document.getElementById("options_button");
    options.addEventListener("click", f_open_menu, false);  //Funkcja chowania menu

    //wydarzenie do przycisku Notatki
    var show_notes = document.getElementById("show_notes");
    show_notes.addEventListener("click", f_open_index, false);

    //wydarzenie do przycisku Motywy
    var themes = document.getElementById("themes");
    themes.addEventListener("click", f_themes, false);
    
    //wydarzenie do przycisku Ustawienia
    var settings = document.getElementById("settings");
    settings.addEventListener("click", f_settings, false);

    //wydarzenie do przycisku Informacje
    var informations = document.getElementById("informations");
    informations.addEventListener("click", f_informations, false);

}
function f_open_index() //Wyswietlanie strony glownej
{
    window.location.href = 'index.html';
}
function f_themes() //Otwieranie strony motywy
{
    window.location.href = 'themes.html';
}
function f_settings() //Otwieranie strony ustawienia
{
    window.location.href = 'settings.html';
}
function f_informations() //Otwieranie strony informacje
{
    window.location.href = 'informations.html';
}
function f_open_menu() //Funkcja chowania menu
{   
    document.getElementById("menu_options").classList.toggle("show");

    window.onclick = function (event)
    {
        if (!event.target.matches('#options_button'))
        {   
            
            var menu_options = document.getElementsByClassName("menu_options");
            var i;
            for (i = 0; i < menu_options.length; i++)
            {
                var open_menu_options = menu_options[i];
                if (open_menu_options.classList.contains('show'))
                {
                    open_menu_options.classList.remove('show');
                }
            }
        }
    }
}
//-------------------------------------

