import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Aman", text: "Programmers are fun" },
  { id: "q2", author: "Gupta Ji", text: "Is it better to speak or Die?" },
  { id: "q3", author: "Gupta Ji", text: "Call me by your Name!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
