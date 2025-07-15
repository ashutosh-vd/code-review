import React from 'react'
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";


const ReviewSection = ({ review , isReviewLoading}) => {
  return (
    <div className='w-full h-full mx-auto p-6 border-2 border-fuchsia-400 overflow-auto'>
      {
        isReviewLoading ? (
          <div className="w-full h-full flex justify-center items-center gap-2 text-lg">
            <svg className="animate-spin h-5 w-5 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            <span>Review is Loading...</span>
          </div>
        ) : (
          <Markdown
          rehypePlugins={[ rehypeHighlight ]}>
            {review }

          </Markdown>
        )
      }
    </div>
  )
}

export default ReviewSection