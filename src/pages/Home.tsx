import React, { useEffect, useState } from "react";
import app from "../firebase";
import { getDatabase, ref, get } from "firebase/database";
import Infos from "../components/Infos";
import { FlexColumn, FlexRow, GlobalWrapper } from "../styles/globals";
import Links from "../components/Links";
import Education from "../components/Education";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Certificates from "../components/Certificates";
import Experience from "../components/Experience";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function Home() {
  const [data, setData] = useState<any>([]);
  const theme = useTheme();
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  // const fetchData = async () => {
  //   const db = getDatabase(app); //varibile che punta al database
  //   const dataRef = ref(db); //reference
  //   //snapshot
  //   const snapshot = await get(dataRef);
  //   if(snapshot.exists()){
  //     setData(snapshot.val());
  //   };
  // };

  useEffect(() => {
    // fetchData();
    // console.log(fetchData())
  }, []);

  return (
    <>
      <GlobalWrapper>
        <FlexRow>
          <Infos />
          <FlexColumn style={{ }}>
           
            <Box
              sx={{
                margin: "0",
                padding: "0",
              }}
            >
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                >
                  <Tab label="Experience" {...a11yProps(0)} />
                  <Tab label="Education" {...a11yProps(1)} />
                  <Tab label="Certificates" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <Experience />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <Education />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <Certificates />
                </TabPanel>
              </SwipeableViews>
            </Box>
          </FlexColumn>
        </FlexRow>
      </GlobalWrapper>
    </>
  );
}

export default Home;
