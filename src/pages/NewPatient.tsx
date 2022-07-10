import { Card, CardContent, Grid, Typography, TextField, Checkbox, Button } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { error } from 'console';
import {Fragment, useState} from 'react'
import Splash from '../components/Splash';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

type Patient = {
    name:string;
    companyPaid:boolean;
}

const NewPatient = () => {
    const [patient, SetPatient] = useState<Patient>({name:"", companyPaid: false})
    const [submitting, setSubmitting] = useState<boolean>(false)
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    return (
        submitting? <Splash /> :
        <Fragment>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Card sx={{ marginBottom: "5px", marginTop: "1px", width: "100%" }}>
            <CardContent>
    
              <Grid container spacing={1}>
              <Grid item xs={12} md={12} >
                {error && <Typography sx={{textAlign:"center", color:'red'}}>{error}</Typography>}
                {success && <Typography sx={{textAlign:"center", color:'red'}}>{success}</Typography>}
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="Message"
                    label="Name"
                    multiline
                    variant="outlined"
                    fullWidth
                    required
                    value={patient?.name}
                    onChange={(e) => SetPatient({...patient, name:e.target.value})}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="Message"
                    label="Name"
                    multiline
                    variant="outlined"
                    fullWidth
                    required
                    value={patient?.name}
                    onChange={(e) => SetPatient({...patient, name:e.target.value})}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                 
                  <Checkbox
                    checked={patient.companyPaid}
                    onChange={()=>SetPatient({...patient, companyPaid:!patient.companyPaid})}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                   <label>Insert Customer Name</label>
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
                    required
                    id="MSISDN"
                    name="MSISDN"
                    label="Test Number"
                    fullWidth
                    value={patient.name}
                    type="tel"
                    variant="outlined"
                    onChange={(e) => SetPatient({...patient, name:e.target.value})}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "teal" }}
                    component="label"
      
                  >
                    Send Test Message
                  </Button>
                </Grid>
                <Grid item xs={3} md={4}>
                <label>Send Now</label>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Grid container spacing={2}>   
     
                <Grid item xs={12} md={4}>
                  <TextField
                    required
                    id="MSISDN"
                    name="MSISDN"
                    label="Contacts"
                    fullWidth
                    type="tel"
                    disabled
                    variant="outlined"
                  />
                </Grid>
              </Grid>
      
            </CardContent>
          </Card>
          </LocalizationProvider>
        </Fragment>
      );
}

export default NewPatient