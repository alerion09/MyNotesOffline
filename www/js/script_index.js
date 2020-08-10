document.addEventListener("DOMContentLoaded", appStart)

//FUNKCJA STARTOWA ................................................................................
function appStart()
{   
    is_logged_in();
    change_theme();
    var dodaj = document.getElementById("add_button");           //uchwyt do przycisku Dodaj
    dodaj.addEventListener("click", f_open_add_note, false);     //wydarzenie do przycisku Dodaj
    
    var tablica_notatek_local = JSON.parse(window.localStorage.getItem("tablica_notatek_local")); //Parsowanie i wczytanie tablicy
    if (tablica_notatek_local == null || tablica_notatek_local == 0) //Sprawdzanie czy taablica nie jest pusta
    {   //Podmiana zawartości kontenera na wiadomość o braku notatek
        let container = document.getElementById("container_notes");
        container.innerHTML = "<div style='text-align:center;color:#717171;; margin-top:50%;'>Brak notatek</div>";
        container.style.columnCount=1;
    }
    for ( var i = 0; i < tablica_notatek_local.length; i++)
    {   //Lamanie wierszy
        if (tablica_notatek_local[i].indexOf("\n") != -1)
        {
            tablica_notatek_local[i]  = tablica_notatek_local[i].replace(/\n/g, "<br />"); //Podmiana znaku \n na <br>
        }
        //tworzenie notatki
        document.getElementById("container_notes").innerHTML += "<button onclick='f_edit_note(" + i + ")' id='" + i + "' class='added_note' ><div>" + tablica_notatek_local[i] + "</div></button>";
    }
    
}//................................................................................................
//FUNKCJE------------------------------
function f_open_add_note () //Otwieranie strony z dodawaniem notatki
{
    window.location.href = 'add_note.html';
}
function f_edit_note(a) //Tworzenie layoutu edycji notatki z funkcja jej zapisywania i usuwania
{
    var id = a;

    window.localStorage.setItem("id", id);

    window.location.href = 'edit_note.html';
    
}
function f_open_index() //Wyswietlanie strony glownej
{
    window.location.href = 'index.html';
}
//-------------------------------------

