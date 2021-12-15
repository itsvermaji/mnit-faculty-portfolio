import React from "react";

import { Box, Tab } from "@mui/material";

import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import PublicationCard from "../Profile/PublicationCard";
import ConferenceCard from "./ConferenceCard";
import TabCard from "./TabCard";
import JournalCard from "./JournalCard";

const FacultyTables = (props) => {

  const { articles } = props.metaData;
  console.log("articles", articles);
  articles.sort(function(a,b){
    return b.year - a.year;
  })

  const conferences = []
  const journals = []
  for(let i=0; i<articles.length; i++) {
    if(articles[i].publication.toLowerCase().includes("conference")){
      // console.log(articles[i].publication);
      let conf = {}
      conf['name'] = articles[i].publication;
      conf['year'] = articles[i].year
      // console.log(conf);
      conferences.push(conf);
    }else{
      let journal = {}
      journal['name'] = articles[i].publication
      journal['year'] = articles[i].year
      journals.push(journal)
    }
  }
  console.log(journals)
  console.log(conferences)

  const [value, setValue] = React.useState("1");

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
          {props.metaData.articles.map((article, index) => {
            return (<div style={{margin:"10px"}}>
              <PublicationCard key = {index} article={article}/>
              </div>
            )
          })}
        </TabPanel>
        <TabPanel value="2">
          {journals.map((journal, index) => {
              return (<div style={{margin:"10px"}}>
              <JournalCard key = {index} journal={journal}/>
              </div>)
            })}
        </TabPanel>

        <TabPanel value="3">
        <TabCard/><TabCard/><TabCard/><TabCard/><TabCard/>
        </TabPanel>
        <TabPanel value="4">
        <TabCard/><TabCard/><TabCard/><TabCard/><TabCard/>
        </TabPanel>
        <TabPanel value="5">
          {conferences.map((conf, index) => {
            return (<div style={{margin:"10px"}}>
            <ConferenceCard key = {index} conf={conf}/>
            </div>)
          })}
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default FacultyTables;
