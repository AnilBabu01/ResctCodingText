import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Product = ({ product }) => {
  console.log(product);
  return (
    <>
      <div>
        <Card sx={{ maxWidth: 345, margin: 1 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={product.images[0].Url}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                ₹{product.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default Product;
