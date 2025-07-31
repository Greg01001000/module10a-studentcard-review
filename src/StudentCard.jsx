

// This component shows a student's profile card with their name, major, year, bio, and an image.
// The user can click a button to show or hide the bio.

// A few lines from now, we'll use a React function (useState). So we need to import React.
import React from 'react';

// This is the function that does everything.
// It defines the StudentCard component and receives the student's info in a container called 'props'.
function StudentCard(props) {
  // Separate the student's info from 'props' into individual properties.
  const { name, major, year, bio, imageUrl } = props;
  // Store the current state ('false') of whether the bio is shown ('false' means it's hidden), and a function to
  // switch that state between 'true' and 'false'. The function, 'setShowBio', is called a 'useState hook'.
  const [showBio, setShowBio] = React.useState(false);

  // This function switches the state whether the bio is shown ('true') or hidden ('false').
  const toggleBio = () => {
    // This is the function we got from the React function (the 'useState hook'). It switches the visibility state.
    setShowBio(!showBio);
  };

  // Send the StudentCard's user interface (appearance & controls) description to React.
  return (
    // This first division has styles of appearance that apply to the entire card.
    <div style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      {/* This tag has the image's Internet address from 'props', alternate text with the student's name from
      'props', and appearance styles for the image. */}
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      {/* Show the student's name from 'props', centered in big font. */}
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      {/* Show the student's major and year from 'props', centered in medium font. */}
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>
      {/* Define and style a button to switch the true/false state of bio visibility. When the button is clicked, 
      use the function (the 'useState hook') which switches the true/false state of whether the bio is shown. */}
      <button onClick={toggleBio} style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
        {/* Determine the button text based the true/false state of whether the bio is currently shown. */}
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
      {/* If the true/false state of the bio is currently supposed to be shown, 
      this shows the bio in slightly smaller font than the major and year. Otherwise this shows nothing. */}
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
}

// React components must export their main functio so it can be used in other files (like App.jsx, the program
// file that controls everything for this web page).
export default StudentCard;
