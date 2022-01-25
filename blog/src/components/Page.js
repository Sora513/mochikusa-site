import React from 'react'
import { Link } from "gatsby"
import profile from "../images/profile.png"
import twitterlogo from "../images/twitterlogo.png"
import lottiefileslogo from "../images/lottiefileslogo.svg"
import instagramlogo from "../images/instagram.png"
import githublogo from "../images/githublogo.png"
const Page = (props) => {
    return (
        <div className="page-flex-container">

            <div className="flex-left">
                {props.children}
            </div>
            <div className="flex-right">
                <div className="profile">
                    <img className="profileimg" src={profile} />
                    <p className="name">餅草 よもぎ</p>
                    <div className="profile-contents">
                        <p>物を作る/競争が苦手/徐々にレイヤが下がっていく</p>
                        <p>本当にお気軽にDMください。</p>
                    </div>
                    <table align="center">
                        <tbody>
                            <tr>
                                <td width="16px"><img src={twitterlogo} /></td>
                                <td>Twitter</td>
                                <td>:</td>
                                <td><a href="https://twitter.com/kusa_yomogi" target="_blank">@kusa_yomogi</a></td>
                            </tr>
                            <tr>
                                <td width="16px"><img src={githublogo} /></td>
                                <td>GitHub</td>
                                <td>:</td>
                                <td><a href="https://github.com/Sora513" target="_blank">Sora513</a></td>
                            </tr>
                            <tr>
                                <td width="16px"><img src={lottiefileslogo} /></td>
                                <td>LottieFiles</td>
                                <td>:</td>
                                <td><a href="https://lottiefiles.com/sayagi" target="_blank">Sora513</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Page