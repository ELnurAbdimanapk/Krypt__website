import React from "react";
import { Container, Typography, Grid, Divider, Box } from "@mui/material";

const Footer = () => (
  <Container
    maxWidth="l"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '16px',
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', // Assuming gradient-bg-footer is a red gradient
    }}
  >
    <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
      <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
<Typography>Logo</Typography>      </Grid>
      <Grid item xs={12} sm={6} md={8} container spacing={2} justifyContent="center">
        <Grid item><Typography color="black" style={{ cursor: 'pointer' }}>Market</Typography></Grid>
        <Grid item><Typography color="black" style={{ cursor: 'pointer' }}>Exchange</Typography></Grid>
        <Grid item><Typography color="black" style={{ cursor: 'pointer' }}>Tutorials</Typography></Grid>
        <Grid item><Typography color="black" style={{ cursor: 'pointer' }}>Wallets</Typography></Grid>
      </Grid>
    </Grid>

    <Box mt={2} textAlign="center">
      <Typography color="black" variant="body2">Come join us and hear for the unexpected miracle</Typography>
      <Typography color="black" variant="body2" fontWeight="medium" mt={1}>elnurabdimanapkyzy@gmail.com</Typography>
    </Box>

    <Box width="100%" mt={2}><Divider style={{ backgroundColor: 'black' }} /></Box>

    <Box mt={2} width="100%" display="flex" justifyContent="space-between">
      <Typography color="black" variant="caption">@elnurabdimanapkyzy</Typography>
      <Typography color="black" variant="caption">All rights reserved</Typography>
    </Box>
  </Container>
);

export default Footer;
