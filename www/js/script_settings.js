document.addEventListener("DOMContentLoaded", appStart)
//FUNKCJA STARTOWA ................................................................................
function appStart()
{
    is_logged_in();
    change_theme();
    
    const import_notes = document.getElementById("import_notes"); //Uchwyt do buttona Importuj notatki
    import_notes.addEventListener("click", f_import_notes, false);
    const export_notes = document.getElementById("export_notes"); //Uchwyt do buttona Exportuj notatki
    export_notes.addEventListener("click", f_export_notes, false);

    const remove_notes = document.getElementById("remove_notes"); //Uchwyt do buttona Usun notatki
    remove_notes.addEventListener("click", Note.removeLocalNotesCollection ,false);
    remove_notes.addEventListener("click", function(){alert("Usunięto notatki")} ,false);
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
        let a = document.createElement("a");
        let file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    const notes_data = window.localStorage.getItem("local_notes_array");
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
