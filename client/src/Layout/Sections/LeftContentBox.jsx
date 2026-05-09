import React, { useEffect, useState } from 'react'
import profile from '../../assets/images/profile.jpg'
import { resumeDownloadFilename, resumeDownloadUrl } from '../../config/resume'

const MOBILE_MEDIA = '(max-width: 768px)'

const externalResume = /^https?:\/\//i.test(resumeDownloadUrl)

export const LeftContentBox = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(MOBILE_MEDIA).matches,
  )
  const [workExpanded, setWorkExpanded] = useState(() =>
    typeof window !== 'undefined' ? !window.matchMedia(MOBILE_MEDIA).matches : true,
  )
  const [factsExpanded, setFactsExpanded] = useState(() =>
    typeof window !== 'undefined' ? !window.matchMedia(MOBILE_MEDIA).matches : true,
  )

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MEDIA)
    const sync = () => setIsMobile(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    setWorkExpanded(!isMobile)
  }, [isMobile])

  useEffect(() => {
    setFactsExpanded(!isMobile)
  }, [isMobile])

  const [isDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const themeName = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", themeName);
    localStorage.setItem("theme", themeName);
  }, [isDark]);

  return (
    <div className='st-portfolio--left-content'>
      <div className="st-portfolio--logo">
        <img src={profile} alt="" />
        <div className="st-portfolio--content">
          <h1>Shahariar</h1>
          <p>React Developer | MERN Stack Enthusiast | CMS & Framework Expert</p>
        </div>
      </div>

      <div
        className={
          workExpanded
            ? 'st-portfolio--profile-panel st-portfolio--profile-panel--expanded'
            : 'st-portfolio--profile-panel'
        }
      >
        {isMobile ? (
          <button
            type="button"
            className="st-portfolio--profile-panel__toggle"
            aria-expanded={workExpanded}
            aria-controls="available-work-panel"
            onClick={() => setWorkExpanded((v) => !v)}
          >
            <span id="available-work-label" className="st-portfolio--eyebrow">
              Available for work
            </span>
            <span
              className={
                workExpanded
                  ? 'st-portfolio--profile-panel__chevron st-portfolio--profile-panel__chevron--open'
                  : 'st-portfolio--profile-panel__chevron'
              }
              aria-hidden
            />
          </button>
        ) : (
          <p id="available-work-label" className="st-portfolio--eyebrow">
            Available for work
          </p>
        )}
        <div
          className="st-portfolio--profile-panel__body"
          id="available-work-panel"
          role="region"
          aria-labelledby="available-work-label"
          aria-hidden={isMobile ? !workExpanded : false}
        >
          <h2>Building clean web apps with React and MERN.</h2>
          <p>
            I focus on responsive interfaces, reusable components, API integration,
            and practical user experiences.
          </p>
        </div>
      </div>

      <div
        className={
          factsExpanded
            ? 'st-portfolio--sidebar-meta st-portfolio--sidebar-meta--expanded'
            : 'st-portfolio--sidebar-meta'
        }
      >
        {isMobile ? (
          <button
            type="button"
            className="st-portfolio--profile-panel__toggle"
            aria-expanded={factsExpanded}
            aria-controls="sidebar-facts-panel"
            onClick={() => setFactsExpanded((v) => !v)}
          >
            <span id="sidebar-facts-label" className="st-portfolio--eyebrow">
              Focus · location · stats
            </span>
            <span
              className={
                factsExpanded
                  ? 'st-portfolio--profile-panel__chevron st-portfolio--profile-panel__chevron--open'
                  : 'st-portfolio--profile-panel__chevron'
              }
              aria-hidden
            />
          </button>
        ) : null}

        <div
          className="st-portfolio--sidebar-meta__body"
          id="sidebar-facts-panel"
          role="region"
          aria-label={isMobile ? undefined : 'Focus, location, response, and portfolio stats'}
          aria-labelledby={isMobile ? 'sidebar-facts-label' : undefined}
          aria-hidden={isMobile ? !factsExpanded : false}
        >
          {/* <div className="st-portfolio--quick-info">
            <div>
              <span>Focus</span>
              <strong>Frontend + MERN</strong>
            </div>
            <div>
              <span>Location</span>
              <strong>Bangladesh</strong>
            </div>
            <div>
              <span>Response</span>
              <strong>Within 24 hours</strong>
            </div>
          </div> */}

          <div className="st-portfolio--sidebar-stats">
            <div>
              <strong>10+</strong>
              <span>Skills</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Projects</span>
            </div>
          </div>
        </div>
      </div>

      <a
        className="st-portfolio--resume-link"
        href={resumeDownloadUrl}
        {...(externalResume
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : { download: resumeDownloadFilename })}
      >
        <span className="st-portfolio--resume-link__icon" aria-hidden>
          ↓
        </span>
        Download resume
      </a>
    </div>
  )
}
