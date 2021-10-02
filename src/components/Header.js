// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button } from "@material-ui/core/";
import Cart from "./Cart";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Cart />
        <Typography variant="h3">DIO Store Base</Typography>
        <Link to="/">
          <Button color="primary">Home</Button>
        </Link>
        <Link to="/contato">
          <Button color="primary">Contato</Button>
        </Link>
        {/* <Cart /> */}
      </Grid>
    </Box>
  );
};
//
export default Header;
