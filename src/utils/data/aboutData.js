// icons
import { CgCamera } from "react-icons/cg";
import { GiDeliveryDrone } from "react-icons/gi";
import { SiAdobepremierepro, SiAdobephotoshop, SiFigma } from "react-icons/si";
import { TbSquareLetterV } from "react-icons/tb";
import { MdOutlinePhotoCamera } from "react-icons/md";

//  data
export const aboutDataSkills = [
    {
        title: "veštine",
        info: [
            {
                title: "Video Snimanje:",
                icons: [
                    {
                        iconThis: <CgCamera key="camera" />,
                        title: "Kamerom"
                    },
                    {
                        iconThis: <GiDeliveryDrone key="drone" />,
                        title: "Dronom"
                    },
                ],
            },
            {
                title: "Video montaža:",
                icons: [
                    {
                        iconThis: <TbSquareLetterV key="vegas" />,
                        title: "Vegas Pro"
                    },
                    {
                        iconThis: <SiAdobepremierepro key="premierepro" />,
                        title: "Adobe Premiere Pro"
                    },
                ],
            },
            {
                title: "Fotografisanje:",
                icons: [
                    {
                        iconThis: <MdOutlinePhotoCamera key="PhotoCamera" />,
                        title: "Foto-aparatom"
                    },
                    {
                        iconThis: <GiDeliveryDrone key="drone" />,
                        title: "Dronom"
                    },
                ],
            },
            {
                title: "Obrada fotografija:",
                icons: [
                    {
                        iconThis: <SiAdobephotoshop key="Adobephotoshop" />,
                        title: "Adobe Photoshop"
                    },
                    {
                        iconThis: <SiFigma key="SiFigma" />,
                        title: "Figma"
                    },
                ],
            },
        ],
    },
    {
        title: "priznanja",
        info: [
            {
                title: "Dugi niz godina rada doneo nam je veliki broj priznanja počevši od sportskih klubova, pa sve do mladenaca zadovoljnih svojim divnim svadbenim snimcima.",
            },
        ],
    },
    {
        title: "iskustvo",
        info: [
            {
                title: "Ponosimo se dugogodišnjim iskustvom u snimanju i editovanju događaja - od svadbi do sportskih mečeva. Sa svakim novim zadatkom, donosimo svež pristup i kreativnost kako bismo stvorili video zapise koji ostavljaju trajan utisak.",
            },
        ],
    },
    {
        title: "Zašto Mi?",
        info: [
            {
                title: "Kvalitet se prepoznaje na prvi pogled jer naša posvećenost pružanju vrhunskog kvaliteta u svakom kadru osigurava da svaki trenutak postane nezaboravan.",
            },
        ],
    },
];

export const numbersAbout = [
    { value: 20, label: 'Godina iskustva' },
    { value: 250, label: 'Srećnih klijenata' },
    { value: 650, label: 'Završenih projekata' },
    { value: 35, label: 'Dobijenih nagrada' },
];