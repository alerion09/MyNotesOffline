document.addEventListener("DOMContentLoaded", appStart)
const id = (window.localStorage.getItem("id"));                                    //pobieranie id notatki z pamieci
const local_notes_array = JSON.parse(window.localStorage.getItem("local_notes_array"));//Parsowanie i pobieranie tablicy z pamieci
//FUNKCJA STARTOWA ................................................................................
function appStart()
{   
    change_theme();
    document.getElementById("text").innerHTML = local_notes_array[id]; //Wczytanie tekstu notatki

    const ok_button = document.getElementById("ok_button");     //uchwyt do przycisku Ok
    const delete_button = document.getElementById("delete_button"); //uchwyt do przycisku Usun
    const add_button = document.getElementById("add_button"); //uchwyt do przycisku Dodaj

    ok_button.addEventListener("click", f_change, false);
    add_button.addEventListener("click", f_change, false);
    delete_button.addEventListener("click", f_delete, false);
}
//................................................................................................
//FUNKCJE-----------------------
function f_change() // Funkcja edycji notatki
{
    const text = document.getElementById("text");
    const zawartoscTekstu = text.value; 
    if(zawartoscTekstu == '') //Sprawdzenie czy wpisano treść notatki
    {
        alert("Notatka nie może być pusta");
    }else  
    {
        local_notes_array[id] = zawartoscTekstu;        //Przypisanie zmienionej wartości tekstu do edytowanej notatki
        const stringlocal_notes_array = JSON.stringify(local_notes_array); //Stringowanie tablicy
        window.localStorage.setItem("local_notes_array",stringlocal_notes_array); //Zapisywaie tablicy do pamięci lokalnej
        open_index();       //Otwarcie strony głównej
    }       
}
function f_delete() //Funkcja usuwania notatki
{ 
    local_notes_array.splice(id, 1);   // Wycięcie notatki z tablicy
    stringlocal_notes_array = JSON.stringify(local_notes_array); //Stringowanie tablicy
    window.localStorage.setItem("local_notes_array", stringlocal_notes_array); // Zapisanie tablicy do pamięci lokalnej
    open_index();   
}
function open_index() //Funkcja otwierająca główną stronę
    {
        window.location.href = 'index.html';
    }
//-------------------------------