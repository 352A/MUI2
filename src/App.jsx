import Navbar from "./components/NavBar/Navbar";
import SecondRow from "./components/NavBar/SecondaryNavbar";
import { AppBar, Typography, Box, Divider } from "@mui/material";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import ImageTextSection from "./components/ImageTextSection/ImageTextSection";
import img1 from "./assets/img1.jpg";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
        }}
        elevation={0}
      >
        <Navbar />
        <Divider />
        <SecondRow />
      </AppBar>

      <Box
        sx={{
          backgroundColor: "orange",
          textAlign: "center",
          padding: "8px 0",
        }}
      >
        <Typography variant="body1" fontWeight="bold" color="inherit">
          Labour Day: Enjoy 20% Off EQ3
        </Typography>
      </Box>
      <section
        style={{ marginTop: "30px", paddingRight: "25px", paddingLeft: "25px" }}
      >
        <Header />
      </section>
      <Divider
        sx={{
          height: "5px",
          backgroundColor: "black",
          marginTop: "30px",
        }}
      />
      <section style={{ margin: "5rem" }}>
        <Products />
      </section>
      <Divider
        sx={{
          height: "5px",
          backgroundColor: "black",
          marginTop: "30px",
        }}
      />
      <section style={{ marginTop: "30px" }}>
        <ImageTextSection
          imageSrc={img1}
          title="AS LOW AS 0% APP FINANCING UPON APPROVAL WITH AFFIRM"
          paragraph="Affirm provides flexible payment solutions, allowing you to buy better and pay over time.."
          buttonText="Learn More"
          reverse={false}
        />
        <ImageTextSection
          imageSrc={img1}
          title="CHOOSE WITH CONFIDENCE"
          paragraph="Remove the guesswork in choosing your upholstery design by ordering complimentary swatches"
          buttonText="Order Swatches"
          reverse={true}
        />
        <ImageTextSection
          imageSrc={img1}
          title="COMPLIMENTARY DESIGN SERVICES"
          paragraph="Let's create your dream space together"
          buttonText="Book A Consultation"
          reverse={false}
        />
      </section>
      <Footer />
    </>
  );
}

export default App;
