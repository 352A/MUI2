import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        color: "#fff",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ mb: 4, fontWeight: "bold" }}>
        Stay Connected with Us
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mb: 4 }}>
        <IconButton
          component={Link}
          href="https://facebook.com"
          target="_blank"
          sx={{
            color: "#fff",
            backgroundColor: "#4267B2",
            "&:hover": { backgroundColor: "#365899" },
          }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          component={Link}
          href="https://twitter.com"
          target="_blank"
          sx={{
            color: "#fff",
            backgroundColor: "#1DA1F2",
            "&:hover": { backgroundColor: "#0d8bf0" },
          }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          component={Link}
          href="https://instagram.com"
          target="_blank"
          sx={{
            color: "#fff",
            backgroundColor: "#E1306C",
            "&:hover": { backgroundColor: "#c3275b" },
          }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          component={Link}
          href="https://github.com"
          target="_blank"
          sx={{
            color: "#fff",
            backgroundColor: "#333",
            "&:hover": { backgroundColor: "#242424" },
          }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          component={Link}
          href="https://linkedin.com"
          target="_blank"
          sx={{
            color: "#fff",
            backgroundColor: "#0077B5",
            "&:hover": { backgroundColor: "#006097" },
          }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          component={Link}
          href="https://youtube.com"
          target="_blank"
          sx={{
            color: "#fff",
            backgroundColor: "#FF0000",
            "&:hover": { backgroundColor: "#cc0000" },
          }}
        >
          <YouTube />
        </IconButton>
      </Box>

      <Grid container spacing={5} justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Quick Links
          </Typography>
          <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
            Home
          </Link>
          <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
            About Us
          </Link>
          <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
            Services
          </Link>
          <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
            Contact
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Resources
          </Typography>
          <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
            Blog
          </Link>
          <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
            FAQs
          </Link>
          <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
            Support
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Company
          </Typography>
          <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
            Careers
          </Link>
          <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
            Press
          </Link>
          <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
            Investors
          </Link>
        </Grid>
      </Grid>

      <Typography variant="body2" sx={{ mb: 2 }}>
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
}
