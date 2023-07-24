import clipboard from "clipboardy";
import promptSync from "prompt-sync";

const prompt = promptSync();

while (true) {
    let text = prompt("What text do you want to convert to emoji text: ");
    clipboard.writeSync(convertToText(text));
    console.log("copied :3")
}

function convertToText(text) {
    let customCharacters = {
        " ": ":zuzzbet_46:", 
        "?": ":zuzzbet_39:", 
        "!": ":zuzzbet_40:",
        "'": ":zuzzbet_41:"
    };
    let string = "";

    for (let i = 0; i < text.length; i++) {
        console.log(text[i])
        if (customCharacters[text[i]]) { 
            string += customCharacters[text[i]];
            continue;
        }

        let whatLetter = text[i].toLowerCase().charCodeAt(0) - 96;
        // tries it the normal alphabet way
        if (whatLetter >= 1 && whatLetter <= 26) {
            if (text[i+1] === ":" || text[i-1] === ":") {
                continue;
            } else {
                string += `:zuzzbet_${('0' + whatLetter).slice(-2)}:`;
            }
        }
        // attempts to make it a cool lil custom emoji
        switch(true) {
            case text[i] === ":" && text[i+1] === "3": 
                string += ":zuzzbet_42:";
                break;
            case text[i-1] === ">" && text[i] === ":" && text[i+1] === "3":
                string += ":zuzzbet_43:";
                break;
            case text[i-1] && text[i-1].toLowerCase() === "d" && text[i] === ":":
                string += ":zuzzbet_44:";
                break;
            case text[i+1] && text[i] === ":" && text[i+1].toLowerCase() === "d":
                string += ":zuzzbet_45:";
                break;
        }
    }
    
    return string;
}