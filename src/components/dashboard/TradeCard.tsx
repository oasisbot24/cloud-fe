import { Box, Card, CardActions, CardContent, CircularProgress, Divider, Typography, styled } from "@mui/material";
import Circular from "./Circular";
import TradeLeft from "./TradeLeft";
import TradeRight from "./TradeRight";


const BasicCard = styled(Card)(({ theme }) => ({
  borderRadius:'10px',
  display:'flex'
}));




export default function TradeCard() {
  return(
    <BasicCard>
        <CardContent sx={{width:'50%'}}>
          <TradeLeft/>
        </CardContent>
        <Divider orientation="vertical" variant="middle" flexItem />
        <CardContent sx={{width:'50%'}}>
          <TradeRight/>
        </CardContent>  
    </BasicCard>

    

  )
    
}