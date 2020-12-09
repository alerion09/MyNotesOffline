//FUNKCJE------------------------------
function is_logged_in()    //Uchwyty do rozwijanego menu
{   
    const options = document.getElementById("options_button");//wydarzenie do przycisku Opcje
    options.addEventListener("click", f_open_menu, false);  //Funkcja chowania menu
    const show_notes = document.getElementById("show_notes");//wydarzenie do przycisku Notatki
    show_notes.addEventListener("click", f_open_index, false);
    const themes = document.getElementById("themes");//wydarzenie do przycisku Motywy
    themes.addEventListener("click", f_themes, false);
    const settings = document.getElementById("settings");//wydarzenie do przycisku Ustawienia
    settings.addEventListener("click", f_settings, false);
    const informations = document.getElementById("informations");//wydarzenie do przycisku Informacje
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
            const menu_options = document.getElementsByClassName("menu_options");
            let i;
            for (i = 0; i < menu_options.length; i++)
            {
                let open_menu_options = menu_options[i];
                if (open_menu_options.classList.contains('show'))
                {
                    open_menu_options.classList.remove('show');
                }
            }
        }
    }
}
//-------------------------------------

