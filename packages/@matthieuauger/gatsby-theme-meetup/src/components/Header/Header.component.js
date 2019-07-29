import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import MeetupLogo from './MeetupLogo.component.js'
import StyledHeader from './Header.style'
import Button from '../Button'

const Header = ({ meetupName, displayVideosLink, meetupVideosUrl }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            meetupName
            displayVideosLink
            meetupVideosUrl
          }
        }
      }
    `}
    render={data => (
      <div className="header-container">
        <StyledHeader>
          <div className="logo">
            <Link to="/">
              <MeetupLogo />
            </Link>
            <div className="app-name">
              <div className="app-name-classic">
                {data.site.siteMetadata.meetupName}
              </div>
              <div className="app-name-highlight">Meetup</div>
            </div>
          </div>
          <ul>
            {data.site.siteMetadata.displayVideosLink && (
              <li>
                <Button
                  url={data.site.siteMetadata.meetupVideosUrl}
                  text="Parcourir les vidéos →"
                  type="neutral"
                />
              </li>
            )}
            <li>
              <Button
                url="https://docs.google.com/forms/d/e/1FAIpQLScYo0W4QAkRHLj0fS_TXZXFuSUJ_cRlmyJCeRTPDQVt9RBNog/viewform"
                text="Proposer un talk →"
                type="primary"
              />
            </li>
          </ul>
        </StyledHeader>
      </div>
    )}
  />
)

export default Header
