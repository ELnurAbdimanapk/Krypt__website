import React, { useContext } from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia, Link } from "@mui/material";
import { TransactionContext } from "../context/TransactionContext";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
import useFetch from "../hooks/useFetch";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    const gifUrl = useFetch({ keyword });
  return (
    <Card sx={{ backgroundColor: "#181918", margin: 2, padding: 1, borderRadius: 2, "&:hover": { boxShadow: 4 } }}>
      <CardContent>
        <Grid container direction="column" alignItems="center">
          <Grid item container justifyContent="flex-start">
            <Grid item xs={4}>
              <Link href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" underline="none">
                <Typography variant="body1" color="white">
                  From: {shortenAddress(addressFrom)}
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" underline="none">
                <Typography variant="body1" color="white">
                  To: {shortenAddress(addressTo)}
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" color="white">
                Amount: {amount} ETH
              </Typography>
            </Grid>
            {message && (
              <Grid item xs={12}>
                <Typography variant="body1" color="white">
                  Message: {message}
                </Typography>
              </Grid>
            )}
          </Grid>
          <Grid item xs={12}>
            <CardMedia component="img" image={ gifUrl || url} height="240" style={{ borderRadius: "16px" }} />
          </Grid>
          <Typography variant="h6" color="primary" sx={{ marginTop: -2,background:"black",borderRadius:"20px" }}>
            {timestamp}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <Container maxWidth="lg" style={{ backgroundColor: "transparent", paddingTop: "16px", paddingBottom: "16px" }}>
      <Typography variant="h3" color="white" align="center">
        {currentAccount ? "Latest Transactions" : "Connect your account to see the latest transactions"}
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {[...dummyData, ...transactions].reverse().map((transaction, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <TransactionsCard {...transaction} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Transactions;
