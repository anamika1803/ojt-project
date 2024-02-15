import React from "react";

const BoxWithImageAndText = () => {
  return (
    <div className=" flex flex-col items-center grid-cols-1 gap-10">
      <div className="ms-10 mt-10 flex justify-center items-center  border rounded-lg shadow-md p-4 max-w-4xl mr-8   hover:bg-yellow-100">
        <div className="w-80 h-60  mr-8">
          {" "}
          {/* Adjusted width */}
          <img
            src="../src/assets/AI.jpg"
            className="w-full h-full object-cover rounded-lg  "
            alt="AI"
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-3xl   text-[#000033] text-left mb-2 hover:text-orange-500">
            Artificial Intelligence
          </p>
          <p
            className="text-base overflow-hidden"
            style={{ maxHeight: "10rem" }}
          >
            This foundational course provides an introduction to the principles
            and techniques of artificial intelligence (AI). Students will
            explore the history of AI, basic problem-solving techniques,
            knowledge representation, and reasoning methods. Additionally,
            topics such as machine learning, natural language processing, and
            computer vision will be introduced.
          </p>
        </div>
      </div>

      <div className="ms-10 mt-10 flex justify-center items-center  border rounded-lg shadow-md p-4 max-w-4xl mr-8   hover:bg-yellow-100">
        <div className="w-80 h-60  mr-8">
          {" "}
          {/* Adjusted width */}
          <img
            src="../src/assets/computer.jpg"
            className="w-full h-full object-cover rounded-lg  "
            alt="AI"
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-3xl   text-[#000033] text-left mb-2 hover:text-orange-500">
            Computer Science
          </p>
          <p
            className="text-base overflow-hidden"
            style={{ maxHeight: "10rem" }}
          >
            Our Computer Science program offers a comprehensive study of
            algorithms, programming languages, and software engineering.
            Students delve into cutting-edge topics such as artificial
            intelligence, cybersecurity, and machine learning, preparing them
            for careers as software developers, system architects, and data
            scientists across industries like technology, finance, and
            healthcare.
          </p>
        </div>
      </div>

      <div className="ms-10 mt-10 flex justify-center items-center  border rounded-lg shadow-md p-4 max-w-4xl mr-8   hover:bg-yellow-100">
        <div className="w-80 h-60  mr-8">
          {" "}
          {/* Adjusted width */}
          <img
            src="../src/assets/CivilEngineers.jpg"
            className="w-full h-full object-cover rounded-lg  "
            alt="AI"
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-3xl   text-[#000033] text-left mb-2 hover:text-orange-500">
            Civil Engineering
          </p>
          <p
            className="text-base overflow-hidden"
            style={{ maxHeight: "10rem" }}
          >
            In our Civil Engineering program, students learn the principles of
            infrastructure design, construction, and maintenance. Through
            hands-on experience in building bridges, roads, and environmental
            systems, graduates are equipped to pursue careers as civil
            engineers, project managers, and urban planners in consulting firms,
            government agencies, and construction companies.
          </p>
        </div>
      </div>

      <div className="ms-10 mt-10 flex justify-center items-center  border rounded-lg shadow-md p-4 max-w-4xl mr-8   hover:bg-yellow-100">
        <div className="w-80 h-60  mr-8">
          {" "}
          {/* Adjusted width */}
          <img
            src="../src/assets/fashion.jpg"
            className="w-full h-full object-cover rounded-lg  "
            alt="AI"
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-3xl   text-[#000033] text-left mb-2 hover:text-orange-500">
            Fashion Degining
          </p>
          <p
            className="text-base overflow-hidden"
            style={{ maxHeight: "10rem" }}
          >
            Unleash your creativity in our Fashion Designing program, where
            students explore the art and science of creating stylish clothing
            and accessories. From sketching designs to selecting fabrics,
            graduates enter the fashion industry as designers, stylists, and
            merchandisers, working for renowned brands or launching their own
            fashion lines.
          </p>
        </div>
      </div>

      <div className="ms-10 mt-10 flex justify-center items-center  border rounded-lg shadow-md p-4 max-w-4xl mr-8   hover:bg-yellow-100">
        <div className="w-80 h-60  mr-8">
          {" "}
          {/* Adjusted width */}
          <img
            src="../src/assets/amm.jpg"
            className="w-full h-full object-cover rounded-lg  "
            alt="AI"
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-3xl   text-[#000033] text-left mb-2 hover:text-orange-500">
            Advertising And Marketing Management
          </p>
          <p
            className="text-base overflow-hidden"
            style={{ maxHeight: "10rem" }}
          >
            Our Advertising and Marketing Management program prepares students
            to master the art of persuasion and crafting compelling campaigns.
            Through diverse media channels, graduates excel as marketing
            managers, advertising executives, and public relations specialists,
            making an impact in industries ranging from consumer goods to
            entertainment.
          </p>
        </div>
      </div>

      <div className="ms-10 mt-10 flex justify-center items-center  border rounded-lg shadow-md p-4 max-w-4xl mr-8   hover:bg-yellow-100">
        <div className="w-80 h-60  mr-8">
          {" "}
          {/* Adjusted width */}
          <img
            src="../src/assets/cems.jpg"
            className="w-full h-full object-cover rounded-lg  "
            alt="AI"
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-3xl   text-[#000033] text-left mb-2 hover:text-orange-500">
            Mass Communication
          </p>
          <p
            className="text-base overflow-hidden"
            style={{ maxHeight: "10rem" }}
          >
            Dive into the world of media and storytelling in our Mass
            Communication program. Students explore journalism, broadcasting,
            public relations, and digital media to shape public discourse and
            influence societal attitudes. Graduates pursue careers as
            journalists, broadcasters, content creators, and public relations
            professionals, making a difference in media organizations and
            beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoxWithImageAndText;
