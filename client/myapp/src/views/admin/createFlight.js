import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { makeStyles } from "@material-ui/core/styles";

import Header from "./../../components/Header/Header.js";
import HeaderLinks from "./../../components/Header/HeaderLinksAdmin.js";
import Footer from "./../../components/Footer/Footer.js";
import styles from "./../../assets/jss/material-kit-react/views/loginPage.js";
import image from "./../../assets/img/bg2.jpg";

import * as airports from "airportsjs"
import { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;
const useStyles = makeStyles(styles);
const useStyles1 = makeStyles((theme) => ({
    root: {

        // margin: theme.spacing(1),
        height: "40px",
        // flex: 2,
        // position: 'absolute',
        direction: "flex",
        backgroundcolor: "white",
        msOverflowY: "auto",
        // position: "relative",
    },
    text: {
        // display: "flex",
        // flexDirection: "row",
        color: "black",
        backgroundcolor: "white"

    },
    a: {

        height: "50px",
        backgroundcolor: "white",
        '&:hover': {
            color: "grey",
            backgroundcolor: "white",
        },
        textdecoration: "none !important",
        color: "black",
    },

    testssss: {
        height: "100px",
        width: "100px",
        backgroundcolor: "green"
    },
    test: {
        position: "relative",
        zIndex: 40,
        backgroundcolor: "white",
        overflow: "hidden",
        msOverflowY: "auto",

    }

}
));


export default function CreateFlight(props) {








    const classes = useStyles();
    const { ...rest } = props;
    const [flightData, setFlight] = useState({
        flightNo: "",
        economySeats: "", businessSeats: "", departureAirport: "", arrivalAirport: "", departureTerminal: "", arrivalTerminal: "",
        departureDate: "", arrivalDate: "", economyPrice: "", businessPrice: "", economyBaggage: "", businessBaggage: ""
    });
    const [flightError, setFlightError] = useState({
        flightNo: false,
        economySeats: false, businessSeats: false, departureAirport: false, arrivalAirport: false, departureTerminal: false, arrivalTerminal: false,
        departureDate: false, arrivalDate: false, economyPrice: false, businessPrice: false, economyBaggage: false, businessBaggage: false
    });
    const [errorMessage, setErrorMessage] = useState({
        flightNo: "",
        economySeats: "", businessSeats: "", departureAirport: "", arrivalAirport: "", departureTerminal: "", arrivalTerminal: "",
        departureDate: "", arrivalDate: "", economyPrice: "", businessPrice: "", economyBaggage: "", businessBaggage: ""
    });

    function validateData() {
        if ((flightError.flightNo || flightError.economySeats || flightError.businessSeats || flightError.departureAirport
            || flightError.arrivalAirport || flightError.departureTerminal || flightError.arrivalTerminal ||
            flightError.departureDate || flightError.arrivalDate || flightError.economyPrice || flightError.businessPrice ||
            flightError.economyBaggage || flightError.businessBaggage)) return false;
        let res = true;
        if (flightData.flightNo == '') {
            setFlightError((prevState => { return { ...prevState, ["flightNo"]: true }; }));
            setErrorMessage((prevState => { return { ...prevState, ["flightNo"]: 'This field is requiered' }; })); res = false;
        }
        if (flightData.economySeats == '') {
            setFlightError((prevState => { return { ...prevState, ["economySeats"]: true }; }));
            setErrorMessage((prevState => { return { ...prevState, ["economySeats"]: 'This field is requiered' }; })); res = false;
        }
        if (flightData.economyPrice == '') {
            setFlightError((prevState => { return { ...prevState, ["economyPrice"]: true }; }));
            setErrorMessage((prevState => { return { ...prevState, ["economyPrice"]: 'This field is requiered' }; })); res = false;
        }
        if (flightData.businessSeats == '') {
            setFlightError((prevState => { return { ...prevState, ["businessSeats"]: true }; }));
            setErrorMessage((prevState => { return { ...prevState, ["businessSeats"]: 'This field is requiered' }; })); res = false;
        }
        if (flightData.economyBaggage == '') {
            setFlightError((prevState => { return { ...prevState, ["economyBaggage"]: true }; }));
            setErrorMessage((prevState => { return { ...prevState, ["economyBaggage"]: 'This field is requiered' }; })); res = false;
        }
        if (flightData.businessBaggage == '') {
            setFlightError((prevState => { return { ...prevState, ["businessBaggage"]: true }; }));
            setErrorMessage((prevState => { return { ...prevState, ["businessBaggage"]: 'This field is requiered' }; })); res = false;
        }
        if (flightData.businessPrice == '') {
            setFlightError((prevState => { return { ...prevState, ["businessPrice"]: true }; }));
            setErrorMessage((prevState => { return { ...prevState, ["businessPrice"]: 'This field is requiered' }; })); res = false;
        }
        if (flightData.departureAirport == '') {
            setFlightError((prevState => { return { ...prevState, ["departureAirport"]: true }; }));
            setErrorMessage((prevState => { return { ...prevState, ["departureAirport"]: 'This field is requiered' }; })); res = false;
        }
        if (flightData.arrivalAirport == '') {
            setFlightError((prevState => { return { ...prevState, ["arrivalAirport"]: true }; }));
            setErrorMessage((prevState => { return { ...prevState, ["arrivalAirport"]: 'This field is requiered' }; })); res = false;
        }
        if (flightData.departureTerminal == '') {
            setFlightError((prevState => { return { ...prevState, ["departureTerminal"]: true }; }));
            setErrorMessage((prevState => { return { ...prevState, ["departureTerminal"]: 'This field is requiered' }; })); res = false;
        }
        if (flightData.arrivalTerminal == '') {
            setFlightError((prevState => { return { ...prevState, ["arrivalTerminal"]: true }; }));
            setErrorMessage((prevState => { return { ...prevState, ["arrivalTerminal"]: 'This field is requiered' }; })); res = false;
        }
        if (flightData.departureDate == '') {
            setFlightError((prevState => { return { ...prevState, ["departureDate"]: true }; }));
            setErrorMessage((prevState => { return { ...prevState, ["departureDate"]: 'This field is requiered' }; })); res = false;
        }
        if (flightData.arrivalDate == '') {
            setFlightError((prevState => { return { ...prevState, ["arrivalDate"]: true }; }));
            setErrorMessage((prevState => { return { ...prevState, ["arrivalDate"]: 'This field is requiered' }; })); res = false;
        }
        if (flightData.arrivalDate != '' && flightData.departureDate != '' && flightData.departureDate >= flightData.arrivalDate) {
            setErrorMessage((prevState => { return { ...prevState, ["arrivalDate"]: 'Enter an Arrival Date after the Departure Date' }; })); res = false;
            setFlightError((prevState => { return { ...prevState, ["arrivalDate"]: true }; }));
            setFlight((prevState => { return { ...prevState, ["arrivalDate"]: null }; }));
        }
        if (flightData.arrivalDate != '' && flightData.departureDate != '' && (flightData.arrivalDate.getTime() - flightData.departureDate.getTime()) > 1000 * 60 * 60 * 48) {
            setErrorMessage((prevState => { return { ...prevState, ["arrivalDate"]: 'Enter an Arrival Date within 2 days  of the Departure Date' }; })); res = false;
            setFlightError((prevState => { return { ...prevState, ["arrivalDate"]: true }; }));
            setFlight((prevState => { return { ...prevState, ["arrivalDate"]: null }; }));
        }

        return res;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (validateData())
            axios.post('http://localhost:8000/admin/createFlight/', flightData, {
                headers: {
                    'authorization': token
                }
            })
                .then(res => alert('Flight Added Successfuly'),)
                .catch((error) => {
                    if (error.response) {
                        return (setFlightError((prevState => { return { ...prevState, ["flightNo"]: true }; })),
                            setErrorMessage((prevState => { return { ...prevState, ["flightNo"]: 'This Flight Number is taked please choose another one' }; }))
                        )
                    }
                });



    };

    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="OverReact"
                rightLinks={<HeaderLinks />}
                {...rest}
            />

            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                }}
            >
                <div className={classes.container}>

                    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                            <Typography component="h1" variant="h4" align="center">
                                Create Flight
                            </Typography>
                            <React.Fragment>


                                {DataForm(flightData, setFlight, flightError, setFlightError, errorMessage, setErrorMessage)}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>

                                    <Button
                                        variant="contained"
                                        onClick={(e) => {
                                            onSubmit(e);
                                        }}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        Create
                                    </Button>
                                </Box>


                            </React.Fragment>
                        </Paper>
                    </Container>


                </div>
                <Footer />
            </div>
        </div>
    )


}






function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                overReact
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function myAppBar() {
    return (
        <AppBar
            position="absolute"
            color="default"
            elevation={0}
            sx={{
                position: 'relative',
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
            }}
        >
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    overReact
                </Typography>
            </Toolbar>
        </AppBar>
    )
}



const theme = createTheme();





function DataForm(d, setData, error, setError, helperText, setHelperText) {
    ///// _____________________________________ AirPort drop down ____________________________

    // ---------- arrival -----------
    const [placeholder, setplaceholder] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        console.log("value", searchWord)
        setData((prevState => { return { ...prevState, ["departureAirport"]: searchWord }; }));
        const newFilter = airports.searchByAirportName(searchWord)
        console.log("new filter", newFilter)
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
        console.log("filteredData", filteredData)

    };

    const clicked = (value, e) => {
        setData((prevState => { return { ...prevState, ["departureAirport"]: value.name }; }));
        setFilteredData([]);
    };


    // ---------- departure -----------
    const [placeholder1, setplaceholder1] = useState("");
    const [filteredData1, setFilteredData1] = useState([]);
    const handleFilter1 = (event) => {
        const searchWord = event.target.value;
        console.log("value", searchWord)
        setData((prevState => { return { ...prevState, ["arrivalAirport"]: searchWord }; }));
        const newFilter = airports.searchByAirportName(searchWord)
        console.log("new filter", newFilter)
        if (searchWord === "") {
            setFilteredData1([]);
        } else {
            setFilteredData1(newFilter);
        }
        console.log("filteredData", filteredData1)

    };

    const clicked1 = (value, e) => {
        setData((prevState => { return { ...prevState, ["arrivalAirport"]: value.name }; }));
        setFilteredData1([]);
    };
    //_______________________________________________________________________________________
    const styles1 = useStyles1({});
    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12} >
                    <TextField
                        required
                        id="flightNo"
                        name="flightNo"
                        label="Flight Number"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={d.flightNo}
                        error={error.flightNo}
                        helperText={helperText.flightNo}
                        onChange={(event) => {
                            const { name, value } = event.target;
                            if (!(value != '' && Number(value) >= 0)) {
                                setError((prevState => { return { ...prevState, [name]: true }; }));
                                if (Number(value) < 0) setHelperText((prevState => { return { ...prevState, [name]: 'Enter a valid positive number' }; }));
                                if (value == '') setHelperText((prevState => { return { ...prevState, [name]: 'This field is requiered' }; }));
                            }
                            else {
                                setError((prevState => { return { ...prevState, [name]: false }; }));
                                setHelperText((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            setData((prevState => { return { ...prevState, [name]: value }; }));
                        }}

                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="economySeats"
                        name="economySeats"
                        label="Number of Economy Seats"
                        fullWidth
                        variant="standard"
                        type="number"
                        value={d.economySeats}
                        error={error.economySeats}
                        helperText={helperText.economySeats}
                        onChange={(event) => {
                            const { name, value } = event.target;
                            if (!(value != '' && Number(value) >= 0)) {
                                setError((prevState => { return { ...prevState, [name]: true }; }));
                                if (Number(value) <= 0) setHelperText((prevState => { return { ...prevState, [name]: 'Enter a valid positive number' }; }));
                                if (value == '') setHelperText((prevState => { return { ...prevState, [name]: 'This field is requiered' }; }));
                                setData((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            else {
                                setError((prevState => { return { ...prevState, [name]: false }; }));
                                setHelperText((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            setData((prevState => { return { ...prevState, [name]: value }; }));
                        }}

                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="economyPrice"
                        name="economyPrice"
                        label="Price of Economy Seats"
                        fullWidth
                        variant="standard"
                        type="number"
                        value={d.economyPrice}
                        error={error.economyPrice}
                        helperText={helperText.economyPrice}
                        onChange={(event) => {
                            const { name, value } = event.target;
                            if (!(value != '' && Number(value) >= 0)) {
                                setError((prevState => { return { ...prevState, [name]: true }; }));
                                if (Number(value) <= 0) setHelperText((prevState => { return { ...prevState, [name]: 'Enter a valid positive number' }; }));
                                if (value == '') setHelperText((prevState => { return { ...prevState, [name]: 'This field is requiered' }; }));
                                setData((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            else {
                                setError((prevState => { return { ...prevState, [name]: false }; }));
                                setHelperText((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            setData((prevState => { return { ...prevState, [name]: value }; }));
                        }}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="businessSeats"
                        name="businessSeats"
                        label="Number of Business Seats"
                        fullWidth
                        variant="standard"
                        type="number"
                        value={d.businessSeats}
                        error={error.businessSeats}
                        helperText={helperText.businessSeats}
                        onChange={(event) => {
                            const { name, value } = event.target;
                            if (!(value != '' && Number(value) >= 0)) {
                                setError((prevState => { return { ...prevState, [name]: true }; }));
                                if (Number(value) < 0) setHelperText((prevState => { return { ...prevState, [name]: 'Enter a valid positive number' }; }));
                                if (value == '') setHelperText((prevState => { return { ...prevState, [name]: 'This field is requiered' }; }));
                                setData((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            else {
                                setError((prevState => { return { ...prevState, [name]: false }; }));
                                setHelperText((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            setData((prevState => { return { ...prevState, [name]: value }; }));
                        }}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="businessPrice"
                        name="businessPrice"
                        label="Price of Business Seats"
                        fullWidth
                        variant="standard"
                        type="number"
                        value={d.businessPrice}
                        error={error.businessPrice}
                        helperText={helperText.businessPrice}
                        onChange={(event) => {
                            const { name, value } = event.target;
                            if (!(value != '' && Number(value) >= 0)) {
                                setError((prevState => { return { ...prevState, [name]: true }; }));
                                if (Number(value) < 0) setHelperText((prevState => { return { ...prevState, [name]: 'Enter a valid positive number' }; }));
                                if (value == '') setHelperText((prevState => { return { ...prevState, [name]: 'This field is requiered' }; }));
                                setData((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            else {
                                setError((prevState => { return { ...prevState, [name]: false }; }));
                                setHelperText((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            setData((prevState => { return { ...prevState, [name]: value }; }));
                        }}

                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="economyBaggage"
                        name="economyBaggage"
                        label="Economy Baggage Capacity"
                        fullWidth
                        variant="standard"
                        type="number"
                        value={d.economyBaggage}
                        error={error.economyBaggage}
                        helperText={helperText.economyBaggage}
                        onChange={(event) => {
                            const { name, value } = event.target;
                            if (!(value != '' && Number(value) >= 0)) {
                                setError((prevState => { return { ...prevState, [name]: true }; }));
                                if (Number(value) < 0) setHelperText((prevState => { return { ...prevState, [name]: 'Enter a valid positive number' }; }));
                                if (value == '') setHelperText((prevState => { return { ...prevState, [name]: 'This field is requiered' }; }));
                                setData((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            else {
                                setError((prevState => { return { ...prevState, [name]: false }; }));
                                setHelperText((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            setData((prevState => { return { ...prevState, [name]: value }; }));
                        }}

                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="businessBaggage"
                        name="businessBaggage"
                        label="Business Baggage Capacity"
                        fullWidth
                        variant="standard"
                        type="number"
                        value={d.businessBaggage}
                        error={error.businessBaggage}
                        helperText={helperText.businessBaggage}
                        onChange={(event) => {
                            const { name, value } = event.target;
                            if (!(value != '' && Number(value) >= 0)) {
                                setError((prevState => { return { ...prevState, [name]: true }; }));
                                if (Number(value) < 0) setHelperText((prevState => { return { ...prevState, [name]: 'Enter a valid positive number' }; }));
                                if (value == '') setHelperText((prevState => { return { ...prevState, [name]: 'This field is requiered' }; }));
                                setData((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            else {
                                setError((prevState => { return { ...prevState, [name]: false }; }));
                                setHelperText((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            setData((prevState => { return { ...prevState, [name]: value }; }));
                        }}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <form className={styles1.root} noValidate autoComplete="off">
                        <div className={styles1.text}>
                            <div className={styles1.test}>
                                <div className={styles1.test}>
                                    <TextField
                                        fullWidth
                                        required
                                        name="departureAirport"
                                        id="departureAirport"
                                        type="search"
                                        label="Departure Airport"
                                        variant="standard"
                                        value={d.departureAirport}
                                        error={error.departureAirport}
                                        helperText={helperText.departureAirport}
                                        onChange={(event) => {
                                            handleFilter(event)
                                            const { name, value } = event.target;
                                            if (value == '') {
                                                setError((prevState => { return { ...prevState, [name]: true }; }));
                                                setHelperText((prevState => { return { ...prevState, [name]: 'This field is requiered' }; }));
                                            }
                                            else {
                                                setError((prevState => { return { ...prevState, [name]: false }; }));
                                                setHelperText((prevState => { return { ...prevState, [name]: '' }; }));
                                            }
                                            setData((prevState => { return { ...prevState, [name]: value }; }));
                                        }}
                                    />
                                </div>
                                {filteredData.length != 0 && (
                                    <div className={styles1.test} >

                                        {filteredData.slice(0, 5).map((value, key) => {
                                            return (
                                                <a className={styles1.test} onClick={(e) => clicked(value, e)} target="_blank">
                                                    <p className={styles1.a} >{value.name} </p>
                                                </a>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                    {/* <TextField
                        required
                        id="departureAirport"
                        name="departureAirport"
                        label="Departure Airport"
                        fullWidth
                        variant="standard"
                        value={d.departureAirport}
                        error={error.departureAirport}
                        helperText={helperText.departureAirport}
                        onChange={(event) => {
                            const { name, value } = event.target;
                            if (value == '') {
                                setError((prevState => { return { ...prevState, [name]: true }; }));
                                setHelperText((prevState => { return { ...prevState, [name]: 'This field is requiered' }; }));
                            }
                            else {
                                setError((prevState => { return { ...prevState, [name]: false }; }));
                                setHelperText((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            setData((prevState => { return { ...prevState, [name]: value }; }));

                        }}

                    /> */}
                    <div id="match-List"> </div>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <form className={styles1.root} noValidate autoComplete="off">
                        <div className={styles1.text}>
                            <div className={styles1.test}>
                                <div className={styles1.test}>
                                    <TextField
                                        fullWidth
                                        required
                                        id="arrivalAirport"
                                        name="arrivalAirport"
                                        label="Arrival Airport"
                                        type="search"
                                        variant="standard"
                                        value={d.arrivalAirport}
                                        error={error.arrivalAirport}
                                        helperText={helperText.arrivalAirport}
                                        onChange={(event) => {
                                            const { name, value } = event.target;
                                            console.log("name "+ name);
                                            console.log(value);
                                            handleFilter1(event)
                                            console.log("arrival airport");
                                            console.log(d.arrivalAirport);
                                            if (value == '') {
                                                setError((prevState => { return { ...prevState, [name]: true }; }));
                                                setHelperText((prevState => { return { ...prevState, [name]: 'This field is requiered' }; }));
                                            }
                                            else {
                                                setError((prevState => { return { ...prevState, [name]: false }; }));
                                                setHelperText((prevState => { return { ...prevState, [name]: '' }; }));
                                            }
                                            setData((prevState => { return { ...prevState, [name]: value }; }));

                                           
                                        }}
                                    />
                                </div>
                                {filteredData1.length != 0 && (
                                    <div className={styles1.test} >

                                        {filteredData1.slice(0, 5).map((value, key) => {
                                            return (
                                                <a className={styles1.test} onClick={(e) => clicked1(value, e)} target="_blank">
                                                    <p className={styles1.a} >{value.name} </p>
                                                </a>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                    {/* <TextField
                        required
                        id="arrivalAirport"
                        name="arrivalAirport"
                        label="Arrival Airport"
                        fullWidth
                        variant="standard"
                        value={d.arrivalAirport}
                        error={error.arrivalAirport}
                        helperText={helperText.arrivalAirport}
                        onChange={(event) => {
                            const { name, value } = event.target;
                            if (value == '') {
                                setError((prevState => { return { ...prevState, [name]: true }; }));
                                setHelperText((prevState => { return { ...prevState, [name]: 'This field is requiered' }; }));
                            }
                            else {
                                setError((prevState => { return { ...prevState, [name]: false }; }));
                                setHelperText((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            setData((prevState => { return { ...prevState, [name]: value }; }));

                        }}

                    /> <div id="match-List2"> </div> */}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="departureTerminal"
                        name="departureTerminal"
                        label="Departure Terminal"
                        fullWidth
                        type="number"
                        variant="standard"
                        value={d.departureTerminal}
                        error={error.departureTerminal}
                        helperText={helperText.departureTerminal}
                        onChange={(event) => {
                            const { name, value } = event.target;
                            if (value == '') {
                                setError((prevState => { return { ...prevState, [name]: true }; }));
                                setHelperText((prevState => { return { ...prevState, [name]: 'This field is requiered' }; }));
                            }
                            else {
                                setError((prevState => { return { ...prevState, [name]: false }; }));
                                setHelperText((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            setData((prevState => { return { ...prevState, [name]: value }; }));
                        }}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="arrivalTerminal"
                        name="arrivalTerminal"
                        label="Arrival Terminal"
                        fullWidth
                        type="number"
                        variant="standard"
                        value={d.arrivalTerminal}
                        error={error.arrivalTerminal}
                        helperText={helperText.arrivalTerminal}
                        onChange={(event) => {
                            const { name, value } = event.target;
                            if (value == '') {
                                setError((prevState => { return { ...prevState, [name]: true }; }));
                                setHelperText((prevState => { return { ...prevState, [name]: 'This field is requiered' }; }));
                            }
                            else {
                                setError((prevState => { return { ...prevState, [name]: false }; }));
                                setHelperText((prevState => { return { ...prevState, [name]: '' }; }));
                            }
                            setData((prevState => { return { ...prevState, [name]: value }; }));
                        }}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} required
                                label="Departure Date"
                                fullWidth
                                variant="standard" error={error.departureDate}
                                helperText={helperText.departureDate} />}
                            label="Departure Date"
                            id="departureDate"
                            value={d.departureDate}

                            onChange={(event) => {
                                if (event != null) {
                                    setError((prevState => { return { ...prevState, ["departureDate"]: false }; }));
                                    setHelperText((prevState => { return { ...prevState, ["departureDate"]: '' }; }));
                                }
                                else {
                                    setError((prevState => { return { ...prevState, ["departureDate"]: true }; }));
                                    setHelperText((prevState => { return { ...prevState, ["departureDate"]: 'This field is requiered' }; }));
                                }
                                setData((prevState => {
                                    return {
                                        ...prevState,
                                        ["departureDate"]: event
                                    };
                                }));
                            }}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props}
                                required
                                id="arrivalDate"
                                name="arrivalDate"
                                label="Arrival Date"
                                fullWidth
                                value={d.arrivalDate}
                                variant="standard" error={error.arrivalDate}
                                helperText={helperText.arrivalDate} />
                            }
                            id="arrivalDate"
                            name="arrivalDate"
                            value={d.arrivalDate}
                            onChange={(event) => {
                                if (event != null) {
                                    setError((prevState => { return { ...prevState, ["arrivalDate"]: false }; }));
                                    setHelperText((prevState => { return { ...prevState, ["arrivalDate"]: '' }; }));
                                }
                                else {
                                    setError((prevState => { return { ...prevState, ["arrivalDate"]: true }; }));
                                    setHelperText((prevState => { return { ...prevState, ["arrivalDate"]: 'This field is requiered' }; }));
                                }
                                setData((prevState => {
                                    return {
                                        ...prevState,
                                        ["arrivalDate"]: event
                                    };
                                }));
                            }}

                        />
                    </LocalizationProvider>
                </Grid>


            </Grid>
        </React.Fragment>
    );
}

