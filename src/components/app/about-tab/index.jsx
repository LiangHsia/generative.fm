import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { applyUpdate } from 'offline-plugin/runtime';
import patronImage from '@images/patron.png';
import './about.scss';

const handleUpdateClick = e => {
  e.preventDefault();
  applyUpdate(() => {
    window.location.reload();
  });
};

const AboutTabComponent = ({ version, isUpdateAvailable, isOnline }) => {
  useEffect(() => {
    if (window.twttr) {
      window.twttr.ready(twttr => {
        twttr.widgets.load();
      });
    }
  }, [window.twttr]);
  return (
    <div className="about-tab info-tab">
      {isUpdateAvailable && isOnline && (
        <p className="update-alert">
          <a href="/" onClick={handleUpdateClick}>
            <span className="update-alert__dot" />
            New Version Available
          </a>
        </p>
      )}
      <p>
        This site is a collection of generative music pieces which can be
        listened to. The term &quot;generative music&quot; describes music which
        changes continuously and is created by a system. Such systems often
        generate music for as long as one is willing to listen.
      </p>
      <p>
        The pieces featured on this site are not recordings. The music is
        generated by a different system created for each piece. These systems
        have been designed such that each performance is unique and plays
        continuously without repetition.
      </p>
      <p>
        Though not a requirement of generative music, most of the pieces
        featured are quite minimal and ambient. Here &quot;ambient&quot; means
        the music is intended to enhance one&apos;s environment but not demand
        attention.
      </p>
      <p>
        If you have questions or feedback, send an email to{' '}
        <a href="mailto:alex@alexbainter.com?Subject=Generative Music">
          alex@alexbainter.com
        </a>
        .
      </p>
      <p>
        <a
          href="https://twitter.com/alex_bainter?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-show-count="false"
        >
          Follow @alex_bainter
        </a>{' '}
        on Twitter for app news and updates.{' '}
      </p>
      <p>
        If you&apos;re feeling generous, you can support this project by{' '}
        <a
          href="https://www.patreon.com/bePatron?u=2484731"
          target="_blank"
          rel="noreferrer noopener"
        >
          becoming a Patron
        </a>{' '}
        or with{' '}
        <a
          href="https://paypal.me/alexbainter"
          target="_blank"
          rel="noreferrer noopener"
        >
          PayPal
        </a>
        .
      </p>
      <p>
        <a
          href="https://www.patreon.com/bePatron?u=2484731"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={patronImage} width="150" />
        </a>
      </p>
      <br />
      <p>{`v${version}`}</p>
      <p>
        Made by{' '}
        <a
          href="https://alexbainter.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Alex Bainter
        </a>
      </p>
    </div>
  );
};

AboutTabComponent.propTypes = {
  version: propTypes.string,
  isUpdateAvailable: propTypes.bool,
  isOnline: propTypes.bool,
};

export default AboutTabComponent;
