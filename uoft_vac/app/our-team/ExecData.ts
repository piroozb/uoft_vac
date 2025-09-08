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
   Sy: {
        name: "Sulaeem Sy Ali",
        position: "President",
        colour: "#FFDC30",
        study: "3nd year, Health & Disease",
        medium: "coloured pencils",
        fact: "I am a scooter master",
    },

    Allison: {
        position: "Co-Vice President",
        colour: "#F96BBA",
        study: "4th year, Pathobiology",
        medium: "digital",
        fact: "I like cats.",
    },

    Jackie: {
        name: "Jackie Zhu",
        position: "Co-Vice President",
        colour: "#51F5CC",
        study: "6th year, Computer Science",
        medium: "digital",
        fact: "I am addicted to Pokémon Go right now",
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
        colour: "#B0195A",
        study: "2nd year, Cognitive Science/Psychology/Visual Studies",
        medium: "Art",
        fact: "I am fun",
    },

    Pelin: {
        position: "Events Assistant",
        colour: "#F6CCFF",
        study: "2nd year, Computer Science",
        medium: "pencil, watercolour",
        fact: "I learned Turkish only by watching tv shows.",
    },

    Joyce: {
        position: "Events Assistant",
        colour: "#00ebff",
        study: "5th year, Economics/Statistics/East Asian Studies",
        medium: "digital",
        fact: "I'm writing a novel that totals over 115k words!",
    },

    Valentine: {
        name: "Val",
        position: "Events Assistant",
        colour: "#AB0803",
        study: "3rd year, Political Science/Diaspora/Transnational Studies",
        medium: "digital, watercolours, oil paints",
        fact: "i've studied over 4 languages",
    },

    // Graphics team.
    BiewBiew: {
        name: "Biew Biew",
        position: "Graphics Director",
        colour: "#A6A3FC",
        study: "4th year, History",
        medium: "watercolour, digital",
        fact: "I can recite the overwatch short ”dragons” from memory.",
    },

    Angelia: {
        position: "Graphics Assistant",
        colour: "#80DDE0",
        study: "5th year, Political Science",
        medium: "digital",
        fact: "I think that oat milk is the best tasting milk >:D",
    },

    Christina: {
        position: "Graphics Assistant",
        colour: "#D6D5F2",
        study: "3rd year, Biology",
        medium: "digital, pencil",
        fact: "I can't stop buying that one black cover Dollarama sketchbook",
    },

    Rachel: {
        position: "Graphics Assistant",
        colour: "#BBEEFF",
        study: "2nd year, Computer Science",
        medium: "digital",
        fact: "I did kickboxing for 2 years and will be picking it up again soon.",
    },

    // Marketing team.
    Jae: {
        position: "Marketing Director",
        colour: "#2E5699",
        study: "3rd year, Human Biology/Art History",
        medium: "acrylic, digital",
        fact: "I have double jointed fingers",
    },

    Nabneel: {
        name: "Nabneel Sarma",
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
        colour: "#F1BAFF",
        study: "3rd year, Psychology",
        medium: "3D Blender",
        fact: "I fumble",
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
        medium: "clay, video editing",
        fact: "I love pibble! Clean my bellay!",
    },

    // Office team.
    Lydia: {
        colour: "#CFABC3",
        study: "3rd year, Mathematics/Philosophy",
        medium: "digital",
        fact: "I used to have ducks as pets.",
    },

    Alex: {
        colour: "#A3D5FF",
        study: "2nd year, Visual Studies/Sociology",
        medium: "oil paint, digital, pencil, crafting with random stuff I pick up on the floor or in the garbage bin",
        fact: "I like wholesome yaoi",
    },
};
