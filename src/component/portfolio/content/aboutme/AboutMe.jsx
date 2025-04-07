import React from 'react';
import SectionWrap from '../SectionWrap.jsx';
import MajorList from './MajorList.jsx';
import JobList from './JobList.jsx';

export default function AboutMe() {
    return (
        <SectionWrap
            id="about"
            title="About Me"
            // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            //     Iure natus, temporibus perspiciatis repudiandae nostrum modi
            //     doloremque expedita non eius ipsum! Beatae porro adipisci 
            //     omnis architecto dignissimos. Iusto ipsa inventore adipisci."
        >
            <ul className="about-me-desc">
                <li>
                    <p>✔️Front-end</p>
                    <p>사용자 중심의 UI/UX를 고려한 반응형 웹 개발에 익숙하며, React를 활용한 컴포넌트 기반 설계와 상태 관리에 능숙합니다. Redux를 통해 전역 상태를 효율적으로 관리합니다.</p>
                </li>
                <li>
                    <p>✔️Back-end</p>
                    <p>Express 기반의 서버를 구축하여 RESTful API를 설계하고, 클라이언트와의 원활한 통신을 구현합니다.</p>
                </li>
                <li>
                    <p>✔️Database</p>
                    <p>관계형 데이터베이스 설계 및 CRUD 작업에 익숙하며, 실제 서비스에서 데이터 흐름을 고려한 쿼리 작성이 가능합니다.</p>
                </li>
                <li>
                    <p>✔️Tool</p>
                    <p>VS Code를 활용한 효율적인 개발 환경을 구성하며, Git을 통한 버전 관리와 협업 경험을 보유하고 있습니다.</p>
                </li>
            </ul>
            <MajorList />
            {/* <JobList /> */}
        </ SectionWrap>
    );
}
