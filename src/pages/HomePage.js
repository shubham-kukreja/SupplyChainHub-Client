import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
function HomePage() {
  return (
    <div className="landing-container">
      <Container maxWidth="lg">
        <br />
        <br />
        <br />
        <br />
        <Typography className="heading" variant="h3">
          Supply
        </Typography>
        <Typography className="heading" variant="h1">
          Chain Hub
        </Typography>
        <Typography variant="h6" className="sub-heading">
          Create customized Supply Chain for your Products without code
        </Typography>
        <br />
        <Link to="/build" style={{ textDecoration: "none", color: "#2196f3" }}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon color="primary" />}
            style={{
              backgroundColor: "white",
              color: "#2196f3",
              borderRadius: 20,
              padding: "0.5rem 1.5rem",
            }}
          >
            Get Started
          </Button>
        </Link>

        <Link to="/chat" style={{ textDecoration: "none", color: "#2196f3" }}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon color="primary" />}
            style={{
              backgroundColor: "white",
              color: "#2196f3",
              borderRadius: 20,
              padding: "0.5rem 1.5rem",
            }}
          >
            Chat with Others
          </Button>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
}

export default HomePage;
