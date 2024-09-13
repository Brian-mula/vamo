import i18n from "i18next";
import React from 'react';
import ReactDOM from 'react-dom';
import { initReactI18next } from "react-i18next";

import App from './App';
import reportWebVitals from './reportWebVitals';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: {
          "navLinkRules": "rules",
          "navLinkHome": "homepage",
          "navLinkTournament": "Fill out the bracket.",
          "navLinkBets": "description",
          "footerDisclaimer18Plus": "Only individuals who are 18 years and older are eligible to participate in this competition.",
          "footerFacebook": "vamosbetting",
          "footerLinkHQ": "Good luck to the winners!",
          "logout": "Logout",
          "errorTitle": "Oops..",
          "errorText": "Something happened",
          "invalidForm": "Tournament bracket incomplete. Please check again.",
          "close": "Close",
        },
        home: {
          "howItWorksTitle": "guidelines",
          "howItWorksRuleList": "<ol><li>Log in to your account on our website.</li><li>“euro 2021” Click on the indicated button.</li><li>Click on the 'Bracket' option within the details of the exit.</li><li>In the group stage, select the teams you have chosen and click to confirm them. The selected teams will be positioned in the group stage accordingly. Make sure to place the best teams in the third tier of the groups.</li><li>Within the bracket, select the team that you predict will win the match until the final winner is determined.</li><li>Once you have filled out the bracket, make sure to save it. After this process, no changes can be made.</li><li>Assuming all teams are correctly predicted, you could win a share of the 1 million gaming points!</li></ol>",
          "resultsTitle": "Results",
          "buttonStartTournament": "ብራኬቱን ይሙሉ",
        },
        tournament: {
          "title": "Fill out the bracket.",
          "info1": "First, in the group stage, select the teams you have chosen and place them in the bracket. Make sure to save them in the appropriate section of the group stage.",
          "info2": "After selecting the placement of the teams in each group, the teams that you place in the third tier of each group will advance to the next round. The teams that are chosen to move on will be those that are selected to advance to the next round. If you place 6 teams in the third tier, you must choose 4 out of those 6 teams to advance to the next stage.",
          "info3": "Next, based on the placement of the teams you selected in each group, the bracket will be generated. In the bracket, select the teams you predict will win each match until the final winner is determined.",
          "info4": "Finally, ensure that you select one team as the overall winner from the two final teams. If more than one participant correctly predicts all the teams, the prize will be shared among the winners.",
          "submit": "Submit bracket",
          "dialogSubmitTitle": "Almost done...",
          "dialogSubmitText": "You are about to submit the form. Please note that this is the last chance to change it. Are you sure?",
          "dialogCompetedTitle": "All set!",
          "dialogCompetedText": "Your form has been successfully saved! Good luck!",
          "cardAlreadySent": "Your form has been successfully saved! Good luck!",
          "cardChallengeOver": "We are sorry, but you cannot take part in the challenge anymore.",
        },
        rules: {
          "title": "rules",
          "description": "The rules of our competition are simple and can bring maximum winnings to each competitor; Only the best players who meet the competition's requirements will receive bonuses in the form of prizes.",
          "ruleList": "<ol><li>The chance to win the big prize ends on the evening of June 9. After that day it is not possible to complete the bracket challenge.</li><li>Log in using the account information you use when you log in to our website.</li><li><p>Watch the Bracket Challenge you are playing; what is the Bracket Challenge? It is a very popular and entertaining competition. During this competition, you can try to predict the entire process of a sports tournament. The challenge we have prepared is based on Euro 2021 football. In this challenge, you first select the individual rankings of the groups, and then from the six groups, you choose the best four third-placed teams to complete the final eight pairs. After that, the Euro follows the regular match process, and you continue to select the winners of each match. Each match stage is conducted for a single elimination game. Once you have chosen the winner of the matchup, the next round of the match stage is generated immediately and continues like this until the end. At the final stage, you will select the overall tournament winner.</p><p>As soon as you make a selection on the winner of the tournament, our app will prompt you to confirm this choice immediately; be careful here—once your selection is made, it cannot be changed.</p></li><li><p>After that, the next step is to follow the entire tournament process and support its progress. For those of you who accurately predict the tournament's process, we have prepared a big bonus as a reward.</p><p><b>1,000,000 Birr! The highest prize in Ethiopian history!</b> If more than one player correctly predicts the Bracket Challenge, the prize will be shared among the winning players. The winners' share of the prize will be credited to their accounts in the form of gaming points.</p></li><li>We will transfer the bonus to the accounts of those who accurately predicted the overall tournament process and won the bonus within 14 days after the tournament ends.</li><li>Only individuals who are 18 years and older are eligible to participate in this competition.</li><ol>"
        },
        links: {
          "facebook": "https://www.facebook.com/vamosbetting",
          "hq": "https://vamos.bet/en/auth/signin",
        },
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
