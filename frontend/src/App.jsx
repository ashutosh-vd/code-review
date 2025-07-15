import { useState } from "react"
import CodeSection from "./components/CodeSection.jsx"
import Navbar from "./components/Navbar.jsx"
import ReviewSection from "./components/ReviewSection.jsx"

function App() {
  const [isReviewLoading, setIsReviewLoading] = useState(0);
  const [review, setReview] = useState("");
  return (
  <div className="relative">
    < Navbar setReview={setReview} />
    <div className="h-screen pt-14 px-2 flex gap-2 w-full justify-between">
      <CodeSection isReviewLoading={isReviewLoading} setIsReviewLoading={setIsReviewLoading} setReview={setReview}/>
      <ReviewSection review={review} isReviewLoading={isReviewLoading}/>
    </div>
    </div>
  )
}

export default App
