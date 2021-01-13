document.addEventListener("DOMContentLoaded", appStart)
//FUNKCJA STARTOWA ................................................................................
function appStart()
{   
    is_logged_in();
    change_theme();
    const add_button = document.getElementById("add_button");           //uchwyt do przycisku Dodaj
    add_button.addEventListener("click", f_open_add_note, false);     //wydarzenie do przycisku Dodaj
    
    const local_notes_array = JSON.parse(window.localStorage.getItem("local_notes_array")); //Parsowanie i wczytanie tablicy
    if (local_notes_array == null || local_notes_array == 0) //Sprawdzanie czy taablica nie jest pusta
    {   //Podmiana zawartości kontenera na wiadomość o braku notatek
        const container = document.getElementById("container_notes");
        container.innerHTML = "<div style='text-align:center;color:#717171;; margin-top:50%;'>Brak notatek</div>";
        container.style.columnCount=1;
    }else
    for ( let i = 0; i < local_notes_array.length; i++)
    {   //Lamanie wierszy
        if (local_notes_array[i].indexOf("\n") != -1)
        {
            local_notes_array[i]  = local_notes_array[i].replace(/\n/g, "<br />"); //Podmiana znaku \n na <br>
        }
        //tworzenie notatki
        document.getElementById("container_notes").innerHTML += "<button onclick='f_edit_note(" + i + ")' id='" + i + "' class='added_note' ><div>" + local_notes_array[i] + "</div></button>";
    }
}//................................................................................................
//FUNKCJE------------------------------
function f_open_add_note () //Otwieranie strony z dodawaniem notatki
{
    window.location.href = 'add_note.html';
}
function f_edit_note(a) //Tworzenie layoutu edycji notatki z funkcja jej zapisywania i usuwania
{
    let id = a;
    window.localStorage.setItem("id", id);
    window.location.href = 'edit_note.html';
}
function f_open_index() //Wyswietlanie strony glownej
{
    window.location.href = 'index.html';
}
//-------------------------------------

