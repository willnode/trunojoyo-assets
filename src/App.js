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
          Media dan Link Resources untuk bahan desain dan story di sekitar Universitas Trunojoyo Madura<br/>
          <i>Project WIP! Aku butuh kontribusi kalian (lihat <a href="https://github.com/willnode/trunojoyo-assets">README</a>) </i>
        </p>
      </header>

      <Tabs>
        <TabList>
          <Tab>Logo</Tab>
          <Tab>Background</Tab>
          <Tab>Links</Tab>
          <Tab>Stories</Tab>
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
          <h2>List Story</h2>
          <p>Daftar Blog Mahasiswa Aktif dan Alumni UTM (WIP)</p>
          <div class="link-list">
            {
              assets.stories.map(link =>
                <div>
                  <h4>{link.program} - {link.angkatan}</h4>
                  <div>
                    {
                      Object.keys(link.links).map(name => <span>{name}: <a href={link.links[name]}>{link.links[name]}</a> <br /></span>)
                    }
                  </div>
                </div>
              )
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
