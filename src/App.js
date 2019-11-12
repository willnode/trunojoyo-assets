import React from 'react';
import './css/App.css';
import assets from '../assets/index';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LogoCard from './LogoCard';

function App() {
  return (
    <div class="App">
      <header class="App-header">
        <p>
          High-Quality Media Resources untuk bahan desain seputar Universitas Trunojoyo Madura (Fair Use)
        </p>
      </header>

      <Tabs>
        <TabList>
          <Tab>Logo</Tab>
          <Tab>Background</Tab>
          <Tab>Resources</Tab>
          <Tab>Arsip</Tab>
        </TabList>

        <TabPanel>
          <h2>Logo</h2>
          <p>Logo High-Quality yang berlaku dan divektorisasi</p>
          <div class="logo-list">
            {
              assets.logos.map(logo =>
                <LogoCard {...logo} />
              )
            }
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Background</h2>
          <p>Manifes Foto UTM untuk keperluan bahan pamflet, emblem, kalender, dsb.</p>
          <div class="logo-list bgs">
            {
              assets.backgrounds.map(logo =>
                <LogoCard {...logo} />
              )
            }
          </div>
        </TabPanel>
        <TabPanel>
          <h2>External Resources</h2>
          <p>Link official website yang beredar di UTM</p>
          <div class="link-list">
            {
              assets.links.map(link =>
                <div>
                  <h4>{link.title}</h4>
                  <div>
                    {
                      link.variants.map(variant => <span>{variant.title}: <a href={variant.link}>{variant.link}</a> <br /></span>)
                    }
                  </div>
                </div>
              )
            }
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Arsip Media</h2>
          <p>Link Album, Gdrive untuk arsip setiap event di UTM</p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
