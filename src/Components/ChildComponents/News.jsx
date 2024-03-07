import React from 'react';
import './News.css'; // Import your CSS file for styling

const Sentiment = () => {
  // Dummy data (replace with actual data)
  const sentiments = [
    { icon: '😊', text: 'Market sentiment is overwhelmingly positive today, as investors react favorably to the latest technological advancements in the blockchain space. Many experts believe that these developments will drive long-term growth in the cryptocurrency market.' },
    { icon: '😢', text: 'Investors express concern as the market experiences a temporary dip in response to recent regulatory developments. Despite short-term uncertainties, analysts remain optimistic about the resilience of the overall cryptocurrency ecosystem.' },
    { icon: '🚀', text: 'Excitement grips the market with the announcement of a groundbreaking partnership between two major blockchain projects. This collaboration is expected to drive innovation and contribute to the broader adoption of digital currencies.' },
    { icon: '📉', text: 'Negative sentiment prevails as regulatory concerns resurface, prompting a market-wide sell-off. Investors are cautious as they await further clarification on regulatory policies that could impact the cryptocurrency landscape.' },
    { icon: '📈', text: 'Market participants express an overall positive outlook, fueled by strong fundamentals and a growing awareness of blockchain technology. Analysts predict sustained growth and increased institutional interest in the coming months.' },
  ];

  return (
    <div className="sentiment-container">
      <h2>Sentiment</h2>
      <div className="key-events">
        <h3>
          <span className="circle-icon">&#9432;</span>
          Key Events
        </h3>
        <div className="events-scroller">
          {sentiments.map((sentiment, index) => (
            <div key={index} className="event-container">
              <div className="event-icon">{sentiment.icon}</div>
              <div className="event-text">{sentiment.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
