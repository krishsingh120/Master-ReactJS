import React from "react";
import { Bookmark } from "lucide-react";

const Card = ({ jobOpenings }) => {
  // console.log(jobOpenings);

  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={jobOpenings.brandLogo} alt="nachioooooo" />
          <button>
            Save <Bookmark size={10} />{" "}
          </button>
        </div>
        <div className="center">
          <h3>
            {jobOpenings.company}
            <span>{jobOpenings.datePosted}</span>
          </h3>
          <h2>{jobOpenings.post}</h2>
          <div className="tag">
            <h4>{jobOpenings.tag1}</h4>
            <h4>{jobOpenings.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{jobOpenings.pay}</h3>
          <p>Mumbai, India</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
