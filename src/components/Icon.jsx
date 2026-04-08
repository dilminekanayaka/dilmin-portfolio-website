function Icon({ name }) {
  if (name === "external") {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" className="ui-icon">
        <path d="M11 3h6v6h-2V6.41l-7.29 7.3-1.42-1.42 7.3-7.29H11V3Z" fill="currentColor" />
        <path d="M5 5h4v2H7v6h6v-2h2v4H5V5Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="ui-icon">
        <path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.59-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.24 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.68.24 2.93.12 3.24.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.63-5.48 5.94.43.37.81 1.1.81 2.21v3.28c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="ui-icon">
        <path fill="currentColor" d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM3 9h4v12H3V9Zm7 0h3.84v1.64h.05c.53-1.01 1.84-2.07 3.79-2.07 4.05 0 4.8 2.66 4.8 6.12V21h-4v-5.57c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="ui-icon">
        <path fill="currentColor" d="M13.5 21v-7h2.3l.34-2.73H13.5V9.53c0-.79.22-1.33 1.35-1.33h1.44V5.76A19.3 19.3 0 0 0 14.2 5.6c-2.07 0-3.49 1.26-3.49 3.58v2.09H8.35V14h2.36v7h2.79Z" />
      </svg>
    );
  }

  return null;
}

export default Icon;
