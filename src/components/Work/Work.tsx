import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Work.css";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const Work = () => {
    return (
        <div className="work-contents">
            <div className="resume">
                <h2>職務経歴</h2>
                <p>
                    大学でコンピュータ・サイエンスやソフトウェアエンジニアリングなどについて学ぶ。<br/>
                    卒業後はISPにて、自社のクラウドストレージサービスの開発・運用に従事。サーバサイドアプリケーションの開発や障害対応、サーバリプレースなどの運用作業など担当。
                </p>
            </div>
            <div>
                <p>ソースコードなどの成果物はgithubをご覧ください。</p>
                <a href="https://github.com/k-ngs">
                    <FontAwesomeIcon icon={faGithub} size={"4x"} color="black" />
                </a>
            </div>
        </div>
    );
};

export default Work;