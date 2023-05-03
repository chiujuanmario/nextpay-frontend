import { Box, Container, Grid,Typography } from "@mui/material";

import icon from "@/assets/logo.svg";

import Header from "./Header";

const CONTAINER_SX = {
  paddingTop: (theme) => theme.spacing(3),
  paddingBottom: (theme) => theme.spacing(3),
};

const HEADER_CONTAINER_STYLES_SX = {
  padding: { md: "95px 80px", sm: "50px", xs: "20px" },
  color: "white",
  textAlign: { md: "left", xs: "center" },
};

const HEADER_TITLE_STYLES_SX = {
  fontSize: { md: "48px", xs: "32px" },
  lineHeight: { md: "56px" },
  fontWeight: 700,
};

const HEADER_CONTENT_STYLES_SX = {
  maxWidth: { md: "635px" },
  fontSize: { md: "18px", sm: "16px", xs: "14px" },
  paddingTop: { md: "32px", sm: "24px", xs: "16px" },
  lineHeight: { md: "28px", xs: "24px" },
};

const IMAGE_STYLES_SX = {
  padding: { md: "50px 80px", sm: "50px", xs: "20px" },
  justifyContent: { display: "flex", md: "flex-end", xs: "center" },
  height: { sm: "100%", xs: "200px" },
};


function Layout({ children }) {
  return (
    <>
      <Header>
        <Grid container>
          <Grid lg={8} md={8} sm={12} xs={12} item>
            <Box sx={HEADER_CONTAINER_STYLES_SX}>
              <Typography sx={HEADER_TITLE_STYLES_SX} variant="h1">
                Integrationsss
              </Typography>
              <Typography sx={HEADER_CONTENT_STYLES_SX}>
                We plan to connect you with your favorite software. If there’s an app you’d love to
                integrate with us, let us know and we’ll notify you as soon as it’s available!
              </Typography>
            </Box>
          </Grid>

          <Grid lg={4} md={4} sm={12} xs={12} item>
            <Box sx={IMAGE_STYLES_SX}>
              <img alt="logo" loading="lazy" src={icon} />
            </Box>
          </Grid>
        </Grid>
      </Header>
      <Container component="main" maxWidth="lg" sx={CONTAINER_SX}>
        {children}
      </Container>
    </>
  );
}

export default Layout;
