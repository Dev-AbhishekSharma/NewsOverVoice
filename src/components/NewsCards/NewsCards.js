import React from "react";

import { Grid, Grow, Typography } from "@material-ui/core";

import NewsCard from "../NewsCard/NewsCard";
import useStyles from "./styles.js";

const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Narendra Modi...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "BBC News, ABC News, Wired, Buzzfeed ...",
    text: "Give me the news from ABC News",
  },
];

const NewsCards = ({ articles, activeAricle }) => {
  const Classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={Classes.container}
          container
          alignItems="stretch"
          spacing={2}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={Classes.infoCard}
            >
              <div
                className={Classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5">{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant="h6">
                    <strong>
                      {infoCard.title.split(" ")[2]} :
                      <br />
                      {infoCard.info}
                    </strong>
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Try Saying :<br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  return (
    <Grow in>
      <Grid
        className={Classes.container}
        container
        alignItems="stretch"
        spacing={2}
      >
        {articles.map((article, i) => (
          <Grid item xs={6} sm={3} style={{ display: "flex" }}>
            <NewsCard article={article} activeAricle={activeAricle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
