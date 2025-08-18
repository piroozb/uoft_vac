export interface ExecDataTypes {
    name?: string;
    position?: string;
    colour?: string;
    study?: string;
    medium?: string;
    fact?: string;
}

export const execData: Record<string, ExecDataTypes> = {
    // Admin team.
   Sy: { // Missing data.
        position: "President",
        colour: "#ffd400",
        study: "2nd year, Health & Disease/Cell Molecular Bio",
        medium: undefined,
        fact: "I LOVE POKEMON AND SPACE!",
    },

    Allison: {
        position: "Co-Vice President",
        colour: "#F96BBA",
        study: "4th year, Pathobiology",
        medium: "digital",
        fact: "I like cats.",
    },

    Jackie: { // Missing data.
        position: "Co-Vice President",
        colour: "#21fef7",
        study: "6th year, Computer Science/Visual Art",
        medium: undefined,
        fact: "i shoot lightning from my fingers",
    },

    Emily: { // Missing data.
        position: "Secretary",
        colour: "#ffd400",
        study: "3rd year, Mathematics/Psychology",
        medium: undefined,
        fact: "I have a food journal where I record all the restaurants I have been to.",
    },

    Jaiz: { // Missing data.
        position: "Treasurer",
        colour: "#87c6d4",
        study: "4th year, Computer Science",
        medium: undefined,
        fact: "I enjoy sports (even if I'm not particularly good at any).",
    },

    // Events team.
    Thomas: {
        position: "Events Director",
        colour: "#d42069d",
        study: "2",
        medium: "Art",
        fact: "I am fun",
    },

    Pelin: { // Missing data.
        position: "Events Assistant",
        colour: undefined,
        study: undefined,
        medium: undefined,
        fact: undefined,
    },

    Joyce: {
        position: "Events Assistant",
        colour: "#00ebff",
        study: "5th year, Economics/Statistics/East Asian Studies",
        medium: "digital",
        fact: "I'm writing a novel that totals over 115k words!",
    },

    Valentine: { // Missing data.
        position: "Events Assistant",
        colour: undefined,
        study: undefined,
        medium: undefined,
        fact: undefined,
    },

    // Graphics team.
    BiewBiew: { // Missing data.
        name: "Biew Biew",
        position: "Graphics Director",
        colour: "#a5a3fc",
        study: "4th year, History",
        medium: undefined,
        fact: "My favorite drink flavors are either matcha or ube!",
    },

    Angelia: { // Missing data.
        position: "Graphics Assistant",
        colour: "#87fee9",
        study: "5th year, Political Science",
        medium: undefined,
        fact: "I have a tier list of oatmilks that I like -3-",
    },

    Christina: {
        position: "Graphics Assistant",
        colour: "#D6D5F2",
        study: "3rd year, Biology",
        medium: "digital, pencil",
        fact: "I can't stop buying that one black cover Dollarama sketchbook",
    },

    Rachel: { // Missing data.
        position: "Graphics Assistant",
        colour: undefined,
        study: undefined,
        medium: undefined,
        fact: undefined,
    },

    // Marketing team.
    Jae: {
        position: "Marketing Director",
        colour: "#2E5699",
        study: "3rd year, Human Biology/Art History",
        medium: "acrylic and digital",
        fact: "I have double jointed fingers",
    },

    Nabneel: {
        position: "Marketing Assistant",
        colour: "#2B752B",
        study: "2nd year, Neuroscience/Psychology/Creativity and Society",
        medium: "traditional sketching, inking, painting",
        fact: "I am a little bit addicted to iced tea.",
    },

    Emilio: {
        position: "Marketing Assistant",
        colour: "#C20000",
        study: "2nd year, History/East Asian Studies",
        medium: "digital, miniature painting",
        fact: "I can do multiple character impressions",
    },

    "Kelvin": { // Missing data.
        position: "Marketing Assistant",
        colour: undefined,
        study: undefined,
        medium: undefined,
        fact: undefined,
    },

    // Developer team.
    Pirooz: {
        colour: "#6510e6",
        study: "4th year, Computer Science",
        medium: "painting",
        fact: "I have 4 cats",
    },

    Sunny: {
        colour: "#FF8400",
        study: "2nd year, Mathematics",
        medium: "clay",
        fact: "I love pibble! Clean my bellay!",
    },

    // Office team.
    Lydia: {
        colour: "#CFABC3",
        study: "3rd year, Mathematics/Philosophy",
        medium: "digital",
        fact: "I used to have ducks as pets.",
    },

    Alex: { // Missing data.
        colour: "#A3D5FF",
        study: "2nd year, Visual Studies and Sociology Major",
        medium: "oil paint, digital, pencil, crafting with random stuff I pick up on the floor or in the garbage bin",
        fact: "I like wholesome yaoi",
    },
};
