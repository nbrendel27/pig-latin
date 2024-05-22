const piglatin = require("../src/piglatin")

describe("At least five (5) tests for words starting with different vowels.", ()=>{
    test(`"apple" --> "appleway"`, () => {
        expect(piglatin("apple")).toBe("appleway");
    });
    test(`"else" --> "elseway"`, () => {
        expect(piglatin("else")).toBe("elseway");
    });
    test(`"unreal" --> "unrealway"`, () => {
        expect(piglatin("unreal")).toBe("unrealway");
    });
    test(`"ire" --> "ireway"`, () => {
        expect(piglatin("ire")).toBe("ireway");
    });
    test(`"Orange" --> "orangeway"`, () => {
        expect(piglatin("Orange")).toBe("orangeway");
    });
    test(`"yellow" --> "ellowyay"`, () => {
        expect(piglatin("yellow")).toBe("ellowyay");
    });
    test(`"mow" --> "owmay"`, () => {
        expect(piglatin("mow")).toBe("owmay");
    });
    test(`"Jill" --> "illjay"`, () => {
        expect(piglatin("Jill")).toBe("illjay");
    });
    test(`"thought" --> "oughtthay"`, () => {
        expect(piglatin("thought")).toBe("oughtthay");
    });
    test(`"schimitty" --> "imittyschay"`, () => {
        expect(piglatin("schimitty")).toBe("imittyschay");
    });
})