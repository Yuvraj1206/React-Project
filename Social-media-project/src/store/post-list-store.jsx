import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "CREATE_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, title, body, tags) => {
    dispatchPostList({
      type: "CREATE_POST",
      payload: {
        id: userId,
        title: title,
        body: body,
        reactions: Math.floor(Math.random() * 50),
        userId: "id" + Math.random().toString(16).slice(2),
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId, //postId:postId
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {/*postList:postList, addPost:addPost, de...*/ children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: " My Goa Getaway",
    body: "Embark on a journey through the vibrant culture and serene landscapes of Goa with me. From the bustling streets of North Goa to the tranquil shores of South Goa, every moment was a blend of relaxation, adventure, and cultural exploration. Highlights include exploring historic sites, indulging in authentic cuisine, and witnessing breathtaking sunsets. Join me as I bid farewell to this coastal paradise, carrying with me cherished memories of a blissful getaway.",
    reactions: 54,
    userId: "user-46",
    tags: ["vacation", "trip", "goa", "enjoy", "TravelBlog", "BeachVacation"],
  },
  {
    id: 2,
    title: "BTech Survivor:Wild Ride of Higher Ed",
    body: "Greetings, fellow survivors of the academic jungle! As I emerge, somewhat battered but victorious, from the labyrinthine halls of higher education, I can't help but reflect on the rollercoaster ride that was my BTech journey. Join me through the hilarious highs and ludicrous lows of completing a BTech degree-because sometimes, laughter is the best way to cope with the madness                                                                      Embark on a hilarious journey through the trials and tribulations of completing a BTech degree with me. From freshman follies to senior shenanigans, every chapter is filled with laughter and absurdity. We navigate through the chaos of midterms, the Great Internship Odyssey, and the surreal world of office politics. As graduation looms, we emerge battered but victorious, armed with nothing but a degree and a newfound appreciation for humor. Here's to all the BTech survivors out there – may your coffee be strong and your sense of humor intact!",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
  {
    id: 3,
    title: "Summer Escapes: A Journey of Sun, Sand, and Serenity",
    body: "Join me on a mesmerizing journey through my summer vacation, filled with sun, sand, and serenity. From setting sail across the Mediterranean to indulging in island hopping adventures, every moment was a treasure trove of memories waiting to be cherished. Retreats to nature and coastal bliss added layers of tranquility and adventure, offering a holistic experience of rejuvenation and exploration. As the sun sets on this unforgettable escapade, I'm filled with gratitude for the beauty discovered and the joy experienced, carrying with me the spirit of adventure into the unknown.",
    reactions: 78,
    userId: "user-19",
    tags: [
      "BTechSurvivor",
      "Unbelievable",
      "AcademicAdventures",
      "moments",
      "CollegeHumor",
    ],
  },
  {
    id: 4,
    title: "Trip to TataNagar",
    body: "Prepare to Embark on a captivating journey through Tata Nagar, also known as Jamshedpur, a city steeped in industrial heritage and cultural charm. From exploring the iconic Tata Steel Plant to delving into the city's rich history on a heritage trail, every moment promises adventure and discovery. Thrilling wildlife safaris at Dalma Wildlife Sanctuary offer a refreshing escape into nature's embrace. As the journey concludes, Tata Nagar leaves an indelible mark, weaving tales of innovation, culture, and natural splendor.",
    reactions: 20,
    userId: "user-76",
    tags: ["Jamshedpur", "TataNagar", "CulturalExploration", "enjoy"],
  },
];

export default PostListProvider;
