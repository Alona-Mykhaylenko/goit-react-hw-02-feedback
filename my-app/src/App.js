import React from "react";
import Statistics from "./components/statistics/Statistics";
import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions";
import Section from "./components/section/Section";
import NotificationMessage from "./components/notificationMessage/NotificationMessage";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  addNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  addBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { bad, neutral, good } = this.state;
    const total = bad + neutral + good;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const positiveFeedback = Math.round((good * 100) / total);
    return positiveFeedback;
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            addGood={this.addGood}
            addNeutral={this.addNeutral}
            addBad={this.addBad}
          />
        </Section>

        {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalCount={total}
              positiveFeedbackPercent={positiveFeedback}
            />
          </Section>
        ) : (
          <NotificationMessage />
        )}
      </div>
    );
  }
}

export default App;
