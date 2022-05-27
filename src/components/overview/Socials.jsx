import React from 'react';

export default function Socials() {
  return (
    <section
      className="socials-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1em',
        alignItems: 'center',
      }}
    >
      <div
        className="fb-share-button"
        data-href="https://www.facebook.com/hackreactor"
        data-layout="box_count"
        data-size="small"
        // src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0&appId=168446345309&autoLogAppEvents=1"
      >
        {/* <div id="fb-root"></div> */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fhackreactor&amp;src=sdkpreparse"
          className="fb-xfbml-parse-ignore"
        >
          Share
        </a>
      </div>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-size="large"
        data-text="Team Verde really killed it @HackReactor"
        data-url="https://github.com/RFP-Verde"
        data-hashtags="FEC"
        data-show-count="false"
      >
        Tweet
      </a>
      <a
        href="https://www.pinterest.com/pin/create/button/"
        data-pin-do="buttonBookmark"
        data-pin-tall="true"
      >
        {' '}
      </a>
    </section>
  );
}
