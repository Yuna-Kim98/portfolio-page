import React from 'react';
import Major from './Major.jsx';
import { faServer, faMobile, faDatabase, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

export default function MajorList() {
    const majorList = [
        {
            "icon":faHtml5,
            "majorName":"Front-end",
            "des":"HTML, CSS, JavaScript, React"
        },
        {
            "icon":faServer,
            "majorName":"Back-end",
            "des":"Node.js"
        },
        {
            "icon":faDatabase,
            "majorName":"Database",
            "des":"MySQL"
        },
        {
            "icon":faWrench,
            "majorName":"Tool",
            "des":"Visual Studio Code, Git"
        }
    ];

    return (
        <ul className="majors">
            { majorList && majorList.map((item) => 
                <li className="major">
                    <Major 
                        icon={item.icon}
                        majorName={item.majorName}
                        des={item.des}
                    />
                </li>
            )}
        </ul>
    );
}
