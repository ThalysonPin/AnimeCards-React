import { FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'
import './App.css';
import Header from './components/Header';
import { Section } from './components/Section';
import { ListItem } from './components/ListItem';



const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    ImageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    ImageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",alt: "Imagem do jogo Valorant",
  },
         
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    ImageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
    
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    ImageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt:"Imagem do jogo TFT",
  },
]

const channelListData = [
  {
    url:"https://www.twitch.tv/maykbrito",
    ImageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt:"Imagem de Mayk Brito",
},


  {  url:"https://www.twitch.tv/alanzoka",
    ImageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    alt:"Imagem de Alanzoka"
  },

  {
    url:"https://www.twitch.tv/cellbit",
    ImageUrl: "https://yt3.ggpht.com/k2Y-uLTQ16UjB6-ScXpNUc6zokiFu8GULNcN5_N7xqiMi9SrYFBkqpV20FIn9PBfkRy8TAwKeQ=s900-c-k-c0x00ffffff-no-rj    ",
    alt:"Imagem de Cellbit"
  },
]


function App() {
  return (
    <div className="App">
      {/* colocar Header aqui */}
      <header>
        <Header />
      </header>

      {/* inserir main aqui  */}
      <main>

        <Section
          Title="Meus Jogos"
          Subtitle="Os games que eu mais curto jogar!"
        >
          {/* itens da lista  */}
        
        {
          gamesListData.map(item => {
            return(
            <ListItem 
            url={item.url}
            ImageUrl={item.ImageUrl}
            alt={item.alt}
            />) 
          })
        } 
          {/* <ListItem
            url="https://www.twitch.tv/directory/game/League%20of%20Legends"
            ImageUrl="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg"
            alt="Imagem do jogo League of Legends" /> */}

        </Section>

        <Section
          Title="Canais e Streamers"
          Subtitle="Lista de canais e transmissões que gosto">
            
            {
              channelListData.map(item => {
                return(
                  <ListItem 
                  url={item.url}
                  ImageUrl={item.ImageUrl}
                  alt={item.alt}
                  />)
              })
            }
        </Section>

        <Section

          Title="Minhas redes"
          Subtitle="Se conecte comigo agora mesmo!">
          <div className="redesArea">
            <a href="https://www.youtube.com/watch?v=K65wUN-2no4&list=WL&index=3&t=2722s" target="_blank" rel="noreferrer" className="redes">
              <FaTwitter />
            </a>
            <a href="/" className="redes"><FaInstagram/></a>
            <a href="/" className="redes">
              <FaTelegram />
            </a>
          </div>

        </Section>
      </main>
    </div>
  );
}

export default App;
