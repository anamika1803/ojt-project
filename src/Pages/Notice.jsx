import React from "react";

export const Notice = () => {
  return (
    <div class="grid gap-4   mb-8 border border-gray-200 rounded-lg  dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
      <figure class="flex shadow-lg rounded-md mt-4 ms-2 border-2 flex-col items-center justify-center p-8 text-center bg-white  border-gray-200   md:rounded-ss-lg  dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Very easy this was to integrate
          </h3>
          <p class="my-4">
            If you care for your time, I hands down would go with this."
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
          <img
            class="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
            alt="profile picture"
          />
          <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Bonnie Green</div>
            <div class="text-sm text-gray-500 dark:text-gray-400 ">
              Developer at Open AI
            </div>
          </div>
        </figcaption>
      </figure>
      <figure class="flex shadow-lg rounded-md mt-4 ms-2 border-2 flex-col items-center justify-center p-8 text-center bg-white border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2x1 mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Solid foundation for any project
          </h3>
          <p class="my-4">
            Designing with Figma components that can be easily translated to the
            utility classes of Tailwind CSS is a huge timesaver!"
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
          <img
            class="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
            alt="profile picture"
          />
          <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Roberta Casas</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              Lead designer at Dropbox
            </div>
          </div>
        </figcaption>
      </figure>
      <figure class="flex shadow-lg rounded-md mt-4 ms-2  border-2 flex-col items-center justify-center p-8 text-center bg-white border-gray-200 md:rounded-es-lg  dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Mindblowing workflow
          </h3>
          <p class="my-4">
            Aesthetically, the well designed components are beautiful and will
            undoubtedly level up your next application."
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
          <img
            class="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            alt="profile picture"
          />
          <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Jese Leos</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              Software Engineer at Facebook
            </div>
          </div>
        </figcaption>
      </figure>
      <figure class="flex shadow-lg rounded-md mt-4 ms-2 border-2  flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Efficient Collaborating
          </h3>
          <p class="my-4">
            You have many examples that can be used to create a fast prototype
            for your team."
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
          <img
            class="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            alt="profile picture"
          />
          <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Joseph McFall</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              CTO at Google
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};
export default Notice;





// import React from 'react';
// import { Card } from 'flowbite-react';

// export const Cards=()=> {
//   return (
//     <Card
//       className="max-w-sm"
//       imgAlt="Meaningful alt text for an image that is not purely decorative"
//       imgSrc="../src/assets/6.jpg"
//     >
//       <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//         Noteworthy technology acquisitions 2021
//       </h5>
//       <p className="font-normal text-gray-700 dark:text-gray-400">
//         Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
//       </p>
//     </Card>
    
//   );
// }
// export default Cards;





// import { Card } from 'flowbite-react';

// export const Notice=()=> {
//   return (
//     <Card className=" ms-2 max-w-sm" imgSrc="/src/assets/3.jpg" horizontal>
//       <h5 className=" ms-2 text-2xl font-bold  text-gray-900 dark:text-white ">
//         Noteworthy technology acquisitions 2021
//       </h5>
//       <p className="ms-2 font-normal text-gray-700 dark:text-gray-400 whitespace-nowrap overflow-hidden">
//         Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
//       </p>
//     </Card>
//   );
// }
// export default Notice;
