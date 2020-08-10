document.addEventListener("DOMContentLoaded", appStart)

//FUNKCJA STARTOWA ................................................................................
function appStart()
{   
    change_theme();
    document.getElementById("add_button").addEventListener("click", f_create_note, false); //wydarzenie do przycisku Dodaj
    document.getElementById("ok_button").addEventListener("click", f_create_note, false);    //wydarzenie do przycisku Ok
}
//................................................................................................

//FUNKCJE-----------------------
function f_create_note()  //TWORZENIE NOTATKI
{  
    var text = document.getElementById("text");
    var tresc = text.value;
    var existTablica_notatek_local = JSON.parse(window.localStorage.getItem("tablica_notatek_local")); //Parsowanie tablicy
    if(tresc == '') //Komunikat gdy użytkownik nie doda tekstu do notatki
    {
        alert("Notatka nie może być pusta");
    }else
    {
        if (existTablica_notatek_local == null) //Sprawdzanie czy istnieje tablica z notatkami
        {
            Note.createLocalNotesCollection();
            const note = new Note (tresc);
            note.addNoteToLocal();
            open_index();       //Otwarcie strony głównej
        }else
        {    
            const note = new Note (tresc);
            note.addNoteToLocal();
            open_index(); //Otwarcie strony głównej
        }       
    }
    
}

function open_index()     //Otwieranie glownej strony
{
    window.location.href = 'index.html';    
}
//-------------------------------