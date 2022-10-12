/** @format */
import React from "react";

const stories = [
  {
    img: "https://i2-prod.mirror.co.uk/incoming/article24566294.ece/ALTERNATES/s615b/1_FC-Barcelona-v-Borussia-Dortmund-UEFA-Champions-League-Group-F.jpg",
  },
  {
    img: "https://i2-prod.mirror.co.uk/incoming/article24566294.ece/ALTERNATES/s615b/1_FC-Barcelona-v-Borussia-Dortmund-UEFA-Champions-League-Group-F.jpg",
  },
  {
    img: "https://i2-prod.mirror.co.uk/incoming/article24566294.ece/ALTERNATES/s615b/1_FC-Barcelona-v-Borussia-Dortmund-UEFA-Champions-League-Group-F.jpg",
  },
  {
    img: "https://i2-prod.mirror.co.uk/incoming/article24566294.ece/ALTERNATES/s615b/1_FC-Barcelona-v-Borussia-Dortmund-UEFA-Champions-League-Group-F.jpg",
  },
  {
    img: "https://i2-prod.mirror.co.uk/incoming/article24566294.ece/ALTERNATES/s615b/1_FC-Barcelona-v-Borussia-Dortmund-UEFA-Champions-League-Group-F.jpg",
  },
  {
    img: "https://i2-prod.mirror.co.uk/incoming/article24566294.ece/ALTERNATES/s615b/1_FC-Barcelona-v-Borussia-Dortmund-UEFA-Champions-League-Group-F.jpg",
  },
  {
    img: "https://i2-prod.mirror.co.uk/incoming/article24566294.ece/ALTERNATES/s615b/1_FC-Barcelona-v-Borussia-Dortmund-UEFA-Champions-League-Group-F.jpg",
  },
  {
    img: "https://i2-prod.mirror.co.uk/incoming/article24566294.ece/ALTERNATES/s615b/1_FC-Barcelona-v-Borussia-Dortmund-UEFA-Champions-League-Group-F.jpg",
  },
  {
    img: "https://i2-prod.mirror.co.uk/incoming/article24566294.ece/ALTERNATES/s615b/1_FC-Barcelona-v-Borussia-Dortmund-UEFA-Champions-League-Group-F.jpg",
  },
  {
    img: "https://i2-prod.mirror.co.uk/incoming/article24566294.ece/ALTERNATES/s615b/1_FC-Barcelona-v-Borussia-Dortmund-UEFA-Champions-League-Group-F.jpg",
  },
  {
    img: "https://i2-prod.mirror.co.uk/incoming/article24566294.ece/ALTERNATES/s615b/1_FC-Barcelona-v-Borussia-Dortmund-UEFA-Champions-League-Group-F.jpg",
  },
 
];

const Stories = () => {
  return (
    <div className="flex items-center p-2 border border-slate-200 h-[80px] space-x-2 overflow-x-scroll w-full">
      {stories.map((story, index) => (
        <div key={index}>
          <img
            src={story.img}
            alt=""
            className="rounded-full object-cover h-[60px] w-[60px] border border-red-500 p-[1px]"
          />
        </div>
      ))}
    </div>
  );
};

export default Stories;
