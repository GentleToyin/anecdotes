import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0).map(i => 0));
  const [highestVote, setHighestVote] = useState(' ');
  const [highestVoteCount, setHighestVoteCount] = useState(0);
  


  const ranNumberGen = () => {
    return setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const VoteClick = () => {
      console.log('You voted for', vote);
      const copy = [...vote];
      copy[selected] += 1;
      MostVote()
      return setVote(() => copy)
    }
  
    const MostVote = () => {
      const heighest = Math.max(...vote);
      const heighestCount = vote.findIndex(el => el ===heighest)
      setHighestVote(() => anecdotes[heighestCount]) 
      setHighestVoteCount(() => heighestCount)
    }
   
    console.log(highestVoteCount)


  return (
    <>
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br/>
    </div>
     <div>
        <h1>Anecdote with most votes</h1>
        {highestVote}.  has {vote[highestVoteCount]} votes
      </div>
     <div>
        <button onClick={VoteClick}>Vote</button>
        <button onClick={ranNumberGen}>next anecdote</button>
      </div>
     
    </>
  );
};

export default App;
