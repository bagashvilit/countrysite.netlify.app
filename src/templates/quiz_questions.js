const qBank = [ 
  
  { 
    question: 
      "how build the app ?", 
    answers: ["vinayak", "sarthak", "somil", "devesh"], 
    correct: "vinayak", 
    questionId: "092299"
  }, 
  { 
    question: 
      "how build the app ?", 
    answers: ["vinayak", "sarthak", "somil", "devesh"], 
    correct: "vinayak", 
    questionId: "099099"
  }, 
  { 
    question: 
      "how build the app ?", 
    answers: ["vinayak", "sarthak", "somil", "devesh"], 
    correct: "vinayak", 
    questionId: "222099"
  }
  
]; 
  
// n = 5 to export 5 question 
export default (n = 5) => 
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n)); 
