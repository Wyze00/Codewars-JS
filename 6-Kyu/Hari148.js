// * Sentence Calculator (425)

function lettersToNumbers(s) {

    return s.replace(/[^A-Za-z0-9]/g, '').split("").reduce((a,c) => {

        const code = c.charCodeAt(0);
        return a + (code >= 97 ? code - 96 : code >= 65 ? (code - 64) * 2 : code - 48);

    }, 0);
}

  