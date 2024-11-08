import React from "react";

function ComingSoon() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚧 Coming Soon! 🚧</h1>
      <p style={styles.text}> working hard to bring something amazing!</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "grey",
    textAlign: "center",
  },
  heading: {
    fontSize: "48px",
    color: "Black",
    marginBottom: "20px",
  },
  text: {
    fontSize: "24px",
    color: "#333",
  },
};

export default ComingSoon;
