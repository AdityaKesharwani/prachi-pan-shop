import React, { useEffect, useState, useRef } from 'react';
import { MdLanguage, MdCheck, MdKeyboardArrowDown } from 'react-icons/md';

export default function LanguageSelector() {
  const [lang, setLang] = useState(() => localStorage.getItem('app_lang') || 'en');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Initialize Google Translate Script
  useEffect(() => {
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,hi',
              autoDisplay: false,
            },
            'google_translate_element'
          );

          const savedLang = localStorage.getItem('app_lang');
          if (savedLang && savedLang !== 'en') {
            setTimeout(() => applyLanguage(savedLang), 600);
          }
        }
      };
    } else {
      const savedLang = localStorage.getItem('app_lang');
      if (savedLang && savedLang !== 'en') {
        setTimeout(() => applyLanguage(savedLang), 500);
      }
    }
  }, []);

  const applyLanguage = (targetLang) => {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = targetLang;
      select.dispatchEvent(new Event('change'));
    } else {
      // Fallback via iframe / cookie
      const frame = document.querySelector('iframe.goog-te-menu-frame');
      if (frame && frame.contentDocument) {
        const item = frame.contentDocument.querySelector(`.goog-te-menu2-item[lang="${targetLang}"]`);
        if (item) item.click();
      }
    }
  };

  const handleSelectLang = (selectedCode) => {
    setLang(selectedCode);
    localStorage.setItem('app_lang', selectedCode);
    setIsOpen(false);

    applyLanguage(selectedCode);
    if (selectedCode === 'en') {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = 'en';
        select.dispatchEvent(new Event('change'));
      }
    }
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      {/* Hidden google translate element container */}
      <div id="google_translate_element" style={{ display: 'none' }} />

      {/* Language Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(244, 208, 63, 0.4)',
          color: '#ffffff',
          padding: '7px 14px',
          borderRadius: '9999px',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: 700,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          transition: 'all 0.25s ease',
        }}
        aria-label="Select Language"
      >
        <MdLanguage size={18} color="#F4D03F" />
        <span style={{ letterSpacing: '0.05em' }}>
          {lang === 'en' ? 'ENG' : 'HIN • हिंदी'}
        </span>
        <MdKeyboardArrowDown
          size={16}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
          }}
        />
      </button>

      {/* Language Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            backgroundColor: '#042D1C',
            border: '1px solid rgba(244, 208, 63, 0.4)',
            borderRadius: '16px',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
            padding: '6px',
            minWidth: '150px',
            zIndex: 1100,
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Option 1: English */}
          <button
            onClick={() => handleSelectLang('en')}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px',
              borderRadius: '10px',
              background: lang === 'en' ? 'rgba(244, 208, 63, 0.18)' : 'transparent',
              color: lang === 'en' ? '#F4D03F' : '#ffffff',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: lang === 'en' ? 700 : 500,
              textAlign: 'left',
              transition: 'background 0.2s ease',
            }}
          >
            <span>English (ENG)</span>
            {lang === 'en' && <MdCheck size={16} color="#F4D03F" />}
          </button>

          {/* Option 2: Hindi */}
          <button
            onClick={() => handleSelectLang('hi')}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px',
              borderRadius: '10px',
              background: lang === 'hi' ? 'rgba(244, 208, 63, 0.18)' : 'transparent',
              color: lang === 'hi' ? '#F4D03F' : '#ffffff',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: lang === 'hi' ? 700 : 500,
              textAlign: 'left',
              transition: 'background 0.2s ease',
              marginTop: '2px',
            }}
          >
            <span>हिंदी (Hindi)</span>
            {lang === 'hi' && <MdCheck size={16} color="#F4D03F" />}
          </button>
        </div>
      )}
    </div>
  );
}
