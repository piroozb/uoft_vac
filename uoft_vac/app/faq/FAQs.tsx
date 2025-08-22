import { ReactNode } from "react";

import {
    membershipFormLink,
    discordLink,
    instagramLink,
    faqLinkDarkBlue,
    faqLinkHoverblue,
} from "../common/Constants";
import TextLink from "../common/TextLink";

export interface FAQProps {
    q: string;
    a: ReactNode;
}

export const faqs: FAQProps[] = [
    {
        q: "How do I join VAC?",
        a: <>
        Simply follow the instructions{" "}
        <TextLink
            text="here"
            href="/join-us"
            style={{ color: faqLinkDarkBlue}}
            hoverStyle={{ color: faqLinkHoverblue}}
            stay
        />
        !
        </>,
    },

    {
        q: "Is this club active?",
        a: <>
        Yes! VAC is active for both Fall and Winter semesters of the new school year. Please check{" "}
        our announcements on{" "}
        <TextLink
            text="Discord"
            href={discordLink}
            style={{ color: faqLinkDarkBlue}}
            hoverStyle={{ color: faqLinkHoverblue}}
        />
        {" "}and{" "}
        <TextLink
            text="Instagram"
            href={instagramLink}
            style={{ color: faqLinkDarkBlue}}
            hoverStyle={{ color: faqLinkHoverblue}}
        />
        {" "}for any updates.
        </>,
    },

    {
        q: "Are there any fees to pay as a club member?",
        a: <>
        Joining VAC is totally free! Most of our events are also free, with the exception of some{" "}
        special events, where snacks and/or more expensive supplies are provided. The fee will be{" "}
        specified when such events are announced.
        </>,
    },

    {
        q: "What is the required skill level to join VAC?",
        a: <>
        We welcome artists of all skill levels here! Our events are also planned with this in mind : )
        </>,
    },

    {
        q: "Which art media and/or art styles are promoted at VAC?",
        a: <>
        VAC welcomes all artists, regardless of their preferred art medium and art style. Our{" "}
        events also incorporate and embrace various art media and art styles.
        </>
    },

    {
        q: "Do I have to bring my own art supplies to VAC events?",
        a: <>
        We always provide art supplies to our events, but you are free to also bring your own.
        </>,
    },

    {
        q: "Can UTM and UTSC students join VAC?",
        a: <>
        Yes! You are free to join VAC even if you are not from UTSG. Please note that our weekly{" "}
        events are however usually held at UTSG. If you are from UTSC, you might be interested{" "}
        in checking out UTSC VAC instead.
        </>,
    },

    {
        q: "Can alumni students join VAC?",
        a: <>
        Yes! While our in-person events are usually made for current students, you are free to{" "}
        join our Discord to hang out with everyone online. If you want to attend our in-person{" "}
        events, please make sure you come with a friend who is a current UofT student, or{" "}
        <TextLink
            text="contact us"
            href="/contact-us"
            style={{ color: faqLinkDarkBlue}}
            hoverStyle={{ color: faqLinkHoverblue}}
            stay
        />
        .
        </>,
    },
    
    {
        q: "I can’t access the Discord server. Why is this happening?",
        a: <>
        You need to fill out our{" "}
        <TextLink
            text="membership verification form"
            href={membershipFormLink}
            style={{ color: faqLinkDarkBlue}}
            hoverStyle={{ color: faqLinkHoverblue}}
        />
        {" "}before being granted access to our Discord server. Since we manually verify our members,{" "}
        please then wait for a few days. In the meantime, you can go through our server rules.
        </>
    },
];
