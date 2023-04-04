import React from 'react';
import {
    Attribution,
    AttributionA,
    Clientlogo,
    Downloadios,
    Downloadmac,
    Footer,
    Heroimage,
    Heroimage2,
    Hspreader,
    Hstackcentering,
    Hstackcentering2,
    Hstackflexi,
    Logo,
    Logofooter,
    Socialicon,
    Stacksupporticon,
    Styledclipboardlanding,
    Supporticon,
    Vspreader,
    Vstack
} from './styled/Clipboardlanding.styled';
import { Container } from './styled/Container.styled';

export const ClipboardLanding = () => {
  return (
    <Container>
        <Styledclipboardlanding>
            <Logo src={require('./images/logo.svg').default} alt='logo'/>
            <h1>
                A history of everything you copy
            </h1>
            <p className='p_history'>
                Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.
            </p>
            <Hstackflexi>
                <Downloadios>
                    Download for iOS
                </Downloadios>
                <Downloadmac>
                    Download for Mac
                </Downloadmac>
            </Hstackflexi>
            <h2>
                Keep track of your snippets
            </h2>
            <p className='p_keeptrack'>
                Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.
            </p>
            <Hstackflexi>
                <Heroimage src={require('./images/image-computer.png')} alt='heroimage'/>
                <Vstack className='besidecomputer'>
                    <h3>
                        Quick Search
                    </h3>
                    <p>
                        Easily search your snippets by content, category, web address, application, and more.
                    </p>
                    <h3>
                        iCloud Sync
                    </h3>
                    <p>
                        Instantly saves and syncs snippets across all your devices.
                    </p>
                    <h3>
                        Complete History
                    </h3>
                    <p>
                        Retrieve any snippets from the first moment you started using the app.
                    </p>
                </Vstack>
            </Hstackflexi>
            <h2 className='h2_accessclip'>
                Access Clipboard anywhere
            </h2>
            <p className='accessclipboard'>
                Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
            </p>
            <Heroimage2 src={require('./images/image-devices.png')} alt='heroimage2'/>
            <h2 className='h2_supercharge'>
                Supercharge your workflow
            </h2>
            <p className='p_supercharge'>
                We’ve got the tools to boost your productivity.
            </p>
            <Hstackcentering>
                <Stacksupporticon>
                    <Supporticon src={require('./images/icon-blacklist.svg').default} alt='blacklist' width='9%'/>
                    <h3>
                        Create blacklists
                    </h3>
                    <p>
                        Ensure sensitive information never makes its way to your clipboard by excluding certain sources.
                    </p>
                </Stacksupporticon>
                <Stacksupporticon>
                    <Supporticon src={require('./images/icon-text.svg').default} alt='text' width='8%'/>
                    <h3>
                        Plain text snippets
                    </h3>
                    <p>
                        Remove unwanted formatting from copied text for a consistent look.
                    </p>
                </Stacksupporticon>
                <Stacksupporticon>
                    <Supporticon src={require('./images/icon-preview.svg').default} alt='preview' width='10%'/>
                    <h3>
                        Sneak preview
                    </h3>
                    <p>
                        Quick preview of all snippets on your Clipboard for easy access.
                    </p>
                </Stacksupporticon>
            </Hstackcentering>
            <Hstackcentering2>
                <Clientlogo src={require('./images/logo-google.png')} alt='google' width='12%'/>
                <Clientlogo src={require('./images/logo-ibm.png')} alt='ibm' width='10%'/>
                <Clientlogo src={require('./images/logo-microsoft.png')} alt='microsoft' width='12%'/>
                <Clientlogo src={require('./images/logo-hp.png')} alt='hp' width='10%'/>
                <Clientlogo src={require('./images/logo-vector-graphics.png')} alt='vg' width='10%'/>
            </Hstackcentering2>
            <h2>
                Clipboard for iOS and Mac OS
            </h2>
            <p className='clipboardmacios'>
                Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.
            </p>
            <Hstackflexi>
                <Downloadios>
                    Download for iOS
                </Downloadios>
                <Downloadmac>
                    Download for Mac
                </Downloadmac>
            </Hstackflexi>
            <Footer>
                <Logofooter src={require('./images/logo.svg').default} alt='logofooter'/>
                <Hstackflexi>
                    <Vspreader>
                        <p>
                            FAQs
                        </p>
                        <p>
                            Contact Us
                        </p>
                    </Vspreader>
                    <Vspreader>
                        <p>
                            Privacy Policy
                        </p>
                        <p>
                            Press Kit
                        </p>
                    </Vspreader>
                    <Vspreader>
                        <p>
                            Install Guide
                        </p>
                    </Vspreader>
                </Hstackflexi>
                <Hspreader>
                    <Socialicon src={require('./images/icon-facebook.svg').default} alt='facebook'/>
                    <Socialicon src={require('./images/icon-twitter.svg').default} alt='twitter'/>
                    <Socialicon src={require('./images/icon-instagram.svg').default} alt='instagram'/>
                </Hspreader>
            </Footer>
        </Styledclipboardlanding>
        <footer>
                <Attribution>
                    <AttributionA>
                        <p>Challenge by<a href="https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Clipboard Landing Page.</a></p>
                    </AttributionA>
                    <AttributionA>
                        <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
                    </AttributionA>
                </Attribution>
            </footer>
    </Container>
  )
}
