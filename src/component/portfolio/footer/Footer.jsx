import React from 'react';
import Title from '../content/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const list = [
        { "href": "http://github.com", "icon": faGithub },
        { "href": "http://linkedin.com", "icon": faLinkedin }
    ];

    return (
        <footer id="contact" class="section">
            <Title title="Contact Me" description="dbsk4030@gmail.com" />
            <ul class="contact__links">
                <li>
                    <a className="contact__link" href="https://github.com/Yuna-Kim98"><FontAwesomeIcon icon={faGithub} /></a>
                </li>
                <li>
                    <a className="contact__link" href="https://www.notion.so/11efb98e736680acaca3f1114bbcce70?pvs=4"><img src="images/notion.png" alt="" /></a>
                </li>
            </ul>
            <p>Dream Software Engineer Judy - All right reserved</p>
        </footer>
    );
}