// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.3.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Andrew William Green, Ph.D.",
  title: "Andrew William Green, Ph.D. - CV",
  footer: context { [#emph[Andrew William Green, Ph.D. -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in Apr 2026] ],
  locale-catalog-language: "en",
  text-direction: ltr,
  page-size: "us-letter",
  page-top-margin: 0.7in,
  page-bottom-margin: 0.7in,
  page-left-margin: 0.7in,
  page-right-margin: 0.7in,
  page-show-footer: true,
  page-show-top-note: true,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 79, 144),
  colors-headline: rgb(0, 79, 144),
  colors-connections: rgb(0, 79, 144),
  colors-section-titles: rgb(0, 79, 144),
  colors-links: rgb(0, 79, 144),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.6em,
  typography-alignment: "justified",
  typography-date-and-location-column-alignment: right,
  typography-font-family-body: "Source Sans 3",
  typography-font-family-name: "Source Sans 3",
  typography-font-family-headline: "Source Sans 3",
  typography-font-family-connections: "Source Sans 3",
  typography-font-family-section-titles: "Source Sans 3",
  typography-font-size-body: 10pt,
  typography-font-size-name: 30pt,
  typography-font-size-headline: 10pt,
  typography-font-size-connections: 10pt,
  typography-font-size-section-titles: 1.4em,
  typography-small-caps-name: false,
  typography-small-caps-headline: false,
  typography-small-caps-connections: false,
  typography-small-caps-section-titles: false,
  typography-bold-name: true,
  typography-bold-headline: false,
  typography-bold-connections: false,
  typography-bold-section-titles: true,
  links-underline: false,
  links-show-external-link-icon: false,
  header-alignment: center,
  header-photo-width: 3.5cm,
  header-space-below-name: 0.7cm,
  header-space-below-headline: 0.7cm,
  header-space-below-connections: 0.7cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: true,
  header-connections-display-urls-instead-of-usernames: false,
  header-connections-separator: "",
  header-connections-space-between-connections: 0.5cm,
  section-titles-type: "with_partial_line",
  section-titles-line-thickness: 0.5pt,
  section-titles-space-above: 0.5cm,
  section-titles-space-below: 0.3cm,
  sections-allow-page-break: true,
  sections-space-between-text-based-entries: 0.3em,
  sections-space-between-regular-entries: 1.2em,
  entries-date-and-location-width: 4.15cm,
  entries-side-space: 0.2cm,
  entries-space-between-columns: 0.1cm,
  entries-allow-page-break: false,
  entries-short-second-row: true,
  entries-degree-width: 1cm,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0cm,
  entries-highlights-bullet:  "•" ,
  entries-highlights-nested-bullet:  "•" ,
  entries-highlights-space-left: 0.15cm,
  entries-highlights-space-above: 0cm,
  entries-highlights-space-between-items: 0cm,
  entries-highlights-space-between-bullet-and-text: 0.5em,
  date: datetime(
    year: 2026,
    month: 4,
    day: 4,
  ),
)


= Andrew William Green, Ph.D.

#connections(
  [#link("https://andygreen.phd/", icon: false, if-underline: false, if-color: false)[#connection-with-icon("link")[andygreen.phd]]],
  [#link("https://linkedin.com/in/AndyGreenPhD", icon: false, if-underline: false, if-color: false)[#connection-with-icon("linkedin")[AndyGreenPhD]]],
  [#link("https://github.com/AndyGreenPhD", icon: false, if-underline: false, if-color: false)[#connection-with-icon("github")[AndyGreenPhD]]],
  [#link("https://infosec.exchange/@AndyGreenPhD", icon: false, if-underline: false, if-color: false)[#connection-with-icon("mastodon")[\@AndyGreenPhD\@infosec.exchange]]],
)


== Education

#education-entry(
  [
    #strong[Nova Southeastern University], Information Systems, Supporting Area of Emphasis - Information Security

    - Dissertation: #link("https://nsuworks.nova.edu/cgi/viewcontent.cgi?article=2108&context=gscis_etd")[SNS Use, Risk, and Executive Behavior]

    - Advisor - James Parrish, Ph.D.

    - Committee Members - Jason B. Thatcher, Ph.D., James N. Smith, DBA

  ],
  [
    Fort Lauderdale, FL

    2020

  ],
  degree-column: [
    #strong[Ph.D.]
  ],
)

#education-entry(
  [
    #strong[Kennesaw State University], Information Systems, Supporting Area of Emphasis - Information Security

  ],
  [
    Kennesaw, GA

    2007

  ],
  degree-column: [
    #strong[M.S.]
  ],
)

#education-entry(
  [
    #strong[Kennesaw State University], Information Systems, Supporting Area of Emphasis - Information Security

  ],
  [
    Kennesaw, GA

    2005

  ],
  degree-column: [
    #strong[B.S.]
  ],
)
