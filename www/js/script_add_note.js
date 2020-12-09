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
    const text = document.getElementById("text");
    const content = text.value;
    const existlocal_notes_array = JSON.parse(window.localStorage.getItem("local_notes_array")); //Parsowanie tablicy
    if(content == '') //Komunikat gdy użytkownik nie doda tekstu do notatki
    {
        alert("Notatka nie może być pusta");
    }else
    {
        if (existlocal_notes_array == null) //Sprawdzanie czy istnieje tablica z notatkami
        {
            Note.createLocalNotesCollection();
            const note = new Note (content);
            note.addNoteToLocal();
            open_index();       //Otwarcie strony głównej
        }else
        {    
            const note = new Note (content);
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