import HTMLReactParser from "html-react-parser";
import React from "react";

const ShowContent = ({ content }) => {
  return (
    <div className="flex justify-between items-center pb-4">
      <div className="w-[65%]">
        <div class="card card-side bg-[#252734] shadow-xl">
          <figure className="p-4">
            <img
              className="w-[250px] h-[150px]"
              src="https://media.gettyimages.com/id/108805652/photo/a-stack-of-hardcover-books.jpg?s=612x612&w=gi&k=20&c=rIm_Hu0D_YQsismzfsnEQ076_suB52LwK2A9spbbZ6k="
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div class="card-actions justify-end">
            <button class="btn btn-success text-white">Update</button>
              <button class="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
        <div class="card card-side bg-[#252734] shadow-xl mt-4">
          <figure className="p-4">
            <img
              className="w-[250px] h-[150px]"
              src="https://media.gettyimages.com/id/108805652/photo/a-stack-of-hardcover-books.jpg?s=612x612&w=gi&k=20&c=rIm_Hu0D_YQsismzfsnEQ076_suB52LwK2A9spbbZ6k="
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div class="card-actions justify-end">
            <button class="btn btn-success text-white">Update</button>
              <button class="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
        <div class="card card-side bg-[#252734] shadow-xl mt-4">
          <figure className="p-4">
            <img
              className="w-[250px] h-[150px]"
              src="https://media.gettyimages.com/id/108805652/photo/a-stack-of-hardcover-books.jpg?s=612x612&w=gi&k=20&c=rIm_Hu0D_YQsismzfsnEQ076_suB52LwK2A9spbbZ6k="
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-success text-white">Update</button>
              <button class="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[25%]">
        <h2 className="text-black text-[30px] font-bold">Categories</h2>
        <div>
            <ul>
                <li className="text-black font-semibold mt-2"><a href="">Web Development</a></li>
                <li className="text-black font-semibold mt-2"><a href="">Graphics Design</a></li>
                <li className="text-black font-semibold mt-2"><a href="">Web Design</a></li>
                <li className="text-black font-semibold mt-2"><a href="">Template</a></li>
                <li className="text-black font-semibold mt-2"><a href="">Media</a></li>
                <li className="text-black font-semibold mt-2"><a href="">Uncategories</a></li>
                
            </ul>
        </div>
      </div>
    </div>
  );
};

export default ShowContent;
