import { ReactNode } from "react";

import {
    MEMBERSHIP_FORM_LINK,
    DISCORD_LINK,
    INSTAGRAM_LINK,
    FAQ_LINK_PASSIVE_BLUE,
    FAQ_LINK_HOVER_BLUE,
} from "../common/Constants";
import TextLink from "../common/TextLink";

export interface FAQProps {
    question: string;
    answer: ReactNode;
}

export const faqs: FAQProps[] = [
    {
        question: "How do I join VAC?",
        answer: <>
        Simply follow the instructions{" "}
        <TextLink
            text="here"
            href="/join-us"
            style={{ color: FAQ_LINK_PASSIVE_BLUE}}
            hoverStyle={{ color: FAQ_LINK_HOVER_BLUE}}
            stay
        />
        !
        </>,
    },

    {
        question: "Is this club active?",
        answer: <>
        Yes! VAC is active for both Fall and Winter semesters of the new school year. Please check{" "}
        our announcements on{" "}
        <TextLink
            text="Discord"
            href={DISCORD_LINK}
            style={{ color: FAQ_LINK_PASSIVE_BLUE}}
            hoverStyle={{ color: FAQ_LINK_HOVER_BLUE}}
        />
        {" "}and{" "}
        <TextLink
            text="Instagram"
            href={INSTAGRAM_LINK}
            style={{ color: FAQ_LINK_PASSIVE_BLUE}}
            hoverStyle={{ color: FAQ_LINK_HOVER_BLUE}}
        />
        {" "}for any updates.
        </>,
    },

    {
        question: "Are there any fees to pay as a club member?",
        answer: <>
        Joining VAC is totally free! Most of our events are also free, with the exception of some{" "}
        special events, where snacks and/or more expensive supplies are provided. The fee will be{" "}
        specified when such events are announced.
        </>,
    },

    {
        question: "What is the required skill level to join VAC?",
        answer: <>
        We welcome artists of all skill levels here! Our events are also planned with this in mind : )
        </>,
    },

    {
        question: "Which art media and/or art styles are promoted at VAC?",
        answer: <>
        VAC welcomes all artists, regardless of their preferred art medium and art style. Our{" "}
        events also incorporate and embrace various art media and art styles.
        </>
    },

    {
        question: "Do I have to bring my own art supplies to VAC events?",
        answer: <>
        We always provide art supplies to our events, but you are free to also bring your own.
        </>,
    },

    {
        question: "Can UTM and UTSC students join VAC?",
        answer: <>
        Yes! You are free to join VAC even if you are not from UTSG. Please note that our weekly{" "}
        events are however usually held at UTSG. If you are from UTSC, you might be interested{" "}
        in checking out UTSC VAC instead.
        </>,
    },

    {
        question: "Can alumni students join VAC?",
        answer: <>
        Yes! While our in-person events are usually made for current students, you are free to{" "}
        join our Discord to hang out with everyone online. If you want to attend our in-person{" "}
        events, please make sure you come with a friend who is a current UofT student, or{" "}
        <TextLink
            text="contact us"
            href="/contact-us"
            style={{ color: FAQ_LINK_PASSIVE_BLUE}}
            hoverStyle={{ color: FAQ_LINK_HOVER_BLUE}}
            stay
        />
        .
        </>,
    },
    
    {
        question: "I can’t access the Discord server. Why is this happening?",
        answer: <>
        You need to fill out our{" "}
        <TextLink
            text="membership verification form"
            href={MEMBERSHIP_FORM_LINK}
            style={{ color: FAQ_LINK_PASSIVE_BLUE}}
            hoverStyle={{ color: FAQ_LINK_HOVER_BLUE}}
        />
        {" "}before being granted access to our Discord server. Since we manually verify our members,{" "}
        please then wait for a few days. In the meantime, you can go through our server rules.
        </>
    },
];
