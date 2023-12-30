"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const openLinkInNewTab = (url: any) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div className="flex-shrink-0 bg-gray-500 text-white p-4">
            <div className="container mx-auto flex items-center justify-between h-full">
                <p>&copy; 2023 Palm Tree Electronics Trading. All rights reserved.</p>
                <div className="flex gap-4">
                    <div
                        role="button"
                        tabIndex={0}
                        onClick={() => openLinkInNewTab('https://www.facebook.com/')}
                        onKeyDown={() => openLinkInNewTab('https://www.facebook.com/')}
                    >
                        <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-blue-500 cursor-pointer" />
                    </div>
                    <div
                        role="button"
                        tabIndex={0}
                        onClick={() => openLinkInNewTab('https://www.instagram.com/')}
                        onKeyDown={() => openLinkInNewTab('https://www.instagram.com/')}
                    >
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-pink-500 cursor-pointer" />
                    </div>
                    <div
                        role="button"
                        tabIndex={0}
                        onClick={() => openLinkInNewTab('https://twitter.com/')}
                        onKeyDown={() => openLinkInNewTab('https://twitter.com/')}
                    >
                        <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-blue-400 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
