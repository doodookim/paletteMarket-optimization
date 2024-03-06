import React from 'react';
import * as St from '../styles/footerStyle/FooterStyle';

interface GitHubLinks {
  [name: string]: string;
}

const Footer: React.FC = () => {
  const githubLinks: GitHubLinks = {
    이하빈: 'https://github.com/Liabinn',
    이락균: 'https://github.com/Newbie-Alert',
    전지현: 'https://github.com/jihyun-j',
    김건우: 'https://github.com/doodookim',
    정혜원: 'https://github.com/hyewon0615'
  };

  const redirectToGitHub = (githubUsername: string) => {
    const githubUrl = githubLinks[githubUsername];
    if (githubUrl) {
      window.location.href = githubUrl;
    }
  };

  return (
    <St.FooterContainer>
      <St.FooterWrapper>
        <St.FooterArea>
          <St.Logo>
            <img src="/assets/paletteMarketLogoSide.webp" alt="로고" />
          </St.Logo>
          <St.TextArea>
            <h1>
              개발팀: 2기능은 2제 제 겁니다. 제 맘대로 할 수 있는 것입니다.
            </h1>
            <h2>
              깃헙:&nbsp;
              <span onClick={() => redirectToGitHub('이하빈')}>
                | 이하빈 |&nbsp;
              </span>
              <span onClick={() => redirectToGitHub('이락균')}>
                이락균 |&nbsp;
              </span>
              <span onClick={() => redirectToGitHub('전지현')}>
                전지현 |&nbsp;
              </span>
              <span onClick={() => redirectToGitHub('김건우')}>
                김건우 |&nbsp;
              </span>
              <span onClick={() => redirectToGitHub('정혜원')}>정혜원 |</span>
            </h2>
            <p>Copyright 2024. All Rights Reserved.</p>
          </St.TextArea>
        </St.FooterArea>
      </St.FooterWrapper>
    </St.FooterContainer>
  );
};

export default Footer;
