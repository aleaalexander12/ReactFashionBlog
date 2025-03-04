import "./App.css";
import Article from "./components/Article";
import Header from "./components/Header";
import Nav from "./components/Nav";

import blogImg1 from "./assets/blog-image-1.jpg";
import blogImg2 from "./assets/blog-image-2.jpg";
import Footer from "./components/Footer";

const article1 = {
  date: "2020-11-12",
  title: "On the Street in Brooklyn",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio dolore sit ea impedit quo sunt corrupti dolores dolorem autem. Similique, sed velit nam perferendis nostrum mollitia iusto odio ex sit? Nobis delectus dolorum tempora saepe distinctio, repellat ad! Et, eaque vel assumenda illo consequuntur mollitia quam distinctio ipsum, eveniet aliquid soluta adipisci, ea animi odio quidem quasi natus. Illum, atque. Enim similique quos aut eius, ipsa incidunt ipsam, corrupti iusto adipisci natus cumque corporis ab illo repellendus nisi aliquam sapiente unde saepe. Hic dicta impedit dolorem dolore error voluptatem quibusdam!",
  imgSrc: blogImg1,
  imgAlt: "Dark haired woman in a red dress on an industrial street",
};

const article2 = {
  date: "2020-11-11",
  title: "Vintage in Vogue",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus libero officiis eum. Doloremque architecto sint, aut modi quos fugit soluta asperiores cumque commodi ut? Reprehenderit tenetur quis saepe vel. Eaque totam veritatis odit laboriosam? Doloremque earum veniam necessitatibus ex dignissimos a ratione, labore, commodi beatae ea dolorum provident tempore? Porro repellat, veritatis similique ullam asperiores laborum repudiandae rem nobis. Eligendi quibusdam mollitia quis, enim praesentium quas, veritatis cupiditate, nemo numquam voluptatem porro maxime? In at fugit odit perspiciatis ex, consectetur suscipit mollitia, velit officiis quod aperiam vitae repudiandae pariatur?",
  imgSrc: blogImg2,
  imgAlt: "Three people in period clothing",
};

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Article {...article1} />
        <Article {...article2} />
      </main>
      <Footer />
    </>
  );
}

export default App;