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
        window.localStorage.setItem("tablica_notatek_local",stringEmptyArray);
    }
    static removeLocalNotesCollection() //Usuwanie tablicy notatek z pamieci lokalnej
    {
        window.localStorage.removeItem("tablica_notatek_local");
    }
    addNoteToLocal() //Dodawanie notatki do tablicy w pamięci lokalnej
    {   
        let notesArray = window.localStorage.getItem("tablica_notatek_local");
        let parseNotesArray = JSON.parse(notesArray);
        parseNotesArray.push(this.content); //Dodanie zawartości notatki do tablicy
        let stringNotesArray = JSON.stringify(parseNotesArray);
        window.localStorage.setItem("tablica_notatek_local", stringNotesArray);
    }
}
