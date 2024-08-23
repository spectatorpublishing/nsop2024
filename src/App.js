import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './containers/Home';
import Section from './containers/Section';
import { 
  audio_articles, 
  university_news_articles, 
  opinion_articles, 
  sports_articles, 
  ac_articles, 
  city_news_articles,
  spectrum_articles 
} from './data/articles';


const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/uni-news" element={<Section id="uni-news" header="University News" articles={university_news_articles}/>} />
        <Route path="/city-news" element={<Section id="city-news" header="City News" articles={city_news_articles} />} />
        <Route path="/opinion" element={<Section id="opinion" header="Opinion" articles={opinion_articles} />} />
        <Route path="/a&c" element={<Section id="a&c" header="Arts & Culture" articles={ac_articles} />} />
        <Route path="/sports" element={<Section id="sports" header="Sports" articles={sports_articles} />} />
        <Route path="/audio" element={<Section id="audio" header="Audio" articles={audio_articles} />} />
        <Route path="/spectrum" element={<Section id="spectrum" header="Spectrum" articles={spectrum_articles} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;