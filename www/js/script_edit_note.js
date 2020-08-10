document.addEventListener("DOMContentLoaded", appStart)
var id = (window.localStorage.getItem("id"));                                    //pobieranie id notatki z pamieci

//FUNKCJA STARTOWA ................................................................................
function appStart()
{   
    change_theme();

    var tablica_notatek_local = JSON.parse(window.localStorage.getItem("tablica_notatek_local")); //Parsowanie i pobieranie tablicy z pamieci
    document.getElementById("text").innerHTML = tablica_notatek_local[id]; //Wczytanie tekstu notatki

    var ok_button = document.getElementById("ok_button");     //uchwyt do przycisku Ok
    var delete_button = document.getElementById("delete_button"); //uchwyt do przycisku Usun
    var add_button = document.getElementById("add_button"); //uchwyt do przycisku Dodaj

    ok_button.addEventListener("click", f_change, false);
    add_button.addEventListener("click", f_change, false);
    delete_button.addEventListener("click", f_delete, false);
}
//................................................................................................

//FUNKCJE-----------------------
function f_change() // Funkcja edycji notatki
{
    var text = document.getElementById("text");
    var zawartoscTekstu = text.value; 
    if(zawartoscTekstu == '') //Sprawdzenie czy wpisano treść notatki
    {
        alert("Notatka nie może być pusta");
    }else  
    {
        var tablica_notatek_local = JSON.parse(window.localStorage.getItem("tablica_notatek_local")); //Parsowanie i pobieranie tablicy z pamieci
        tablica_notatek_local[id] = zawartoscTekstu;        //Przypisanie zmienionej wartości tekstu do edytowanej notatki
        var stringTablica_notatek_local = JSON.stringify(tablica_notatek_local); //Stringowanie tablicy
        window.localStorage.setItem("tablica_notatek_local",stringTablica_notatek_local); //Zapisywaie tablicy do pamięci lokalnej
        open_index();       //Otwarcie strony głównej
    }       
}
function f_delete() //Funkcja usuwania notatki
{ 
    var tablica_notatek_local = JSON.parse(window.localStorage.getItem("tablica_notatek_local")); //Parsowanie i pobieranie tablicy z pamieci
    tablica_notatek_local.splice(id, 1);   // Wycięcie notatki z tablicy
    stringTablica_notatek_local = JSON.stringify(tablica_notatek_local); //Stringowanie tablicy
    window.localStorage.setItem("tablica_notatek_local", stringTablica_notatek_local); // Zapisanie tablicy do pamięci lokalnej
    open_index();
    
}
function open_index() //Funkcja otwierająca główną stronę
    {
        window.location.href = 'index.html';
    }
//-------------------------------