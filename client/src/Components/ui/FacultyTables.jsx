import React from "react";

import {Box, Tab} from "@mui/material";

import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import PublicationCard from "../Profile/PublicationCard";
const FacultyTables = (props) => {

  console.log('meta', props.metaData.articles);

  // console.log(props.metaData)
  // const {articles} = this.props.metaData.articles;
  // console.log(articles);
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab value="1" label="Publications" />
            <Tab value="2" label="Journals" />
            <Tab value="3" label="Patents" />
            <Tab value="4" label="PhD. Guided" />
            <Tab value="5" label="Conferences" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {props.metaData.articles.map((article) => {
            <PublicationCard article={article}/>
          })}
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Three</TabPanel>
        <TabPanel value="5">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};

export default FacultyTables;
