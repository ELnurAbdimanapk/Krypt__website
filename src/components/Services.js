import React from "react";
import { Card, CardContent, Typography, Box, Container, Grid } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from "@emotion/styled";

const IconWrapper = styled.div`
  width: 50px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  background-color: ${props => props.color || 'blue'};

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  padding: 15px;
  margin: 10px 0;
  backdrop-filter: blur(5px);
  border-radius: 30px;
  margin-bottom: 15px;
  cursor: pointer;
 width: 700px;

  &:hover {
    background-color: rgba(255,255,255,0.1);
  }

  @media (max-width: 600px) {
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    width: 250px;
   
  }
`;
const StyledTypography = styled(Typography)`
    color: white;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 1px;

`
const ServiceCard = ({ color, title, IconComponent, subtitle }) => (
  <StyledCard sx={{border:"1px solid grey"}}>
    <IconWrapper color={color}>
      <IconComponent style={{ color: "white", fontSize: "21px" }} />
    </IconWrapper>
    <CardContent>
      <StyledTypography variant="h5" style={{ fontSize:"20px"}}>{title}</StyledTypography>
      <StyledTypography variant="body1" style={{fontSize:"15px" }}>{subtitle}</StyledTypography>
    </CardContent>
  </StyledCard>
);

const Services = () => (
  <Container maxWidth="xl">
    <Grid container spacing={4} justifyContent="center" alignItems="center" style={{ padding: "60px 20px" }}>
      <Grid item xs={12} md={6}>
        <StyledTypography variant="h3" style={{  fontWeight: "bold" }}>
          Services that we continue to improve
        </StyledTypography>
        <StyledTypography variant="body1" style={{  marginTop: "20px" }}>
          The best choice for buying and selling your crypto assets, with the various super friendly services we offer
        </StyledTypography>
      </Grid>
      <Grid item xs={12} md={6}>
      <Grid item xs={12} md={6}>
        <ServiceCard
          color="#2952E3"
          title="Security Guaranteed"
          IconComponent={SecurityIcon}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="#8945F8"
          title="Best exchange rates"
          IconComponent={SearchIcon}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="#F84550"
          title="Fastest transactions"
          IconComponent={FavoriteIcon}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
      </Grid>
      </Grid>
    </Grid>
  </Container>
);

export default Services;
