import React from "react";
import "./Home.css";
import myIcon from "../../homeIcon.png";

const Home = () => {
    return (
        <div className="home-content">
            <div>
                <img src={myIcon} width="190" height="193" alt="icon"/>
                <h2>Kohei Nagase</h2>
                <p>
                    インフラからソフトウェアまで幅広く扱っているエンジニアです。Dockerなどのコンテナ技術やMongoDBなどのNoSQLに興味を持って掘り下げています。<br/>
                    アプリケーションではGolangやJavaでの開発を行っております。<br/>
                    システムのメンテナンス性はビジネスの競争力に直結すると考えており、安心して手を入れ続けられるようなシステム構成やソフトウェア開発を心がけております。
                </p>
            </div>
            <div>
                <h3>Skill</h3>
                <div className="skill-set">
                    <div className="skill-lang-box">
                        <h3>言語</h3>
                        <div className="skill-lang">
                            <h4>Golang</h4>
                            <h4>Java</h4>
                            <h4>Python</h4>
                            <h4>TypeScript</h4>
                        </div>
                    </div>

                    <div className="skill-middle-box">
                        <h3>ミドルウェア</h3>
                        <div className="skill-middle">
                            <h4>MySQL</h4>
                            <h4>MongoDB</h4>
                            <h4>Docker</h4>
                            <h4>kubernetes</h4>
                            <h4>Nginx</h4>
                        </div>
                    </div>
                </div>
                <div className="skill-tools-box">
                    <h3>その他ツール</h3>
                    <div className="skill-tools">
                        <h4>Ansible</h4>
                        <h4>Chef</h4>
                        <h4>Rancher</h4>
                        <h4>ElasticSearch</h4>
                        <h4>Kibana</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;