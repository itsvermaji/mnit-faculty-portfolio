import React from "react";

import { Button, Box, Tab } from "@mui/material";

import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import PublicationCard from "../Profile/PublicationCard";
import ConferenceCard from "./ConferenceCard";
import TabCard from "./TabCard";
import JournalCard from "./JournalCard";
// import jsPDF from "jspdf";
import saveAs from "file-saver"
import {Packer, Document, HeadingLevel, Paragraph} from "docx"
import * as fs from 'fs'
const FacultyTables = (props) => {
  
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { articles } = props.metaData;
  // console.log("articles", articles);
  articles.sort(function (a, b) {
    return b.year - a.year;
  });

  const conferences = [];
  const publishedArticles = [];
  const journals = [];
  for (let i = 0; i < articles.length; i++) {
    let text = `${i+1}).`+ articles[i].authors + ` " ` +articles[i].title +` " `+ articles[i].publication
    const obj = {}
    obj['description'] = text
    publishedArticles.push(obj)
    if (
      articles[i].publication.includes("conference") ||
      articles[i].publication.includes("Conference")
    ) {
      // console.log(articles[i].publication);
      let conf = {};
      conf["name"] = articles[i].publication;
      conf["year"] = articles[i].year;
      // console.log(conf);
      conferences.push(conf);
    } else {
      let journal = {};
      journal["name"] = articles[i].publication;
      journal["year"] = articles[i].year;
      journals.push(journal);
    }
  }
  // console.log(journals);
  // console.log(conferences);

  
  // document.getElementById('generate').addEventListener('click',function(event) {generateWordDoc(event)}, false);
  const generateWordDoc = () => {
    const arr = publishedArticles.map(publishedArticle => new Paragraph({
      text: publishedArticle.description,
      numbering: {
        level: 1
      }
    }))
    const doc = new Document({
      sections:[
        {
          children : publishedArticles.map(publishedArticle => new Paragraph({
            text: publishedArticle.description,
            heading:HeadingLevel.HEADING_3
          }))
        }
      ]
    })
    
    // Packer.toBuffer(doc).then((buffer) => {
    //   fs.writeFile("MyDoc.docx", buffer)
    // })
    Packer.toBlob(doc).then((blob)=> {
      saveAs(blob,"file.docx" )
    })
  }


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
          <div id='generate' onClick={generateWordDoc}>
            <Button>Save to Doc</Button>
          </div>
          {props.metaData.articles.map((article, index) => {
            return (
              <div key={index} style={{ margin: "10px" }}>
                <PublicationCard  article={article} />
              </div>
            );
          })}
        </TabPanel>
        <TabPanel value="2">
          {journals.map((journal, index) => {
            return (
              <div key={index} style={{ margin: "10px" }}>
                <JournalCard  journal={journal} />
              </div>
            );
          })}
        </TabPanel>

        <TabPanel value="3">
          <TabCard />
          <TabCard />
          <TabCard />
          <TabCard />
          <TabCard />
        </TabPanel>
        <TabPanel value="4">
          <TabCard />
          <TabCard />
          <TabCard />
          <TabCard />
          <TabCard />
        </TabPanel>
        <TabPanel value="5">
          {conferences.map((conf, index) => {
            return (
              <div style={{ margin: "10px" }}>
                <ConferenceCard key={index} conf={conf} />
              </div>
            );
          })}
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default FacultyTables;
