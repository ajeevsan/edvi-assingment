import React, { useState } from 'react'
import axios from 'axios'
import { CardMedia, Card, Grid, CardContent, Typography, CardActionArea } from '@mui/material'
import { Box, InputLabel, MenuItem, FormControl } from '@mui/material'
import Select from '@mui/material/Select';

function FetchData() {

  const [products, setProducts] = useState([]);
  // const [price, setPrice] = useState([]);

  const handleChange = (event) => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      // console.log(res);
      setProducts(res.data);
      if(event.target.value===1){
        products.sort((a,b)=> parseFloat(a.price)-parseFloat(b.price));
        console.log(products);
        console.log("low to high");
      }
      else{
        products.sort((a,b)=> parseFloat(b.price)-parseFloat(a.price));
        console.log(products);
        console.log("high to low");
      }
    });
  };
  // console.log(products);
  return (
    <>
      <Box sx={{ minWidth: 120 }} style={{margin: '5px 0'}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort By: </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sort by:"
            onChange={handleChange}
          >
            <MenuItem value={1}>Low to High</MenuItem>
            <MenuItem value={2}>High to low</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div>
        <Grid container
          spacing={4}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}>
          {products.map((val) => {
            return (
              <>
                <Grid item>
                  <Card sx={{ maxWidth: 300 }} style={{ boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 14px 28px rgba(0,0,0,0.22" }}>
                    <CardActionArea>
                      <CardMedia component='img' image={val.image} alt='products img'></CardMedia>
                      <CardContent>
                        <Typography gutterBottom variant="h5" textAlign='center' style={{ lineHeight: '24px' }} component="h4">
                          {val.title}
                        </Typography>
                        <Typography varient='body2' style={{ lineHeight: '16.1px', letterSpacing: '0.9px' }} textAlign='center' color='text.secondary' fontSize='1'>
                          {val.description}
                        </Typography>
                        <Typography align='right' color='red'>$ {val.price}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </>
            )
          })}
        </Grid>
      </div>
    </>
  );
}

export default FetchData