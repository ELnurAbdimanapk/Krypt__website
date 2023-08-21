import { Box, Button, Grid, Typography, Paper, TextField, IconButton, InputAdornment, Container } from "@mui/material";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import EthereumIcon from '@mui/icons-material/Euro'; // This is a placeholder, replace with actual Ethereum icon if available
import InfoIcon from '@mui/icons-material/Info';
import Loader from './Loader';
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import styled from "@emotion/styled";
import { shortenAddress } from "../utils/shortenAddress";
const StyledTypography = styled(Typography)`
  color: white;
`;

const StyledButton = styled(Button)`
  background-color: #2952e3;
  border-radius: 50px;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 300px;
  height: 50px;

  &:hover {
    background-color: #2546bd;
  }

  @media (max-width: 768px) {
    width: 100%;
    
  }
`;

const StyledPaper = styled(Paper)`
  background-color: rgba(255,255,255,0.1);
  padding: 20px;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "Open Sans", sans-serif;
`;


export const PaperTable = ({ text, background }) => (
  <Paper elevation={3} sx={{
    background,
    color: 'white',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    letterSpacing: 1,
    borderRadius: '8px',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  }}>
    {text}
  </Paper>
);


export const InputTextField = ({ type, value, name, handleChange, placeholder }) => (
  <TextField
  
    label={placeholder}
    fullWidth
    type={type}
    variant="outlined"
    name={name}
    value={value}
    onChange={(e) => handleChange(e, name)}
    sx={{
      maxWidth: 300,
      border:"1px solid grey",
      mt: 2,
      '& .MuiOutlinedInput-root': {
        color: 'white',
      },
      '& .MuiOutlinedInput-input': {
        backgroundColor: 'transparent',
      },
      '& .MuiInputLabel-root.Mui-focused': {
        color: 'white',
      }
    }}
  />
);

const WelcomeSegment = ({ isLoading }) => {
   const {connectWallet,currentAccount,handleChange,formData,sendTransaction} = useContext(TransactionContext);

   const handleSubmit = (e) => {
    const {addressTo, amount, keyword, message} = formData;
    e.preventDefault()

    if(!addressTo || !amount || !keyword  || !message) return;

    sendTransaction()
   }
  return (
    <StyledContainer maxWidth="xl">
      <Grid container spacing={3} p={{ md: 20, xs: 3 }}>
        <Grid item xs={12} md={6}>
        <StyledTypography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: 'white', background: 'linear-gradient(to right, #F06, #9F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Send Crypto <br /> across the world
          </StyledTypography>
          <StyledTypography variant="body1" mt={5} color="white" style={{ width: { xs: '11/12', md: '9/12' } }}>
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </StyledTypography>
          {!currentAccount && (
            <StyledButton
            startIcon={<PlayCircleFilledWhiteIcon />}
            onClick={connectWallet}
          >
              Connect Wallet
          </StyledButton>
          )}

        <Box mt={5} display="grid" gridTemplateColumns={{ xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" }} gap={2}>
          <PaperTable text="Reliability" background= 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'/>
          <PaperTable text="Security" background= 'linear-gradient(45deg, #f44336 30%, #e57373 90%)'/>
          <PaperTable text="Ethereum" background= 'linear-gradient(45deg, #4caf50 30%, #81c784 90%)'/>
          <PaperTable text="Web 3.0" background= 'linear-gradient(45deg, #ff9800 30%, #ffb74d 90%)'/>
          <PaperTable text="LowFees" background= 'linear-gradient(45deg, #9c27b0 30%, #ba68c8 90%)'/>
          <PaperTable text="Blockchain" background= 'linear-gradient(45deg, #009688 30%, #4db6ac 90%)'/>
        </Box>

        </Grid>
        <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center">
          <StyledPaper sx={{background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',mb:"20px"}}>
            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{width:'300px'}}>
              <IconButton color="primary">
                <EthereumIcon />
              </IconButton>
              <InfoIcon color="primary" />
            </Box>
            <Typography color="white">{shortenAddress(currentAccount)}</Typography>
            <StyledTypography variant="h6">Ethereum</StyledTypography>
          </StyledPaper>
          <StyledPaper elevation={3}sx={{ p: 2,width:"400px", maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',borderRadius:"20px" }}>
              <InputTextField placeholder="Address To" name="addressTo" handleChange={handleChange} />
              <InputTextField placeholder="Amount (ETH)" type="number" name="amount" handleChange={handleChange} />
              <InputTextField placeholder="Keyword (Gif)" name="keyword" handleChange={handleChange} />
              <InputTextField placeholder="Enter Message" name="message" handleChange={handleChange} InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {isLoading ? <Loader /> : null}
                      </InputAdornment>
                    )
                  }} />
              <StyledButton
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
              >
                  <StyledTypography>
                    Send Now
                  </StyledTypography>
              </StyledButton>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default WelcomeSegment;
