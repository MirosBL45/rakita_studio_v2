// icons
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiMailLine } from 'react-icons/ri';

export const linksHomePage = [
    {
        id: 1,
        title: "Početna",
        url: "/",
    },
    {
        id: 2,
        title: "O nama",
        url: "/#o_nama",
    },
    {
        id: 3,
        title: "Naše usluge",
        url: "/#usluge",
    },
    {
        id: 4,
        title: "Naši radovi",
        url: "/#radovi",
    },
    {
        id: 5,
        title: "Kontakt",
        url: "/#kontakt",
    },
];

export const linksContact = [
    {
        id: 1,
        icon: <RiYoutubeLine size={22} />,
        url: "https://www.youtube.com/@studiorakita3385/videos",
    },
    {
        id: 2,
        icon: <RiInstagramLine size={22} />,
        url: "https://www.instagram.com/highlights.studio.rakita",
    },
    {
        id: 3,
        icon: <RiFacebookLine size={22} />,
        url: "https://www.facebook.com/highlights.studio.rakita",
    },
    {
        id: 4,
        icon: <RiMailLine size={22} />,
        url: "/#kontakt",
    },
]