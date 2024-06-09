import React from 'react'
import { Tabs, Tab, Grid } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const TabsCustom = styled(Tabs)({
  borderRadius: '1px solid #1d2142',
  '& .MuiTabs-indicator': {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#1d2142',
    webkitTran: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    transition: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    zIndex: 0
  },
  marginTop: 20,
  marginBottom: 20
});

const TabCustom = styled((props) => <Tab {...props} />)(() => ({
  textTransform: 'none',
  color: 'rgba(0, 0, 0, 0.60)',
  marginRight: 1,
  '&:hover': { color: '#1d2142' },
  '&.Mui-selected': {
    color: 'white',
    zIndex: 1
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff'
  },
  '&.MuiButtonBase-root': {
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'start',
  },
}));

function App() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
    console.log(newValue)
  }
  // MUI V4
  ///const useStyles = makeStyles({ '& .MuiTabs-indicator': { borderRadius: 20 } });
  //const classes = useStyles();

  const isLgScreenUp = useMediaQuery(theme.breakpoints.up('lg'));
  const isMdScreenDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div style={{ backgroundColor: '#ddd', padding: '30px' }}>
      <Grid container style={{ backgroundColor: '#ffff', borderRadius: 20 }}>
        <Grid item xs={12} style={{ padding: 50 }}>
          MAESTRO DE CLIENTES
        </Grid>
        <Grid item xs={12} lg={3}>
          <TabsCustom
            sx={{ '& .MuiTabs-indicator': { borderRadius: `${isLgScreenUp ? '0px 20px 20px 0' : '20px'}` } }}
            {...isMdScreenDown ? { variant: "scrollable", scrollButtons: "auto" } : { centered: true }}
            orientation={isLgScreenUp ? 'vertical' : 'horizontal'}
            value={value}
            onChange={handleChange}
          >
            <TabCustom label="Lista de Clientes" iconPosition='start' icon={<PhoneIcon />} />
            <TabCustom label="Mis Solicitudes" iconPosition='start' icon={<FavoriteIcon />} />
            <TabCustom label="Pendientes" iconPosition='start' icon={<PersonPinIcon />} />
            <TabCustom label="Rechazadas" iconPosition='start' icon={<PersonPinIcon />} />
          </TabsCustom>
        </Grid>
        <Grid item xs={12} lg={9}>
          <div style={{
            paddingLeft: '20px',
          }}>
            marlon</div>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
