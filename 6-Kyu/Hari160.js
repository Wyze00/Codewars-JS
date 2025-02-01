// * Simple Fun #47: Stolen Lunch (438)
 
function stolenLunch(note) {
    return note.replace(/[0123456789a-j]/g, (e) => e < 10 ? String.fromCharCode(97 + Number(e)) : String(e.charCodeAt(0)-97));
}