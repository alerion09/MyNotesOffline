document.addEventListener("DOMContentLoaded", appStart)

//FUNKCJA STARTOWA ................................................................................
function appStart()
{
    is_logged_in();
    change_theme();
    
    var import_notes = document.getElementById("import_notes"); //Uchwyt do buttona Importuj notatki
    import_notes.addEventListener("click", f_import_notes, false);

    var export_notes = document.getElementById("export_notes"); //Uchwyt do buttona Exportuj notatki
    export_notes.addEventListener("click", f_export_notes, false);

    
}//................................................................................................
//FUNKCJE ................................................................................
function f_import_notes()
{
    console.log('import');
}
function f_export_notes()
{   
    function download(content, fileName, contentType) //Funkcja eksportująca notatki do txt
    {   
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    var notes_data = window.localStorage.getItem("tablica_notatek_local");
    if (notes_data == "[]")
    {
        alert("Brak notatek do wyeksportowania");
    }else
    {
        download(notes_data, 'json.txt', 'text/plain')
        alert("Notatki zostały wyeksportowane");
    }   
}


//................................................................................................
