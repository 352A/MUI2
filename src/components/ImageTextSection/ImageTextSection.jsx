/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import newImage from "../../assets/img1.jpg";

const ImageTextSection = ({
  title = "Transform Your Ideas into Reality",
  paragraph = "Discover innovative solutions tailored to your needs. Our team of experts is dedicated to delivering top-notch services that drive success and growth for your business.",
  buttonText = "Get Started",
  reverse,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        backgroundColor: "rgba(255,233,233, 0.7)",
        margin: "2rem",
        borderRadius: "1rem",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <img
          src={newImage}
          alt={title}
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover",
            maxHeight: "400px",
            borderRadius: "8px",
          }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          paragraph
          align="center"
          sx={{ color: "#555", mb: 2 }}
        >
          {paragraph}
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: "white",
            padding: "10px 20px",
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default ImageTextSection;
