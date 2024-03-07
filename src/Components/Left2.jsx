import React from 'react';
import Overview from './ChildComponents/overview';
import Fundamentals from './ChildComponents/Fundamentals';
// Fundamentals
import News from './ChildComponents/News';
import Sentiments from './ChildComponents/Sentiments';
import Team from './ChildComponents/Team';
import Tokenomics from './ChildComponents/Tokenomics';
import Technicals from './ChildComponents/Technicals';
import About from './ChildComponents/About';
import './Left2.css';
const Left2 = ({selectedCrypto}) => {
  return (
    <>
    {/* <div className='main-component' style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#f0f0f0', padding: '10px', marginTop:"30px"}}>
      <a href="#overview" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', padding: '5px' }}>Overview</a>
      <a href="#fundamentals" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', padding: '5px' }}>Fundamentals</a>
      <a href="#news-insights" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', padding: '5px' }}>News Insights</a>
      <a href="#sentiments" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', padding: '5px' }}>Sentiments</a>
      <a href="#team" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', padding: '5px' }}>Team</a>
      <a href="#technicals" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', padding: '5px' }}>Technicals</a>
      <a href="#tokenomics" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', padding: '5px' }}>Tokenomics</a>
    
    </div> */}
    


    <div className='main-component' style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#f0f0f0', padding: '10px', marginTop: '30px', flexWrap: 'wrap' }}>
  <a href="#overview" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', padding: '5px', flex: '1', boxSizing: 'border-box', textAlign: 'center', margin: '5px' }}>Overview</a>
  <a href="#fundamentals" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', padding: '5px', flex: '1', boxSizing: 'border-box', textAlign: 'center', margin: '5px' }}>Fundamentals</a>
  <a href="#news-insights" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', padding: '5px', flex: '1', boxSizing: 'border-box', textAlign: 'center', margin: '5px' }}>News Insights</a>
  <a href="#sentiments" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', padding: '5px', flex: '1', boxSizing: 'border-box', textAlign: 'center', margin: '5px' }}>Sentiments</a>
  <a href="#team" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', padding: '5px', flex: '1', boxSizing: 'border-box', textAlign: 'center', margin: '5px' }}>Team</a>
  <a href="#technicals" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', padding: '5px', flex: '1', boxSizing: 'border-box', textAlign: 'center', margin: '5px' }}>Technicals</a>
  <a href="#tokenomics" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', padding: '5px', flex: '1', boxSizing: 'border-box', textAlign: 'center', margin: '5px' }}>Tokenomics</a>
</div>



    <Overview/>
    <Fundamentals/>
    <News/>
    <Sentiments/>
    <About/>
    <Tokenomics/>
    <Team/>

    </>
  );
}

export default Left2;

