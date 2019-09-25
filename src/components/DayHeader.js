import PropTypes from "prop-types"
import React from "react"
import SEO from "./seo"

const DayHeader = ({
  backgroundHex,
  textHex,
  dayNumber,
  dayOfWeek,
  date,
  origin,
  destination,
  introduction,
}) => (
  <section
    style={{
      background: `#${backgroundHex}`,
      color: `#${textHex}`,
      marginBottom: `0px`,
      padding: `3rem 1rem`,
    }}
  >
    <div class="container-medium">
      <SEO title={`Day ${dayNumber}`} />
      <h1
        style={{
          fontSize: `3rem`,
          fontWeight: `700`,
          marginBottom: `1rem`,
        }}
      >
        Day {dayNumber}
      </h1>
      <h2
        style={{
          fontSize: `3rem`,
          fontWeight: `400`,
          marginTop: `0`,
        }}
      >
        {dayOfWeek} {date}
      </h2>
      <h3
        style={{
          fontSize: `4.5rem`,
          fontWeight: `400`,
          margin: `0`,
        }}
      >
        {origin} to {destination}
      </h3>
      <p
        style={{
          fontSize: `1.5rem`,
          fontFamily: `"Cardo", serif`,
          fontWeight: `400`,
          marginTop: `1rem`,
        }}
      >
        {introduction}
      </p>
      <div
        style={{
          maxWidth: `420px`,
        }}
      >
        <iframe
          title="dayThreeSong"
          src="https://open.spotify.com/embed/track/1opdGcwQmRmi7UsfgVqMW2"
          width="100%"
          height="80"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          style={{
            maxWidth: `100%`,
            margin: `3rem 0`,
          }}
        ></iframe>
      </div>
    </div>
  </section>
)

DayHeader.propTypes = {
  backgroundHex: PropTypes.string,
  textHex: PropTypes.string,
  dayNumber: PropTypes.number,
  dayOfWeek: PropTypes.string,
  date: PropTypes.string,
  origin: PropTypes.string,
  destination: PropTypes.string,
  introduction: PropTypes.string,
}

DayHeader.defaultProps = {
  backgroundHex: `E7AC7D`,
  textHex: `000000`,
  dayNumber: 0,
  dayOfWeek: `???`,
  date: `??/??`,
  origin: `Origin`,
  destination: `Destination`,
  introduction: `This is where an introductory paragraph would go.`,
}

export default DayHeader
