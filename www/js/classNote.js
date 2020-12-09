class Note  
{
    constructor(content)
    {
        this.content = content;
    }
    static createLocalNotesCollection() //Tworzenie w pamięci lokalnej tablicy do której wkładane będą notatki
    {   
        let emptyArray = [];
        let stringEmptyArray = JSON.stringify(emptyArray);
        window.localStorage.setItem("local_notes_array",stringEmptyArray);
    }
    static removeLocalNotesCollection() //Usuwanie tablicy notatek z pamieci lokalnej
    {
        window.localStorage.removeItem("local_notes_array");
    }
    addNoteToLocal() //Dodawanie notatki do tablicy w pamięci lokalnej
    {   
        let notesArray = window.localStorage.getItem("local_notes_array");
        let parseNotesArray = JSON.parse(notesArray);
        parseNotesArray.push(this.content); //Dodanie zawartości notatki do tablicy
        let stringNotesArray = JSON.stringify(parseNotesArray);
        window.localStorage.setItem("local_notes_array", stringNotesArray);
    }
}
